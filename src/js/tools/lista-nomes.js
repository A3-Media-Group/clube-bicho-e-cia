// Filtro das listas de nomes (todos os nomes já estão no HTML).
import { track } from '../lib/ui.js';

const normalize = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const form = document.querySelector('form[data-tool="lista-nomes"]');
const items = [...document.querySelectorAll('.name-list li')];
const groups = [...document.querySelectorAll('.name-group')];
const count = document.getElementById('nomes-contagem');
const status = document.getElementById('result-status');

function apply(updateUrl) {
  const q = normalize(form.elements.q.value.trim());
  const estilo = form.elements.estilo.value;
  const sexo = form.elements.sexo?.value || '';
  let shown = 0;
  for (const li of items) {
    const ok = (!q || normalize(li.textContent).startsWith(q) || (q.length > 2 && normalize(li.textContent).includes(q)))
      && (!estilo || li.closest('.name-group').dataset.estilo === estilo)
      && (!sexo || li.dataset.sexo === sexo || li.dataset.sexo === 'u');
    li.hidden = !ok;
    if (ok) shown++;
  }
  for (const g of groups) g.hidden = !g.querySelector('li:not([hidden])');
  const msg = `${shown} ${shown === 1 ? 'nome' : 'nomes'}.`;
  count.textContent = msg;
  status.textContent = msg;
  if (updateUrl) {
    const p = new URLSearchParams();
    for (const f of ['q', 'estilo', 'sexo']) if (form.elements[f]?.value) p.set(f, form.elements[f].value);
    history.replaceState(null, '', p.toString() ? `?${p}` : location.pathname);
  }
}

if (form) {
  const params = new URLSearchParams(location.search);
  for (const f of ['q', 'estilo', 'sexo']) if (form.elements[f] && params.has(f)) form.elements[f].value = params.get(f).slice(0, 40);
  form.addEventListener('submit', e => { e.preventDefault(); apply(true); track('ferramenta_calculou', { ferramenta: 'lista-nomes' }); });
  form.addEventListener('input', () => apply(false));
  form.addEventListener('change', () => apply(true));
  apply(false);
}
