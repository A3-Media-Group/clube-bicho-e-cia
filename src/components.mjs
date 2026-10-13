// Blocos reutilizáveis de conteúdo.
import { esc } from './html.mjs';
import { SITE_URL } from './config.mjs';
import { img } from './html.mjs';

// Breadcrumb visual + objeto JSON-LD. items: [{ name, path }], o último é a página atual.
export function breadcrumb(items) {
  const full = [{ name: 'Início', path: '/' }, ...items];
  const html = `<nav class="breadcrumb wrap" aria-label="Você está em"><ol>${full.map((c, i) => i === full.length - 1
    ? `<li aria-current="page">${esc(c.name)}</li>`
    : `<li><a href="${c.path}">${esc(c.name)}</a></li>`).join('')}</ol></nav>`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: full.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE_URL + c.path }))
  };
  return { html, jsonLd };
}

export function toolCard(tool, n) {
  return `<a class="tool-card ${tool.color}" href="${tool.path}" data-evento="clicou_ferramenta" data-ferramenta="${tool.id}"><span class="tool-icon" aria-hidden="true">${tool.icon}</span><span class="tool-number" aria-hidden="true">${String(n).padStart(2, '0')}</span><h3>${esc(tool.short)}</h3><p>${esc(tool.card)}</p><span class="card-link">Usar ferramenta <span aria-hidden="true">↗</span></span></a>`;
}

export function guideCard(guide, { heading = 'h3' } = {}) {
  return `<a class="article-card" href="${guide.path}"><div class="article-image">${img(guide.photo, '', { sizes: '(max-width: 600px) 100vw, (max-width: 900px) 50vw, 400px' })}<span>${esc(guide.label)}</span></div><div class="article-copy"><${heading}>${esc(guide.name)}</${heading}><p>${esc(guide.card)}</p><span class="card-link">Ler o guia <span aria-hidden="true">↗</span></span></div></a>`;
}

// schema.org ItemList para hubs.
export function itemList(name, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: SITE_URL + it.path }))
  };
}
