// Busca na base data/alimentos.mjs.
import { ALIMENTOS, CATEGORIAS, FONTES } from './data-alimentos.9213b106.js';

export const normalize = s => String(s ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const index = ALIMENTOS.map(a => ({ item: a, terms: [a.nome, ...a.busca].map(normalize) }));

// especie: 'cao' | 'gato' | '' (ambas); categoria: 'seguro' | 'cuidado' | 'perigoso' | '' (todas)
export function searchFoods({ query = '', especie = '', categoria = '' } = {}) {
  const q = normalize(query);
  const species = especie ? [especie] : ['cao', 'gato'];
  const results = [];
  for (const { item, terms } of index) {
    if (q) {
      const score = terms.reduce((best, t, i) => {
        if (t === q) return Math.max(best, i === 0 ? 4 : 3);
        if (t.startsWith(q) || t.split(' ').some(w => w.startsWith(q))) return Math.max(best, 2);
        if (q.length >= 3 && t.includes(q)) return Math.max(best, 1);
        return best;
      }, 0);
      if (!score) continue;
      item._score = score;
    } else item._score = 0;
    const entries = species.filter(s => item[s] && (!categoria || item[s].c === categoria));
    if (!entries.length) continue;
    results.push({ item, species: entries, score: item._score });
  }
  const order = { perigoso: 0, cuidado: 1, seguro: 2 };
  const worst = r => Math.min(...r.species.map(s => order[r.item[s].c]));
  return results.sort((a, b) => b.score - a.score || worst(a) - worst(b) || a.item.nome.localeCompare(b.item.nome, 'pt-BR'));
}

export const foodSources = item => item.fontes.map(k => FONTES[k]);
export { ALIMENTOS, CATEGORIAS, FONTES };
