// Orçamento do pet: soma os valores digitados pelo tutor. Nenhum preço é sugerido pelo site.
import { InputError } from './numero.mjs';

// period: 'mes' (valor mensal) ou 'ano' (valor anual).
export const CATEGORIES = [
  { id: 'racao', label: 'Ração e petiscos', period: 'mes' },
  { id: 'areia', label: 'Areia, tapetes e higiene', period: 'mes' },
  { id: 'banho', label: 'Banho e tosa', period: 'mes' },
  { id: 'antipulgas', label: 'Antipulgas e carrapaticida', period: 'mes' },
  { id: 'plano', label: 'Plano de saúde pet', period: 'mes' },
  { id: 'consulta', label: 'Consultas veterinárias', period: 'ano' },
  { id: 'vacina', label: 'Vacinas', period: 'ano' },
  { id: 'vermifugo', label: 'Vermífugo', period: 'ano' },
  { id: 'imprevistos', label: 'Reserva para imprevistos', period: 'mes' },
  { id: 'outros', label: 'Outros (brinquedos, acessórios)', period: 'mes' }
];
export const MAX_VALUE = 1000000;

// values: { [id]: número ou NaN/undefined para campo vazio }
export function budget(values) {
  const rows = CATEGORIES.map(c => {
    const raw = values[c.id];
    const v = raw === undefined || raw === null || raw === '' ? 0 : raw;
    if (!Number.isFinite(v) || v < 0 || v > MAX_VALUE) throw new InputError(`Confira o valor de "${c.label}": use apenas números positivos.`, c.id);
    const monthly = c.period === 'mes' ? v : v / 12;
    return { ...c, value: v, monthly, yearly: monthly * 12 };
  });
  const monthly = rows.reduce((a, r) => a + r.monthly, 0);
  return { rows: rows.filter(r => r.value > 0), monthly, yearly: monthly * 12 };
}
