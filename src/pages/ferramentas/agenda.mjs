// Dados da página (agenda).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';
import { FORMS } from '../../forms.mjs';

const item = byId("agenda");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: "Ferramentas", path: '/ferramentas/' }, { name: item.short }],
  updated: "2026-09-13",
  scripts: ['src/js/tools/agenda.js'],
  title: "Agenda de cuidados — ferramenta gratuita | Clube Bicho e Cia",
  description: "Transforme a próxima consulta em um lembrete.",
  ogTitle: "Agenda de cuidados — ferramenta gratuita",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Agenda de cuidados — ferramenta gratuita",
    "description": "Transforme a próxima consulta em um lembrete.",
    "inLanguage": "pt-BR"
  },
  main: `<section class="wrap tool-page"><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Agenda de cuidados<span class="title-symbol">▦</span></h1><p class="lead">Transforme a próxima consulta em um lembrete.</p><div class="method"><h2>Como usar e interpretar</h2><p>Você escolhe a data indicada pelo profissional. Esta ferramenta não calcula doses, intervalos ou calendário vacinal. O arquivo pode ser importado em aplicativos de calendário; o site não envia notificações.</p><p class="sources"><a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva" target="_blank" rel="noopener noreferrer">Ministério da Saúde — raiva ↗</a></p></div></div>${FORMS.agenda}</div></section>`
};
