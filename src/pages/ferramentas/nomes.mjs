// Dados da página (nomes).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';
import { FORMS } from '../../forms.mjs';

const item = byId("nomes");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: "Ferramentas", path: '/ferramentas/' }, { name: item.short }],
  updated: "2026-09-13",
  scripts: ['src/js/tools/nomes.js'],
  title: "Nomes para pets — ferramenta gratuita | Clube Bicho e Cia",
  description: "Encontre um nome com a cara do seu bichinho.",
  ogTitle: "Nomes para pets — ferramenta gratuita",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Nomes para pets — ferramenta gratuita",
    "description": "Encontre um nome com a cara do seu bichinho.",
    "inLanguage": "pt-BR"
  },
  main: `<section class="wrap tool-page"><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Nomes para pets<span class="title-symbol">✦</span></h1><p class="lead">Encontre um nome com a cara do seu bichinho.</p><div class="method"><h2>Como usar e interpretar</h2><p>Sugestões criativas da redação, sem ranking de popularidade. Clique novamente para conhecer outras opções.</p><p class="sources">Seleção editorial original do Clube Bicho e Cia.</p></div></div>${FORMS.nomes}</div></section>`
};
