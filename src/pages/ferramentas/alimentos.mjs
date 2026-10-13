// Dados da página (alimentos).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';
import { FORMS } from '../../forms.mjs';

const item = byId("alimentos");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: "Ferramentas", path: '/ferramentas/' }, { name: item.short }],
  updated: "2026-09-13",
  scripts: ['src/js/tools/alimentos.js'],
  title: "Pode comer? — ferramenta gratuita | Clube Bicho e Cia",
  description: "Consulte alimentos que merecem atenção.",
  ogTitle: "Pode comer? — ferramenta gratuita",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pode comer? — ferramenta gratuita",
    "description": "Consulte alimentos que merecem atenção.",
    "inLanguage": "pt-BR"
  },
  main: `<section class="wrap tool-page"><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Pode comer?<span class="title-symbol">♡</span></h1><p class="lead">Consulte alimentos que merecem atenção.</p><div class="method"><h2>Como usar e interpretar</h2><p>Lista de alerta, não um catálogo completo. Um alimento ausente não é necessariamente seguro. Suspeita de ingestão: procure atendimento veterinário; não espere sintomas nem provoque vômito sem orientação.</p><p class="sources"><a href="https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets" target="_blank" rel="noopener noreferrer">ASPCA — alimentos a evitar ↗</a></p></div></div>${FORMS.alimentos}</div></section>`
};
