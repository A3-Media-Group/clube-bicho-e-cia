// Dados da página (home).html. O layout comum está em src/layout.mjs.
import { img } from '../html.mjs';
import { TOOLS, GUIDES } from '../site.mjs';
import { toolCard, guideCard } from '../components.mjs';

export default {
  id: "home",
  path: "/",
  updated: "2026-09-13",
  title: "Cuidados com pets e ferramentas gratuitas | Clube Bicho e Cia",
  description: "Cuide de cães e gatos com guias baseados em fontes oficiais e seis ferramentas gratuitas: idade, ração, alimentos, agenda, gastos e nomes.",
  ogTitle: "Cuidados com pets e ferramentas gratuitas",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cuidados com pets e ferramentas gratuitas",
    "description": "Cuide de cães e gatos com guias baseados em fontes oficiais e seis ferramentas gratuitas: idade, ração, alimentos, agenda, gastos e nomes.",
    "inLanguage": "pt-BR"
  },
  main: `<section class="hero wrap"><div class="hero-copy"><span class="eyebrow">PARA TODAS AS PATAS. E TODOS OS AFETOS.</span><h1>Amar é natural.<br><em>Cuidar se aprende.</em></h1><p>Uma vida mais feliz para o seu pet começa com pequenas descobertas. Vem aprender, tirar dúvidas e cuidar com a gente.</p><div class="actions"><a class="button" href="#ferramentas">Explorar ferramentas <span>↗</span></a><a class="text-link" href="#guias">Quero aprender</a></div><div class="hero-note"><span>♡</span> Informação confiável. Carinho de verdade.</div></div><div class="hero-photo">${img('dog', "Golden retriever sorridente em fotografia real", { lcp: true, sizes: '(max-width: 600px) 100vw, 45vw' })}<div class="photo-label">O melhor amigo merece<br><b>o melhor cuidado.</b> ♡</div><span class="sticker">vida boa<br><b>é com pet!</b></span></div></section><div class="ribbon"><span>CUIDADO COM CARINHO ✦</span><span>DESCOBERTAS TODOS OS DIAS ✦</span><span>MAIS TEMPO JUNTINHOS ✦</span></div><section class="wrap section" id="ferramentas"><div class="section-heading"><div><span class="eyebrow">MENOS DÚVIDAS, MAIS CUIDADO</span><h2>Uma ajudinha na rotina.</h2></div><p>Seis ferramentas para a vida real.<br>Grátis, simples e sem cadastro.</p></div><div class="tool-grid">${TOOLS.map((t, i) => toolCard(t, i + 1)).join('')}</div><p class="hub-more"><a href="/ferramentas/">Ver todas as ferramentas</a></p></section><section class="guide-section" id="guias"><div class="wrap section"><div class="section-heading"><div><span class="eyebrow">INFORMAÇÃO QUE FAZ BEM</span><h2>Seu próximo cuidado<br>começa aqui.</h2></div><span class="source-badge">✦ Guias com fontes consultáveis</span></div><div class="article-grid">${GUIDES.map(g => guideCard(g)).join('')}</div><p class="hub-more"><a href="/guias/">Ver todos os guias</a></p></div></section><section class="wrap care-banner"><span class="big-star">✦</span><div><span class="eyebrow">JUNTOS PELO BEM-ESTAR ANIMAL</span><h2>Carinho também é<br>informação de confiança.</h2><p>Consultamos instituições como Ministério da Saúde, AAHA e ASPCA.<br>Você encontra as referências ao final de cada guia.</p><a class="button light" href="/sobre/">Conheça nosso jeito de cuidar ↗</a></div></section>`
};
