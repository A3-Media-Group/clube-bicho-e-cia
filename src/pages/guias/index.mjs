// Hub de guias.
import { GUIDES, HUBS } from '../../site.mjs';
import { guideCard, itemList } from '../../components.mjs';

export default {
  id: 'guias',
  path: HUBS.guias.path,
  crumbs: [{ name: 'Guias' }],
  updated: '2026-10-12',
  title: 'Guias de cuidados com cães e gatos | Clube Bicho e Cia',
  ogTitle: 'Guias de cuidados com cães e gatos',
  description: 'Guias sobre vacina antirrábica, quantidade de ração, alimentos perigosos, peso ideal e idade de cães e gatos, com fontes oficiais citadas.',
  jsonLd: itemList('Guias de cuidados com cães e gatos', GUIDES),
  main: `<section class="wrap section hub"><span class="eyebrow">INFORMAÇÃO QUE FAZ BEM</span><h1>Guias de cuidados com cães e gatos</h1><div class="hub-intro"><p class="lead">Explicações em linguagem simples sobre vacinação, alimentação, segurança em casa, peso e fases da vida de cães e gatos.</p><p>Os guias resumem orientações de instituições como o Ministério da Saúde, a AAHA (associação veterinária dos Estados Unidos), a ASPCA, a PDSA e o AKC. Cada texto traz a resposta rápida no topo, os critérios para observar em casa, os erros mais comuns e os sinais de que é hora de procurar o médico-veterinário. No fim, você encontra os links para as páginas exatas das fontes e a data em que foram consultadas.</p><p>Os guias explicam o como e o porquê; as <a href="/ferramentas/">ferramentas</a> fazem a conta. Por exemplo, o guia sobre quanto de ração dar mostra como ler o rótulo, e a calculadora de ração usa esse valor para estimar os gramas por dia. Os textos são educativos e não substituem a consulta: cada animal tem um histórico, e quem define tratamento, dieta e vacinas é o profissional que o acompanha.</p></div><h2>Todos os guias</h2><div class="article-grid">${GUIDES.map(g => guideCard(g)).join('')}</div></section>`
};
