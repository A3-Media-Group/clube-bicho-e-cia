// Filtro da tabela de plantas (a tabela completa já vem no HTML).
import { track } from './lib-ui.6f3aaac2.js';

const normalize = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const form = document.querySelector('form[data-tool="plantas"]');
const rows = [...document.querySelectorAll('#tabela-plantas tbody tr')];
const status = document.getElementById('result-status');
const count = document.getElementById('plantas-contagem');

function apply(updateUrl) {
  const q = normalize(form.elements.q.value.trim());
  const especie = form.elements.especie.value;
  const tox = form.elements.toxicidade.value;
  let shown = 0;
  for (const row of rows) {
    const d = row.dataset;
    const ok = (!q || normalize(d.busca).includes(q))
      && (!tox || (especie ? d[especie] === tox : d.cao === tox || d.gato === tox));
    row.hidden = !ok;
    if (ok) shown++;
  }
  const msg = shown ? `${shown} ${shown === 1 ? 'planta encontrada' : 'plantas encontradas'}.` : 'Nenhuma planta encontrada. Ausência na lista não significa que a planta é segura.';
  count.textContent = msg;
  status.textContent = msg;
  if (updateUrl) {
    const p = new URLSearchParams();
    for (const f of ['q', 'especie', 'toxicidade']) if (form.elements[f].value) p.set(f, form.elements[f].value);
    history.replaceState(null, '', p.toString() ? `?${p}` : location.pathname);
  }
}

if (form) {
  const params = new URLSearchParams(location.search);
  for (const f of ['q', 'especie', 'toxicidade']) if (params.has(f)) form.elements[f].value = params.get(f).slice(0, 60);
  form.addEventListener('submit', e => { e.preventDefault(); apply(true); track('ferramenta_calculou', { ferramenta: 'plantas' }); });
  form.addEventListener('input', () => apply(false));
  form.addEventListener('change', () => apply(true));
  apply(false);
}
