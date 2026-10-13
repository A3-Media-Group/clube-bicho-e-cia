// Gerador de nomes: filtra a lista editorial e sorteia sugestões.
import { NOMES, ESTILOS } from '../../../data/nomes.mjs';

// Remove repetidos (o mesmo nome pode aparecer em dois estilos).
export function filterNames({ especie = '', sexo = '', estilo = '', porte = '' } = {}) {
  const seen = new Set();
  return NOMES.filter(n => {
    if (especie && !n.especie.includes(especie)) return false;
    if (sexo && n.sexo !== sexo && n.sexo !== 'u') return false;
    if (estilo && n.estilo !== estilo) return false;
    if (porte && especie !== 'gato' && n.porte && n.porte !== porte) return false;
    if (seen.has(n.nome)) return false;
    seen.add(n.nome);
    return true;
  });
}

// Sorteio determinístico quando recebe um gerador (testes); Math.random por padrão.
export function pickNames(list, count = 6, random = Math.random) {
  const pool = [...list];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

export { NOMES, ESTILOS };
