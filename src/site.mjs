// Registro central de ferramentas, guias e páginas institucionais.
// Usado pelo menu, rodapé, hubs, home e blocos de links relacionados.
export const TOOLS = [
  { id: 'idade', path: '/ferramentas/idade-do-pet-em-anos-humanos/', name: 'Idade do pet em anos humanos', short: 'Idade do pet', icon: '◷', color: 'laranja', photo: 'dog', card: 'Quantos anos de gente tem o seu melhor amigo? Equivalência para cães e gatos.' },
  { id: 'racao', path: '/ferramentas/calculadora-de-racao-para-caes-e-gatos/', name: 'Calculadora de ração para cães e gatos', short: 'Calculadora de ração', icon: '◒', color: 'verde', photo: 'walk', card: 'Estimativa de gramas por dia a partir do peso e das calorias do rótulo.' },
  { id: 'alimentos', path: '/ferramentas/alimentos-proibidos-para-caes-e-gatos/', name: 'Alimentos proibidos para cães e gatos', short: 'Pode comer?', icon: '♡', color: 'rosa', photo: 'cat', card: 'Consulte se um alimento é seguro, pede cuidado ou é perigoso.' },
  { id: 'agenda', path: '/ferramentas/agenda-de-cuidados-do-pet/', name: 'Agenda de cuidados do pet', short: 'Agenda de cuidados', icon: '▦', color: 'azul', photo: 'dog', card: 'Transforme a data combinada com o veterinário em um lembrete.' },
  { id: 'gastos', path: '/ferramentas/custo-mensal-do-pet/', name: 'Custo mensal do pet', short: 'Gastos do pet', icon: '＄', color: 'amarelo', photo: 'walk', card: 'Some os gastos do mês e do ano com os valores que você paga.' },
  { id: 'nomes', path: '/ferramentas/nomes-para-cachorro-e-gato/', name: 'Nomes para cachorro e gato', short: 'Nomes para pets', icon: '✦', color: 'roxo', photo: 'cat', card: 'Encontre um nome com a cara do seu bichinho.' },
  { id: 'condicao', extra: true, path: '/ferramentas/condicao-corporal-do-cachorro/', name: 'Avaliação da condição corporal do cachorro', short: 'Condição corporal', icon: '◎', color: 'verde', photo: 'dog', card: 'Responda sobre costelas, cintura e barriga e veja se o cão parece abaixo, no ou acima do peso.' },
  { id: 'plantas', extra: true, path: '/ferramentas/plantas-toxicas-para-caes-e-gatos/', name: 'Plantas tóxicas para cães e gatos', short: 'Plantas tóxicas', icon: '❀', color: 'rosa', photo: 'cat', card: 'Consulte 36 plantas comuns em casa: tóxicas ou não, com link para a ficha da ASPCA.' },
  { id: 'primeiro-ano', extra: true, path: '/ferramentas/custo-do-primeiro-ano-com-pet/', name: 'Custo do primeiro ano com o pet', short: 'Primeiro ano do pet', icon: '▤', color: 'amarelo', photo: 'walk', card: 'Monte o orçamento de chegada do filhote ou do adotado com os seus valores.' }
];
export const MENU_TOOLS = TOOLS.filter(t => !t.extra);

export const GUIDES = [
  { id: 'guia-vacina', path: '/guias/vacina-antirrabica-para-caes-e-gatos/', name: 'Vacina antirrábica para cães e gatos', short: 'Vacina antirrábica', label: 'SAÚDE', photo: 'dog', card: 'O que conferir na carteirinha e como se preparar para a vacinação.' },
  { id: 'guia-racao', path: '/guias/quanto-de-racao-dar-ao-cachorro-e-ao-gato/', name: 'Quanto de ração dar ao cachorro e ao gato', short: 'Quanto de ração dar', label: 'ALIMENTAÇÃO', photo: 'walk', card: 'Por que a porção começa no rótulo e se ajusta com o veterinário.' },
  { id: 'guia-alimentos', path: '/guias/alimentos-perigosos-para-caes-e-gatos/', name: 'Alimentos perigosos para cães e gatos', short: 'Alimentos perigosos', label: 'SEGURANÇA', photo: 'cat', card: 'Chocolate, uva, cebola, xilitol e o que fazer se o pet comer.' },
  { id: 'guia-peso', path: '/guias/peso-ideal-e-condicao-corporal-do-cachorro/', name: 'Peso ideal e condição corporal do cachorro', short: 'Peso ideal do cachorro', label: 'BEM-ESTAR', photo: 'dog', card: 'Costelas, cintura e abdômen dizem mais que a balança.' },
  { id: 'guia-idade', path: '/guias/idade-de-cachorro-e-gato-em-anos-humanos/', name: 'Idade de cachorro e gato em anos humanos', short: 'Idade em anos humanos', label: 'CURIOSIDADES', photo: 'cat', card: 'Por que multiplicar por sete não funciona e o que as tabelas dizem.' },
  { id: 'guia-emergencia', extra: true, path: '/guias/meu-pet-comeu-algo-perigoso/', name: 'Meu pet comeu algo perigoso: o que fazer', short: 'Pet comeu algo perigoso', label: 'EMERGÊNCIA', photo: 'dog', card: 'Passos calmos para agir rápido: quem chamar, o que levar e o que não fazer.' }
];
export const MENU_GUIDES = GUIDES.filter(g => !g.extra);

