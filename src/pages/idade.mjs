// Dados da página idade.html. O layout comum está em src/layout.mjs.
export default {
  file: "idade.html",
  title: "Idade do pet — ferramenta gratuita | Clube Bicho e Cia",
  description: "Quantos anos de gente tem o seu melhor amigo?",
  ogTitle: "Idade do pet — ferramenta gratuita",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Idade do pet — ferramenta gratuita",
    "description": "Quantos anos de gente tem o seu melhor amigo?",
    "inLanguage": "pt-BR"
  },
  main: `<section class="wrap tool-page"><a class="back" href="index.html#ferramentas">← Todas as ferramentas</a><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Idade do pet<span class="title-symbol">◷</span></h1><p class="lead">Quantos anos de gente tem o seu melhor amigo?</p><div class="method"><h2>Como usar e interpretar</h2><p>Comparação educativa para idades inteiras de 1 a 30 anos. Cães: 15 no primeiro ano, 24 no segundo e +5 por ano depois disso (referência geral para porte médio). Gatos: 15, 24 e +4 por ano. Não estima idade biológica nem expectativa de vida.</p><p class="sources"><a href="https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/" target="_blank" rel="noopener noreferrer">AKC ↗</a> · <a href="https://catfriendly.com/wp-content/uploads/2025/09/FelineVMA_CatAgeToHumanAge.pdf" target="_blank" rel="noopener noreferrer">FelineVMA ↗</a></p></div></div><div class="calculator laranja"><form data-tool="idade"><label>Seu pet é…<select id="species" name="species"><option value="dog">Cachorro (referência: porte médio)</option><option value="cat">Gato</option></select></label><label>Idade em anos completos<input id="years" name="years" type="number" min="1" max="30" step="1" value="3" required></label><button class="button" type="submit">Calcular idade ↗</button></form><div id="result" role="status" aria-live="polite">Preencha os campos para começar.</div><noscript>Ative o JavaScript para usar esta ferramenta. Os guias continuam disponíveis.</noscript></div></div></section>`
};
