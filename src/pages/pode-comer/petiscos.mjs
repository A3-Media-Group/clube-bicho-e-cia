// "Pode comer?" — alimentos que pedem cuidado ou podem ser petisco. Texto próprio por página.
import { foodPage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const consulta = byId('alimentos').path;
const racaoGuia = byId('guia-racao').path;
const calc = byId('racao').path;
const ASPCA = { nome: 'ASPCA — People Foods to Avoid Feeding Your Pets', url: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets' };
const ASPCA_P = { nome: 'ASPCA — Sharing is Caring: Foods You Can Safely Share with Your Pet', url: 'https://www.aspca.org/news/sharing-caring-foods-you-can-safely-share-your-pet' };
const AKC_FV = { nome: 'AKC — Fruits and Vegetables Dogs Can or Can’t Eat', url: 'https://www.akc.org/expert-advice/nutrition/fruits-vegetables-dogs-can-and-cant-eat/' };
const AKC_HF = { nome: 'AKC — Which Human Foods Can Dogs Eat and Which Are Dangerous?', url: 'https://www.akc.org/expert-advice/nutrition/human-foods-dogs-can-and-cant-eat/' };
const AKC_ARROZ = { nome: 'AKC — Can Dogs Eat Rice?', url: 'https://www.akc.org/expert-advice/nutrition/can-dogs-eat-rice/' };
const base = { updated: '2026-10-13', consulted: '2026-10-12' };

const petisco = `<p>Petiscos somam calorias: desconte da ração do dia. O guia <a href="${racaoGuia}">quanto de ração dar</a> explica como.</p>`;
const vet = '<p>Procure o veterinário se aparecerem vômito, diarreia que não passa, barriga inchada, apatia ou falta de apetite. Antes de incluir alimentos novos na rotina de cães com doença crônica, alergia, diabetes ou dieta especial, pergunte ao profissional.</p>';

export default [
  foodPage({ ...base, id: 'pc-gato-pode-tomar-leite', verdict: 'cuidado', photo: 'cat',
    title: 'Gato pode tomar leite? Por que não é indicado',
    description: 'Gato pode tomar leite? Apesar da fama, a maioria dos gatos adultos digere mal a lactose e tem diarreia. Veja o motivo e como oferecer água e petiscos.',
    quick: '<p><strong>Não é indicado.</strong> Segundo a ASPCA, gatos adultos produzem pouca lactase, a enzima que digere o açúcar do leite. Por isso leite e derivados costumam causar diarreia e desconforto. A bebida do gato é água fresca.</p>',
    sections: [
      { h2: 'Por que o leite faz mal a muitos gatos', html: '<p>Filhotes mamam o leite da mãe, mas, depois do desmame, a produção de lactase cai. Sem ela, a lactose chega ao intestino sem ser digerida e causa gases e diarreia. Creme de leite, sorvete, requeijão e queijos também têm lactose e gordura.</p><p>Gatos são carnívoros estritos, segundo o Cornell Feline Health Center: os nutrientes de que precisam vêm da ração completa, não do leite.</p>' },
      { h2: 'E os filhotes órfãos?', html: '<p>Leite de vaca não substitui o leite materno. Filhotes órfãos precisam de sucedâneo próprio para gatos, indicado pelo veterinário.</p>' },
      { h2: 'Como ajudar o gato a beber água', html: '<ul><li>Troque a água todos os dias e lave o pote.</li><li>Espalhe mais de um pote pela casa, longe da caixa de areia e da comida.</li><li>Fontes de água corrente agradam alguns gatos.</li><li>Se o veterinário indicar, parte da dieta pode ser úmida.</li></ul>' },
      { h2: 'Quando procurar o veterinário', html: '<p>Diarreia que dura mais de um dia, vômito, sangue nas fezes, apatia ou falta de apetite merecem consulta. Muita sede de repente também.</p>' }
    ],
    faqTitle: 'Perguntas frequentes sobre gatos e leite',
    faq: [
      { q: 'Leite sem lactose pode?', a: 'Não é necessário na dieta do gato e ainda tem gordura e calorias. Converse com o veterinário antes de oferecer.' },
      { q: 'Gato pode comer queijo?', a: `Também tem lactose e gordura; não é indicado. Veja a <a href="${consulta}">consulta de alimentos</a>.` }
    ],
    sources: [ASPCA, { nome: 'Cornell Feline Health Center — Feeding Your Cat', url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat' }],
    related: ['alimentos', 'pc-gato-pode-comer-cebola-e-alho', 'guia-alimentos'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-queijo', verdict: 'cuidado',
    title: 'Cachorro pode comer queijo? Só pouco e dos mais magros',
    description: 'Cachorro pode comer queijo? Pedacinhos costumam ser tolerados, mas queijo tem gordura e lactose. Veja quais tipos evitar e quando não oferecer.',
    quick: '<p><strong>Com cuidado.</strong> O AKC considera o queijo aceitável em pequena quantidade, de preferência os mais magros, como muçarela ou cottage. Mas muitos queijos são gordurosos e têm lactose, e a ASPCA lembra que leite e derivados costumam causar diarreia.</p>',
    sections: [
      { h2: 'Quando o queijo pode e quando não pode', html: '<ul><li><strong>Pode:</strong> um pedacinho de queijo magro, sem tempero, de vez em quando, para um cão saudável.</li><li><strong>Evite:</strong> queijos muito gordurosos ou salgados, temperados com alho, cebola ou ervas, e pratos com queijo derretido.</li><li><strong>Não ofereça</strong> sem falar com o veterinário a cães com pancreatite, obesidade, problemas renais ou intolerância à lactose.</li></ul>' },
      { h2: 'Como oferecer', html: `<p>Use o queijo como recompensa ocasional, em pedaços pequenos. Alguns tutores usam para esconder comprimidos: faça isso só com orientação do veterinário, porque alguns remédios não podem ser dados com alimentos gordurosos.</p>${petisco}` },
      { h2: 'Sinais de alerta', html: vet }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e queijo',
    faq: [
      { q: 'Requeijão pode?', a: 'Tem gordura e lactose; não é um bom petisco.' },
      { q: 'Pão de queijo pode?', a: 'Não é indicado: tem gordura, sal e às vezes temperos.' }
    ],
    sources: [AKC_HF, ASPCA], related: ['alimentos', 'pc-cachorro-pode-comer-ovo', 'guia-racao'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-ovo', verdict: 'seguro',
    title: 'Cachorro pode comer ovo? Cozido sim, cru não',
    description: 'Cachorro pode comer ovo cozido, sem sal e sem tempero, como fonte de proteína. Ovo cru não: pode ter Salmonella e atrapalhar a absorção de biotina.',
    quick: '<p><strong>Cozido, sim.</strong> Segundo o AKC, ovos bem cozidos são seguros e são fonte de proteína. <strong>Cru, não:</strong> a ASPCA alerta para o risco de Salmonella e E. coli, e a clara crua atrapalha o aproveitamento da biotina, uma vitamina do complexo B.</p>',
    sections: [
      { h2: 'Como oferecer ovo ao cachorro', html: `<ul><li>Cozido na água ou mexido sem óleo, manteiga, sal ou tempero.</li><li>Em pedaços, frio, como petisco ou misturado à ração.</li><li>Comece com pouco para ver como o intestino reage.</li></ul>${petisco}` },
      { h2: 'Por que não dar ovo cru', html: '<p>Ovos crus podem carregar bactérias que deixam o cão doente e também contaminam as pessoas que lidam com o pote e as fezes. A clara crua tem uma proteína que se liga à biotina e dificulta a absorção dessa vitamina.</p>' },
      { h2: 'Quando evitar', html: `<p>Cães com alergia alimentar, problemas no pâncreas ou dieta prescrita precisam de orientação antes. ${vet}</p>` }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e ovo',
    faq: [
      { q: 'A casca do ovo pode?', a: 'As fontes consultadas não tratam da casca. Não ofereça sem orientação do veterinário.' },
      { q: 'Ovo frito pode?', a: 'Não é indicado: óleo, manteiga e sal fazem mal.' }
    ],
    sources: [AKC_HF, ASPCA], related: ['alimentos', 'pc-cachorro-pode-comer-arroz', 'guia-racao'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-arroz', verdict: 'seguro',
    title: 'Cachorro pode comer arroz? Branco, cozido e sem tempero',
    description: 'Cachorro pode comer arroz branco cozido só em água, sem sal ou tempero. Veja quando ele ajuda, por que não é dieta completa e o cuidado com diabetes.',
    quick: '<p><strong>Sim, com preparo.</strong> O AKC considera o arroz branco cozido em água, sem óleo, sal ou temperos, aceitável para cães. É fácil de digerir, mas é rico em carboidratos e não é uma dieta completa.</p>',
    sections: [
      { h2: 'Arroz branco ou integral?', html: '<p>O AKC explica que o arroz branco é o mais usado em dietas leves, por ser fácil de digerir e ter pouca fibra. Já o arroz branco tem índice glicêmico mais alto: cães com diabetes só devem comer com orientação do veterinário.</p>' },
      { h2: 'Como oferecer', html: `<ul><li>Cozido só em água, sem sal, alho, cebola, óleo ou manteiga.</li><li>Em pequena quantidade, misturado à ração, sem substituí-la.</li><li>Não use arroz temperado da panela da família.</li></ul><p>Dietas caseiras completas precisam ser formuladas por profissional; arroz e carne sozinhos não fornecem todos os nutrientes.</p>${petisco}` },
      { h2: 'E quando o cão está com diarreia?', html: '<p>Dietas leves com arroz são usadas por veterinários em alguns casos de desconforto intestinal, mas a decisão é do profissional. Diarreia com sangue, vômito, apatia ou que dura mais de um dia pede consulta.</p>' }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e arroz',
    faq: [
      { q: 'Posso dar arroz com feijão?', a: 'O feijão temperado tem alho, cebola e sal. Não ofereça a comida da família.' },
      { q: 'Quanto arroz posso dar?', a: `Pouco, como complemento. A base deve ser a ração completa; use a <a href="${calc}">calculadora de ração</a> e desconte os extras.` }
    ],
    sources: [AKC_ARROZ], related: ['racao', 'pc-cachorro-pode-comer-ovo', 'guia-racao'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-banana', verdict: 'seguro',
    title: 'Cachorro pode comer banana? Sim, como petisco',
    description: 'Cachorro pode comer banana sem casca, em pedaços e de vez em quando: é um petisco citado pela ASPCA e pelo AKC, mas tem muito açúcar. Veja como oferecer.',
    quick: '<p><strong>Sim, como petisco ocasional.</strong> A ASPCA e o AKC listam a banana entre as frutas que podem ser compartilhadas com o cão. Por ter bastante açúcar, ela deve ser um agrado, não parte fixa da dieta.</p>',
    sections: [
      { h2: 'Como oferecer banana ao cachorro', html: `<ul><li>Sem casca, cortada em rodelas ou amassada.</li><li>Em pouca quantidade, para não sobrar calorias.</li><li>Congelada em pedacinhos pode ser um petisco refrescante.</li><li>Evite bananada, banana frita ou com açúcar, canela e mel.</li></ul>${petisco}` },
      { h2: 'Quando evitar', html: `<p>Cães acima do peso ou com diabetes precisam de orientação, por causa do açúcar. ${vet}</p>` }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e banana',
    faq: [
      { q: 'A casca da banana faz mal?', a: 'É difícil de digerir e não deve ser oferecida.' },
      { q: 'Gato pode comer banana?', a: `Um pedacinho de vez em quando, segundo a lista de petiscos da ASPCA. Gatos são carnívoros estritos e não precisam de frutas. Veja a <a href="${consulta}">consulta de alimentos</a>.` }
    ],
    sources: [ASPCA_P, AKC_FV], related: ['alimentos', 'pc-cachorro-pode-comer-maca', 'pc-cachorro-pode-comer-melancia'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-maca', verdict: 'seguro',
    title: 'Cachorro pode comer maçã? Sim, sem sementes',
    description: 'Cachorro pode comer maçã em pedaços, sem sementes e sem miolo: as sementes e outras partes da planta têm compostos que liberam cianeto. Veja como oferecer.',
    quick: '<p><strong>Sim, sem sementes e sem miolo.</strong> A ASPCA e o AKC listam a maçã como petisco possível para cães. Retire as sementes, o miolo e o cabinho: essas partes têm compostos que liberam cianeto.</p>',
    sections: [
      { h2: 'Como oferecer maçã ao cachorro', html: `<ul><li>Lave, tire o miolo, as sementes e o cabinho.</li><li>Corte em pedaços do tamanho da boca do cão, para evitar engasgo.</li><li>Ofereça crua, sem açúcar, canela ou calda.</li></ul>${petisco}` },
      { h2: 'Atenção a maçãs caídas no quintal', html: '<p>A ASPCA alerta que maçãs caídas de árvores podem ser um petisco perigoso, porque o cão come também sementes e outras partes da planta. Recolha os frutos do chão.</p>' },
      { h2: 'Quando evitar', html: vet }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e maçã',
    faq: [
      { q: 'Maçã com casca pode?', a: 'A casca não é tóxica, mas lave bem e corte em pedaços pequenos.' },
      { q: 'Suco de maçã pode?', a: 'Não é necessário e tem muito açúcar, principalmente os industrializados.' }
    ],
    sources: [ASPCA_P, AKC_FV], related: ['alimentos', 'pc-cachorro-pode-comer-banana', 'pc-cachorro-pode-comer-uva'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-melancia', verdict: 'seguro',
    title: 'Cachorro pode comer melancia? Sim, sem sementes',
    description: 'Cachorro pode comer melancia: ofereça só a polpa, sem sementes, que podem obstruir o intestino, e sem a casca. Veja como servir e quando evitar.',
    quick: '<p><strong>Sim, só a polpa.</strong> O AKC lista a melancia entre as frutas seguras para cães, desde que sem as sementes, que podem causar obstrução intestinal, e sem a casca.</p>',
    sections: [
      { h2: 'Como servir melancia ao cachorro', html: `<ul><li>Retire todas as sementes e a casca verde.</li><li>Corte a polpa em cubos pequenos.</li><li>Ofereça em pequena quantidade: é refrescante, mas tem açúcar.</li><li>Cubos congelados podem ser um agrado em dias quentes.</li></ul>${petisco}` },
      { h2: 'Por que tirar sementes e casca', html: '<p>Sementes engolidas em quantidade e pedaços de casca podem não ser digeridos e entupir o intestino, sobretudo em cães pequenos. Se o cão comeu a casca e ficou com vômito, barriga dolorida ou sem fazer cocô, procure o veterinário.</p>' },
      { h2: 'Quando evitar', html: vet }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e melancia',
    faq: [
      { q: 'Melão também pode?', a: `O melão sem casca e sementes aparece na lista de petiscos da ASPCA. Confira na <a href="${consulta}">consulta de alimentos</a>.` },
      { q: 'Picolé de melancia pode?', a: 'Os industrializados têm açúcar e às vezes adoçantes como o xilitol, perigoso para cães. Prefira a fruta pura congelada.' }
    ],
    sources: [AKC_FV], related: ['alimentos', 'pc-cachorro-pode-comer-banana', 'pc-cachorro-pode-comer-abacate'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-cenoura', verdict: 'seguro',
    title: 'Cachorro pode comer cenoura? Sim, crua ou cozida',
    description: 'Cachorro pode comer cenoura crua ou cozida, sem tempero e em pedaços: é um petisco de poucas calorias citado pela ASPCA e pelo AKC. Veja como oferecer.',
    quick: '<p><strong>Sim.</strong> A ASPCA e o AKC citam a cenoura entre os vegetais que podem ser oferecidos a cães. Crua ou cozida, sem sal ou tempero e em pedaços, é um petisco de poucas calorias.</p>',
    sections: [
      { h2: 'Como oferecer cenoura', html: `<ul><li>Lave e corte em palitos ou rodelas proporcionais ao tamanho do cão.</li><li>Cães pequenos e filhotes: rale ou cozinhe para evitar engasgo.</li><li>Sem manteiga, sal, açúcar ou temperos.</li></ul>${petisco}` },
      { h2: 'Um bom petisco para quem precisa controlar o peso', html: '<p>A ASPCA cita cenouras pequenas como opção de lanche para cães em controle de peso, por terem poucas calorias. Ainda assim, todo petisco entra na conta do dia; se o cão está em plano de emagrecimento, siga as orientações do veterinário.</p>' },
      { h2: 'Quando evitar', html: vet }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e cenoura',
    faq: [
      { q: 'Gato pode comer cenoura?', a: 'Cozida e sem tempero, em pedacinhos, como petisco eventual. Gatos não precisam de vegetais.' },
      { q: 'Bolo de cenoura pode?', a: 'Não: tem açúcar, gordura e, às vezes, cobertura de chocolate.' }
    ],
    sources: [ASPCA_P, AKC_FV, { nome: 'ASPCA — Healthy, Safe Snacks to Help Your Pet Slim Down', url: 'https://www.aspca.org/news/healthy-safe-snacks-help-your-pet-slim-down' }],
    related: ['alimentos', 'pc-cachorro-pode-comer-maca', 'guia-peso'] }),

  foodPage({ ...base, id: 'pc-cachorro-pode-comer-pipoca', verdict: 'seguro',
    title: 'Cachorro pode comer pipoca? Só sem sal e sem manteiga',
    description: 'Cachorro pode comer pipoca estourada sem óleo, sal ou manteiga, em pouca quantidade. Grãos que não estouraram podem engasgar. Veja quando evitar.',
    quick: '<p><strong>Só a pipoca simples.</strong> A ASPCA e o AKC aceitam pipoca estourada sem óleo, sal ou manteiga, em pequena quantidade. Grãos que não estouraram podem engasgar ou ficar presos nos dentes.</p>',
    sections: [
      { h2: 'Como oferecer pipoca', html: `<ul><li>Estoure no micro-ondas ou na pipoqueira sem óleo, ou separe uma porção antes de temperar.</li><li>Retire os grãos que não estouraram.</li><li>Ofereça poucas unidades.</li></ul>${petisco}` },
      { h2: 'Pipocas que não podem', html: '<ul><li>Pipoca de micro-ondas pronta, com gordura e sal.</li><li>Pipoca com manteiga, queijo ou bacon.</li><li>Pipoca doce, caramelada ou com chocolate.</li></ul><p>Sal em excesso e gordura fazem mal, e o chocolate é tóxico.</p>' },
      { h2: 'Quando evitar', html: vet }
    ],
    faqTitle: 'Perguntas frequentes sobre cachorro e pipoca',
    faq: [
      { q: 'Milho cozido pode?', a: `Os grãos cozidos, sem sal ou manteiga, sim; o sabugo, nunca, porque pode obstruir o intestino. Veja na <a href="${consulta}">consulta de alimentos</a>.` },
      { q: 'Gato pode comer pipoca?', a: 'Um pouquinho, sem sal, óleo ou manteiga e sem grãos duros, segundo a lista de petiscos da ASPCA.' }
    ],
    sources: [ASPCA_P, AKC_HF], related: ['alimentos', 'pc-cachorro-pode-comer-chocolate', 'pc-cachorro-pode-comer-cenoura'] })
];
