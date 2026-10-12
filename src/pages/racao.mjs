// Dados da página racao.html. O layout comum está em src/layout.mjs.
export default {
  id: "racao",
  path: "/racao.html",
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
  main: `<section class="wrap tool-page"><a class="back" href="/#ferramentas">← Todas as ferramentas</a><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Porção de ração<span class="title-symbol">◒</span></h1><p class="lead">Uma estimativa para começar a conversa com o vet.</p><div class="method"><h2>Como usar e interpretar</h2><p>Referência educativa: RER = 70 × peso^0,75. Faixas de manutenção: cães castrados 1,4–1,6 × RER; gatos castrados 1,2–1,4 × RER. Somente adultos saudáveis, fora de gestação e lactação. Não serve para emagrecimento, filhotes ou dietas terapêuticas. Petiscos também entram no total. Confirme a porção com o veterinário.</p><p class="sources"><a href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/" target="_blank" rel="noopener noreferrer">Diretrizes AAHA ↗</a></p></div></div><div class="calculator verde"><form data-tool="racao"><label>Animal adulto saudável e castrado<select id="species" name="species"><option value="dog">Cachorro</option><option value="cat">Gato</option></select></label><label>Peso atual (kg)<input id="weight" name="weight" type="number" min="0.5" max="100" step="0.1" value="10" required></label><label>Energia da ração no rótulo (kcal/kg)<input id="density" name="density" type="number" min="100" max="10000" step="1" placeholder="Ex.: 3600" required></label><button class="button" type="submit">Estimar porção ↗</button></form><div id="result" role="status" aria-live="polite">Preencha os campos para começar.</div><noscript>Ative o JavaScript para usar esta ferramenta. Os guias continuam disponíveis.</noscript></div></div></section>`
};
