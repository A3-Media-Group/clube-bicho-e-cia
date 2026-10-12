// npm run audit — relatório por página (title, description, palavras, H1, links, canonical, og:image).
// Opções: --json (saída JSON), --strict (falha se houver página indexável com < 3 links de entrada além da home).
import path from 'node:path';
import { loadSite } from './site.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const { pages } = loadSite(root);
const indexable = p => !(p.robots || '').includes('noindex') && p.urlPath !== '/404.html';
const MIN_INBOUND = 3;

const rows = pages.map(p => ({
  url: p.urlPath,
  title: p.title,
  titleLen: p.title ? [...p.title].length : 0,
  description: p.description,
  descLen: p.description ? [...p.description].length : 0,
  words: p.words,
  h1: p.h1s.join(' | '),
  h1Count: p.h1s.length,
  inbound: p.inbound.size,
  outbound: p.outbound.length,
  canonical: p.canonical || '',
  ogImage: p.ogImage || '',
  indexable: indexable(p)
}));
const orphans = rows.filter(r => r.indexable && r.url !== '/' && r.inbound < MIN_INBOUND);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ pages: rows, orphans: orphans.map(o => o.url) }, null, 2));
} else {
  const cell = s => String(s ?? '').replace(/\|/g, '\\|');
  console.log('| URL | Title (chars) | Description (chars) | Palavras | H1 | Entrada | Saída | Canonical | og:image |');
  console.log('|---|---|---|---|---|---|---|---|---|');
  for (const r of rows) console.log(`| ${cell(r.url)}${r.indexable ? '' : ' (noindex)'} | ${cell(r.title)} (${r.titleLen}) | ${cell(r.description)} (${r.descLen}) | ${r.words} | ${cell(r.h1)}${r.h1Count !== 1 ? ` ⚠ ${r.h1Count}` : ''} | ${r.inbound} | ${r.outbound} | ${r.canonical ? '✓' : '—'} | ${r.ogImage ? '✓' : '—'} |`);
  console.log(`\nPáginas: ${rows.length} (${rows.filter(r => r.indexable).length} indexáveis). Palavras no total: ${rows.reduce((a, r) => a + r.words, 0)}.`);
  console.log(orphans.length ? `Páginas com menos de ${MIN_INBOUND} links de entrada (sem contar a home): ${orphans.map(o => o.url).join(', ')}` : `Nenhuma página indexável com menos de ${MIN_INBOUND} links de entrada.`);
}
if (process.argv.includes('--strict') && orphans.length) process.exit(1);
