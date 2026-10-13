// Ferramenta: avaliação orientativa da condição corporal do cachorro.
import { toolPage } from '../../templates.mjs';
import { byId } from '../../site.mjs';
import { PERGUNTAS } from '../../js/calc/condicao.mjs';

const guia = byId('guia-peso');

const form = `<div class="calculator verde"><form data-tool="condicao" novalidate>${PERGUNTAS.map(p => `<fieldset class="choice" id="${p.id}"><legend><strong>${p.titulo}.</strong> ${p.pergunta}</legend>${p.opcoes.map((o, i) => `<label class="option"><input type="radio" name="${p.id}" value="${o.v}"> <span>${o.t}</span></label>`).join('')}</fieldset>`).join('')}<button class="button" type="submit" data-evento="ferramenta_calculou" data-ferramenta="condicao">Ver orientação <span aria-hidden="true">↗</span></button></form><div id="result" class="result"><p>Responda às três perguntas com o cão em pé e calmo.</p></div><p id="result-status" class="visually-hidden" role="status" aria-live="polite"></p><noscript><p class="noscript">Ative o JavaScript para ver a orientação. O guia de peso ideal continua disponível.</p></noscript></div>`;

export default toolPage({
  id: 'condicao',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Condição corporal do cachorro: avalie o peso em 3 perguntas',
  description: 'Responda sobre costelas, cintura e barriga e veja se o seu cachorro parece abaixo, perto ou acima do peso ideal. Orientação baseada em PDSA e WSAVA.',
  h1: 'Condição corporal do cachorro: avalie se ele está no peso ideal',
  lead: 'Três perguntas sobre costelas, cintura e barriga para saber se vale conversar com o veterinário sobre o peso do seu cão.',
  intro: `<p>Esta é a avaliação rápida. Para entender cada critério e montar um histórico de peso, leia o guia <a href="${guia.path}">peso ideal e condição corporal do cachorro</a>.</p>`,
  form,
  sections: [
    { h2: 'Como funciona a avaliação', html: '<p>As perguntas seguem os critérios que a PDSA ensina aos tutores e que a escala de condição corporal de 9 pontos da WSAVA usa para cães: <strong>costelas</strong> (sentidas com toque leve no peso adequado), <strong>cintura vista de cima</strong> (visível no peso adequado) e <strong>barriga vista de lado</strong> (recolhida no peso adequado).</p><p>Cada resposta indica magreza, condição adequada ou excesso. Se as três apontam para o mesmo lado, mostramos esse resultado; se só uma destoa, dizemos que o cão está perto do ideal com um sinal de atenção; se elas se contradizem, recomendamos a avaliação presencial. Não atribuímos uma nota da escala de 9 pontos: isso é feito pelo veterinário.</p>' },
    { h2: 'Exemplo: cão com costelas difíceis de sentir', html: '<p>Um tutor precisa apertar para sentir as costelas (excesso), vê pouca cintura de cima (excesso) e a barriga fica reta de lado (excesso). Resultado: <strong>parece acima do peso</strong>. O próximo passo é conversar com o veterinário antes de mudar a alimentação.</p>' },
    { h2: 'Quando não usar a avaliação', html: '<ul><li><strong>Gatos:</strong> os critérios são parecidos, mas esta versão foi feita para cães.</li><li><strong>Filhotes e fêmeas prenhes:</strong> a silhueta muda naturalmente.</li><li><strong>Cães com barriga inchada de repente</strong>, dificuldade para respirar ou dor: procure atendimento, pode ser urgência.</li><li><strong>Cães com pelagem muito densa</strong>, em que olhar não basta: use mais o toque ou peça ajuda ao veterinário.</li></ul>' }
  ],
  faqTitle: 'Perguntas frequentes sobre a condição corporal',
  faq: [
    { q: 'O resultado é um diagnóstico?', a: 'Não. É uma orientação para conversar com o veterinário, que examina o animal e pode atribuir a nota da escala de condição corporal.' },
    { q: 'Por que não pedir só o peso?', a: 'Porque cães do mesmo peso podem ter estruturas muito diferentes. A distribuição de gordura diz mais que o número da balança.' },
    { q: 'Meu cão parece acima do peso. Posso cortar a ração?', a: 'Não de forma drástica nem por conta própria. Peça ao veterinário um plano; reveja também os petiscos.' },
    { q: 'Com que frequência devo repetir?', a: 'A cada poucas semanas, se houver mudança na dieta ou na rotina, sempre do mesmo jeito.' }
  ],
  sources: [
    { nome: 'PDSA — Your dog’s Body Condition Score', url: 'https://www.pdsa.org.uk/get-involved/our-campaigns/weigh-up/your-dog/your-dogs-body-shape/your-dogs-body-condition-score' },
    { nome: 'WSAVA — Body Condition Score, Dog (PDF)', url: 'https://wsava.org/wp-content/uploads/2020/01/Body-Condition-Score-Dog.pdf' }
  ],
  related: ['guia-peso', 'racao', 'guia-racao']
});
