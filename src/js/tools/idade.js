import { output, onSubmit } from '../lib/ui.js';
import { calculateAge } from '../calc/idade.mjs';

const ui = onSubmit((data, result) => {
  output(result, 'Aproximadamente ' + calculateAge(data.get('species'), Number(data.get('years'))) + ' anos humanos', 'Uma equivalência educativa. Não mede saúde nem prevê quanto tempo seu pet viverá.');
});

if (ui && document.modelContext?.registerTool) {
  try {
    Promise.resolve(document.modelContext.registerTool({
      name: 'calculate_pet_age',
      description: 'Calcula a equivalência educativa e atualiza o resultado visível.',
      inputSchema: { type: 'object', properties: { species: { type: 'string', enum: ['dog', 'cat'] }, years: { type: 'integer', minimum: 1, maximum: 30 } }, required: ['species', 'years'], additionalProperties: false },
      annotations: { readOnlyHint: false },
      execute(input) {
        const value = calculateAge(input.species, input.years);
        ui.form.elements.species.value = input.species;
        ui.form.elements.years.value = input.years;
        output(ui.result, 'Aproximadamente ' + value + ' anos humanos', 'Equivalência educativa, sem previsão de longevidade.');
        return { humanYears: value, approximate: true };
      }
    })).catch(() => {});
  } catch {}
}
