// Ferramenta: idade do pet em anos humanos.
import { toolPage } from '../../templates.mjs';
import { FORMS } from '../../forms.mjs';
import { byId } from '../../site.mjs';

const guia = byId('guia-idade');

export default toolPage({
  id: 'idade',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Idade do pet em anos humanos: calculadora para cães e gatos',
  ogTitle: 'Idade do pet em anos humanos',
  description: 'Calcule a idade do cachorro ou do gato em anos humanos, inclusive filhotes em meses, com a tabela de referência e o método do estudo genético.',
  h1: 'Idade do pet em anos humanos: calculadora para cães e gatos',
  lead: 'Informe a espécie e a idade em anos e meses para ver a equivalência em anos humanos.',
  intro: `<p>Esta é a calculadora. Para entender de onde vêm os números e por que a regra de multiplicar por sete não funciona, leia o guia <a href="${guia.path}">idade de cachorro e gato em anos humanos</a>.</p>`,
  form: FORMS.idade,
  sections: [
    { h2: 'Como calculamos a idade em anos humanos', html: `<p>Usamos uma tabela de referência baseada nas fontes citadas no fim da página, aplicada aos <strong>anos completos</strong> do animal:</p><ul><li><strong>Cachorro (referência para porte médio, AKC):</strong> 1 ano = 15 anos humanos; 2 anos = 24; depois, cerca de 5 anos humanos por ano.</li><li><strong>Gato (tabela FelineVMA):</strong> 1 ano = 15; 2 anos = 24; depois, cerca de 4 anos humanos por ano.</li></ul><p class="formula">a partir de 2 anos: 24 + (anos − 2) × 5 (cão) ou × 4 (gato)</p><p>Para cães, mostramos também o resultado do método publicado em 2020 por pesquisadores da Universidade da Califórnia em San Diego com participação do NHGRI, o instituto de pesquisa em genoma dos Institutos Nacionais de Saúde dos EUA. O estudo comparou marcas químicas no DNA (metilação) de cães e pessoas e chegou a esta fórmula:</p><p class="formula">idade humana = 16 × ln(idade do cão em anos) + 31</p><p>“ln” é o logaritmo natural. A fórmula foi obtida sobretudo com <strong>labradores</strong>, e os próprios autores alertam que raças com expectativa de vida diferente podem envelhecer em outro ritmo. Por isso ela aparece como informação complementar, só para cães de 2 meses a 16 anos (a faixa estudada), e nunca para gatos.</p>` },
    { h2: 'Exemplo resolvido: cão de 3 anos e 6 meses', html: `<p>Pela tabela, contam os 3 anos completos: 24 (até os 2 anos) + 1 × 5 = <strong>29 anos humanos</strong>.</p><p>Pelo método do estudo genético: 16 × ln(3,5) + 31 = 16 × 1,25 + 31 ≈ <strong>51 anos humanos</strong>.</p><p>A diferença é grande e mostra por que nenhuma das contas mede a saúde do animal: são formas diferentes de comparar fases da vida. Um gato de 10 anos, pela tabela, equivale a 24 + 8 × 4 = <strong>56 anos humanos</strong>.</p>` },
    { h2: 'Quando não usar esta calculadora', html: `<ul><li><strong>Para decidir cuidados de saúde.</strong> Exames, vacinas e mudanças na alimentação dependem da avaliação do médico-veterinário, não da idade equivalente.</li><li><strong>Para prever quanto tempo o pet vai viver.</strong> Raça, porte, genética e histórico mudam muito a longevidade.</li><li><strong>Para cães muito pequenos ou gigantes.</strong> A tabela usada é a referência para porte médio; cães grandes tendem a envelhecer mais depressa.</li><li><strong>Para gatinhos com menos de 1 ano.</strong> As fontes que usamos não trazem uma equivalência mês a mês para filhotes de gato, então a calculadora informa apenas que a tabela começa em 1 ano.</li><li><strong>Quando a idade é desconhecida.</strong> Em animais adotados, a idade estimada pelo veterinário já tem margem de erro.</li></ul>` }
  ],
  faqTitle: 'Perguntas frequentes sobre a idade do pet',
  faq: [
    { q: 'Um ano de cachorro vale sete anos humanos?', a: 'Não. A regra do “vezes sete” é antiga e não acompanha o desenvolvimento real: cães e gatos amadurecem muito rápido no primeiro ano e mais devagar depois. Por isso a tabela começa com 15 anos humanos no primeiro ano.' },
    { q: 'Por que a idade do meu cachorro deu diferente nos dois métodos?', a: 'A tabela compara fases da vida de forma simplificada; o método do estudo genético compara marcas químicas no DNA de labradores e pessoas. Os dois são aproximações e não precisam coincidir.' },
    { q: 'Como calcular a idade de um filhote?', a: 'Preencha só o campo de meses. Para cães a partir de 2 meses, a calculadora mostra a estimativa do método genético; para gatinhos, informa que a tabela de referência começa em 1 ano.' },
    { q: 'Com quantos anos um cachorro ou um gato é considerado idoso?', a: `Depende do porte, da raça e do animal. Converse com o médico-veterinário sobre a fase de vida do seu pet; o <a href="${guia.path}">guia de idade</a> explica o que as tabelas dizem.` },
    { q: 'A calculadora guarda a idade que eu digitei?', a: 'Não. O cálculo é feito no seu navegador. Os valores aparecem apenas no endereço da página, para você poder compartilhar o resultado se quiser.' }
  ],
  sources: [
    { nome: 'AKC — How to Calculate Dog Years to Human Years', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/', nota: 'referência de 15, +9 e cerca de +5 anos humanos por ano' },
    { nome: 'FelineVMA — Cat Age to Human Age (PDF)', url: 'https://catfriendly.com/wp-content/uploads/2025/09/FelineVMA_CatAgeToHumanAge.pdf', nota: 'tabela de idade de gatos' },
    { nome: 'Wang T. et al. Quantitative translation of dog-to-human aging by conserved remodeling of the DNA methylome. Cell Systems, 2020', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7484147/', nota: 'fórmula 16 × ln(idade) + 31' },
    { nome: 'NIH/NHGRI — NIH researchers reframe dog-to-human aging comparisons', url: 'https://www.nih.gov/news-events/news-releases/nih-researchers-reframe-dog-human-aging-comparisons', nota: 'limitação: dados sobretudo de labradores' }
  ],
  related: ['guia-idade', 'guia-vacina', 'nomes']
});
