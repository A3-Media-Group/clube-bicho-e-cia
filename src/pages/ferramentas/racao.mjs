// Ferramenta: calculadora de ração.
import { toolPage } from '../../templates.mjs';
import { FORMS } from '../../forms.mjs';
import { byId } from '../../site.mjs';

const guia = byId('guia-racao');
const peso = byId('guia-peso');

export default toolPage({
  id: 'racao',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Calculadora de ração para cães e gatos: gramas por dia',
  description: 'Estime quantos gramas de ração por dia dar ao cão ou gato adulto e castrado, a partir do peso e das calorias do rótulo. Fórmula AAHA explicada.',
  h1: 'Calculadora de ração para cães e gatos: gramas por dia',
  lead: 'Informe a espécie, o peso e a energia da ração (kcal/kg) para estimar a porção diária de um adulto saudável e castrado.',
  intro: `<p>Esta página faz a conta. Para entender como ler o rótulo, por que a porção varia e quando ajustar, veja o guia <a href="${guia.path}">quanto de ração dar ao cachorro e ao gato</a>.</p>`,
  form: FORMS.racao,
  sections: [
    { h2: 'Como calculamos a quantidade de ração', html: `<p>Seguimos o método das diretrizes de nutrição de 2021 da AAHA (Box 1, cálculo das necessidades de energia):</p><ol><li><strong>Energia de repouso (RER):</strong> <span class="formula">RER = 70 × peso (kg)<sup>0,75</sup></span></li><li><strong>Energia de manutenção:</strong> multiplicamos a RER pela faixa indicada para adultos castrados: <strong>1,4 a 1,6</strong> para cães e <strong>1,2 a 1,4</strong> para gatos.</li><li><strong>Gramas por dia:</strong> dividimos as calorias pela energia da ração informada no rótulo e multiplicamos por 1.000. <span class="formula">gramas = kcal por dia ÷ kcal/kg da ração × 1.000</span></li></ol><p>O resultado é uma faixa, não um número exato. A própria AAHA trata esses fatores como ponto de partida: animais sedentários ou que vivem dentro de casa podem precisar de menos, e a porção deve ser ajustada acompanhando o peso e a condição corporal.</p>` },
    { h2: 'Exemplo resolvido: cão de 10 kg', html: `<p>Um cão adulto castrado de 10 kg, com uma ração de 3.600 kcal/kg:</p><ul><li>RER = 70 × 10<sup>0,75</sup> ≈ 70 × 5,62 ≈ <strong>394 kcal</strong></li><li>Manutenção = 394 × 1,4 a 394 × 1,6 ≈ <strong>551 a 630 kcal por dia</strong></li><li>Ração = 551 ÷ 3.600 × 1.000 a 630 ÷ 3.600 × 1.000 ≈ <strong>153 a 175 g por dia</strong></li></ul><p>Para um gato castrado de 4 kg com ração de 4.000 kcal/kg, a mesma conta dá cerca de 238 a 277 kcal e <strong>59 a 69 g por dia</strong>. Petiscos entram nesse total.</p>` },
    { h2: 'Quando não usar a calculadora de ração', html: `<p>A conta vale apenas para <strong>adultos saudáveis e castrados</strong>, no peso que o veterinário considera adequado. Não use para:</p><ul><li>filhotes e animais em crescimento;</li><li>fêmeas gestantes ou amamentando;</li><li>animais com doença (rins, fígado, diabetes, alergias, entre outras) ou com dieta terapêutica;</li><li>planos de emagrecimento ou ganho de peso — nesses casos o cálculo é outro e precisa de acompanhamento;</li><li>cães de trabalho ou muito ativos e animais idosos com perda de massa muscular;</li><li>alimentação natural ou caseira, que exige formulação por profissional.</li></ul><p>Se o seu pet ganhar ou perder peso com a porção calculada, quem deve ajustar é o médico-veterinário. O guia de <a href="${peso.path}">peso ideal e condição corporal</a> ajuda a observar em casa.</p>` }
  ],
  faqTitle: 'Perguntas frequentes sobre a quantidade de ração',
  faq: [
    { q: 'Onde encontro as kcal/kg da ração?', a: 'Na embalagem, geralmente como “energia metabolizável”. Se o rótulo informar kcal por 100 g, multiplique por 10; se informar kcal por xícara ou por lata, pergunte ao fabricante o valor por quilo.' },
    { q: 'A tabela da embalagem e a calculadora dão valores diferentes. Qual seguir?', a: 'As duas são estimativas. A tabela do fabricante considera a ração dele; a calculadora usa a fórmula da AAHA. Leve os dois números ao veterinário e acompanhe o peso por algumas semanas.' },
    { q: 'Posso usar para filhote?', a: 'Não. Filhotes têm necessidades de energia diferentes e a calculadora não faz esse cálculo. Siga a orientação do veterinário e a tabela da ração para filhotes.' },
    { q: 'Os petiscos entram na conta?', a: 'Sim. Petiscos, sachês e restos de comida somam calorias. Se oferecer petiscos, desconte da ração do dia.' },
    { q: 'Em quantas refeições divido a porção?', a: 'A calculadora estima o total diário. A divisão em refeições depende da espécie, da idade e da rotina; combine com o veterinário.' }
  ],
  sources: [
    { nome: 'AAHA — 2021 AAHA Nutrition and Weight Management Guidelines for Dogs and Cats (PDF)', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2021-nutrition-and-weight-management/resourcepdfs/new-2021-aaha-nutrition-and-weight-management-guidelines-with-ref.pdf', nota: 'Box 1, “Calculating energy requirements”: RER e fatores de manutenção' },
    { nome: 'AAHA — 2021 Nutrition and Weight Management Guidelines: Weight Reduction in the Obese Pet', url: 'https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/', nota: 'página que reproduz o Box 1 e o exemplo com fator 1,4' }
  ],
  related: ['guia-racao', 'condicao', 'guia-peso', 'alimentos']
});
