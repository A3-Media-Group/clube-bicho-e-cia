import { output, onSubmit } from './lib-ui.bb9afc40.js';

onSubmit((data, result) => {
  const n = k => Number(data.get(k));
  const rer = 70 * Math.pow(n('weight'), .75);
  const factors = data.get('species') === 'dog' ? [1.4, 1.6] : [1.2, 1.4];
  const values = factors.map(f => rer * f);
  output(result, Math.round(values[0] / n('density') * 1000) + '–' + Math.round(values[1] / n('density') * 1000) + ' g/dia (estimativa)', Math.round(values[0]) + '–' + Math.round(values[1]) + ' kcal/dia. Não é uma prescrição. Confirme com o veterinário e considere os petiscos no total diário.');
});
