// Dados da página (termos).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("termos");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-09-13",
  title: "Termos de uso | Clube Bicho e Cia",
  description: "Condições de uso dos guias e das ferramentas do Clube Bicho e Cia: conteúdo educativo sobre cães e gatos que não substitui o médico-veterinário.",
  ogTitle: "Termos de uso",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Termos de uso | Clube Bicho e Cia",
    "description": "Condições de uso dos guias e das ferramentas do Clube Bicho e Cia: conteúdo educativo sobre cães e gatos que não substitui o médico-veterinário.",
    "inLanguage": "pt-BR"
  },
  main: `<article class="reading wrap"><h1>Termos de uso do Clube Bicho e Cia</h1><div class="reading-text"><p>O conteúdo é educativo, gratuito e voltado principalmente a tutores de cães e gatos. As estimativas dependem dos valores informados e não substituem avaliação veterinária, diagnóstico, prescrição ou atendimento de urgência.</p><h2>Use os resultados com contexto</h2><p>Leia o método e os limites de cada ferramenta. Não use a calculadora de ração para condições fora do escopo indicado. A agenda apenas gera um arquivo com a data escolhida, sem agendamento em clínica ou confirmação de atendimento.</p><h2>Conteúdo e fotografias</h2><p>As fontes citadas são independentes do Clube. Fotos seguem as licenças e créditos identificados na página específica. Marcas e conteúdos externos pertencem aos respectivos titulares.</p><h2>Atualizações</h2><p>Recomendações institucionais podem mudar após a data de consulta. Consulte os documentos originais e um profissional para decisões sobre seu pet.</p></div></article>`
};
