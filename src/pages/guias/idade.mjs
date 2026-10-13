// Guia: idade de cachorro e gato em anos humanos.
import { guidePage } from '../../templates.mjs';
import { byId } from '../../site.mjs';

const calc = byId('idade');
const vacina = byId('guia-vacina');
const peso = byId('guia-peso');

export default guidePage({
  id: 'guia-idade',
  published: '2026-09-13',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Idade de cachorro e gato em anos humanos: por que não é ×7',
  ogTitle: 'Idade de cachorro e gato em anos humanos',
  description: 'Por que multiplicar por sete não funciona, como as tabelas comparam a idade de cães e gatos com a nossa e o que diz o estudo genético com labradores.',
  h1: 'Idade de cachorro e gato em anos humanos: por que multiplicar por sete não funciona',
  lead: 'Cães e gatos amadurecem muito depressa no início da vida e mais devagar depois. Por isso a conta linear não acompanha a realidade.',
  photoAlt: 'Gato de pelagem rajada deitado, olhando para o lado',
  quick: `<p>As referências usadas por veterinários comparam o <strong>primeiro ano</strong> de cães e gatos a cerca de <strong>15 anos humanos</strong> e o segundo a mais 9 (total de 24). Depois, cada ano vale aproximadamente <strong>4 anos humanos para gatos</strong> e cerca de <strong>5 para cães de porte médio</strong>, com variação por porte. A <a href="${calc.path}">calculadora de idade do pet</a> faz a conta; este guia explica de onde ela vem.</p>`,
  sections: [
    { h2: 'De onde veio a regra do “vezes sete”', html: `<p>A ideia de que um ano do cão vale sete dos nossos é antiga e popular, mas não tem base no desenvolvimento dos animais. Ela vem de uma comparação grosseira entre a expectativa de vida média de pessoas e de cães. O problema é que o ritmo de amadurecimento não é constante: um cão ou gato de 1 ano já é capaz de se reproduzir e tem o corpo praticamente adulto, algo que uma criança de 7 anos está longe de ter.</p><p>O AKC, entidade de cinologia dos Estados Unidos, afirma que cães não envelhecem na proporção de sete anos humanos por ano e apresenta uma referência mais próxima do desenvolvimento real.</p>` },
    { h2: 'O que dizem as tabelas para cães e gatos', html: `<div class="table-scroll"><table><thead><tr><th scope="col">Idade do animal</th><th scope="col">Cão de porte médio (AKC)</th><th scope="col">Gato (FelineVMA)</th></tr></thead><tbody><tr><td>1 ano</td><td>15 anos humanos</td><td>15 anos humanos</td></tr><tr><td>2 anos</td><td>24</td><td>24</td></tr><tr><td>Cada ano seguinte</td><td>cerca de +5</td><td>cerca de +4</td></tr><tr><td>10 anos</td><td>64</td><td>56</td></tr></tbody></table></div><p>Os valores de 10 anos foram calculados pela redação aplicando a regra de cada linha. Para cães, o próprio AKC observa que o porte muda a conta: <strong>raças grandes e gigantes tendem a envelhecer mais depressa</strong> e chegam à fase idosa mais cedo que as pequenas. Como não conseguimos confirmar a tabela oficial por porte, a calculadora usa apenas a referência para porte médio.</p>` },
    { h2: 'O estudo genético com labradores', html: `<p>Em 2020, pesquisadores da Universidade da Califórnia em San Diego, com participação do NHGRI (instituto de pesquisa em genoma dos Institutos Nacionais de Saúde dos EUA), compararam marcas químicas no DNA que mudam com a idade, chamadas de metilação, em 104 cães e em pessoas. Eles chegaram a uma fórmula logarítmica:</p><p class="formula">idade humana ≈ 16 × ln(idade do cão) + 31</p><p>Pela fórmula, um cão de 1 ano corresponde a cerca de 31 anos humanos, e um de 10 anos a cerca de 68. A curva sobe muito rápido no começo e se achata depois, o que combina com o desenvolvimento acelerado dos filhotes. Os autores, porém, destacam que os dados vieram <strong>sobretudo de labradores</strong> e que raças com expectativa de vida diferente podem seguir outro ritmo. A fórmula não se aplica a gatos.</p>` },
    { h2: 'Como usar a idade equivalente no dia a dia', html: `<ul><li><strong>Para entender a fase de vida:</strong> filhote, adulto jovem, adulto maduro ou idoso. Cada fase tem cuidados diferentes.</li><li><strong>Para conversar com o veterinário:</strong> pergunte quando começar exames de rotina para animais idosos e se a alimentação precisa mudar.</li><li><strong>Para observar mudanças:</strong> ganho de peso, perda de massa muscular e menos disposição merecem atenção; o guia de <a href="${peso.path}">peso ideal e condição corporal</a> ajuda.</li><li><strong>Para manter as vacinas em dia:</strong> a idade não muda a importância da <a href="${vacina.path}">vacina antirrábica</a>.</li></ul>` },
    { h2: 'Erros comuns sobre a idade dos pets', html: '<ul><li><strong>Usar o “vezes sete”</strong>, que subestima a idade dos jovens e superestima a dos mais velhos.</li><li><strong>Tratar a idade equivalente como diagnóstico.</strong> Ela não mede a saúde nem prevê quanto tempo o animal vai viver.</li><li><strong>Ignorar o porte do cão.</strong> Um dogue alemão de 7 anos e um chihuahua de 7 anos estão em fases bem diferentes.</li><li><strong>Aplicar a tabela de cães a gatos</strong> (ou o contrário).</li></ul>' },
    { h2: 'Quando procurar o médico-veterinário', html: '<ul><li>Para estimar a idade de um animal adotado, pelos dentes e pelo exame físico.</li><li>Quando o animal entra na fase idosa, para combinar a frequência de consultas e exames.</li><li>Se notar mudanças de comportamento, apetite, sono, peso ou mobilidade, em qualquer idade.</li></ul>' }
  ],
  faqTitle: 'Perguntas frequentes sobre a idade de cães e gatos',
  faq: [
    { q: 'Quantos anos humanos tem um cachorro de 1 ano?', a: 'Pela referência do AKC, cerca de 15. Pelo método do estudo genético com labradores, cerca de 31. As duas são aproximações.' },
    { q: 'Quantos anos humanos tem um gato de 10 anos?', a: 'Pela tabela da FelineVMA aplicada na nossa calculadora, cerca de 56 anos humanos.' },
    { q: 'Cachorro grande envelhece mais rápido?', a: 'Em geral, sim. Raças grandes e gigantes costumam ter vida mais curta e chegar antes à fase idosa, segundo o AKC.' },
    { q: 'A fórmula 16 × ln(idade) + 31 vale para todas as raças?', a: 'Não necessariamente. Ela foi obtida sobretudo com labradores, e os próprios pesquisadores alertam que outras raças podem envelhecer em outro ritmo.' },
    { q: 'Como calcular a idade do meu pet?', a: `Use a <a href="${calc.path}">calculadora de idade do pet em anos humanos</a>, que aceita anos e meses.` }
  ],
  sources: [
    { nome: 'AKC — How to Calculate Dog Years to Human Years', url: 'https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/' },
    { nome: 'FelineVMA — Cat Age to Human Age (PDF)', url: 'https://catfriendly.com/wp-content/uploads/2025/09/FelineVMA_CatAgeToHumanAge.pdf' },
    { nome: 'Wang T. et al. Cell Systems, 2020 — Quantitative translation of dog-to-human aging by conserved remodeling of the DNA methylome', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7484147/' },
    { nome: 'NIH/NHGRI — NIH researchers reframe dog-to-human aging comparisons', url: 'https://www.nih.gov/news-events/news-releases/nih-researchers-reframe-dog-human-aging-comparisons' }
  ],
  related: ['idade', 'guia-peso', 'guia-vacina', 'nomes']
});
