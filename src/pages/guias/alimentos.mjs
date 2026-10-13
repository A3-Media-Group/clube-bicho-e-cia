// Guia: alimentos perigosos.
import { guidePage, foodQuestionsHtml } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const consulta = byId('alimentos');
const racao = byId('guia-racao');

export default guidePage({
  id: 'guia-alimentos',
  published: '2026-09-13',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Alimentos perigosos para cães e gatos: o que evitar',
  description: 'Chocolate, uva, cebola, alho, xilitol e outros alimentos perigosos para cães e gatos: por que fazem mal, como prevenir e o que fazer se o pet comer.',
  h1: 'Alimentos perigosos para cães e gatos: o que evitar e por quê',
  lead: 'Alguns alimentos comuns na cozinha podem intoxicar cães e gatos. Conhecer os principais e guardá-los bem evita a maioria dos acidentes.',
  photoAlt: 'Gato de pelagem rajada deitado, olhando para o lado',
  quick: `<p>Não ofereça <strong>chocolate, café, bebidas alcoólicas, massa crua com fermento, uva, uva-passa, cebola, alho, cebolinha, xilitol e macadâmia</strong>, nem ossos cozidos. Leite, queijo, alimentos gordurosos e muito salgados costumam fazer mal. Se o pet comer algo suspeito, <strong>ligue para a clínica veterinária na hora</strong>, leve a embalagem e não induza vômito sem orientação.</p><p>Para conferir um alimento específico, use a <a href="${consulta.path}">consulta de alimentos proibidos</a> ou veja as <a href="/pode-comer/">respostas por alimento</a>, como <a href="${byId('pc-cachorro-pode-comer-chocolate').path}">cachorro pode comer chocolate</a>.</p>`,
  sections: [
    { h2: 'Os alimentos mais perigosos e o que eles causam', html: `<p>A lista abaixo resume a orientação da ASPCA, organização americana que mantém um centro de controle de intoxicações de animais, e da FDA, a agência de alimentos e medicamentos dos Estados Unidos.</p><ul><li><strong>Chocolate, café e cafeína:</strong> têm metilxantinas, que podem causar vômito, diarreia, agitação, tremores, convulsões e alterações no ritmo do coração. Chocolate amargo e cacau em pó são os mais perigosos.</li><li><strong>Uva e uva-passa:</strong> podem causar lesão nos rins de cães. A causa ainda é estudada e não existe quantidade considerada segura. Atenção a panetones, bolos e granolas.</li><li><strong>Cebola, alho, cebolinha e alho-poró:</strong> podem lesar os glóbulos vermelhos e causar anemia. Gatos são mais sensíveis. Vale para as versões em pó, cozidas e em temperos prontos.</li><li><strong>Xilitol:</strong> adoçante de chicletes, balas e alguns produtos “sem açúcar”, inclusive certas pastas de amendoim. Em cães, pode causar queda rápida da glicose e lesão no fígado.</li><li><strong>Bebidas alcoólicas:</strong> podem causar vômito, falta de coordenação, dificuldade para respirar e, em casos graves, coma.</li><li><strong>Massa crua com fermento:</strong> continua crescendo no estômago e pode causar inchaço grave.</li><li><strong>Macadâmia:</strong> em cães, fraqueza, vômito, tremores e aumento da temperatura.</li><li><strong>Ossos cozidos:</strong> lascam e podem engasgar ou ferir o intestino.</li></ul>` },
    { h2: 'Alimentos que pedem cuidado', html: `<p>Alguns itens não são venenosos na maioria dos casos, mas costumam causar problemas:</p><ul><li><strong>Leite e derivados:</strong> cães e gatos adultos digerem mal a lactose; diarreia é comum.</li><li><strong>Alimentos gordurosos</strong>, como castanhas, frituras e restos de churrasco: podem causar vômito, diarreia e pancreatite.</li><li><strong>Alimentos muito salgados</strong>, como salgadinhos e embutidos.</li><li><strong>Carne crua e ovo cru:</strong> podem transmitir bactérias como Salmonella, inclusive para as pessoas da casa.</li><li><strong>Cascas e sementes de cítricos e caroços de frutas</strong>, como os de cereja e manga.</li></ul><p>Frutas e legumes como cenoura, maçã sem sementes, banana e vagem podem ser petiscos ocasionais, sem tempero. Mesmo assim, petiscos devem ser uma parte pequena da alimentação; o guia <a href="${racao.path}">quanto de ração dar</a> explica por que eles entram na conta.</p>` },
    { h2: 'Se o pet comeu algo perigoso: passo a passo', html: `<div class="callout"><p>Mantenha a calma e aja rápido. Não espere aparecerem sintomas.</p></div><ol><li><strong>Afaste o animal</strong> do alimento e guarde o que sobrou e a embalagem.</li><li><strong>Ligue para a clínica veterinária ou um atendimento de emergência.</strong> Diga a espécie, o peso aproximado, o que ele comeu, quanto e há quanto tempo.</li><li><strong>Não induza vômito</strong> e não dê leite, óleo, sal ou receitas caseiras sem orientação do veterinário. Em alguns casos o vômito piora a situação.</li><li><strong>Siga as instruções</strong> e leve a embalagem ao atendimento.</li></ol>` },
    { h2: 'Como prevenir acidentes em casa', html: `<ul><li>Guarde doces, chocolates, chicletes e temperos em armários fechados.</li><li>Não deixe bolsas e mochilas no chão: costumam ter balas e chicletes.</li><li>Explique a visitas e crianças que o pet não deve receber comida sem autorização.</li><li>Use lixeira com tampa e retire restos de comida da mesa.</li><li>Em festas, mantenha o animal longe da mesa e da churrasqueira.</li><li>Leia o rótulo de produtos “sem açúcar” antes de oferecer qualquer coisa.</li></ul>` },
    { h2: 'Cachorro e gato podem comer? Respostas por alimento', html: `<p>Veja a resposta completa para os alimentos que mais geram dúvida:</p>${foodQuestionsHtml()}` },
    { h2: 'Erros comuns', html: `<ul><li><strong>“Um pouquinho não faz mal.”</strong> Para alguns alimentos, como uva, não se conhece uma quantidade segura.</li><li><strong>Dar leite para gato.</strong> É um hábito antigo, mas costuma causar diarreia.</li><li><strong>Oferecer a comida da família com tempero.</strong> Cebola e alho estão em quase todos os molhos.</li><li><strong>Induzir vômito com sal ou água oxigenada por conta própria.</strong> Pode causar outra intoxicação ou lesões.</li></ul>` },
    { h2: 'Quando procurar o médico-veterinário', html: '<ul><li>Sempre que o pet comer algo da lista de perigosos, mesmo sem sintomas.</li><li>Se houver vômito, diarreia, tremores, apatia, fraqueza, gengivas pálidas, convulsão ou dificuldade para respirar.</li><li>Antes de incluir alimentos novos na dieta de pets com doenças crônicas ou alergias.</li></ul>' }
  ],
  faqTitle: 'Perguntas frequentes sobre alimentos perigosos',
  faq: [
    { q: 'Qual é o alimento mais perigoso para cachorro?', a: 'Não há um único. Chocolate, uva, xilitol, cebola e alho estão entre os que mais preocupam, porque são comuns em casa e podem causar intoxicação grave.' },
    { q: 'Quanto chocolate faz mal a um cachorro?', a: 'Não informamos quantidades: o risco depende do tipo de chocolate, do tamanho do animal e da sensibilidade individual. Se ele comeu chocolate, ligue para a clínica.' },
    { q: 'Gato pode comer cebola ou alho em pouca quantidade?', a: 'Não. Segundo a ASPCA, gatos são ainda mais sensíveis que cães aos alimentos da família da cebola.' },
    { q: 'Posso induzir vômito em casa?', a: 'Não sem orientação do veterinário. Em alguns casos o vômito é perigoso, e métodos caseiros podem causar outros problemas.' },
    { q: 'Onde vejo se um alimento específico é seguro?', a: `Na <a href="${consulta.path}">consulta de alimentos proibidos para cães e gatos</a>, que mostra a classificação, o motivo e a fonte de cada item.` }
  ],
  sources: [
    { nome: 'ASPCA — People Foods to Avoid Feeding Your Pets', url: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets' },
    { nome: 'FDA — Paws Off Xylitol; It’s Dangerous for Dogs', url: 'https://www.fda.gov/consumers/consumer-updates/paws-xylitol-its-dangerous-dogs' },
    { nome: 'ASPCA — Sharing is Caring: Foods You Can Safely Share with Your Pet', url: 'https://www.aspca.org/news/sharing-caring-foods-you-can-safely-share-your-pet' }
  ],
  related: ['alimentos', 'guia-emergencia', 'plantas', 'guia-racao']
});
