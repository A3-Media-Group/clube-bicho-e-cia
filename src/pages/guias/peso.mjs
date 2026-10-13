// Guia: peso ideal e condição corporal do cachorro.
import { guidePage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const racao = byId('guia-racao');
const calc = byId('racao');

export default guidePage({
  id: 'guia-peso',
  published: '2026-09-13',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Peso ideal do cachorro: como avaliar a condição corporal',
  description: 'Veja como avaliar se o cachorro está no peso ideal pelas costelas, cintura e barriga, o que é a escala de condição corporal e quando ir ao veterinário.',
  h1: 'Peso ideal do cachorro: como avaliar a condição corporal em casa',
  lead: 'O número da balança sozinho não diz se o cão está magro, no ponto ou acima do peso. Costelas, cintura e barriga contam mais.',
  photoAlt: 'Golden retriever sorridente olhando para a câmera',
  quick: `<p>Um cão no peso adequado costuma ter <strong>costelas fáceis de sentir com um toque leve</strong>, sem estarem aparentes; <strong>cintura visível</strong> quando visto de cima; e <strong>barriga recolhida</strong> quando visto de lado. Se você não sente as costelas, não vê a cintura ou a barriga fica para baixo, ele pode estar acima do peso. Confirme com o médico-veterinário antes de mudar a alimentação.</p>`,
  sections: [
    { h2: 'Por que a balança não basta', html: `<p>Cães da mesma raça e do mesmo peso podem ter estruturas muito diferentes. Um cão de ossatura grande e musculoso pode pesar mais e estar ótimo; outro, com o mesmo peso, pode ter excesso de gordura. Por isso veterinários usam a <strong>avaliação da condição corporal</strong> (em inglês, <em>body condition score</em>), que observa onde está a gordura no corpo.</p><p>A WSAVA, associação mundial de veterinários de pequenos animais, publica uma escala de <strong>9 pontos</strong>: de 1 (muito magro) a 9 (obesidade grave), com 4 e 5 considerados ideais. A PDSA, instituição veterinária britânica, ensina uma versão simplificada para tutores, com cinco verificações em casa.</p>` },
    { h2: 'Como avaliar em casa, passo a passo', html: `<p>Faça a avaliação com o cão em pé e calmo, de preferência sempre do mesmo jeito:</p><ol><li><strong>Costelas:</strong> passe as mãos de leve pelas laterais do peito. No peso adequado, você sente as costelas sem precisar apertar, com uma camada fina de gordura por cima.</li><li><strong>Coluna e quadril:</strong> deslize a mão do pescoço até a cauda. Os ossos devem ser sentidos, mas não saltar aos olhos.</li><li><strong>Cintura vista de cima:</strong> olhando o cão de cima, deve haver uma curva para dentro logo depois das costelas.</li><li><strong>Barriga vista de lado:</strong> a linha da barriga deve subir em direção às patas traseiras, sem pender para baixo.</li><li><strong>Depósitos de gordura:</strong> observe a base da cauda, o pescoço e o peito. Acúmulos ali indicam excesso.</li></ol><p>Pelagem longa, raças com o peito profundo e cães muito musculosos podem confundir a avaliação visual; nesses casos, use mais o toque.</p>` },
    { h2: 'O que cada resultado sugere', html: `<div class="table-scroll"><table><thead><tr><th scope="col">O que você observa</th><th scope="col">Sugere</th></tr></thead><tbody><tr><td>Costelas, coluna e ossos do quadril visíveis à distância; pouca ou nenhuma gordura ao toque</td><td>Abaixo do peso</td></tr><tr><td>Costelas sentidas com toque leve; cintura visível de cima; barriga recolhida de lado</td><td>Próximo do ideal</td></tr><tr><td>Costelas difíceis de sentir; cintura pouco visível ou ausente; barriga reta ou caída; gordura na base da cauda</td><td>Acima do peso</td></tr></tbody></table></div><p>Essa leitura é uma <strong>orientação para conversar com o veterinário</strong>, não um diagnóstico. Perda ou ganho de peso podem ter causas de saúde que só o exame identifica.</p>` },
    { h2: 'Erros comuns ao controlar o peso', html: `<ul><li><strong>Comparar com o peso “da raça”.</strong> Tabelas por raça são médias; o ideal do seu cão é individual.</li><li><strong>Avaliar uma única foto.</strong> Ângulo, pelo e postura enganam.</li><li><strong>Cortar a comida drasticamente.</strong> Dietas por conta própria podem causar perda de músculo e falta de nutrientes.</li><li><strong>Esquecer os petiscos.</strong> Eles costumam ser a diferença entre manter e ganhar peso; veja como contá-los no guia <a href="${racao.path}">quanto de ração dar</a>.</li><li><strong>Pesar em balanças diferentes</strong> a cada vez. Use sempre a mesma, no mesmo horário.</li></ul>` },
    { h2: 'Monte um histórico simples', html: `<p>Anote a data, o peso, o que observou nas costelas, cintura e barriga, a ração e a quantidade diária. Uma foto de cima e outra de lado, sempre na mesma posição, ajudam a comparar. Leve o histórico às consultas: ele mostra tendências que uma pesagem isolada esconde.</p><p>Se o veterinário confirmar que o peso está adequado, a <a href="${calc.path}">calculadora de ração</a> ajuda a estimar a porção de manutenção de um adulto castrado.</p>` },
    { h2: 'Quando procurar o médico-veterinário', html: '<ul><li>Se as costelas e os ossos estiverem muito aparentes ou o cão estiver perdendo peso sem mudança na rotina.</li><li>Se você não consegue sentir as costelas ou nota barriga caída e gordura acumulada.</li><li>Antes de iniciar qualquer plano de emagrecimento ou de ganho de peso.</li><li>Se houver cansaço fácil, dificuldade para respirar, muita sede ou mudança de apetite.</li></ul>' }
  ],
  faqTitle: 'Perguntas frequentes sobre o peso do cachorro',
  faq: [
    { q: 'Qual é o peso ideal do meu cachorro?', a: 'Não existe um número único por raça. O peso ideal é aquele em que o cão tem condição corporal adequada, e o veterinário pode indicar um peso-alvo para o seu animal.' },
    { q: 'Como saber se o cachorro está gordo?', a: 'Se você não sente as costelas com um toque leve, não vê a cintura de cima e a barriga não sobe em direção às patas traseiras, ele provavelmente está acima do peso. Confirme na consulta.' },
    { q: 'O que é escore de condição corporal?', a: 'É uma escala usada por veterinários para avaliar a gordura do corpo. Na escala de 9 pontos da WSAVA, 4 e 5 são considerados ideais.' },
    { q: 'Posso usar o mesmo método para gatos?', a: 'O princípio é parecido (costelas, cintura e barriga), mas a WSAVA tem uma escala própria para gatos. Converse com o veterinário.' },
    { q: 'Com que frequência devo pesar o cão?', a: 'Para acompanhar uma mudança de dieta, a cada algumas semanas; para manutenção, nas consultas de rotina. Combine o intervalo com o veterinário.' }
  ],
  sources: [
    { nome: 'PDSA — Your dog’s Body Condition Score', url: 'https://www.pdsa.org.uk/get-involved/our-campaigns/weigh-up/your-dog/your-dogs-body-shape/your-dogs-body-condition-score' },
    { nome: 'WSAVA — Body Condition Score, Dog (PDF)', url: 'https://wsava.org/wp-content/uploads/2020/01/Body-Condition-Score-Dog.pdf', nota: 'escala de 9 pontos' },
    { nome: 'WSAVA — Global Nutrition Guidelines', url: 'https://wsava.org/global-guidelines/global-nutrition-guidelines/' }
  ],
  related: ['guia-racao', 'racao', 'guia-alimentos', 'guia-idade']
});
