// npm run audit — relatório por página (title, description, palavras, H1, links, canonical, og:image).
// "Entrada" conta links de outras páginas internas (sem contar a home); "Contexto" conta só os links
// dentro do conteúdo (<main>, sem breadcrumb), excluindo menu e rodapé.
// Opções: --json, --strict (falha se uma página indexável tiver < 3 links de entrada, ou se uma
// ferramenta, guia ou hub tiver < 3 links de entrada no conteúdo).
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
  contextualInbound: p.contextualInbound.size,
  outbound: p.outbound.length,
  canonical: p.canonical || '',
  ogImage: p.ogImage || '',
  indexable: indexable(p)
}));
const needsContext = url => /^\/(ferramentas|guias)\//.test(url);
const orphans = rows.filter(r => r.indexable && r.url !== '/' && (r.inbound < MIN_INBOUND || (needsContext(r.url) && r.contextualInbound < MIN_INBOUND)));

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ pages: rows, orphans: orphans.map(o => o.url) }, null, 2));
} else {
  const cell = s => String(s ?? '').replace(/\|/g, '\\|');
  console.log('| URL | Title (chars) | Description (chars) | Palavras | H1 | Entrada | Contexto | Saída | Canonical | og:image |');
  console.log('|---|---|---|---|---|---|---|---|---|---|');
  for (const r of rows) console.log(`| ${cell(r.url)}${r.indexable ? '' : ' (noindex)'} | ${cell(r.title)} (${r.titleLen}) | ${cell(r.description)} (${r.descLen}) | ${r.words} | ${cell(r.h1)}${r.h1Count !== 1 ? ` ⚠ ${r.h1Count}` : ''} | ${r.inbound} | ${r.contextualInbound} | ${r.outbound} | ${r.canonical ? '✓' : '—'} | ${r.ogImage ? '✓' : '—'} |`);
  console.log(`\nPáginas: ${rows.length} (${rows.filter(r => r.indexable).length} indexáveis). Palavras no total: ${rows.reduce((a, r) => a + r.words, 0)}.`);
  console.log(orphans.length ? `Páginas com poucos links de entrada (mínimo ${MIN_INBOUND}, sem contar a home; ferramentas, guias e hubs também no conteúdo): ${orphans.map(o => o.url).join(', ')}` : `Nenhuma página com menos de ${MIN_INBOUND} links de entrada (ferramentas, guias e hubs: também no conteúdo).`);
}
if (process.argv.includes('--strict') && orphans.length) process.exit(1);
