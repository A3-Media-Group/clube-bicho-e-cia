// Dados da página gastos.html. O layout comum está em src/layout.mjs.
export default {
  id: "gastos",
  path: "/gastos.html",
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
  main: `<section class="wrap tool-page"><a class="back" href="/#ferramentas">← Todas as ferramentas</a><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Gastos do pet<span class="title-symbol">＄</span></h1><p class="lead">Planeje o mês sem sustos no orçamento.</p><div class="method"><h2>Como usar e interpretar</h2><p>Soma dos gastos mensais + gastos anuais divididos por 12 + sua reserva. Valores de exemplo são editáveis e não representam uma pesquisa de preços. Emergências e despesas não previstas podem superar esse orçamento.</p><p class="sources">Método: soma aritmética dos valores informados.</p></div></div><div class="calculator amarelo"><form data-tool="gastos"><label>Alimentação mensal (R$)<input id="foodcost" name="foodcost" type="number" min="0" max="100000" step="0.01" value="150" required></label><label>Higiene e acessórios por mês (R$)<input id="hygiene" name="hygiene" type="number" min="0" max="100000" step="0.01" value="60" required></label><label>Cuidados previstos no ano (R$)<input id="health" name="health" type="number" min="0" max="1000000" step="0.01" value="1200" required></label><label>Reserva mensal escolhida por você (R$)<input id="reserve" name="reserve" type="number" min="0" max="100000" step="0.01" value="50" required></label><button class="button" type="submit">Calcular orçamento ↗</button></form><div id="result" role="status" aria-live="polite">Preencha os campos para começar.</div><noscript>Ative o JavaScript para usar esta ferramenta. Os guias continuam disponíveis.</noscript></div></div></section>`
};
