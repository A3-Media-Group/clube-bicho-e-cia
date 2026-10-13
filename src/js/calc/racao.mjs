// Estimativa de ração para adultos saudáveis e castrados.
// AAHA 2021 Nutrition and Weight Management Guidelines, Box 1 (Calculating energy requirements):
// RER = 70 × peso(kg)^0,75; manutenção de adulto castrado: cão 1,4–1,6 × RER, gato 1,2–1,4 × RER.
import { InputError } from './numero.mjs';

export const FACTORS = { dog: [1.4, 1.6], cat: [1.2, 1.4] };
export const LIMITS = { weight: [0.5, 100], density: [100, 10000] };

export const rer = weightKg => 70 * Math.pow(weightKg, 0.75);

export function dailyPortion({ species, weightKg, kcalPerKg }) {
  if (!FACTORS[species]) throw new InputError('Escolha cachorro ou gato.', 'species');
  if (!(weightKg >= LIMITS.weight[0] && weightKg <= LIMITS.weight[1])) throw new InputError('Informe o peso em kg, entre 0,5 e 100.', 'weight');
  if (!(kcalPerKg >= LIMITS.density[0] && kcalPerKg <= LIMITS.density[1])) throw new InputError('Informe a energia do rótulo em kcal/kg, entre 100 e 10.000. Se o rótulo mostrar kcal/100 g, multiplique por 10.', 'density');
  const base = rer(weightKg);
  const [fMin, fMax] = FACTORS[species];
  const kcal = [base * fMin, base * fMax];
  const grams = kcal.map(k => k / kcalPerKg * 1000);
  return { rer: base, kcalMin: kcal[0], kcalMax: kcal[1], gramsMin: grams[0], gramsMax: grams[1], factors: [fMin, fMax] };
}
