// Dados da página agenda.html. O layout comum está em src/layout.mjs.
export default {
  file: "agenda.html",
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
  main: `<section class="wrap tool-page"><a class="back" href="index.html#ferramentas">← Todas as ferramentas</a><div class="tool-layout"><div><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Agenda de cuidados<span class="title-symbol">▦</span></h1><p class="lead">Transforme a próxima consulta em um lembrete.</p><div class="method"><h2>Como usar e interpretar</h2><p>Você escolhe a data indicada pelo profissional. Esta ferramenta não calcula doses, intervalos ou calendário vacinal. O arquivo pode ser importado em aplicativos de calendário; o site não envia notificações.</p><p class="sources"><a href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva" target="_blank" rel="noopener noreferrer">Ministério da Saúde — raiva ↗</a></p></div></div><div class="calculator azul"><form data-tool="agenda"><label>Cuidado ou consulta<input id="event" name="event" type="text" maxlength="80" placeholder="Ex.: retorno ao veterinário" required></label><label>Data combinada com o profissional<input id="date" name="date" type="date"  required></label><button class="button" type="submit">Baixar lembrete (.ics) ↗</button></form><div id="result" role="status" aria-live="polite">Preencha os campos para começar.</div><noscript>Ative o JavaScript para usar esta ferramenta. Os guias continuam disponíveis.</noscript></div></div></section>`
};
