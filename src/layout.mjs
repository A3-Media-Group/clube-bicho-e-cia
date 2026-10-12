// Layout único: head, topbar, header e footer comuns a todas as páginas.
import fs from 'node:fs';

const css = fs.readFileSync(new URL('./assets/style.css', import.meta.url), 'utf8');
const js = fs.readFileSync(new URL('./assets/app.js', import.meta.url), 'utf8');

const ICON = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='18' fill='%23702bd4'/%3E%3Ctext x='32' y='47' text-anchor='middle' font-size='48' fill='%23e6fc7a'%3E✦%3C/text%3E%3C/svg%3E`;

const header = `<a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="topbar">Um clube para quem ama, cuida e aprende. <span>100% gratuito • Sem cadastro</span></div><header class="header"><a class="brand" href="index.html"><span class="brandmark">✦</span><span>clube <b>bicho</b><small>& cia.</small></span></a><nav aria-label="Navegação principal"><a href="index.html#guias">Guias de cuidados</a><a href="index.html#ferramentas">Ferramentas</a><a href="sobre.html">Nosso clube</a></nav><a class="pill" href="index.html#ferramentas">Cuidar melhor ↗</a></header>`;

const footer = `<footer><div class="footer-inner"><a class="brand" href="index.html">clube <b>bicho</b> & cia.</a><p>Mais informação. Mais carinho.<br>Mais vida boa ao lado do seu pet.</p><div><a href="sobre.html">Sobre e fontes</a><a href="privacidade.html">Privacidade</a><a href="termos.html">Termos de uso</a><a href="creditos.html">Créditos das fotos</a></div></div><div class="fine">© 2026 Clube Bicho e Cia. Conteúdo educativo; não substitui atendimento veterinário.</div></footer>`;

export function render(page) {
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page.title}</title><meta name="description" content="${page.description}"><meta name="theme-color" content="#702bd4"><meta property="og:title" content="${page.ogTitle}"><meta property="og:description" content="${page.description}"><meta property="og:type" content="${page.ogType}"><meta property="og:locale" content="pt_BR"><link rel="icon" type="image/svg+xml" href="${ICON}"><style id="clube-bicho-styles">${css}</style><script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script></head><body>${header}<main id="conteudo">${page.main}</main>${footer}<script id="clube-bicho-app">${js}</script></body></html>`;
}
