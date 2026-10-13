import { setupTool, fmt } from './lib-ui.6f3aaac2.js';
import { parseInteger, InputError } from './calc-numero.2b563488.js';
import { ageEquivalent } from './calc-idade.dc9949a7.js';

const plural = (n, um, varios) => `${n} ${n === 1 ? um : varios}`;

export function describe(r) {
  const dog = r.species === 'dog';
  const lines = [];
  let title;
  if (r.table !== null) {
    title = `Cerca de ${r.table} anos humanos`;
    lines.push(`Pela tabela de referência (${dog ? 'AKC, cão de porte médio' : 'FelineVMA'}), considerando ${plural(r.completedYears, 'ano completo', 'anos completos')}.`);
  } else {
    title = `Filhote de ${plural(r.totalMonths, 'mês', 'meses')}`;
    lines.push(dog ? 'A tabela de referência começa em 1 ano (equivalente a 15 anos humanos).' : 'A tabela de referência começa em 1 ano (equivalente a 15 anos humanos). Para gatinhos com menos de 1 ano, as fontes que usamos não trazem uma equivalência mês a mês.');
  }
  if (r.nhgri !== null) lines.push(`Pelo método do estudo com labradores (16 × ln da idade + 31): cerca de ${r.nhgri} anos humanos. Esse método não foi validado para todas as raças.`);
  lines.push('Equivalência educativa: não mede a saúde nem prevê quanto tempo o pet vai viver.');
  return { title, lines, copy: `${title}. ${lines.join(' ')}` };
}

function compute(data) {
  const anos = String(data.get('anos') ?? '').trim();
  const meses = String(data.get('meses') ?? '').trim();
  if (!anos && !meses) throw new InputError('Informe a idade em anos, em meses ou nos dois campos.', 'anos');
  const years = anos ? parseInteger(anos) : 0;
  const months = meses ? parseInteger(meses) : 0;
  return describe(ageEquivalent({ species: data.get('especie') === 'gato' ? 'cat' : 'dog', years, months }));
}

const ui = setupTool({ tool: 'idade', compute });

// Ferramenta exposta a agentes de navegador compatíveis (API experimental WebMCP), quando existir.
if (ui && document.modelContext?.registerTool) {
  try {
    Promise.resolve(document.modelContext.registerTool({
      name: 'calculate_pet_age',
      description: 'Calcula a equivalência educativa da idade de um cão ou gato em anos humanos e atualiza o resultado visível.',
      inputSchema: { type: 'object', properties: { species: { type: 'string', enum: ['dog', 'cat'] }, years: { type: 'integer', minimum: 0, maximum: 30 }, months: { type: 'integer', minimum: 0, maximum: 11 } }, required: ['species', 'years'], additionalProperties: false },
      annotations: { readOnlyHint: false },
      execute(input) {
        try {
          const r = ageEquivalent({ species: input.species, years: input.years, months: input.months ?? 0 });
          ui.form.elements.especie.value = input.species === 'cat' ? 'gato' : 'cao';
          ui.form.elements.anos.value = input.years;
          ui.form.elements.meses.value = input.months ?? '';
          ui.run({ updateUrl: true });
          return { humanYears: r.table, nhgriEstimate: r.nhgri, approximate: true };
        } catch (error) {
          return { error: error.message };
        }
      }
    })).catch(() => {});
  } catch {}
}
export { fmt };
