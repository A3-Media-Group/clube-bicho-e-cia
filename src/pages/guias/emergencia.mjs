// Guia: meu pet comeu algo perigoso.
import { guidePage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const alimentos = byId('alimentos');
const plantas = byId('plantas');
const guiaAlimentos = byId('guia-alimentos');

export default guidePage({
  id: 'guia-emergencia',
  published: '2026-10-13',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Meu pet comeu algo perigoso: o que fazer agora',
  description: 'O cachorro ou o gato comeu chocolate, uva, remédio ou planta tóxica? Veja os passos para agir rápido e com calma e o que não fazer antes do veterinário.',
  h1: 'Meu pet comeu algo perigoso: o que fazer agora',
  lead: 'Passos simples para agir rápido e com calma quando o cachorro ou o gato come algo que pode fazer mal.',
  photoAlt: 'Golden retriever sorridente olhando para a câmera',
  quick: `<p><strong>1.</strong> Afaste o animal do produto. <strong>2.</strong> Ligue agora para a clínica veterinária ou um atendimento de emergência, mesmo que ele pareça bem. <strong>3.</strong> Conte o que, quanto e quando ele comeu. <strong>4.</strong> Leve a embalagem ou um pedaço da planta. <strong>Não induza vômito</strong> nem dê leite, óleo ou receitas caseiras sem orientação do veterinário.</p>`,
  sections: [
    { h2: 'Passo a passo nos primeiros minutos', html: `<ol><li><strong>Respire e afaste o animal</strong> do produto, sem colocar a mão na boca dele se ele estiver assustado.</li><li><strong>Junte as informações:</strong> o que ele comeu (nome, marca, ingredientes), a quantidade aproximada que sumiu, há quanto tempo, o peso aproximado do pet e se ele já apresenta algum sinal.</li><li><strong>Ligue para a clínica veterinária</strong> que acompanha o animal ou para um hospital veterinário 24 horas. Diga que é uma possível intoxicação.</li><li><strong>Siga a orientação recebida.</strong> Em muitos casos a equipe pede para levar o animal imediatamente.</li><li><strong>Leve a embalagem</strong>, a bula do remédio ou um pedaço da planta, em um saco plástico. Isso ajuda a identificar a substância.</li><li><strong>Transporte com segurança:</strong> gatos e cães pequenos em caixa de transporte; cães maiores com guia. Se possível, outra pessoa dirige.</li></ol><p>Vale a pena deixar salvo no celular, hoje, o telefone da sua clínica e de um atendimento veterinário 24 horas perto de casa.</p>` },
    { h2: 'O que não fazer', html: `<div class="callout"><p>Não induza vômito por conta própria. Dependendo do produto, o vômito pode causar lesões ou aspiração para os pulmões.</p></div><ul><li>Não dê sal, água oxigenada, leite, óleo, carvão ou qualquer receita caseira sem orientação do veterinário.</li><li>Não espere aparecerem sintomas: alguns venenos demoram horas para mostrar sinais e o tratamento funciona melhor cedo.</li><li>Não medique o animal com remédios de uso humano.</li><li>Não procure “a dose que faz mal” na internet para decidir se vale ir ao veterinário: a tolerância varia de animal para animal.</li></ul>` },
    { h2: 'Sinais que pedem atendimento imediato', html: '<p>Qualquer um destes sinais, depois de uma possível ingestão, é motivo para ir direto ao atendimento: vômito ou diarreia repetidos, salivação intensa, tremores, convulsão, fraqueza ou dificuldade para ficar em pé, respiração difícil, gengivas muito pálidas, agitação extrema, apatia ou desmaio. A ausência de sinais <strong>não</strong> significa que o perigo passou.</p>' },
    { h2: 'O que costuma causar intoxicação em casa', html: `<ul><li><strong>Alimentos:</strong> chocolate, café, uva e passas, cebola e alho, xilitol (em chicletes e produtos “sem açúcar”), bebidas alcoólicas e massa crua com fermento. Confira na <a href="${alimentos.path}">consulta de alimentos proibidos</a>.</li><li><strong>Plantas:</strong> lírios (muito perigosos para gatos), cica, azaleia, espirradeira, comigo-ninguém-pode e outras. Veja a lista de <a href="${plantas.path}">plantas tóxicas para cães e gatos</a>.</li><li><strong>Remédios de uso humano</strong>, que nunca devem ser dados sem prescrição veterinária.</li><li><strong>Produtos de limpeza, inseticidas, raticidas</strong> e antipulgas de uma espécie usado na outra.</li></ul>` },
    { h2: 'Como prevenir', html: `<ul><li>Guarde remédios, produtos de limpeza e venenos em armários altos e fechados.</li><li>Não deixe bolsas e mochilas no chão.</li><li>Use lixeira com tampa e retire restos de comida da mesa.</li><li>Antes de trazer uma planta para casa, confira se ela é tóxica.</li><li>Use antipulgas e vermífugos apenas na espécie e na forma indicadas pelo veterinário.</li></ul><p>O guia de <a href="${guiaAlimentos.path}">alimentos perigosos para cães e gatos</a> traz mais dicas de prevenção na cozinha.</p>` }
  ],
  faqTitle: 'Perguntas frequentes sobre intoxicação em pets',
  faq: [
    { q: 'Devo fazer o cachorro vomitar?', a: 'Não por conta própria. O veterinário avalia se o vômito ajuda ou piora o caso e, quando indicado, faz isso com segurança.' },
    { q: 'Meu cachorro comeu chocolate e está bem. Preciso ir ao veterinário?', a: 'Ligue para a clínica mesmo assim. Os sinais podem demorar a aparecer e o risco depende do tipo de chocolate, da quantidade e do tamanho do animal.' },
    { q: 'Meu gato mordeu um lírio. É grave?', a: 'Sim, trate como emergência. Segundo a ASPCA, todas as partes do lírio são tóxicas para gatos e pequenas quantidades podem lesar os rins.' },
    { q: 'O que levar ao atendimento?', a: 'A embalagem, a bula ou um pedaço da planta, e as informações de quanto e quando o animal comeu.' }
  ],
  sources: [
    { nome: 'ASPCA — People Foods to Avoid Feeding Your Pets', url: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets' },
    { nome: 'ASPCA — Toxic and Non-Toxic Plants', url: 'https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants' },
    { nome: 'FDA — Paws Off Xylitol; It’s Dangerous for Dogs', url: 'https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs' }
  ],
  related: ['alimentos', 'plantas', 'guia-alimentos']
});
