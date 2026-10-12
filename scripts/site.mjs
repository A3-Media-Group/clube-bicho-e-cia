// Leitura do site gerado: lista páginas, extrai metadados e links internos.
// Usado por scripts/audit.mjs e pelos testes.
import fs from 'node:fs';
import path from 'node:path';

const SKIP = new Set(['.git', 'node_modules', 'src', 'scripts', 'tests', 'data', 'docs']);

export function listHtml(root, dir = root, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP.has(entry.name) && !entry.name.startsWith('.')) listHtml(root, path.join(dir, entry.name), out);
    } else if (entry.name.endsWith('.html')) {
      out.push(path.relative(root, path.join(dir, entry.name)).split(path.sep).join('/'));
    }
  }
  return out.sort();
}

// Arquivo → caminho público: "index.html" → "/", "a/index.html" → "/a/", "b.html" → "/b.html"
export const fileToUrlPath = file => '/' + file.replace(/(^|\/)index\.html$/, '$1');

export function urlPathToFile(p) {
  let clean = decodeURIComponent(p);
  if (clean.endsWith('/')) clean += 'index.html';
  return clean.replace(/^\//, '');
}

const decode = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');
const text = html => decode(html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = (tag, name) => { const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`)); return m ? decode(m[1]) : null; };
const meta = (html, key, val) => { for (const tag of html.match(/<meta\b[^>]*>/g) || []) if (attr(tag, key) === val) return attr(tag, 'content'); return null; };

export function parsePage(root, file) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const urlPath = fileToUrlPath(file);
  const titleM = html.match(/<title>([\s\S]*?)<\/title>/);
  const mainM = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
  const body = mainM ? mainM[1] : (html.match(/<body\b[^>]*>([\s\S]*)<\/body>/) || [, ''])[1];
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map(m => text(m[1]));
  const canonicalTag = (html.match(/<link\b[^>]*rel="canonical"[^>]*>/) || [null])[0];
  const hrefs = fragment => [...fragment.matchAll(/<a\b[^>]*>/g)].map(m => attr(m[0], 'href')).filter(Boolean);
  const rawInternal = [];
  const resolve = (list, keepRaw) => {
    const set = new Set();
    for (const href of list) {
      if (/^(mailto:|tel:|javascript:|data:)/.test(href)) continue;
      const u = new URL(href, 'https://site.local' + urlPath);
      if (u.host !== 'site.local') continue;
      if (keepRaw) rawInternal.push(href);
      if (u.pathname !== urlPath) set.add(u.pathname);
    }
    return [...set];
  };
  const internal = resolve(hrefs(html), true);
  // Links contextuais: dentro de <main>, sem o breadcrumb.
  const contextual = resolve(hrefs(body.replace(/<nav class="breadcrumb[\s\S]*?<\/nav>/, '')), false);
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map(m => ({ src: attr(m[0], 'src'), alt: attr(m[0], 'alt'), srcset: attr(m[0], 'srcset') }));
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);
  return {
    file, urlPath, html,
    title: titleM ? decode(titleM[1]) : null,
    description: meta(html, 'name', 'description'),
    robots: meta(html, 'name', 'robots'),
    ogImage: meta(html, 'property', 'og:image'),
    ogUrl: meta(html, 'property', 'og:url'),
    canonical: canonicalTag ? attr(canonicalTag, 'href') : null,
    h1s, words: text(body).split(' ').filter(w => /[\p{L}\p{N}]/u.test(w)).length,
    rawInternal, outbound: internal, contextual, images, jsonLd
  };
}

export function loadSite(root) {
  const pages = listHtml(root).map(f => parsePage(root, f));
  const byPath = new Map(pages.map(p => [p.urlPath, p]));
  for (const p of pages) { p.inbound = new Set(); p.contextualInbound = new Set(); }
  for (const p of pages) {
    if (p.urlPath === '/') continue;
    for (const target of p.outbound) byPath.get(target)?.inbound.add(p.urlPath);
    for (const target of p.contextual) byPath.get(target)?.contextualInbound.add(p.urlPath);
  }
  return { pages, byPath };
}
