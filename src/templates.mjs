// Modelos de página: ferramenta e guia. Garantem as seções exigidas pela política editorial.
import { esc, img } from './html.mjs';
import { byId } from './site.mjs';
import { SITE_URL, SITE_NAME } from './config.mjs';

export const dataBR = iso => iso.split('-').reverse().join('/');

const faqHtml = (titulo, faq) => `<section class="faq" aria-labelledby="faq-titulo"><h2 id="faq-titulo">${titulo}</h2>${faq.map(f => `<div class="faq-item"><h3>${f.q}</h3>${f.a.startsWith('<') ? f.a : `<p>${f.a}</p>`}</div>`).join('')}</section>`;

const sourcesHtml = (titulo, sources, consulted, note) => !sources?.length ? `<aside class="method sources-box"><h2>${titulo}</h2><p>${note}</p></aside>` : `<aside class="method sources-box" aria-labelledby="fontes-titulo"><h2 id="fontes-titulo">${titulo}</h2><ul class="sources">${sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.nome}</a>${s.nota ? ` — ${s.nota}` : ''}</li>`).join('')}</ul><p class="metadata">Fontes consultadas em ${dataBR(consulted)}.</p></aside>`;

// Bloco de autoria e revisão. Sem revisor cadastrado, mostra o aviso de que não há revisão clínica.
export function byline({ author, reviewer, updated, published }) {
  const parts = [`Por ${esc(author?.name || 'Redação Clube Bicho e Cia')}`];
  if (published && published !== updated) parts.push(`Publicado em ${dataBR(published)}`);
  parts.push(`Atualizado em <time datetime="${updated}">${dataBR(updated)}</time>`);
  return `<p class="metadata">${parts.join(' • ')}</p>`;
}
export function reviewNote({ reviewer, reviewed }) {
  return reviewer
    ? `<p class="review-note">Revisado por ${esc(reviewer.name)}${reviewer.crmv ? `, CRMV ${esc(reviewer.crmv)}` : ''}${reviewed ? `, em ${dataBR(reviewed)}` : ''}.</p>`
    : '<p class="review-note">Conteúdo educativo produzido pela redação a partir das fontes citadas, <strong>sem revisão clínica por médico-veterinário</strong>. Não substitui a consulta.</p>';
}

// hub: { path, label } — link final para o hub da seção (ex.: "Ver todos os guias").
export function relatedHtml(ids, titulo = 'Leia também', hub) {
  if (!ids?.length) return '';
  return `<nav class="related" aria-label="${titulo}"><h2>${titulo}</h2><ul>${ids.map(id => { const i = byId(id); return `<li><a href="${i.path}"><strong>${esc(i.name)}</strong><span>${esc(i.card || '')}</span></a></li>`; }).join('')}</ul>${hub ? `<p class="hub-more"><a href="${hub.path}">${hub.label}</a></p>` : ''}</nav>`;
}

// Página de ferramenta.
export function toolPage(o) {
  const t = byId(o.id);
  const main = `<section class="wrap tool-page"><div class="tool-layout"><div><p class="eyebrow"><span class="tool-badge" aria-hidden="true">${t.icon}</span> GRÁTIS • SEM CADASTRO</p><h1>${o.h1}</h1><p class="lead">${o.lead}</p>${o.intro || ''}</div>${o.form}</div></section><div class="wrap tool-content"><div class="reading-text">${o.sections.map(s => `<section><h2>${s.h2}</h2>${s.html}</section>`).join('')}${faqHtml(o.faqTitle, o.faq)}${relatedHtml(o.related, 'Guias e ferramentas relacionados', { path: '/ferramentas/', label: 'Ver todas as ferramentas grátis para cães e gatos' })}${sourcesHtml(o.sourcesTitle || 'Fontes', o.sources, o.consulted, o.sourcesNote)}${byline(o)}${reviewNote(o)}</div></div>`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'WebApplication', name: t.name, url: SITE_URL + t.path,
    description: o.description, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Qualquer navegador moderno',
    inLanguage: 'pt-BR', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/' }, dateModified: o.updated
  };
  return {
    id: t.id, path: t.path, crumbs: [{ name: 'Ferramentas', path: '/ferramentas/' }, { name: t.short }],
    title: o.title, description: o.description, ogTitle: o.ogTitle || o.title, ogLabel: 'FERRAMENTA GRÁTIS', ogPhoto: t.photo,
    updated: o.updated, scripts: [`src/js/tools/${t.id}.js`], jsonLd, main
  };
}

// Página de guia.
export function guidePage(o) {
  const g = byId(o.id);
  const main = `<article class="reading wrap"><span class="eyebrow">${g.label}</span><h1>${o.h1}</h1><p class="lead">${o.lead}</p>${byline(o)}${img(g.photo, o.photoAlt, { lcp: true, cls: 'reading-photo', sizes: '(max-width: 1000px) 100vw, 900px' })}<div class="reading-text"><div class="quick-answer"><p class="quick-label">Resposta rápida</p>${o.quick}</div>${o.sections.map(s => `<section><h2>${s.h2}</h2>${s.html}</section>`).join('')}${faqHtml(o.faqTitle, o.faq)}${relatedHtml(o.related, 'Leia também', { path: '/guias/', label: 'Ver todos os guias de cuidados com cães e gatos' })}${sourcesHtml('Fontes', o.sources, o.consulted)}${reviewNote(o)}</div></article>`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: o.h1.replace(/<[^>]+>/g, ''), description: o.description,
    image: [`${SITE_URL}/assets/og/${g.id}.jpg`, `${SITE_URL}/assets/img/${g.photo}-1200.webp`], inLanguage: 'pt-BR',
    datePublished: o.published, dateModified: o.updated,
    author: o.author ? { '@type': 'Person', name: o.author.name, ...(o.author.url ? { url: o.author.url } : {}) } : { '@type': 'Organization', name: 'Redação Clube Bicho e Cia', url: SITE_URL + '/sobre/' },
    ...(o.reviewer ? { reviewedBy: { '@type': 'Person', name: o.reviewer.name } } : {}),
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/', logo: { '@type': 'ImageObject', url: SITE_URL + '/icon-512.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': SITE_URL + g.path }
  };
  return {
    id: g.id, path: g.path, crumbs: [{ name: 'Guias', path: '/guias/' }, { name: g.short }],
    title: o.title, description: o.description, ogTitle: o.ogTitle || o.title, ogType: 'article', ogLabel: `GUIA • ${g.label}`, ogPhoto: g.photo,
    updated: o.updated, published: o.published, jsonLd, main
  };
}
