import { setupTool, money } from '../lib/ui.js';
import { parseDecimal, InputError } from '../calc/numero.mjs';
import { budget, CATEGORIES } from '../calc/gastos.mjs';

setupTool({
  tool: 'gastos',
  compute(data) {
    const values = {};
    for (const c of CATEGORIES) {
      const raw = String(data.get(c.id) ?? '').trim();
      values[c.id] = raw === '' ? 0 : parseDecimal(raw);
    }
    const r = budget(values);
    if (!r.rows.length) throw new InputError('Digite pelo menos um valor; deixe em branco o que não se aplica.', CATEGORIES[0].id);
    const title = `${money(r.monthly)} por mês`;
    const lines = [`Equivale a ${money(r.yearly)} por ano. Soma apenas os valores que você digitou; gastos com emergências podem ser maiores.`];
    const table = { head: ['Categoria', 'Por mês', 'Por ano'], rows: [...r.rows.map(x => [x.label, money(x.monthly), money(x.yearly)]), ['Total', money(r.monthly), money(r.yearly)]] };
    const copy = [title, ...r.rows.map(x => `${x.label}: ${money(x.monthly)}/mês`), `Total anual: ${money(r.yearly)}`].join('\n');
    return { title, lines, table, copy };
  }
});
