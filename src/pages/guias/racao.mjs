// Guia: quanto de ração dar.
import { guidePage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const calc = byId('racao');
const peso = byId('guia-peso');
const alimentos = byId('guia-alimentos');

export default guidePage({
  id: 'guia-racao',
  published: '2026-09-13',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Quanto de ração dar ao cachorro e ao gato por dia',
  description: 'Saiba como descobrir quanto de ração dar ao cachorro e ao gato: leia as calorias do rótulo, entenda a fórmula, conte os petiscos e ajuste pelo peso.',
  h1: 'Quanto de ração dar ao cachorro e ao gato por dia',
  lead: 'A quantidade certa depende do animal e da ração. O rótulo dá o ponto de partida, e o peso e a condição corporal dizem se é preciso ajustar.',
  photoAlt: 'Pessoa passeando com um cachorro na rua',
  quick: `<p>Comece pela tabela da embalagem ou por uma estimativa baseada nas calorias, como a da <a href="${calc.path}">calculadora de ração</a>. <strong>Pese a ração</strong> em vez de medir no olho, <strong>desconte os petiscos</strong> e acompanhe o peso e a silhueta do animal por algumas semanas. Quem ajusta a porção, principalmente em filhotes, idosos e animais com doença, é o médico-veterinário.</p>`,
  sections: [
    { h2: 'Por que não existe uma porção igual para todos', html: `<p>Dois cães com o mesmo peso podem precisar de quantidades bem diferentes de comida. A necessidade de energia muda com a idade, a castração, o nível de atividade, a raça, o clima e o estado de saúde. Além disso, cada ração tem uma concentração de calorias: <strong>100 g de uma marca podem ter bem mais energia que 100 g de outra</strong>.</p><p>Por isso as diretrizes de nutrição da AAHA, associação veterinária dos Estados Unidos, calculam primeiro a energia de que o animal precisa e só depois convertem para gramas, usando as calorias da ração escolhida.</p>` },
    { h2: 'Como ler o rótulo da ração', html: `<p>Procure na embalagem três informações:</p><ul><li><strong>Energia metabolizável</strong>, em kcal/kg (às vezes em kcal por 100 g ou por xícara). É o número que permite comparar rações e calcular a porção.</li><li><strong>Indicação de uso</strong>: espécie e fase da vida (filhote, adulto, idoso). Ração de filhote dada a um adulto, ou o contrário, muda a conta.</li><li><strong>Tabela de quantidade diária</strong> do fabricante, geralmente por faixa de peso. É uma média para animais típicos daquela faixa.</li></ul><p>Se a energia vier em kcal por 100 g, multiplique por 10 para ter kcal/kg. Se não encontrar a informação, o serviço de atendimento do fabricante pode informar.</p>` },
    { h2: 'Passo a passo para estimar a porção diária', html: `<ol><li><strong>Pese o animal</strong> em uma balança confiável (na clínica, se possível).</li><li><strong>Calcule a energia de repouso (RER)</strong>: 70 × peso em kg elevado a 0,75. Para um cão de 10 kg, cerca de 394 kcal.</li><li><strong>Multiplique pelo fator de manutenção</strong> que a AAHA indica para adultos castrados: 1,4 a 1,6 para cães e 1,2 a 1,4 para gatos. No exemplo, 551 a 630 kcal por dia.</li><li><strong>Converta para gramas</strong>: kcal por dia ÷ kcal/kg da ração × 1.000. Com uma ração de 3.600 kcal/kg, dá 153 a 175 g por dia.</li><li><strong>Desconte os petiscos</strong> e divida o total nas refeições combinadas com o veterinário.</li><li><strong>Reavalie em algumas semanas</strong>, pesando de novo e observando costelas e cintura.</li></ol><p>A <a href="${calc.path}">calculadora de ração para cães e gatos</a> faz essas contas para você. Ela vale apenas para adultos saudáveis e castrados.</p>` },
    { h2: 'Como saber se a porção está certa', html: `<p>Os melhores indicadores são o peso e a <strong>condição corporal</strong>: costelas fáceis de sentir com um toque leve, cintura visível de cima e barriga recolhida vista de lado. Se o animal está ganhando peso, a porção (ou os petiscos) está acima do necessário; se está perdendo sem motivo, procure o veterinário. O guia de <a href="${peso.path}">peso ideal e condição corporal</a> mostra como observar em casa.</p><p>As diretrizes da WSAVA, a associação mundial de veterinários de pequenos animais, recomendam avaliar a condição corporal em todas as consultas, justamente porque a fórmula é só o começo.</p>` },
    { h2: 'Erros comuns na hora de servir a ração', html: `<ul><li><strong>Medir com qualquer copo.</strong> Copos e conchas variam muito. Uma balança de cozinha resolve.</li><li><strong>Esquecer os petiscos e os restos de comida.</strong> Eles somam calorias e, às vezes, ingredientes perigosos; veja os <a href="${alimentos.path}">alimentos perigosos para cães e gatos</a>.</li><li><strong>Trocar de ração e manter a mesma quantidade.</strong> Se a nova ração tem outra energia por quilo, a porção muda.</li><li><strong>Deixar o pote sempre cheio</strong> sem controlar quanto o animal come, o que dificulta perceber ganho de peso ou falta de apetite.</li><li><strong>Cortar a comida drasticamente por conta própria</strong> para emagrecer o pet. Perda de peso precisa de plano e acompanhamento.</li><li><strong>Usar a porção de filhote em um adulto</strong> (ou o contrário).</li></ul>` },
    { h2: 'Quando procurar o médico-veterinário', html: `<ul><li>Antes de definir a alimentação de filhotes, gestantes, lactantes, idosos e animais com qualquer doença.</li><li>Se o pet ganhou ou perdeu peso sem mudança de rotina.</li><li>Se houver vômito, diarreia, muita sede, falta de apetite ou apetite exagerado.</li><li>Para planos de emagrecimento e para dietas caseiras ou naturais, que precisam ser formuladas por profissional.</li></ul>` }
  ],
  faqTitle: 'Perguntas frequentes sobre a quantidade de ração',
  faq: [
    { q: 'Quantas gramas de ração um cachorro de 10 kg come por dia?', a: `Depende da ração. Para um adulto castrado e saudável, com ração de 3.600 kcal/kg, a estimativa da AAHA fica entre cerca de 153 e 175 g por dia. Com outra ração, o valor muda; use a <a href="${calc.path}">calculadora</a> com o número do seu rótulo.` },
    { q: 'Quanto um gato adulto deve comer por dia?', a: 'Um gato castrado de 4 kg, com ração de 4.000 kcal/kg, ficaria em torno de 59 a 69 g por dia pela mesma fórmula. Gatos sedentários podem precisar de menos.' },
    { q: 'É melhor seguir a tabela da embalagem?', a: 'Ela é um bom começo. A fórmula ajuda a comparar rações e a entender a faixa. Em qualquer caso, quem confirma a porção é o acompanhamento do peso.' },
    { q: 'Castrar muda a quantidade de ração?', a: 'Sim. Animais castrados costumam precisar de menos energia, por isso a AAHA usa fatores menores para eles.' },
    { q: 'Posso misturar ração seca e úmida?', a: 'Pode, desde que some as calorias das duas. Combine as proporções com o veterinário.' }
  ],
  sources: [
    { nome: 'AAHA — 2021 AAHA Nutrition and Weight Management Guidelines for Dogs and Cats (PDF)', url: 'https://www.aaha.org/wp-content/uploads/globalassets/02-guidelines/2021-nutrition-and-weight-management/resourcepdfs/new-2021-aaha-nutrition-and-weight-management-guidelines-with-ref.pdf', nota: 'Box 1, cálculo das necessidades de energia' },
    { nome: 'AAHA — Weight Reduction in the Obese Pet (2021 Guidelines)', url: 'https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/weight-reduction-in-the-obese-pet/', nota: 'fatores de manutenção e exemplo resolvido' },
    { nome: 'WSAVA — Global Nutrition Guidelines', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/', nota: 'avaliação nutricional e condição corporal' }
  ],
  related: ['racao', 'guia-peso', 'guia-alimentos', 'gastos']
});
