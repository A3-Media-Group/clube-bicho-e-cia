// Dados da página (racao).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';
import { FORMS } from '../../forms.mjs';

const item = byId("racao");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: "Ferramentas", path: '/ferramentas/' }, { name: item.short }],
  updated: "2026-09-13",
  scripts: ['src/js/tools/racao.js'],
  title: "Porção de ração — ferramenta gratuita | Clube Bicho e Cia",
  description: "Uma estimativa para começar a conversa com o vet.",
  ogTitle: "Porção de ração — ferramenta gratuita",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Porção de ração — ferramenta gratuita",
    "description": "Uma estimativa para começar a conversa com o vet.",
    "inLanguage": "pt-BR"
  },
  main: `<section class="wrap tool-page"><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Porção de ração<span class="title-symbol">◒</span></h1><p class="lead">Uma estimativa para começar a conversa com o vet.</p><div class="method"><h2>Como usar e interpretar</h2><p>Referência educativa: RER = 70 × peso^0,75. Faixas de manutenção: cães castrados 1,4–1,6 × RER; gatos castrados 1,2–1,4 × RER. Somente adultos saudáveis, fora de gestação e lactação. Não serve para emagrecimento, filhotes ou dietas terapêuticas. Petiscos também entram no total. Confirme a porção com o veterinário.</p><p class="sources"><a href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/" target="_blank" rel="noopener noreferrer">Diretrizes AAHA ↗</a></p></div></div>${FORMS.racao}</div></section>`
};
