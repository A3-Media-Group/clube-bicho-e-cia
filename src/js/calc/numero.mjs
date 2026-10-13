// Leitura de números digitados em pt-BR: "10,5", "1.234,56", "1.500" (milhar) ou "10.5".
export function parseDecimal(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  let s = String(value ?? '').replace(/R\$|\s/g, '');
  if (!s) return NaN;
  if (!/^-?[\d.,]+$/.test(s)) return NaN;
  if (s.includes(',')) {
    if (s.indexOf(',') !== s.lastIndexOf(',')) return NaN;
    s = s.replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.');
    if (s.includes(',') || (s.match(/\./g) || []).length > 1) return NaN;
  } else if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) {
    s = s.replace(/\./g, '');
  } else if ((s.match(/\./g) || []).length > 1) {
    return NaN;
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : NaN;
}

export function parseInteger(value) {
  const s = String(value ?? '').trim();
  return /^\d+$/.test(s) ? Number(s) : NaN;
}

export const formatNumber = (n, digits = 0) => n.toLocaleString('pt-BR', { minimumFractionDigits: digits, maximumFractionDigits: digits });

// Erro de validação com mensagem para o leitor.
export class InputError extends Error {
  constructor(message, field) { super(message); this.name = 'InputError'; this.field = field; }
}
