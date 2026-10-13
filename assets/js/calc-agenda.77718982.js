// Gera um evento de dia inteiro em formato iCalendar (.ics, RFC 5545).
import { InputError } from './calc-numero.2b563488.js';

export function validDate(iso) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return false;
  const d = new Date(iso + 'T12:00:00Z');
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === iso;
}

const escapeText = s => s.replace(/\\/g, '\\\\').replace(/[\r\n]+/g, ' ').replace(/;/g, '\;').replace(/,/g, '\\,');

export function buildIcs({ title, date, now = new Date(), uid }) {
  const t = String(title ?? '').trim();
  if (!t) throw new InputError('Informe o cuidado ou a consulta.', 'event');
  if (t.length > 80) throw new InputError('Use até 80 caracteres no título.', 'event');
  if (!validDate(date)) throw new InputError('Informe uma data válida.', 'date');
  const end = new Date(date + 'T12:00:00Z');
  end.setUTCDate(end.getUTCDate() + 1);
  const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Clube Bicho e Cia//Agenda//PT-BR', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    'UID:' + (uid || `${now.getTime()}-${Math.random().toString(36).slice(2)}@clubebichoecia.com.br`),
    'DTSTAMP:' + stamp,
    'DTSTART;VALUE=DATE:' + date.replaceAll('-', ''),
    'DTEND;VALUE=DATE:' + end.toISOString().slice(0, 10).replaceAll('-', ''),
    'SUMMARY:' + escapeText(t),
    'DESCRIPTION:Data informada pelo tutor. Confirme o atendimento com o profissional.',
    'END:VEVENT', 'END:VCALENDAR', ''].join('\r\n');
}
