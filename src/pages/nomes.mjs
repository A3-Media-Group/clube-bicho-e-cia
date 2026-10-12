// Dados da página nomes.html. O layout comum está em src/layout.mjs.
export default {
  id: "nomes",
  path: "/nomes.html",
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
  main: `<section class="wrap tool-page"><a class="back" href="/#ferramentas">← Todas as ferramentas</a><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Nomes para pets<span class="title-symbol">✦</span></h1><p class="lead">Encontre um nome com a cara do seu bichinho.</p><div class="method"><h2>Como usar e interpretar</h2><p>Sugestões criativas da redação, sem ranking de popularidade. Clique novamente para conhecer outras opções.</p><p class="sources">Seleção editorial original do Clube Bicho e Cia.</p></div></div><div class="calculator roxo"><form data-tool="nomes"><label>Qual é a vibe do seu pet?<select id="style" name="style"><option value="fofos">Fofinho</option><option value="comida">Comidinhas</option><option value="natureza">Natureza</option><option value="divertidos">Cheio de personalidade</option></select></label><button class="button" type="submit">Encontrar nomes ↗</button></form><div id="result" role="status" aria-live="polite">Preencha os campos para começar.</div><noscript>Ative o JavaScript para usar esta ferramenta. Os guias continuam disponíveis.</noscript></div></div></section>`
};
