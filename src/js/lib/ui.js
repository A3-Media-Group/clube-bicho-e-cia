// Utilidades de interface compartilhadas pelas ferramentas.
export function output(result, title, body) {
  result.replaceChildren();
  const strong = document.createElement('strong');
  strong.textContent = title;
  const p = document.createElement('p');
  p.textContent = body;
  result.append(strong, p);
}

export function download(text, name, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export const money = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Liga o formulário da página a um handler; valida pelo navegador antes.
export function onSubmit(handler) {
  const form = document.querySelector('form[data-tool]');
  const result = document.getElementById('result');
  if (!form || !result) return null;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    handler(new FormData(form), result, form);
  });
  return { form, result };
}
