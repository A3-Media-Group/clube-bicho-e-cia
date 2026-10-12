// Hub de ferramentas.
import { TOOLS, HUBS } from '../../site.mjs';
import { toolCard, itemList } from '../../components.mjs';

export default {
  id: 'ferramentas',
  path: HUBS.ferramentas.path,
  crumbs: [{ name: 'Ferramentas' }],
  updated: '2026-10-12',
  title: 'Ferramentas grátis para cães e gatos | Clube Bicho e Cia',
  ogTitle: 'Ferramentas grátis para cães e gatos',
  description: 'Calculadoras gratuitas para cães e gatos: idade em anos humanos, ração por dia, alimentos proibidos, agenda de cuidados, custos e nomes.',
  jsonLd: itemList('Ferramentas para cães e gatos', TOOLS),
  main: `<section class="wrap section hub"><span class="eyebrow">GRÁTIS • SEM CADASTRO</span><h1>Ferramentas para cuidar de cães e gatos</h1><div class="hub-intro"><p class="lead">Seis calculadoras e consultas para resolver dúvidas do dia a dia de quem tem cachorro ou gato. Todas funcionam direto no navegador: nada do que você digita é enviado ou guardado.</p><p>Cada ferramenta mostra como faz a conta, com a fórmula ou a tabela usada e o link para a fonte original. Também diz quando o resultado não serve, por exemplo em filhotes, gestantes ou animais com alguma doença. Os números são um ponto de partida para conversar com o médico-veterinário, que conhece o histórico do seu animal. Nenhuma delas faz diagnóstico, prescreve dieta ou define calendário de vacinas.</p><p>Para entender o porquê de cada recomendação, cada ferramenta tem um guia correspondente: a calculadora de ração anda junto com o guia sobre quanto de ração dar; a consulta de alimentos, com o guia de alimentos perigosos; a idade em anos humanos, com o guia que explica de onde vêm as tabelas.</p></div><h2>Calculadoras e consultas disponíveis</h2><div class="tool-grid">${TOOLS.map((t, i) => toolCard(t, i + 1)).join('')}</div><p class="hub-more">Procura explicações mais longas? Veja todos os <a href="/guias/">guias de cuidados com cães e gatos</a>.</p></section>`
};
