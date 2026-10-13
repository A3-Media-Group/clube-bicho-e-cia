// Dados da página (sobre).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("sobre");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-09-13",
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
  main: `<article class="reading wrap"><h1>Sobre o Clube Bicho e Cia: como fazemos os guias e as ferramentas</h1><div class="reading-text"><p>O Clube Bicho e Cia é um projeto editorial independente sobre cães e gatos. Reúne informação educativa e ferramentas gratuitas, sem cadastro.</p><h2>Como produzimos nossos guias</h2><p>A redação resume fontes institucionais, mostra os links e informa a data de consulta. Não anunciamos revisão veterinária que não ocorreu. As ferramentas explicam seus métodos e limites; não realizam diagnóstico ou prescrição. Não temos vínculo com as instituições citadas.</p><h2>Referências no Brasil e no exterior</h2><p>Pesquisamos a organização por temas do <a href="https://www.petz.com.br/blog/" target="_blank" rel="noopener noreferrer">Blog Petz ↗</a> e do <a href="https://blog.cobasi.com.br/" target="_blank" rel="noopener noreferrer">Blog Cobasi ↗</a>; a abordagem prática do <a href="https://www.pdsa.org.uk/pet-help-and-advice" target="_blank" rel="noopener noreferrer">PDSA Pet Health Hub ↗</a> e o conteúdo educativo do <a href="https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/" target="_blank" rel="noopener noreferrer">AKC ↗</a>. A identidade visual, os textos e o código deste site foram criados para o Clube.</p><h2>Por que estas seis ferramentas?</h2><p>Buscas públicas mostraram recorrência de calculadoras de idade e ração, nomes, custos e calendários em portais como <a href="https://calculapet.com/" target="_blank" rel="noopener noreferrer">CalculaPet ↗</a> e a <a href="https://www.specialdog.com.br/calculadora" target="_blank" rel="noopener noreferrer">calculadora da Special Dog ↗</a>. A consulta de alimentos atende às dúvidas de segurança presentes na ASPCA. Essa é uma seleção editorial por utilidade e presença nos resultados, não um ranking comprovado das seis mais buscadas. Não tivemos acesso a volumes auditáveis por palavra-chave.</p><h2>Publicidade e independência</h2><p>Esta versão não exibe anúncios nem recebe pagamentos por cliques. Se publicidade for ativada, deve ser identificada e permanecer separada do conteúdo editorial. Não há garantia de aprovação de programas de anúncios.</p><h2>Encontrou algo a corrigir?</h2><p>Confira a fonte original indicada no guia. O responsável pela publicação pode receber correções pelas Issues do repositório, quando esse canal estiver habilitado. Não envie dados pessoais ou informações clínicas em páginas públicas.</p></div></article>`
};
