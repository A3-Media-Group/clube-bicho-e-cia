// Hub "Pode comer?".
import { FOOD_PAGES, HUBS, byId } from '../../site.mjs';
import { itemList } from '../../components.mjs';
import { esc } from '../../html.mjs';

const consulta = byId('alimentos');
const guia = byId('guia-alimentos');
const grupo = (titulo, ids) => `<h2>${titulo}</h2><ul class="food-q-list">${FOOD_PAGES.filter(f => ids.includes(f.id.replace('pc-', ''))).map(f => `<li><a href="${f.path}"><strong>${esc(f.name)}</strong><span>${esc(f.card)}</span></a></li>`).join('')}</ul>`;

export default {
  id: 'pode-comer',
  path: HUBS.podeComer.path,
  crumbs: [{ name: 'Pode comer?' }],
  updated: '2026-10-13',
  title: 'Cachorro e gato podem comer? Respostas por alimento',
  ogTitle: 'Cachorro e gato podem comer?',
  description: 'Respostas diretas para dúvidas como cachorro pode comer banana, ovo, queijo ou uva e gato pode tomar leite, com o motivo, o preparo e a fonte de cada uma.',
  jsonLd: itemList('Cachorro e gato podem comer?', FOOD_PAGES),
  main: `<section class="wrap section hub"><span class="eyebrow">PODE COMER?</span><h1>Cachorro e gato podem comer? Respostas por alimento</h1><div class="hub-intro"><p class="lead">Respostas diretas para as dúvidas mais comuns sobre o que cães e gatos podem comer, uma página por alimento.</p><p>Cada resposta diz se o alimento pode, pede cuidado ou não deve ser oferecido, explica o motivo, mostra como oferecer quando é seguro e lista os sinais que pedem atendimento. Os textos são escritos pela redação a partir da ASPCA, do AKC e de outras fontes citadas no fim de cada página.</p><p>Não encontrou o alimento? Use a <a href="${consulta.path}">consulta de alimentos proibidos para cães e gatos</a>, com dezenas de itens, ou leia o guia de <a href="${guia.path}">alimentos perigosos</a>. Se o pet já comeu algo suspeito, ligue para a clínica veterinária.</p></div>${grupo('Não ofereça', ['cachorro-pode-comer-chocolate', 'cachorro-pode-comer-uva', 'cachorro-pode-comer-abacate', 'gato-pode-comer-cebola-e-alho'])}${grupo('Com cuidado', ['gato-pode-tomar-leite', 'cachorro-pode-comer-queijo'])}${grupo('Pode, com preparo', ['cachorro-pode-comer-ovo', 'cachorro-pode-comer-arroz', 'cachorro-pode-comer-banana', 'cachorro-pode-comer-maca', 'cachorro-pode-comer-melancia', 'cachorro-pode-comer-cenoura', 'cachorro-pode-comer-pipoca'])}</section>`
};
