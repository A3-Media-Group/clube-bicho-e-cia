// Dados da página (guia-peso).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("guia-peso");
import { img } from '../../html.mjs';

export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: "Guias", path: '/guias/' }, { name: item.short }],
  ogPhoto: "dog",
  updated: "2026-09-13",
  published: "2026-09-13",
  title: "Seu cão está no peso adequado? Observe além da balança | Clube Bicho e Cia",
  description: "Costelas e cintura ajudam a perceber mudanças.",
  ogTitle: "Seu cão está no peso adequado? Observe além da balança",
  ogType: "article",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Article",
    "name": "Seu cão está no peso adequado? Observe além da balança",
    "description": "Costelas e cintura ajudam a perceber mudanças.",
    "inLanguage": "pt-BR",
    "headline": "Seu cão está no peso adequado? Observe além da balança",
    "author": {
      "@type": "Organization",
      "name": "Redação Clube Bicho e Cia"
    },
    "datePublished": "2026-09-13",
    "dateModified": "2026-09-13"
  },
  main: `<article class="reading wrap"><span class="eyebrow">BEM-ESTAR</span><h1>Seu cão está no peso adequado? Observe além da balança</h1><p class="lead">Costelas e cintura ajudam a perceber mudanças.</p><p class="metadata">Por Redação Clube Bicho e Cia • Atualizado em 13/09/2026</p>${img('dog', "Cachorro em fotografia real", { lcp: true, cls: 'reading-photo', sizes: '(max-width: 1000px) 100vw, 900px' })}<div class="reading-text"><h2>Olhe e toque com delicadeza</h2><p>A PDSA orienta avaliar a silhueta e sentir as costelas com um toque leve. Observe o cão de cima e de lado: a cintura e o contorno abdominal fazem parte da avaliação. Pelagem e conformação podem dificultar essa percepção.</p><h2>Não transforme observação em diagnóstico</h2><p>O escore corporal usa uma escala de nove pontos, mas sua interpretação deve ser confirmada pelo veterinário. Uma foto isolada ou o peso típico de uma raça não define a condição ideal de um indivíduo.</p><h2>Prepare um histórico</h2><p>Faça os registros de peso em condições semelhantes e leve as datas à consulta. Anote também mudanças na alimentação ou atividade para ajudar o profissional a entender o contexto. Não reduza drasticamente a comida por conta própria.</p><aside class="method"><h2>Fontes e transparência</h2><p><a href="https://www.pdsa.org.uk/get-involved/our-campaigns/weigh-up/your-dog/your-dogs-body-shape/your-dogs-body-condition-score" target="_blank" rel="noopener noreferrer">PDSA ↗</a></p><p>Fontes consultadas em 13/09/2026. Síntese editorial educativa, sem revisão clínica individual por médico-veterinário.</p></aside><a class="button" href="/ferramentas/">Conhecer as ferramentas ↗</a></div></article>`
};
