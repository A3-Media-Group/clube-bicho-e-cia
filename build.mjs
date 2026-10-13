// Gera o site estático na raiz do repositório (servida pela Hostinger).
// Uso: node build.mjs   (SITE_URL e CONTATO_EMAIL podem vir do ambiente)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE_URL } from './src/config.mjs';
import { render, absUrl, ogImagePath } from './src/layout.mjs';
import { createPipeline } from './src/pipeline.mjs';
import { htaccess } from './src/htaccess.mjs';
import { listHtml } from './scripts/site.mjs';

export const ROOT = path.dirname(fileURLToPath(import.meta.url));

export async function loadPages() {
  const dir = path.join(ROOT, 'src/pages');
  const pages = [];
  for (const f of fs.readdirSync(dir, { recursive: true }).filter(f => f.endsWith('.mjs')).sort()) {
    const { default: page } = await import(pathToFileURL(path.join(dir, f)));
    pages.push(...[].concat(page));
  }
  return pages.sort((a, b) => (a.path === '/' ? -1 : b.path === '/' ? 1 : a.path.localeCompare(b.path)));
}

export const pathToFile = p => (p.endsWith('/') ? p + 'index.html' : p).replace(/^\//, '');

async function build() {
  const pages = await loadPages();
  const pipeline = createPipeline(ROOT);
  const assets = { cssUrl: pipeline.css(path.join(ROOT, 'src/assets/style.css')), js: s => pipeline.js(path.join(ROOT, s)), depsOf: s => pipeline.depsOf(path.join(ROOT, s)) };
  const seen = new Set();
  const generated = new Set();
  const warnings = [];
  for (const page of pages) {
    if (seen.has(page.path)) throw new Error('Caminho duplicado: ' + page.path);
    seen.add(page.path);
    const out = path.join(ROOT, pathToFile(page.path));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, render(page, assets));
    generated.add(pathToFile(page.path));
    if (!fs.existsSync(path.join(ROOT, ogImagePath(page)))) warnings.push(`sem imagem de compartilhamento ${ogImagePath(page)} (rode npm run og)`);
  }
  const indexable = pages.filter(p => !p.noindex);
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    indexable.map(p => `<url><loc>${absUrl(p.path)}</loc><lastmod>${p.updated}</lastmod></url>`).join('\n') + '\n</urlset>\n';
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  fs.writeFileSync(path.join(ROOT, '.htaccess'), htaccess());
  fs.writeFileSync(path.join(ROOT, 'site.webmanifest'), JSON.stringify({
    name: 'Clube Bicho e Cia', short_name: 'Bicho e Cia', lang: 'pt-BR', start_url: '/', display: 'browser',
    background_color: '#fffefa', theme_color: '#702bd4',
    icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }]
  }, null, 2) + '\n');
  // HTMLs de builds anteriores (ex.: URLs antigas) saem do repositório; o .htaccess redireciona.
  for (const f of listHtml(ROOT)) {
    if (generated.has(f)) continue;
    fs.unlinkSync(path.join(ROOT, f));
    let dir = path.dirname(path.join(ROOT, f));
    while (dir !== ROOT && fs.readdirSync(dir).length === 0) { fs.rmdirSync(dir); dir = path.dirname(dir); }
    console.log('removido: ' + f);
  }
  const stale = pipeline.clean();
  console.log(`build: ${pages.length} páginas (${indexable.length} indexáveis) para ${SITE_URL}` + (stale.length ? `; removidos ${stale.length} arquivos antigos` : ''));
  for (const w of warnings) console.warn('aviso: ' + w);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await build();
