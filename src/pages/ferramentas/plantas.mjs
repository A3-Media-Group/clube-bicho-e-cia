// Ferramenta: plantas tóxicas para cães e gatos (tabela filtrável, conteúdo estático).
import { toolPage } from '../../templates.mjs';
import { byId } from '../../site.mjs';
import { esc } from '../../html.mjs';
import { PLANTAS, FONTE_PLANTAS } from '../../../data/plantas.mjs';

const emergencia = byId('guia-emergencia');
const label = v => v === 't' ? '<span class="tag tag-t">Tóxica</span>' : v === 'n' ? '<span class="tag tag-n">Não tóxica</span>' : '<span class="tag">Sem classificação</span>';
const toxicas = PLANTAS.filter(p => p.cao === 't' || p.gato === 't').length;

const form = `<div class="calculator rosa"><form data-tool="plantas" novalidate><div class="field"><label for="q">Nome da planta</label><input id="q" name="q" type="search" autocomplete="off" inputmode="search" placeholder="Ex.: lírio, jiboia, babosa"></div><div class="inline-fields"><div class="field"><label for="especie">Espécie</label><select id="especie" name="especie"><option value="">Cão e gato</option><option value="cao">Cachorro</option><option value="gato">Gato</option></select></div><div class="field"><label for="toxicidade">Mostrar</label><select id="toxicidade" name="toxicidade"><option value="">Todas</option><option value="t">Só tóxicas</option><option value="n">Só não tóxicas</option></select></div></div><button class="button" type="submit" data-evento="ferramenta_calculou" data-ferramenta="plantas">Filtrar lista <span aria-hidden="true">↗</span></button></form><div class="result"><p id="plantas-contagem">${PLANTAS.length} plantas na lista.</p></div><p id="result-status" class="visually-hidden" role="status" aria-live="polite"></p></div>`;

const table = `<div class="table-scroll"><table id="tabela-plantas" class="plant-table"><caption class="visually-hidden">Plantas e toxicidade para cães e gatos segundo a ASPCA</caption><thead><tr><th scope="col">Planta</th><th scope="col">Cachorro</th><th scope="col">Gato</th><th scope="col">O que a ficha diz</th></tr></thead><tbody>${PLANTAS.map(p => `<tr data-busca="${esc(`${p.nome} ${p.outros} ${p.cientifico}`)}" data-cao="${p.cao || ''}" data-gato="${p.gato || ''}"><th scope="row">${esc(p.nome)}${p.grave ? ' <span class="tag tag-grave">Emergência</span>' : ''}<small>${p.outros ? esc(p.outros) + ' · ' : ''}<i>${esc(p.cientifico)}</i></small></th><td>${label(p.cao)}</td><td>${label(p.gato)}</td><td>${esc(p.efeito)} <a href="${p.url}" target="_blank" rel="noopener noreferrer">Ficha ASPCA</a></td></tr>`).join('')}</tbody></table></div>`;

export default toolPage({
  id: 'plantas',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Plantas tóxicas para cães e gatos: lista com 36 plantas',
  description: 'Lírio, jiboia, comigo-ninguém-pode, espada-de-são-jorge: veja quais plantas comuns em casa são tóxicas para cães e gatos, com link para a ficha da ASPCA.',
  h1: 'Plantas tóxicas para cães e gatos: consulte antes de levar para casa',
  lead: `Filtre ${PLANTAS.length} plantas comuns em casas brasileiras, ${toxicas} delas tóxicas para cães, gatos ou ambos.`,
  intro: `<div class="callout"><p><strong>O pet mastigou uma planta?</strong> Ligue para a clínica veterinária e leve um pedaço da planta. Gato e lírio é emergência. Veja <a href="${emergencia.path}">o que fazer se o pet comeu algo perigoso</a>.</p></div>`,
  form,
  sections: [
    { h2: 'Lista de plantas tóxicas e não tóxicas', html: `${table}<p class="help">Fonte: base de plantas da ASPCA. Quando não encontramos a ficha individual, o link leva à lista geral da ASPCA onde a planta aparece.</p>` },
    { h2: 'Como montamos a lista', html: `<p>Escolhemos plantas comuns em apartamentos, quintais e floriculturas no Brasil e conferimos a classificação de cada uma na base de plantas tóxicas e não tóxicas da ASPCA, organização americana que mantém um centro de controle de intoxicações de animais. O texto de cada planta é um resumo da ficha, com o link para conferir. Não reproduzimos a base da ASPCA, que tem centenas de espécies.</p><p>“Não tóxica” quer dizer que a planta não tem uma toxina conhecida para a espécie; mesmo assim, a ASPCA lembra que comer qualquer planta pode causar vômito ou desconforto no estômago.</p>` },
    { h2: 'Exemplo: espada-de-são-jorge e clorofito', html: '<p>Ao digitar “espada”, a lista mostra a espada-de-são-jorge como <strong>tóxica</strong> para cães e gatos (contém saponinas, que causam náusea, vômito e diarreia). Para quem quer uma planta parecida em vaso, o clorofito (gravatinha) aparece como <strong>não tóxico</strong> para as duas espécies.</p>' },
    { h2: 'Quando a lista não basta', html: '<ul><li><strong>A planta não está na lista</strong> ou você não tem certeza do nome: na dúvida, mantenha fora do alcance e pergunte ao veterinário ou à floricultura o nome científico.</li><li><strong>Nomes populares mudam</strong> de região para região; confira o nome científico.</li><li><strong>Vasos com adubo, inseticida ou fertilizante</strong> trazem outros riscos, mesmo com plantas não tóxicas.</li><li><strong>O animal já comeu</strong>: a lista não avalia gravidade; ligue para a clínica.</li></ul>' }
  ],
  faqTitle: 'Perguntas frequentes sobre plantas e pets',
  faq: [
    { q: 'Qual planta é mais perigosa para gatos?', a: 'Os lírios do gênero Lilium. Segundo a ASPCA, todas as partes são tóxicas para gatos, e pequenas quantidades podem causar lesão grave nos rins.' },
    { q: 'Espada-de-são-jorge é tóxica para cachorro?', a: 'Sim. A ASPCA a classifica como tóxica para cães e gatos; costuma causar náusea, vômito e diarreia.' },
    { q: 'Quais plantas posso ter em casa com gato?', a: 'Na lista, aparecem como não tóxicas: samambaia-americana, palmeira-areca, palmeira-de-salão, orquídea-borboleta, clorofito, violeta-africana, bromélia, peperômia, hibisco, girassol, alecrim e manjericão.' },
    { q: 'Jiboia faz mal para cachorro?', a: 'A jiboia tem oxalato de cálcio e consta como tóxica para cães e gatos. Em geral causa irritação na boca e no estômago, mas qualquer ingestão deve ser comunicada ao veterinário.' }
  ],
  sources: [FONTE_PLANTAS, { nome: 'ASPCA — Toxic and Non-Toxic Plant List: Dogs', url: 'https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list' }, { nome: 'ASPCA — Toxic and Non-Toxic Plant List: Cats', url: 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list' }],
  related: ['guia-emergencia', 'alimentos', 'guia-alimentos']
});
