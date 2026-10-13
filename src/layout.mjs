// Layout único: head, topbar, header (menu), breadcrumb e footer comuns a todas as páginas.
import { SITE_URL, SITE_NAME, THEME_COLOR } from './config.mjs';
import { esc } from './html.mjs';
import { TOOLS, GUIDES, MENU_TOOLS, MENU_GUIDES, INSTITUTIONAL, HUBS } from './site.mjs';
import { breadcrumb } from './components.mjs';

const menu = (label, all, hub, items) => `<details class="menu"><summary>${label}</summary><ul><li><a href="${hub.path}">${all}</a></li>${items.map(i => `<li><a href="${i.path}">${esc(i.short)}</a></li>`).join('')}</ul></details>`;

const header = `<a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="topbar">Um clube para quem ama, cuida e aprende. <span>100% gratuito • Sem cadastro</span></div><header class="header"><a class="brand" href="/" aria-label="Clube Bicho e Cia — início"><span class="brandmark" aria-hidden="true">✦</span><span>clube <b>bicho</b><small>& cia.</small></span></a><nav class="mainnav" aria-label="Navegação principal">${menu('Ferramentas', 'Todas as ferramentas', HUBS.ferramentas, MENU_TOOLS)}${menu('Guias', 'Todos os guias', HUBS.guias, MENU_GUIDES)}<a href="/sobre/">Sobre</a></nav><a class="pill" href="/ferramentas/">Cuidar melhor ↗</a></header>`;

const col = (title, items) => `<div class="footer-col"><p class="footer-title">${title}</p><ul>${items.map(i => `<li><a href="${i.path}">${esc(i.name)}</a></li>`).join('')}</ul></div>`;

const footer = `<footer><div class="footer-inner"><div class="footer-brand"><a class="brand" href="/">clube <b>bicho</b> & cia.</a><p>Mais informação. Mais carinho.<br>Mais vida boa ao lado do seu pet.</p></div>${col('Ferramentas', [HUBS.ferramentas, ...TOOLS])}${col('Guias', [HUBS.guias, ...GUIDES, { path: HUBS.podeComer.path, name: 'Cachorro e gato podem comer?' }])}${col('O clube', INSTITUTIONAL)}</div><div class="fine">© 2026 Clube Bicho e Cia. Conteúdo educativo; não substitui atendimento veterinário.</div></footer>`;

export const absUrl = p => SITE_URL + p;
export const ogImagePath = page => `/assets/og/${page.id}.jpg`;

export function render(page, assets) {
  const indexable = !page.noindex;
  const url = absUrl(page.path);
  const ogImage = absUrl(ogImagePath(page));
  const scripts = ['src/js/site.js', ...(page.scripts || [])];
  const scriptUrls = scripts.map(s => assets.js(s));
  const preload = [...new Set(scripts.flatMap(s => assets.depsOf(s)))];
  const crumbs = page.crumbs ? breadcrumb(page.crumbs) : null;
  const jsonLd = [...(page.jsonLd ? [].concat(page.jsonLd) : []), ...(crumbs ? [crumbs.jsonLd] : [])];
  const head = [
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}">`,
    `<meta name="robots" content="${indexable ? 'index,follow,max-image-preview:large' : 'noindex,follow'}">`,
    indexable ? `<link rel="canonical" href="${esc(url)}">` : '',
    `<meta name="theme-color" content="${THEME_COLOR}">`,
    '<meta property="og:locale" content="pt_BR">',
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:type" content="${page.ogType || 'website'}">`,
    `<meta property="og:title" content="${esc(page.ogTitle || page.title)}">`,
    `<meta property="og:description" content="${esc(page.description)}">`,
    indexable ? `<meta property="og:url" content="${esc(url)}">` : '',
    `<meta property="og:image" content="${esc(ogImage)}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="675">',
    `<meta property="og:image:alt" content="${esc(page.ogTitle || page.title)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    '<link rel="icon" href="/favicon.ico" sizes="32x32">',
    '<link rel="icon" href="/favicon.svg" type="image/svg+xml">',
    '<link rel="apple-touch-icon" href="/apple-touch-icon.png">',
    '<link rel="manifest" href="/site.webmanifest">',
    `<link rel="stylesheet" href="${assets.cssUrl}">`,
    ...preload.map(u => `<link rel="modulepreload" href="${u}">`),
    ...jsonLd.map(o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`)
  ].filter(Boolean).join('');
  const body = `${header}<main id="conteudo">${crumbs ? crumbs.html : ''}${page.main}</main>${footer}${scriptUrls.map(s => `<script type="module" src="${s}"></script>`).join('')}`;
  return `<!doctype html><html lang="pt-BR"><head>${head}</head><body>${body}</body></html>\n`;
}
