import { setupTool, el } from '../lib/ui.js';
import { searchFoods, foodSources, CATEGORIAS } from '../calc/alimentos.mjs';
import { NOTA_GATOS } from '../../../data/alimentos.mjs';

const ESPECIE = { cao: 'Cachorro', gato: 'Gato' };
const LIMITE = 24;

function card(item, species) {
  const blocks = species.map(s => {
    const e = item[s];
    const cat = CATEGORIAS[e.c];
    return el('div', { class: `food-species food-${e.c}` }, [
      el('p', { class: 'food-badge' }, [el('span', { text: ESPECIE[s] + ': ' }), el('strong', { text: cat.rotulo })]),
      el('p', { text: e.motivo }),
      el('p', { class: 'food-todo', text: cat.oQueFazer + (s === 'gato' && e.c === 'seguro' ? ' ' + NOTA_GATOS : '') })
    ]);
  });
  const missing = ['cao', 'gato'].filter(s => !species.includes(s) && !item[s]);
  const sources = el('p', { class: 'food-sources' }, ['Fonte: ', ...foodSources(item).flatMap((f, i) => [i ? ' · ' : '', el('a', { href: f.url, target: '_blank', rel: 'noopener noreferrer', text: f.nome })])]);
  const note = missing.length && species.length ? el('p', { class: 'food-missing', text: `Para ${missing.map(s => ESPECIE[s].toLowerCase()).join(' e ')}, as fontes consultadas não trazem orientação sobre este item: na dúvida, não ofereça.` }) : '';
  return el('li', { class: 'food-card' }, [el('h3', { text: item.nome }), ...blocks, note, sources].filter(Boolean));
}

const ui = setupTool({
  tool: 'alimentos',
  compute(data) {
    const query = String(data.get('q') ?? '').trim();
    const especie = data.get('especie') || '';
    const categoria = data.get('categoria') || '';
    const results = searchFoods({ query, especie, categoria });
    if (!results.length) {
      return {
        title: query ? `Não encontramos “${query}” na nossa base` : 'Nenhum alimento com esses filtros',
        lines: ['A ausência na lista não significa que o alimento é seguro. Na dúvida, não ofereça e pergunte ao médico-veterinário. Se o pet já comeu algo suspeito, ligue para a clínica.'],
        copy: ''
      };
    }
    const shown = results.slice(0, LIMITE);
    const list = el('ul', { class: 'food-list' }, shown.map(r => card(r.item, r.species)));
    const first = shown[0];
    const title = query
      ? `${first.item.nome}: ${first.species.map(s => `${ESPECIE[s].toLowerCase()} — ${CATEGORIAS[first.item[s].c].rotulo.split(':')[0].toLowerCase()}`).join('; ')}`
      : `${results.length} alimentos encontrados`;
    const lines = [results.length > LIMITE ? `Mostrando ${LIMITE} de ${results.length}. Digite o nome para refinar.` : `${results.length} ${results.length === 1 ? 'resultado' : 'resultados'}.`];
    const copy = shown.map(r => `${r.item.nome} — ${r.species.map(s => `${ESPECIE[s]}: ${CATEGORIAS[r.item[s].c].rotulo}`).join('; ')}`).join('\n');
    return { title, lines, extra: list, copy };
  }
});

// Busca enquanto digita (sem atualizar a URL a cada tecla).
let timer;
ui?.form.elements.q?.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(() => { if (ui.form.elements.q.value.trim().length >= 2) ui.run({ updateUrl: false }); }, 250);
});
ui?.form.querySelectorAll('select').forEach(s => s.addEventListener('change', () => ui.run({ updateUrl: true })));
