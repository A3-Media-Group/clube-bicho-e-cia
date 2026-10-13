// Custo do primeiro ano com o pet: soma dos valores digitados (gastos únicos + mensais × 12 + anuais).
import { InputError } from './numero.mjs';

export const ITENS = [
  { id: 'adocao', label: 'Adoção ou aquisição', tipo: 'unico' },
  { id: 'enxoval', label: 'Enxoval: cama, potes, coleira, guia, caixa de transporte', tipo: 'unico' },
  { id: 'brinquedos', label: 'Brinquedos, arranhador ou tapetes', tipo: 'unico' },
  { id: 'castracao', label: 'Castração', tipo: 'unico' },
  { id: 'microchip', label: 'Identificação (plaquinha, microchip)', tipo: 'unico' },
  { id: 'vacinas', label: 'Vacinas do primeiro ano', tipo: 'anual' },
  { id: 'consultas', label: 'Consultas e exames do primeiro ano', tipo: 'anual' },
  { id: 'vermifugo', label: 'Vermífugo e antipulgas', tipo: 'anual' },
  { id: 'racao', label: 'Ração e petiscos', tipo: 'mensal' },
  { id: 'higiene', label: 'Areia, tapetes higiênicos, banho e tosa', tipo: 'mensal' },
  { id: 'reserva', label: 'Reserva para imprevistos', tipo: 'mensal' }
];
export const TIPOS = { unico: 'uma vez', mensal: 'por mês', anual: 'no ano' };

export function primeiroAno(values) {
  const rows = ITENS.map(i => {
    const raw = values[i.id];
    const v = raw === undefined || raw === null || raw === '' ? 0 : raw;
    if (!Number.isFinite(v) || v < 0 || v > 1000000) throw new InputError(`Confira o valor de "${i.label}": use apenas números positivos.`, i.id);
    return { ...i, value: v, noAno: i.tipo === 'mensal' ? v * 12 : v };
  });
  const sum = tipo => rows.filter(r => r.tipo === tipo).reduce((a, r) => a + r.noAno, 0);
  const total = rows.reduce((a, r) => a + r.noAno, 0);
  return { rows: rows.filter(r => r.value > 0), unicos: sum('unico'), recorrentes: sum('mensal') + sum('anual'), total, mediaMensal: total / 12 };
}
