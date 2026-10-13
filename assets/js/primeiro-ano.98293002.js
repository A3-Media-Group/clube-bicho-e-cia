import { setupTool, money } from './lib-ui.6f3aaac2.js';
import { parseDecimal, InputError } from './calc-numero.2b563488.js';
import { primeiroAno, ITENS, TIPOS } from './calc-primeiro-ano.c43dfcb0.js';

setupTool({
  tool: 'primeiro-ano',
  compute(data) {
    const values = {};
    for (const i of ITENS) {
      const raw = String(data.get(i.id) ?? '').trim();
      values[i.id] = raw === '' ? 0 : parseDecimal(raw);
    }
    const r = primeiroAno(values);
    if (!r.rows.length) throw new InputError('Digite pelo menos um valor; deixe em branco o que não se aplica.', ITENS[0].id);
    const title = `${money(r.total)} no primeiro ano`;
    const lines = [`${money(r.unicos)} em gastos de chegada e ${money(r.recorrentes)} em gastos recorrentes, uma média de ${money(r.mediaMensal)} por mês. Soma só o que você digitou.`];
    const table = { head: ['Item', 'Valor', 'No ano'], rows: [...r.rows.map(x => [x.label, `${money(x.value)} ${TIPOS[x.tipo]}`, money(x.noAno)]), ['Total', '', money(r.total)]] };
    return { title, lines, table, copy: [title, ...r.rows.map(x => `${x.label}: ${money(x.noAno)}`)].join('\n') };
  }
});
