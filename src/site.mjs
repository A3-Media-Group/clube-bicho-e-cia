// Registro central de ferramentas, guias e páginas institucionais.
// Usado pelo menu, rodapé, hubs, home e blocos de links relacionados.
export const TOOLS = [
  { id: 'idade', path: '/ferramentas/idade-do-pet-em-anos-humanos/', name: 'Idade do pet em anos humanos', short: 'Idade do pet', icon: '◷', color: 'laranja', photo: 'dog', card: 'Quantos anos de gente tem o seu melhor amigo? Equivalência para cães e gatos.' },
  { id: 'racao', path: '/ferramentas/calculadora-de-racao-para-caes-e-gatos/', name: 'Calculadora de ração para cães e gatos', short: 'Calculadora de ração', icon: '◒', color: 'verde', photo: 'walk', card: 'Estimativa de gramas por dia a partir do peso e das calorias do rótulo.' },
  { id: 'alimentos', path: '/ferramentas/alimentos-proibidos-para-caes-e-gatos/', name: 'Alimentos proibidos para cães e gatos', short: 'Pode comer?', icon: '♡', color: 'rosa', photo: 'cat', card: 'Consulte se um alimento é seguro, pede cuidado ou é perigoso.' },
  { id: 'agenda', path: '/ferramentas/agenda-de-cuidados-do-pet/', name: 'Agenda de cuidados do pet', short: 'Agenda de cuidados', icon: '▦', color: 'azul', photo: 'dog', card: 'Transforme a data combinada com o veterinário em um lembrete.' },
  { id: 'gastos', path: '/ferramentas/custo-mensal-do-pet/', name: 'Custo mensal do pet', short: 'Gastos do pet', icon: '＄', color: 'amarelo', photo: 'walk', card: 'Some os gastos do mês e do ano com os valores que você paga.' },
  { id: 'nomes', path: '/ferramentas/nomes-para-cachorro-e-gato/', name: 'Nomes para cachorro e gato', short: 'Nomes para pets', icon: '✦', color: 'roxo', photo: 'cat', card: 'Encontre um nome com a cara do seu bichinho.' }
];

export const GUIDES = [
  { id: 'guia-vacina', path: '/guias/vacina-antirrabica-para-caes-e-gatos/', name: 'Vacina antirrábica para cães e gatos', short: 'Vacina antirrábica', label: 'SAÚDE', photo: 'dog', card: 'O que conferir na carteirinha e como se preparar para a vacinação.' },
  { id: 'guia-racao', path: '/guias/quanto-de-racao-dar-ao-cachorro-e-ao-gato/', name: 'Quanto de ração dar ao cachorro e ao gato', short: 'Quanto de ração dar', label: 'ALIMENTAÇÃO', photo: 'walk', card: 'Por que a porção começa no rótulo e se ajusta com o veterinário.' },
  { id: 'guia-alimentos', path: '/guias/alimentos-perigosos-para-caes-e-gatos/', name: 'Alimentos perigosos para cães e gatos', short: 'Alimentos perigosos', label: 'SEGURANÇA', photo: 'cat', card: 'Chocolate, uva, cebola, xilitol e o que fazer se o pet comer.' },
  { id: 'guia-peso', path: '/guias/peso-ideal-e-condicao-corporal-do-cachorro/', name: 'Peso ideal e condição corporal do cachorro', short: 'Peso ideal do cachorro', label: 'BEM-ESTAR', photo: 'dog', card: 'Costelas, cintura e abdômen dizem mais que a balança.' },
  { id: 'guia-idade', path: '/guias/idade-de-cachorro-e-gato-em-anos-humanos/', name: 'Idade de cachorro e gato em anos humanos', short: 'Idade em anos humanos', label: 'CURIOSIDADES', photo: 'cat', card: 'Por que multiplicar por sete não funciona e o que as tabelas dizem.' }
];

export const INSTITUTIONAL = [
  { id: 'sobre', path: '/sobre/', name: 'Sobre e fontes' },
  { id: 'privacidade', path: '/privacidade/', name: 'Privacidade' },
  { id: 'termos', path: '/termos/', name: 'Termos de uso' },
  { id: 'creditos', path: '/creditos/', name: 'Créditos das fotos' }
];

export const HUBS = {
  ferramentas: { path: '/ferramentas/', name: 'Ferramentas' },
  guias: { path: '/guias/', name: 'Guias' }
};

const all = [...TOOLS, ...GUIDES, ...INSTITUTIONAL];
export const byId = id => {
  const item = all.find(x => x.id === id);
  if (!item) throw new Error('Item desconhecido: ' + id);
  return item;
};
