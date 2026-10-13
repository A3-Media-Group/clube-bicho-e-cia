// Dados da página (termos).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("termos");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-10-13",
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
  main: `<article class="reading wrap"><h1>Termos de uso do Clube Bicho e Cia</h1><div class="reading-text"><p>Última atualização: 13/10/2026.</p><h2>Conteúdo educativo</h2><p>Os guias e as ferramentas do Clube Bicho e Cia são gratuitos e têm finalidade educativa. Eles não substituem consulta, diagnóstico, prescrição ou atendimento de urgência por médico-veterinário. Em caso de suspeita de intoxicação, ferimento ou mal-estar do seu animal, procure uma clínica veterinária.</p><h2>Use os resultados com contexto</h2><ul><li>Leia o método e as situações de “quando não usar” de cada ferramenta.</li><li>A calculadora de ração vale só para adultos saudáveis e castrados; a idade em anos humanos é uma comparação educativa; a avaliação de condição corporal é uma orientação, não diagnóstico.</li><li>As consultas de alimentos e de plantas não avaliam quantidade ingerida nem gravidade, e a ausência de um item não significa que ele é seguro.</li><li>A agenda apenas gera um arquivo com a data que você escolheu; ela não agenda atendimentos.</li><li>As calculadoras de custo somam os valores digitados por você; o site não sugere preços.</li></ul><h2>Fontes, marcas e fotos</h2><p>As instituições citadas são independentes do Clube e não endossam o site. Marcas e conteúdos externos pertencem aos respectivos titulares. As fotos seguem as licenças indicadas na página de <a href="/creditos/">créditos</a>.</p><h2>Atualizações</h2><p>Orientações institucionais podem mudar depois da data de consulta indicada em cada página. Confira os documentos originais e converse com um profissional antes de decisões sobre a saúde do seu animal.</p></div></article>`
};
