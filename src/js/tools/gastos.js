import { output, onSubmit, money } from '../lib/ui.js';

onSubmit((data, result) => {
  const n = k => Number(data.get(k));
  const total = n('foodcost') + n('hygiene') + n('health') / 12 + n('reserve');
  output(result, money(total) + ' por mês', 'Projeção de ' + money(total * 12) + ' por ano, incluindo a reserva informada. Não inclui despesas que você não cadastrou.');
});
