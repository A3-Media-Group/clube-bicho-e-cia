// Dados da página (sobre).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("sobre");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-10-13",
  title: "Sobre o Clube Bicho e Cia: política editorial e fontes",
  description: "Conheça quem faz o Clube Bicho e Cia, como os guias sobre cães e gatos são escritos, quais fontes usamos e como as ferramentas calculam os resultados.",
  ogTitle: "Sobre o Clube Bicho e Cia: política editorial e fontes",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sobre o Clube Bicho e Cia: política editorial e fontes",
    "description": "Conheça quem faz o Clube Bicho e Cia, como os guias sobre cães e gatos são escritos, quais fontes usamos e como as ferramentas calculam os resultados.",
    "inLanguage": "pt-BR"
  },
  main: `<article class="reading wrap"><h1>Sobre o Clube Bicho e Cia: como fazemos os guias e as ferramentas</h1><div class="reading-text"><p class="lead">O Clube Bicho e Cia é um projeto editorial independente sobre cuidados com cães e gatos, com guias em linguagem simples e ferramentas gratuitas que funcionam sem cadastro.</p><h2>Como escrevemos os guias</h2><ul><li><strong>Fontes institucionais primeiro.</strong> Usamos orientações de órgãos públicos e entidades veterinárias, como o Ministério da Saúde, a AAHA, a WSAVA, a ASPCA, a PDSA, o AKC, a FDA e o Cornell Feline Health Center.</li><li><strong>Link para a página exata.</strong> Cada guia e ferramenta termina com a lista de fontes e a data de consulta, para você conferir.</li><li><strong>Paráfrase, não cópia.</strong> Resumimos com nossas palavras e não reproduzimos bases de dados de terceiros.</li><li><strong>Linguagem conservadora.</strong> Não prescrevemos doses, não montamos calendário de vacinas e não informamos “quantidade segura” de alimentos ou plantas tóxicas. Sempre indicamos procurar o médico-veterinário.</li><li><strong>Sem números inventados.</strong> Constantes usadas pelas ferramentas, como os fatores de energia da calculadora de ração, só entram com fonte oficial citada. Quando não confirmamos uma fonte, não publicamos o valor.</li></ul><h2>Autoria e revisão</h2><p>Os textos são escritos pela Redação do Clube Bicho e Cia. <strong>No momento, o conteúdo não passa por revisão clínica de um médico-veterinário</strong>, e cada página informa isso. Quando houver revisão, o nome e o registro profissional do revisor aparecerão na página revisada, com a data.</p><h2>Como funcionam as ferramentas</h2><p>Cada ferramenta mostra a fórmula ou o critério usado, um exemplo resolvido e as situações em que o resultado não serve. Todas rodam no seu navegador: nada do que você digita é enviado ou armazenado pelo site. Veja <a href="/ferramentas/">todas as ferramentas</a> e os <a href="/guias/">guias de cuidados</a>.</p><h2>Datas de atualização</h2><p>A data “Atualizado em” muda apenas quando o conteúdo muda de fato. A data de consulta das fontes indica quando os links foram verificados pela redação.</p><h2>Publicidade e independência</h2><p>O site não exibe anúncios, não tem links patrocinados e não recebe pagamento de marcas ou das instituições citadas. Se isso mudar, a publicidade será identificada e separada do conteúdo, e esta página e a política de privacidade serão atualizadas antes.</p><h2>Encontrou algo a corrigir?</h2><p>Use a página de <a href="/contato/">contato</a>. Revisamos a informação na fonte original e atualizamos a página quando necessário.</p></div></article>`
};
