import { output, onSubmit, download } from './lib-ui.bb9afc40.js';

onSubmit((data, result) => {
  const date = data.get('date');
  const title = data.get('event').trim();
  if (!title || !/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(date)) { output(result, 'Confira os campos', 'Informe um título e uma data válida.'); return; }
  const escape = s => s.replace(/\\/g, '\\\\').replace(/[\r\n]+/g, ' ').replace(/;/g, '\;').replace(/,/g, '\\,');
  const dt = new Date(date + 'T12:00:00Z');
  dt.setUTCDate(dt.getUTCDate() + 1);
  const end = dt.toISOString().slice(0, 10).replaceAll('-', '');
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const content = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Clube Bicho e Cia//Agenda//PT-BR', 'BEGIN:VEVENT', 'UID:' + Date.now() + '-' + Math.random().toString(36).slice(2) + '@clubebicho.local', 'DTSTAMP:' + stamp, 'DTSTART;VALUE=DATE:' + date.replaceAll('-', ''), 'DTEND;VALUE=DATE:' + end, 'SUMMARY:' + escape(title), 'DESCRIPTION:Data informada pelo tutor. Confirme o atendimento com o profissional.', 'END:VEVENT', 'END:VCALENDAR', ''].join('\r\n');
  download(content, 'cuidado-pet.ics', 'text/calendar;charset=utf-8');
  output(result, 'Lembrete pronto para importar', 'Abra o arquivo cuidado-pet.ics no seu calendário. É um evento de dia inteiro; configure o horário e as notificações no aplicativo.');
});
