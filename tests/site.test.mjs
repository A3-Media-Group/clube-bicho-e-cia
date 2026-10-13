// Testes do site gerado (rode npm run build antes; npm test já faz isso).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadSite, urlPathToFile } from '../scripts/site.mjs';
import { SITE_URL } from '../src/config.mjs';
import { REDIRECTS } from '../src/redirects.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { pages, byPath } = loadSite(root);
const indexable = pages.filter(p => !(p.robots || '').includes('noindex'));
const exists = rel => fs.existsSync(path.join(root, rel));

test('há páginas geradas', () => {
  assert.ok(pages.length > 20);
  assert.ok(byPath.get('/'), 'home');
  assert.ok(byPath.get('/404.html'), '404');
});

test('title <= 60, description 120–155, sem reticências, únicos', () => {
  const titles = new Map(), descs = new Map();
  for (const p of indexable) {
    assert.ok(p.title, `sem title: ${p.urlPath}`);
    assert.ok([...p.title].length <= 60, `title com ${[...p.title].length} caracteres: ${p.urlPath}`);
    const d = p.description || '';
    assert.ok([...d].length >= 120 && [...d].length <= 155, `description com ${[...d].length} caracteres: ${p.urlPath}`);
    assert.doesNotMatch(p.title + d, /…|\.\.\./, `reticências: ${p.urlPath}`);
    assert.ok(!titles.has(p.title), `title repetido: ${p.urlPath} e ${titles.get(p.title)}`);
    assert.ok(!descs.has(d), `description repetida: ${p.urlPath} e ${descs.get(d)}`);
    titles.set(p.title, p.urlPath); descs.set(d, p.urlPath);
  }
});

test('um único H1 por página', () => {
  for (const p of pages) assert.equal(p.h1s.length, 1, `${p.urlPath} tem ${p.h1s.length} H1`);
});

test('canonical absoluta e correta; meta robots', () => {
  for (const p of indexable) {
    assert.equal(p.canonical, SITE_URL + p.urlPath, `canonical de ${p.urlPath}`);
    assert.equal(p.ogUrl, SITE_URL + p.urlPath, `og:url de ${p.urlPath}`);
    assert.equal(p.robots, 'index,follow,max-image-preview:large', `robots de ${p.urlPath}`);
  }
  for (const p of pages.filter(p => !indexable.includes(p))) assert.equal(p.canonical, null, `noindex com canonical: ${p.urlPath}`);
});

test('sitemap = páginas indexáveis, com lastmod', () => {
  const xml = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]).sort();
  assert.deepEqual(locs, indexable.map(p => SITE_URL + p.urlPath).sort());
  assert.equal((xml.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g) || []).length, locs.length);
  assert.doesNotMatch(xml, /<priority>/);
  const robots = fs.readFileSync(path.join(root, 'robots.txt'), 'utf8');
  assert.match(robots, new RegExp(`Sitemap: ${SITE_URL}/sitemap.xml`));
});

test('links internos resolvem e nenhum aponta para index.html', () => {
  for (const p of pages) {
    for (const href of p.rawInternal) {
      assert.doesNotMatch(href, /(^|\/)index\.html/, `link para index.html em ${p.urlPath}: ${href}`);
      const u = new URL(href, 'https://site.local' + p.urlPath);
      const target = decodeURIComponent(u.pathname);
      const ok = byPath.has(target) || exists(urlPathToFile(target));
      assert.ok(ok, `link quebrado em ${p.urlPath}: ${href}`);
      if (u.hash && byPath.has(target) && u.hash.length > 1) {
        assert.match(byPath.get(target).html, new RegExp(`id="${u.hash.slice(1)}"`), `âncora inexistente em ${p.urlPath}: ${href}`);
      }
    }
  }
});

test('todas as URLs antigas têm 301 mapeado para uma página existente', () => {
  const old = ['/idade.html', '/racao.html', '/alimentos.html', '/gastos.html', '/agenda.html', '/nomes.html', '/vacinacao-antirrabica.html', '/alimentacao-e-porcoes.html', '/alimentos-perigosos.html', '/peso-e-condicao-corporal.html', '/idade-caes-gatos.html', '/sobre.html', '/privacidade.html', '/termos.html', '/creditos.html'];
  const htaccess = fs.readFileSync(path.join(root, '.htaccess'), 'utf8');
  for (const from of old) {
    const to = REDIRECTS[from];
    assert.ok(to, `sem redirecionamento: ${from}`);
    assert.ok(byPath.get(to), `destino inexistente: ${from} → ${to}`);
    assert.ok(!exists(from.slice(1)), `arquivo antigo ainda existe: ${from}`);
    assert.ok(htaccess.includes(`RewriteRule ^${from.slice(1).replace('.', '\\.')}$ ${SITE_URL}${to} [R=301,L]`), `regra ausente no .htaccess: ${from}`);
  }
  assert.match(htaccess, /ErrorDocument 404 \/404\.html/);
  assert.match(htaccess, /RewriteCond %\{HTTPS\} off/);
});

