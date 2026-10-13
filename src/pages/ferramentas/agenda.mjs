// Ferramenta: agenda de cuidados (.ics).
import { toolPage } from '../../templates.mjs';
import { FORMS } from '../../forms.mjs';
import { byId } from '../../site.mjs';

const vacina = byId('guia-vacina');

export default toolPage({
  id: 'agenda',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Agenda de cuidados do pet: lembrete de vacina e consulta',
  description: 'Crie um lembrete no calendário do celular para a vacina, a consulta ou o vermífugo do pet, na data combinada com o veterinário. Grátis e sem cadastro.',
  h1: 'Agenda de cuidados do pet: lembrete de vacina e consulta no calendário',
  lead: 'Digite o cuidado e a data combinada com o profissional para baixar um lembrete que abre no calendário do celular ou do computador.',
  intro: `<p>A agenda <strong>não calcula datas de vacina</strong>: ela registra a data que o médico-veterinário indicou. Para entender a vacinação contra a raiva, leia o guia <a href="${vacina.path}">vacina antirrábica para cães e gatos</a>.</p>`,
  form: FORMS.agenda,
  sections: [
    { h2: 'Como funciona o lembrete .ics', html: `<p>Ao tocar no botão, o site monta no seu próprio aparelho um arquivo <strong>cuidado-pet.ics</strong>, o formato padrão de calendários (iCalendar). Ele contém um evento de dia inteiro com o título que você escreveu e a data escolhida. Nada é enviado para servidores e o site não cria conta nem manda notificações.</p><ol><li>Escreva o cuidado, por exemplo “Vacina antirrábica da Luna — posto do bairro”.</li><li>Escolha a data combinada.</li><li>Baixe o arquivo e abra-o: o celular oferece adicionar ao Google Agenda, ao Calendário do iPhone ou ao Outlook.</li><li>No aplicativo, ajuste horário e alerta (por exemplo, um dia antes).</li></ol>` },
    { h2: 'Exemplo: retorno ao veterinário em 15 dias', html: `<p>O veterinário pediu retorno em 15 dias. Você conta a data no calendário, escreve “Retorno — clínica X” e baixa o lembrete. Se o retorno mudar, apague o evento no aplicativo e gere outro.</p>` },
    { h2: 'Quando a agenda não serve', html: `<ul><li><strong>Para descobrir quando vacinar ou vermifugar.</strong> O calendário depende da idade, do histórico e da exposição do animal e é definido pelo médico-veterinário.</li><li><strong>Para confirmar atendimento.</strong> O arquivo não agenda nada na clínica nem no posto de vacinação.</li><li><strong>Para lembretes recorrentes.</strong> Cada arquivo cria um único evento; a repetição pode ser configurada no seu aplicativo de calendário.</li></ul>` }
  ],
  faqTitle: 'Perguntas frequentes sobre a agenda de cuidados',
  faq: [
    { q: 'O arquivo .ics funciona no celular?', a: 'Sim. Android e iPhone abrem arquivos .ics e oferecem adicionar o evento ao calendário. Se o navegador só baixar o arquivo, abra-o pela pasta de downloads.' },
    { q: 'A agenda me avisa da próxima vacina?', a: 'Não automaticamente. Ela cria o evento com a data que você escolheu; o aviso é configurado no seu aplicativo de calendário.' },
    { q: 'Vocês guardam o nome do meu pet ou a data?', a: 'Não. O arquivo é gerado no seu navegador. O título nem aparece no endereço da página; só a data, para você poder voltar a ela.' },
    { q: 'De quanto em quanto tempo o pet precisa de vacina?', a: `Isso é definido pelo médico-veterinário. Sobre a raiva, o <a href="${vacina.path}">guia de vacina antirrábica</a> resume a orientação do Ministério da Saúde.` }
  ],
  sources: [
    { nome: 'Ministério da Saúde — Raiva', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva', nota: 'informação oficial sobre a doença e a vacinação' },
    { nome: 'IETF — RFC 5545, Internet Calendaring and Scheduling (iCalendar)', url: 'https://www.rfc-editor.org/rfc/rfc5545', nota: 'formato do arquivo .ics' }
  ],
  related: ['guia-vacina', 'gastos', 'idade']
});
