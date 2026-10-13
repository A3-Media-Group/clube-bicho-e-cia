import { setupTool } from './lib-ui.25ebddae.js';
import { filterNames, pickNames } from './calc-nomes.2eeca11e.js';

const form = document.querySelector('form[data-tool="nomes"]');
const porteField = form?.querySelector('[data-porte]');
const syncPorte = () => { if (porteField) porteField.hidden = form.elements.especie.value === 'gato'; };
form?.elements.especie.addEventListener('change', syncPorte);
syncPorte();

setupTool({
  tool: 'nomes',
  compute(data) {
    const especie = data.get('especie') || '';
    const filters = { especie, sexo: data.get('sexo') || '', estilo: data.get('estilo') || '', porte: especie === 'gato' ? '' : data.get('porte') || '' };
    const list = filterNames(filters);
    if (!list.length) return { title: 'Nenhum nome com essa combinação', lines: ['Tente outro estilo ou deixe algum filtro em “qualquer”.'], copy: '' };
    const names = pickNames(list, 6).map(n => n.nome);
    return { title: names.join(' • '), lines: [`Sorteados entre ${list.length} nomes com esses filtros. Clique de novo para ver outros.`], copy: names.join(', ') };
  }
});
