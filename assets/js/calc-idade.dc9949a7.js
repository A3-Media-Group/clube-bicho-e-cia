// Idade do pet em anos humanos.
// Tabela (cães porte médio, AKC; gatos, FelineVMA): 1 ano = 15; 2 anos = 24; depois +5/ano (cão) ou +4/ano (gato).
// Método alternativo (Wang et al., Cell Systems 2020, estudo com participação do NHGRI): 16 × ln(idade do cão em anos) + 31,
// derivado sobretudo de labradores; não vale para gatos e não deve ser generalizado para todas as raças.
import { InputError } from './calc-numero.2b563488.js';

export const MAX_YEARS = 30;
export const NHGRI_MIN_MONTHS = 2;   // o estudo traduziu 8 semanas; abaixo disso a curva perde sentido
export const NHGRI_MAX_MONTHS = 16 * 12; // faixa de idade dos cães do estudo

export function tableAge(species, years) {
  if (!['dog', 'cat'].includes(species)) throw new InputError('Escolha cachorro ou gato.', 'species');
  if (!Number.isInteger(years) || years < 1 || years > MAX_YEARS) throw new InputError(`Informe anos completos entre 1 e ${MAX_YEARS}.`, 'years');
  return years === 1 ? 15 : 24 + (years - 2) * (species === 'dog' ? 5 : 4);
}

export function nhgriAge(ageYears) {
  if (!(ageYears > 0)) throw new InputError('Idade inválida.', 'years');
  return 16 * Math.log(ageYears) + 31;
}

// years e months são inteiros já validados como números (ou NaN).
export function ageEquivalent({ species, years, months }) {
  if (!['dog', 'cat'].includes(species)) throw new InputError('Escolha cachorro ou gato.', 'species');
  if (!Number.isInteger(years) || years < 0 || years > MAX_YEARS) throw new InputError(`Informe os anos como número inteiro de 0 a ${MAX_YEARS}.`, 'years');
  if (!Number.isInteger(months) || months < 0 || months > 11) throw new InputError('Informe os meses como número inteiro de 0 a 11.', 'months');
  const totalMonths = years * 12 + months;
  if (totalMonths < 1) throw new InputError('Informe pelo menos 1 mês de idade.', 'months');
  if (totalMonths > MAX_YEARS * 12) throw new InputError(`A tabela vai até ${MAX_YEARS} anos.`, 'years');
  const completedYears = Math.floor(totalMonths / 12);
  const table = completedYears >= 1 ? tableAge(species, completedYears) : null;
  const nhgri = species === 'dog' && totalMonths >= NHGRI_MIN_MONTHS && totalMonths <= NHGRI_MAX_MONTHS
    ? Math.round(nhgriAge(totalMonths / 12)) : null;
  return { species, totalMonths, completedYears, table, nhgri };
}
