// Interface comum das ferramentas: validação com mensagem visível, estado na query string,
// resultado com botões Copiar e Imprimir e marcação de eventos (sem envio a nenhum servidor).

// Evento local para uma futura medição com consentimento (ver README). Hoje ninguém o escuta.
export function track(evento, detail = {}) {
  document.dispatchEvent(new CustomEvent('clube:evento', { detail: { evento, ...detail } }));
}

const el = (tag, props = {}, children = []) => {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'text') node.textContent = v;
    else if (k === 'dataset') Object.assign(node.dataset, v);
    else node.setAttribute(k, v);
  }
  node.append(...children);
  return node;
};
export { el };

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = el('textarea', { readonly: '', style: 'position:fixed;opacity:0' });
    area.value = text;
    document.body.append(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch {}
    area.remove();
    return ok;
  }
}

// out: { title, lines?: string[], table?: { head: string[], rows: string[][] }, extra?: Node, copy: string }
export function renderResult(result, out, tool) {
  result.replaceChildren();
  result.classList.remove('is-error');
  const summary = el('div', { class: 'result-summary' }, [el('strong', { text: out.title })]);
  announce([out.title, ...(out.lines || [])].join(' '));
  for (const line of out.lines || []) summary.append(el('p', { text: line }));
  result.append(summary);
  if (out.table) {
    const table = el('table', { class: 'result-table' });
    table.append(el('thead', {}, [el('tr', {}, out.table.head.map(h => el('th', { scope: 'col', text: h })))]));
    table.append(el('tbody', {}, out.table.rows.map(r => el('tr', {}, r.map((c, i) => el(i ? 'td' : 'th', i ? { text: c } : { scope: 'row', text: c }))))));
    result.append(table);
  }
  if (out.extra) result.append(out.extra);
  const feedback = el('span', { class: 'copy-feedback', role: 'status', 'aria-live': 'polite' });
  const copyBtn = el('button', { type: 'button', class: 'button small ghost', dataset: { evento: 'ferramenta_copiou', ferramenta: tool }, text: 'Copiar resultado' });
  copyBtn.addEventListener('click', async () => {
    const ok = await copyText(`${out.copy}\n${location.href}`);
    feedback.textContent = ok ? 'Resultado copiado.' : 'Não foi possível copiar; selecione o texto manualmente.';
    track('ferramenta_copiou', { ferramenta: tool });
  });
  const printBtn = el('button', { type: 'button', class: 'button small ghost', dataset: { evento: 'ferramenta_imprimiu', ferramenta: tool }, text: 'Imprimir' });
  printBtn.addEventListener('click', () => { track('ferramenta_imprimiu', { ferramenta: tool }); window.print(); });
  if (out.copy) result.append(el('div', { class: 'result-actions' }, [copyBtn, printBtn, feedback]));
}

// Região aria-live persistente (#result-status) anuncia o resumo sem ler a tabela inteira.
function announce(text) {
  const live = document.getElementById('result-status');
  if (live) { live.textContent = ''; setTimeout(() => { live.textContent = text; }, 50); }
}

export function renderError(result, message) {
  announce('Confira os campos. ' + message);
  result.replaceChildren(el('div', { class: 'result-summary' }, [el('strong', { text: 'Confira os campos' }), el('p', { text: message })]));
  result.classList.add('is-error');
}

// Liga o formulário: lê a query string, valida, calcula, mostra o resultado e atualiza a URL.
// compute(formData, form) devolve o objeto de renderResult ou lança InputError(message, field).
// urlFields: nomes de campos refletidos na URL (padrão: todos com name).
export function setupTool({ tool, compute, urlFields, autorun = true, onResult }) {
  const form = document.querySelector('form[data-tool]');
  const result = document.getElementById('result');
  if (!form || !result) return null;
  const fields = [...form.elements].filter(f => f.name && (!urlFields || urlFields.includes(f.name)));

  const params = new URLSearchParams(location.search);
  let restored = false;
  for (const f of fields) {
    if (!params.has(f.name)) continue;
    const v = params.get(f.name).slice(0, 100);
    if (f.type === 'radio' || f.type === 'checkbox') { f.checked = f.value === v; if (f.checked) restored = true; continue; }
    if (f.tagName === 'SELECT' && ![...f.options].some(o => o.value === v)) continue;
    f.value = v;
    restored = true;
  }

  const clearInvalid = () => form.querySelectorAll('[aria-invalid]').forEach(f => f.removeAttribute('aria-invalid'));
  function run({ updateUrl }) {
    clearInvalid();
    try {
      const out = compute(new FormData(form), form);
      renderResult(result, out, tool);
      if (updateUrl) {
        const q = new URLSearchParams();
        for (const f of fields) {
          if ((f.type === 'radio' || f.type === 'checkbox') && !f.checked) continue;
          if (String(f.value).trim() !== '') q.set(f.name, String(f.value).trim());
        }
        history.replaceState(null, '', q.toString() ? `?${q}` : location.pathname);
      }
      onResult?.(out);
      return out;
    } catch (error) {
      if (error?.name === 'InputError') {
        renderError(result, error.message);
        let field = error.field && form.elements[error.field];
        if (field instanceof RadioNodeList) field = field[0]?.closest('fieldset') || field[0];
        if (field) { field.setAttribute('aria-invalid', 'true'); if (updateUrl) (field.querySelector?.('input') || field).focus(); }
      } else {
        renderError(result, 'Não foi possível calcular agora. Confira os campos e tente de novo.');
        console.error(error);
      }
      return null;
    }
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const out = run({ updateUrl: true });
    if (out) track('ferramenta_calculou', { ferramenta: tool });
  });
  if (restored && autorun) run({ updateUrl: false });
  return { form, result, run };
}

export function download(text, name, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = el('a', { href: url, download: name });
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export const money = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const fmt = (n, d = 0) => n.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d });