export const INSTITUTIONAL = [
  { id: 'sobre', path: '/sobre/', name: 'Sobre e fontes' },
  { id: 'privacidade', path: '/privacidade/', name: 'Privacidade' },
  { id: 'termos', path: '/termos/', name: 'Termos de uso' },
  { id: 'creditos', path: '/creditos/', name: 'Créditos das fotos' }
];

export const HUBS = {
  ferramentas: { path: '/ferramentas/', name: 'Ferramentas' },
  guias: { path: '/guias/', name: 'Guias' },
  podeComer: { path: '/pode-comer/', name: 'Pode comer?' }
};

// Páginas "pode comer?" e listas de nomes se registram aqui (ver src/pages/pode-comer e nomes).
export const NAME_LISTS = [
  { id: 'nomes-cachorro-macho', path: '/ferramentas/nomes-para-cachorro-e-gato/cachorro-macho/', name: 'Nomes para cachorro macho', short: 'Cachorro macho', filtro: { especie: 'cao', sexo: 'm' }, card: 'Nomes para cães machos, de clássicos a divertidos, com filtro por estilo.' },
  { id: 'nomes-cachorro-femea', path: '/ferramentas/nomes-para-cachorro-e-gato/cachorro-femea/', name: 'Nomes para cachorro fêmea', short: 'Cachorro fêmea', filtro: { especie: 'cao', sexo: 'f' }, card: 'Nomes para cadelas, de fofinhos a fortes, com filtro por estilo.' },
  { id: 'nomes-gato', path: '/ferramentas/nomes-para-cachorro-e-gato/gato/', name: 'Nomes para gato', short: 'Gato', filtro: { especie: 'gato' }, card: 'Nomes para gatos e gatas, com filtro por estilo e sexo.' }
];
const food = (slug, name, card) => ({ id: 'pc-' + slug, path: `/pode-comer/${slug}/`, name, short: name, card });
export const FOOD_PAGES = [
  food('cachorro-pode-comer-chocolate', 'Cachorro pode comer chocolate?', 'Não. Veja por que e o que fazer se ele comeu.'),
  food('cachorro-pode-comer-uva', 'Cachorro pode comer uva?', 'Não: uvas e passas podem lesar os rins.'),
  food('cachorro-pode-comer-abacate', 'Cachorro pode comer abacate?', 'Não: caroço, casca e folhas têm persina.'),
  food('gato-pode-comer-cebola-e-alho', 'Gato pode comer cebola e alho?', 'Não: gatos são ainda mais sensíveis que cães.'),
  food('gato-pode-tomar-leite', 'Gato pode tomar leite?', 'Não é indicado: a maioria digere mal a lactose.'),
  food('cachorro-pode-comer-queijo', 'Cachorro pode comer queijo?', 'Só pedacinhos, e não para todos os cães.'),
  food('cachorro-pode-comer-ovo', 'Cachorro pode comer ovo?', 'Cozido, sim; cru, não.'),
  food('cachorro-pode-comer-arroz', 'Cachorro pode comer arroz?', 'Arroz branco cozido e sem tempero, sim.'),
  food('cachorro-pode-comer-banana', 'Cachorro pode comer banana?', 'Sim, como petisco ocasional.'),
  food('cachorro-pode-comer-maca', 'Cachorro pode comer maçã?', 'Sim, sem sementes e sem miolo.'),
  food('cachorro-pode-comer-melancia', 'Cachorro pode comer melancia?', 'Sim, só a polpa, sem sementes e casca.'),
  food('cachorro-pode-comer-cenoura', 'Cachorro pode comer cenoura?', 'Sim: crua ou cozida, sem tempero.'),
  food('cachorro-pode-comer-pipoca', 'Cachorro pode comer pipoca?', 'Só sem sal, óleo ou manteiga.')
];
export const EXTRA = [...NAME_LISTS, ...FOOD_PAGES];
export const registerExtra = item => { EXTRA.push(item); return item; };

const all = () => [...TOOLS, ...GUIDES, ...INSTITUTIONAL, ...EXTRA];
export const byId = id => {
  const item = all().find(x => x.id === id);
  if (!item) throw new Error('Item desconhecido: ' + id);
  return item;
};
