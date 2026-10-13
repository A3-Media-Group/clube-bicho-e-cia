// "Pode comer?" — alimentos perigosos. Cada página tem texto próprio, escrito a partir das fontes citadas.
import { foodPage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const consulta = byId('alimentos').path;
const emergencia = byId('guia-emergencia').path;
const guia = byId('guia-alimentos').path;
const ASPCA = { nome: 'ASPCA — People Foods to Avoid Feeding Your Pets', url: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets' };
const AKC_FV = { nome: 'AKC — Fruits and Vegetables Dogs Can or Can’t Eat', url: 'https://www.akc.org/expert-advice/nutrition/fruits-vegetables-dogs-can-and-cant-eat/' };
const base = { updated: '2026-10-13', consulted: '2026-10-12' };

const comeu = `<ol><li>Afaste o animal e guarde a embalagem.</li><li>Ligue agora para a clínica veterinária ou um atendimento 24 horas, mesmo sem sintomas.</li><li>Diga o que, quanto e quando ele comeu e o peso aproximado.</li><li><strong>Não induza vômito</strong> nem dê receitas caseiras sem orientação.</li></ol><p>Veja o passo a passo completo em <a href="${emergencia}">meu pet comeu algo perigoso</a>.</p>`;

export default [
  foodPage({ ...base, id: 'pc-cachorro-pode-comer-chocolate', verdict: 'perigoso',
    title: 'Cachorro pode comer chocolate? Não; veja o motivo',
    description: 'Cachorro não pode comer chocolate: ele tem teobromina e cafeína, que causam vômito, tremores e alterações no coração. Veja o que fazer se ele comeu.',
    quick: '<p><strong>Não.</strong> Chocolate contém metilxantinas, como a teobromina e a cafeína, que podem causar vômito, diarreia, agitação, tremores, convulsões e alterações no ritmo do coração. Chocolate amargo, meio amargo e cacau em pó são os mais perigosos.</p>',
    sections: [
      { h2: 'Por que o chocolate faz mal ao cachorro', html: '<p>Segundo a ASPCA, as metilxantinas do cacau afetam o sistema nervoso e o coração dos animais. Quanto mais escuro o chocolate, maior a concentração, por isso o cacau em pó e os chocolates para culinária preocupam mais que o chocolate ao leite. Mesmo o chocolate branco e os doces com chocolate não são petiscos para cães: têm muito açúcar e gordura.</p><p>Não informamos uma quantidade “segura”: o risco depende do tipo de chocolate, do tamanho do cão e da sensibilidade de cada animal, e quem avalia é o veterinário.</p>' },
      { h2: 'Onde o chocolate se esconde', html: '<ul><li>Ovos de Páscoa, bombons e caixas de presente deixadas ao alcance.</li><li>Brigadeiro, bolos, biscoitos e achocolatados.</li><li>Cacau em pó e chocolate para receitas no armário baixo.</li><li>Bolsas e mochilas no chão.</li></ul>' },
      { h2: 'Sinais de alerta e o que fazer se ele comeu', html: `<p>Agitação, sede, vômito, diarreia, respiração rápida, tremores e coração acelerado podem aparecer horas depois. Não espere os sinais:</p>${comeu}` }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e chocolate',
    faq: [
      { q: 'Um pedacinho de chocolate faz mal?', a: 'Pode fazer, dependendo do tipo e do tamanho do cão. Ligue para a clínica e informe o tipo e a quantidade.' },
      { q: 'Existe chocolate para cachorro?', a: 'Alguns petiscos vendidos como “chocolate para cães” são feitos sem cacau. Leia o rótulo: o que importa é não conter cacau nem xilitol.' },
      { q: 'Gato pode comer chocolate?', a: 'Também não. A ASPCA inclui chocolate entre os alimentos a evitar para todos os pets.' }
    ],
    sources: [ASPCA], related: ['alimentos', 'guia-emergencia', 'pc-cachorro-pode-comer-uva'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-uva', verdict: 'perigoso',
    title: 'Cachorro pode comer uva? Não, nem uva-passa',
    description: 'Cachorro não pode comer uva nem uva-passa: elas podem lesar os rins e não há quantidade segura conhecida. Veja onde as passas aparecem e o que fazer.',
    quick: '<p><strong>Não.</strong> Uvas e uvas-passas podem causar lesão nos rins de cães. A causa exata ainda é estudada e não existe uma quantidade considerada segura, por isso a orientação é não oferecer nenhuma.</p>',
    sections: [
      { h2: 'Por que a uva é perigosa para cães', html: '<p>A ASPCA e o AKC colocam uvas e passas entre os alimentos mais perigosos para cães. Como a substância responsável ainda não foi identificada com certeza e não há quantidade segura conhecida, nenhuma quantidade é recomendada. Uva verde, roxa, com ou sem semente e suco de uva entram na mesma regra.</p>' },
      { h2: 'Atenção às passas escondidas', html: '<ul><li>Panetone, bolos de frutas e cucas.</li><li>Granolas, barras de cereal e mix de castanhas.</li><li>Farofas e arroz de festa.</li><li>Pães doces e biscoitos.</li></ul><p>Em festas de fim de ano, mantenha o cão longe da mesa e combine com as visitas que ele não deve ganhar comida.</p>' },
      { h2: 'Se o cachorro comeu uva ou passa', html: `<p>Vômito, diarreia, falta de apetite e apatia podem aparecer, mas a ausência de sinais não significa que está tudo bem.</p>${comeu}` }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e uva',
    faq: [
      { q: 'Uma uva só faz mal?', a: 'Não há quantidade considerada segura. Ligue para a clínica mesmo que tenha sido pouca.' },
      { q: 'E gato pode comer uva?', a: 'A ASPCA recomenda não oferecer uvas nem passas a nenhum pet; os casos de lesão renal descritos são em cães.' },
      { q: 'Quais frutas posso dar no lugar?', a: `Maçã sem sementes, banana e mirtilo aparecem como petiscos possíveis. Confira na <a href="${consulta}">consulta de alimentos</a>.` }
    ],
    sources: [ASPCA, AKC_FV], related: ['alimentos', 'guia-emergencia', 'pc-cachorro-pode-comer-maca'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-abacate', verdict: 'perigoso',
    title: 'Cachorro pode comer abacate? Não é recomendado',
    description: 'Cachorro não deve comer abacate: caroço, casca e folhas têm persina, que causa vômito e diarreia, e o caroço pode engasgar ou obstruir o intestino.',
    quick: '<p><strong>Não é recomendado.</strong> Segundo o AKC, caroço, casca e folhas do abacate contêm persina, uma substância que costuma causar vômito e diarreia em cães. O caroço grande também pode engasgar ou entupir o intestino.</p>',
    sections: [
      { h2: 'O que torna o abacate um problema', html: '<p>A persina está concentrada nas partes que o cão costuma roubar do lixo ou do quintal: o caroço, a casca e as folhas. A ASPCA lembra que o abacate é ainda mais perigoso para aves, coelhos e animais de fazenda. Guacamole e pastas prontas têm outro risco: costumam levar cebola, alho e sal.</p>' },
      { h2: 'Cuidados em casa', html: '<ul><li>Jogue o caroço e a casca em lixeira com tampa.</li><li>Se você tem abacateiro no quintal, recolha os frutos caídos.</li><li>Não ofereça guacamole nem torradas com pasta de abacate.</li></ul>' },
      { h2: 'Se o cachorro comeu abacate', html: `<p>Se ele engoliu o caroço ou comeu bastante casca, ou se aparecerem vômito, barriga inchada, dor ou falta de apetite, procure o veterinário. Na dúvida, ligue para a clínica.</p>${comeu}` }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e abacate',
    faq: [
      { q: 'A polpa do abacate faz mal?', a: 'A persina se concentra no caroço, na casca e nas folhas, mas o AKC não recomenda oferecer abacate. Há petiscos melhores.' },
      { q: 'Óleo de abacate em ração faz mal?', a: 'Pergunte ao fabricante e ao veterinário; este guia trata do fruto e das partes da planta.' }
    ],
    sources: [AKC_FV, ASPCA], related: ['alimentos', 'guia-alimentos', 'pc-cachorro-pode-comer-melancia'] }),

  foodPage({ ...base, id: 'pc-gato-pode-comer-cebola-e-alho', verdict: 'perigoso', photo: 'cat',
    title: 'Gato pode comer cebola e alho? Não, nem em tempero',
    description: 'Gato não pode comer cebola, alho, cebolinha ou alho-poró: eles podem lesar os glóbulos vermelhos e causar anemia, e gatos são mais sensíveis que cães.',
    quick: '<p><strong>Não.</strong> Cebola, alho, cebolinha e alho-poró fazem parte da família Allium, que pode irritar o estômago e danificar os glóbulos vermelhos, levando a anemia. Segundo a ASPCA, gatos são ainda mais sensíveis que cães. Vale para as versões crua, cozida, frita e em pó.</p>',
    sections: [
      { h2: 'Por que cebola e alho fazem mal aos gatos', html: '<p>Os compostos da família Allium danificam as células vermelhas do sangue, que levam oxigênio ao corpo. Por isso a ingestão deve ser comunicada ao veterinário mesmo que o gato pareça bem. Temperos em pó e caldos prontos são concentrados, o que aumenta o risco.</p>' },
      { h2: 'Onde estão escondidos', html: '<ul><li>Sobras de comida temperada: carne, frango, arroz, feijão.</li><li>Molhos, caldos em cubo, sopas e papinhas de bebê.</li><li>Patês e frios temperados.</li><li>Petiscos caseiros feitos com receitas humanas.</li></ul><p>Por isso, mesmo carne cozida só serve como petisco se for preparada sem tempero.</p>' },
      { h2: 'Sinais de alerta e o que fazer', html: `<p>Vômito, diarreia, apatia, fraqueza, gengivas pálidas ou respiração rápida merecem atendimento.</p>${comeu}` }
    ],
    faqTitle: 'Perguntas frequentes sobre gatos, cebola e alho',
    faq: [
      { q: 'Um pouco de comida temperada faz mal?', a: 'Pode fazer, porque o efeito se acumula. Evite qualquer comida com cebola ou alho e ligue para a clínica se ele comeu.' },
      { q: 'E para cachorro?', a: `Também é perigoso. Veja a <a href="${consulta}">consulta de alimentos</a>.` }
    ],
    sources: [ASPCA], related: ['alimentos', 'pc-gato-pode-tomar-leite', 'guia-emergencia'] })
];
