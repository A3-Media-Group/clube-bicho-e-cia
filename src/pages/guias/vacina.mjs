// Guia: vacina antirrábica.
import { guidePage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const agenda = byId('agenda');
const gastos = byId('gastos');
const idade = byId('guia-idade');

export default guidePage({
  id: 'guia-vacina',
  published: '2026-09-13',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Vacina antirrábica para cães e gatos: o que saber',
  description: 'Entenda por que vacinar cães e gatos contra a raiva, onde encontrar a vacina gratuita, como se preparar e o que fazer em caso de mordida ou arranhão.',
  h1: 'Vacina antirrábica para cães e gatos: por que, onde e como se preparar',
  lead: 'A raiva é uma doença grave que passa dos animais para as pessoas. Vacinar cães e gatos protege o pet e a família.',
  photoAlt: 'Golden retriever sorridente olhando para a câmera',
  quick: `<p>O Ministério da Saúde orienta vacinar cães e gatos contra a raiva todos os anos; a vacina é <strong>gratuita no SUS</strong>, e a Secretaria Municipal de Saúde informa onde e quando há vacinação. Leve a carteirinha, conte ao profissional como o animal está de saúde e registre a próxima data.</p><p>Se uma pessoa for mordida ou arranhada, <strong>lave o ferimento com água e sabão e procure um serviço de saúde no mesmo dia</strong>.</p>`,
  sections: [
    { h2: 'Por que a vacina antirrábica é tão importante', html: `<p>A raiva é causada por um vírus que ataca o sistema nervoso. Segundo a Organização Mundial da Saúde (OMS), depois que os sintomas aparecem ela é fatal em praticamente todos os casos, tanto em animais quanto em pessoas. A transmissão acontece principalmente pela saliva de um animal infectado, por mordida, arranhão ou lambedura em feridas e mucosas.</p><p>No ambiente urbano, cães, gatos e morcegos estão entre as principais fontes de transmissão. A OMS considera a vacinação dos cães a medida mais eficaz para proteger as pessoas, porque interrompe a circulação do vírus antes que ele chegue a elas. Ao vacinar o seu animal, você protege a casa e a vizinhança.</p>` },
    { h2: 'O que diz a orientação oficial no Brasil', html: `<p>O Ministério da Saúde faz campanhas de vacinação antirrábica de cães e gatos e orienta que a vacina seja repetida anualmente. O material da campanha nacional informa que:</p><ul><li>a vacina contra a raiva é segura e oferecida <strong>de graça pelo SUS</strong>;</li><li>a vacinação de cães e gatos começa <strong>a partir dos 3 meses de idade</strong>;</li><li>quem informa os locais e as datas é a <strong>Secretaria Municipal de Saúde</strong> da sua cidade.</li></ul><p>Clínicas veterinárias particulares também aplicam a vacina. O calendário completo do seu pet, incluindo outras vacinas, é definido pelo médico-veterinário de acordo com a idade, o histórico e o modo de vida do animal. Este guia não substitui essa orientação.</p>` },
    { h2: 'Passo a passo para o dia da vacinação', html: `<ol><li><strong>Confira a carteirinha.</strong> Veja a data da última dose antirrábica. Se perdeu o documento, avise o profissional.</li><li><strong>Confirme local e horário.</strong> Campanhas e postos fixos mudam a cada ano; consulte a prefeitura antes de sair.</li><li><strong>Leve o animal com segurança.</strong> Cães de guia e coleira; gatos sempre em caixa de transporte fechada. Isso evita fugas e brigas na fila.</li><li><strong>Informe a saúde do pet.</strong> Conte se ele está tomando remédio, se teve reação em vacinas anteriores, se está prenhe ou se mudou de comportamento. O profissional decide se é o momento de vacinar.</li><li><strong>Peça o registro.</strong> A dose deve ser anotada na carteirinha, com data e identificação.</li><li><strong>Programe a próxima data.</strong> Use a <a href="${agenda.path}">agenda de cuidados</a> para criar um lembrete no calendário do celular com a data indicada.</li><li><strong>Observe o animal depois.</strong> Se notar algo diferente nas horas seguintes, procure o serviço que aplicou a vacina ou a clínica veterinária.</li></ol>` },
    { h2: 'Mordida ou arranhão: o que fazer', html: `<p>Se uma pessoa for mordida ou arranhada por um cão, gato ou outro animal — inclusive o próprio pet — ou tiver contato com morcego:</p><ol><li><strong>Lave o local com bastante água e sabão</strong> imediatamente.</li><li><strong>Procure uma unidade de saúde no mesmo dia.</strong> É o serviço de saúde que avalia se a pessoa precisa de vacina ou soro antirrábico; essa decisão não deve ser adiada à espera de sintomas.</li><li><strong>Informe sobre o animal.</strong> Se ele tem dono, se está vacinado e se pode ser observado. Não tente capturar animais desconhecidos ou morcegos com as mãos.</li></ol><p>Se o seu pet foi mordido por outro animal, leve-o ao médico-veterinário e conte quando e como aconteceu.</p>` },
    { h2: 'Erros comuns sobre a vacina antirrábica', html: `<ul><li><strong>“Meu gato não sai de casa, não precisa.”</strong> Morcegos podem entrar em casas e apartamentos, e a orientação oficial inclui gatos.</li><li><strong>Deixar passar o prazo.</strong> Sem lembrete, um ano passa rápido. Anote a data na hora.</li><li><strong>Achar que a antirrábica cobre tudo.</strong> Ela protege só contra a raiva. Outras vacinas fazem parte do calendário definido pelo veterinário.</li><li><strong>Esperar sintomas depois de uma mordida.</strong> O atendimento deve ser procurado logo.</li><li><strong>Levar o gato no colo.</strong> Em lugares cheios, um susto pode causar fuga ou arranhões. Use caixa de transporte.</li></ul>` },
    { h2: 'Quando procurar o médico-veterinário', html: `<ul><li>Para montar ou atualizar o calendário de vacinas do seu animal, inclusive filhotes e adotados sem histórico.</li><li>Se o pet estiver doente, tomando medicamentos ou tiver tido reação a alguma vacina.</li><li>Se ele foi mordido ou arranhado por outro animal, ou teve contato com morcego.</li><li>Se surgir mudança de comportamento, dificuldade para engolir, salivação excessiva ou agressividade incomum: procure atendimento imediato e evite contato direto.</li></ul><p>Os custos de consultas e vacinas particulares podem entrar no seu planejamento com a calculadora de <a href="${gastos.path}">custo mensal do pet</a>.</p>` }
  ],
  faqTitle: 'Perguntas frequentes sobre a vacina antirrábica',
  faq: [
    { q: 'A vacina antirrábica é obrigatória?', a: 'O Ministério da Saúde recomenda a vacinação anual de cães e gatos, e muitos municípios têm regras próprias. Consulte a prefeitura da sua cidade.' },
    { q: 'Com quantos meses o filhote pode tomar a vacina antirrábica?', a: 'O material da campanha nacional orienta vacinar a partir dos 3 meses de idade. O veterinário confirma o momento certo para o seu filhote.' },
    { q: 'Onde vacinar de graça?', a: 'Nos postos e campanhas organizados pela Secretaria Municipal de Saúde. Datas e locais variam; consulte o site ou o telefone da prefeitura.' },
    { q: 'Gato que não sai de casa precisa tomar?', a: 'Sim, a orientação oficial inclui cães e gatos. Morcegos, uma das fontes de transmissão, podem entrar nas casas.' },
    { q: 'Meu cachorro vacinado mordeu alguém. E agora?', a: 'A pessoa deve lavar o ferimento com água e sabão e procurar uma unidade de saúde. Leve a carteirinha de vacinação do animal para informar o atendimento.' }
  ],
  sources: [
    { nome: 'Ministério da Saúde — Raiva (Saúde de A a Z)', url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/r/raiva' },
    { nome: 'Ministério da Saúde — Campanha de vacinação antirrábica 2022, folder (PDF)', url: 'https://www.gov.br/saude/pt-br/campanhas-da-saude/2022/Raiva/acesse-as-pecas/folder.pdf', nota: 'vacina gratuita no SUS, a partir dos 3 meses, conduta após mordida' },
    { nome: 'Organização Mundial da Saúde — Rabies (fact sheet)', url: 'https://www.who.int/news-room/fact-sheets/detail/rabies' }
  ],
  related: ['agenda', 'gastos', 'guia-idade']
});
