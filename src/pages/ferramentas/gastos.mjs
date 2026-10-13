// Dados da página (gastos).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';
import { FORMS } from '../../forms.mjs';

const item = byId("gastos");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: "Ferramentas", path: '/ferramentas/' }, { name: item.short }],
  updated: "2026-09-13",
  scripts: ['src/js/tools/gastos.js'],
  title: "Gastos do pet — ferramenta gratuita | Clube Bicho e Cia",
  description: "Planeje o mês sem sustos no orçamento.",
  ogTitle: "Gastos do pet — ferramenta gratuita",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gastos do pet — ferramenta gratuita",
    "description": "Planeje o mês sem sustos no orçamento.",
    "inLanguage": "pt-BR"
  },
  main: `<section class="wrap tool-page"><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Gastos do pet<span class="title-symbol">＄</span></h1><p class="lead">Planeje o mês sem sustos no orçamento.</p><div class="method"><h2>Como usar e interpretar</h2><p>Soma dos gastos mensais + gastos anuais divididos por 12 + sua reserva. Valores de exemplo são editáveis e não representam uma pesquisa de preços. Emergências e despesas não previstas podem superar esse orçamento.</p><p class="sources">Método: soma aritmética dos valores informados.</p></div></div>${FORMS.gastos}</div></section>`
};
