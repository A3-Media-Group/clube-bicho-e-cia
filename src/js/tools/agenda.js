import { setupTool, download } from '../lib/ui.js';
import { buildIcs } from '../calc/agenda.mjs';

// O título do lembrete não vai para a URL: pode conter dados pessoais.
setupTool({
  tool: 'agenda',
  urlFields: ['data'],
  autorun: false,
  compute(data) {
    const title = String(data.get('evento') ?? '').trim();
    const date = String(data.get('data') ?? '');
    const ics = buildIcs({ title, date });
    download(ics, 'cuidado-pet.ics', 'text/calendar;charset=utf-8');
    const [y, m, d] = date.split('-');
    return {
      title: 'Lembrete pronto para importar',
      lines: [`“${title}” em ${d}/${m}/${y}. Abra o arquivo cuidado-pet.ics no seu calendário: é um evento de dia inteiro; ajuste horário e notificações no aplicativo.`],
      copy: `${title} — ${d}/${m}/${y}`
    };
  }
});
