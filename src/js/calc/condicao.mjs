// Avaliação orientativa da condição corporal do cão (critérios da PDSA e da escala da WSAVA:
// costelas, cintura vista de cima e barriga vista de lado). Não é diagnóstico.
import { InputError } from './numero.mjs';

export const PERGUNTAS = [
  { id: 'costelas', titulo: 'Costelas', pergunta: 'Passando as mãos de leve nas laterais do peito, como estão as costelas?', opcoes: [
    { v: -1, t: 'Aparecem de longe ou sinto os ossos sem nenhuma gordura por cima' },
    { v: 0, t: 'Sinto com um toque leve, mas não aparecem' },
    { v: 1, t: 'Preciso apertar para sentir ou não consigo sentir' }] },
  { id: 'cintura', titulo: 'Cintura vista de cima', pergunta: 'Olhando o cão de cima, logo depois das costelas:', opcoes: [
    { v: -1, t: 'A cintura é muito fina e os ossos do quadril aparecem' },
    { v: 0, t: 'Há uma curva para dentro, a cintura é visível' },
    { v: 1, t: 'A cintura é pouco visível, reta ou o corpo fica mais largo' }] },
  { id: 'barriga', titulo: 'Barriga vista de lado', pergunta: 'Olhando o cão de lado, a linha da barriga:', opcoes: [
    { v: -1, t: 'Sobe muito, bem encolhida, e as costelas aparecem' },
    { v: 0, t: 'Sobe em direção às patas traseiras' },
    { v: 1, t: 'Fica reta ou pende para baixo' }] }
];

export function avaliar(respostas) {
  const valores = PERGUNTAS.map(p => {
    const v = Number(respostas[p.id]);
    if (![-1, 0, 1].includes(v) || respostas[p.id] === '' || respostas[p.id] == null) throw new InputError(`Responda a pergunta sobre ${p.titulo.toLowerCase()}.`, p.id);
    return v;
  });
  const soma = valores.reduce((a, b) => a + b, 0);
  const abaixo = valores.filter(v => v < 0).length;
  const acima = valores.filter(v => v > 0).length;
  let resultado;
  if (abaixo && acima) resultado = 'misto';
  else if (soma <= -2) resultado = 'abaixo';
  else if (soma >= 2) resultado = 'acima';
  else if (soma === 0) resultado = 'ideal';
  else resultado = soma < 0 ? 'limite-abaixo' : 'limite-acima';
  return { resultado, valores };
}

export const TEXTOS = {
  abaixo: { titulo: 'Parece abaixo do peso', texto: 'As respostas indicam pouca reserva de gordura. Perda de peso pode ter causas de saúde: marque uma consulta e não aumente a comida por conta própria sem orientação.' },
  'limite-abaixo': { titulo: 'Perto do ideal, com sinais de magreza', texto: 'Um dos critérios sugere magreza. Acompanhe o peso e leve suas observações à próxima consulta.' },
  ideal: { titulo: 'Parece próximo do peso ideal', texto: 'Costelas, cintura e barriga correspondem à descrição de condição corporal adequada. Continue acompanhando e confirme nas consultas de rotina.' },
  'limite-acima': { titulo: 'Perto do ideal, com sinais de excesso', texto: 'Um dos critérios sugere excesso de gordura. Reveja petiscos e porções e converse com o veterinário antes de mudar a dieta.' },
  acima: { titulo: 'Parece acima do peso', texto: 'As respostas indicam excesso de gordura. Não corte a comida drasticamente: peça ao veterinário um plano de emagrecimento seguro.' },
  misto: { titulo: 'Respostas misturadas', texto: 'Os critérios apontaram em direções diferentes, o que pode acontecer com pelagem longa, raças de peito profundo ou cães musculosos. Peça ao veterinário para avaliar com você.' }
};
