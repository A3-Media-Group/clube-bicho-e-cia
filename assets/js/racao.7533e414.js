import { setupTool, fmt } from './lib-ui.6f3aaac2.js';
import { parseDecimal } from './calc-numero.2b563488.js';
import { dailyPortion } from './calc-racao.d1944567.js';

setupTool({
  tool: 'racao',
  compute(data) {
    const species = data.get('especie') === 'gato' ? 'cat' : 'dog';
    const r = dailyPortion({ species, weightKg: parseDecimal(data.get('peso')), kcalPerKg: parseDecimal(data.get('kcal')) });
    const title = `${fmt(r.gramsMin)} a ${fmt(r.gramsMax)} g de ração por dia`;
    const lines = [
      `Energia estimada: ${fmt(r.kcalMin)} a ${fmt(r.kcalMax)} kcal por dia (RER de ${fmt(r.rer)} kcal × ${fmt(r.factors[0], 1)} a ${fmt(r.factors[1], 1)}).`,
      'Petiscos entram nesse total. Estimativa para adulto saudável e castrado, não é prescrição: confirme com o médico-veterinário e acompanhe o peso e a condição corporal.'
    ];
    return { title, lines, copy: `${title}. ${lines.join(' ')}` };
  }
});