test('JSON-LD válido; BreadcrumbList nas páginas internas; sem avaliações', () => {
  for (const p of pages) {
    const objs = p.jsonLd.map(j => JSON.parse(j));
    for (const o of objs) {
      assert.equal(o['@context'], 'https://schema.org', p.urlPath);
      assert.ok(o['@type'], p.urlPath);
      assert.ok(!('aggregateRating' in o) && !('review' in o), `avaliação no schema: ${p.urlPath}`);
      if (o['@type'] === 'Article') for (const k of ['headline', 'image', 'datePublished', 'dateModified', 'author', 'publisher', 'mainEntityOfPage']) assert.ok(o[k], `Article sem ${k}: ${p.urlPath}`);
    }
    if (p.urlPath !== '/' && p.urlPath !== '/404.html') assert.ok(objs.some(o => o['@type'] === 'BreadcrumbList'), `sem BreadcrumbList: ${p.urlPath}`);
  }
});

test('imagens existem e têm alt; og:image local e existente', () => {
  for (const p of pages) {
    for (const img of p.images) {
      assert.ok(img.alt !== null, `img sem alt em ${p.urlPath}`);
      assert.ok(exists(img.src.replace(/^\//, '')), `imagem inexistente ${img.src} em ${p.urlPath}`);
      for (const part of (img.srcset || '').split(',').map(s => s.trim().split(' ')[0]).filter(Boolean)) assert.ok(exists(part.replace(/^\//, '')), `srcset inexistente ${part}`);
    }
    assert.ok(p.ogImage?.startsWith(SITE_URL + '/assets/og/'), `og:image de ${p.urlPath}`);
    assert.ok(exists(p.ogImage.slice(SITE_URL.length + 1)), `arquivo og:image ausente: ${p.ogImage}`);
    assert.doesNotMatch(p.ogImage, /icon|favicon|logo/);
  }
});

test('CSS e JS referenciados existem; nada inline; sem rastreadores', () => {
  for (const p of pages) {
    for (const m of p.html.matchAll(/(?:href|src)="(\/assets\/[^"]+\.(?:css|js))"/g)) assert.ok(exists(m[1].slice(1)), `asset ausente ${m[1]}`);
    assert.doesNotMatch(p.html, /<style/, `CSS inline em ${p.urlPath}`);
    assert.doesNotMatch(p.html, /<script(?![^>]*(type="module"|type="application\/ld\+json"))[^>]*>/, `script inline em ${p.urlPath}`);
    assert.doesNotMatch(p.html, /googletagmanager|gtag\(|adsbygoogle|fbq\(|google-analytics|hotjar/i, `rastreador em ${p.urlPath}`);
  }
});

test('nenhuma página indexável com menos de 3 links de entrada (audit --strict)', () => {
  for (const p of indexable) {
    if (p.urlPath === '/') continue;
    assert.ok(p.inbound.size >= 3, `${p.urlPath}: ${p.inbound.size} links de entrada`);
    if (/^\/(ferramentas|guias|pode-comer)\//.test(p.urlPath)) assert.ok(p.contextualInbound.size >= 3, `${p.urlPath}: ${p.contextualInbound.size} links de entrada no conteúdo`);
  }
});

test('ferramentas: labels associados e inputmode', () => {
  for (const p of pages.filter(p => p.html.includes('data-tool='))) {
    for (const m of p.html.matchAll(/<input\b[^>]*>/g)) {
      const id = (m[0].match(/\sid="([^"]+)"/) || [])[1];
      const type = (m[0].match(/\stype="([^"]+)"/) || [])[1];
      if (type === 'radio') continue;
      assert.ok(id && p.html.includes(`for="${id}"`), `input sem label em ${p.urlPath}: ${m[0]}`);
      if (type === 'text' && !/maxlength/.test(m[0])) assert.match(m[0], /inputmode="(decimal|numeric|search)"/, `input sem inputmode em ${p.urlPath}`);
    }
  }
});
