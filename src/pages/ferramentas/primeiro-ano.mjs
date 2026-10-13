// Ferramenta: custo do primeiro ano com o pet.
import { toolPage } from '../../templates.mjs';
import { byId } from '../../site.mjs';
import { ITENS, TIPOS } from '../../js/calc/primeiro-ano.mjs';

const gastos = byId('gastos');
const vacina = byId('guia-vacina');
const grupo = (tipo, titulo) => `<fieldset class="money-group"><legend>${titulo}</legend><div class="money-grid">${ITENS.filter(i => i.tipo === tipo).map(i => `<div class="field"><label for="${i.id}">${i.label} <span class="period">(${TIPOS[i.tipo]})</span></label><input id="${i.id}" name="${i.id}" type="text" inputmode="decimal" autocomplete="off" placeholder="R$ 0,00"></div>`).join('')}</div></fieldset>`;
const form = `<div class="calculator amarelo"><form data-tool="primeiro-ano" novalidate><p class="form-note">Digite os valores que você pesquisou ou pagou; deixe em branco o que não se aplica. O site não sugere preços.</p>${grupo('unico', 'Gastos de chegada')}${grupo('anual', 'Saúde no primeiro ano')}${grupo('mensal', 'Gastos de todo mês')}<button class="button" type="submit" data-evento="ferramenta_calculou" data-ferramenta="primeiro-ano">Calcular primeiro ano <span aria-hidden="true">↗</span></button></form><div id="result" class="result"><p>Preencha os valores e toque no botão para ver o total.</p></div><p id="result-status" class="visually-hidden" role="status" aria-live="polite"></p><noscript><p class="noscript">Ative o JavaScript para usar esta ferramenta.</p></noscript></div>`;

export default toolPage({
  id: 'primeiro-ano',
  updated: '2026-10-13',
  consulted: '2026-10-13',
  title: 'Custo do primeiro ano com o pet: checklist e calculadora',
  description: 'Vai adotar um cachorro ou gato? Liste os gastos de chegada, saúde e rotina do primeiro ano e some tudo com os seus valores, sem preços inventados.',
  h1: 'Custo do primeiro ano com o pet: checklist de gastos',
  lead: 'Uma lista do que costuma entrar no orçamento da chegada de um filhote ou de um animal adotado, para você preencher com os seus valores.',
  intro: `<p>Depois do primeiro ano, use a calculadora de <a href="${gastos.path}">custo mensal do pet</a> para acompanhar os gastos de rotina.</p>`,
  form,
  sections: [
    { h2: 'Como calculamos o custo do primeiro ano', html: '<p class="formula">total = gastos de chegada + gastos de saúde do ano + (gastos mensais × 12)</p><p>A média mensal é o total dividido por 12. Os itens da lista servem de lembrete; quais se aplicam e quanto custam dependem da espécie, do porte, da cidade e das orientações do veterinário. Não mostramos preços porque eles variam muito e ficariam desatualizados.</p>' },
    { h2: 'Exemplo resolvido', html: '<p>Uma família estima R$ 500 de enxoval, R$ 800 de castração, R$ 300 em vacinas do ano e R$ 150 por mês de ração:</p><ul><li>Gastos de chegada: 500 + 800 = R$ 1.300</li><li>Saúde no ano: R$ 300</li><li>Ração: 150 × 12 = R$ 1.800</li><li>Total: <strong>R$ 3.400 no primeiro ano</strong>, média de cerca de R$ 283 por mês</li></ul><p>Os valores são ilustrativos, não uma pesquisa de preços.</p>' },
    { h2: 'Quando a conta não basta', html: `<ul><li><strong>Doenças e emergências</strong> podem custar mais que o ano inteiro planejado: a reserva mensal ajuda.</li><li><strong>Calendário de vacinas e vermífugos</strong> é definido pelo médico-veterinário; pergunte quantas consultas e doses o primeiro ano vai ter. Sobre a raiva, veja o guia de <a href="${vacina.path}">vacina antirrábica</a>.</li><li><strong>Raças com necessidades especiais</strong> (tosa frequente, problemas de pele, porte gigante) mudam bastante os gastos.</li></ul>` }
  ],
  faqTitle: 'Perguntas frequentes sobre o primeiro ano com o pet',
  faq: [
    { q: 'Quanto custa adotar um cachorro?', a: 'A adoção em ONGs e abrigos costuma ter custo baixo ou uma taxa, mas os gastos de chegada (enxoval, vacinas, castração, consultas) existem em qualquer caso. Some os seus valores na calculadora.' },
    { q: 'O que comprar antes de o pet chegar?', a: 'Potes de água e comida, cama, coleira com identificação, guia, caixa de transporte, ração adequada à idade, brinquedos e, para gatos, caixa de areia e arranhador.' },
    { q: 'O site guarda os valores?', a: 'Não. A conta é feita no seu navegador; os valores aparecem só no endereço da página, para você poder salvar ou compartilhar.' }
  ],
  sources: [],
  sourcesNote: 'Método: soma aritmética dos valores digitados por você. Lista de itens elaborada pela redação; o site não usa nem sugere preços.',
  related: ['gastos', 'agenda', 'guia-vacina']
});
