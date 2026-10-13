// Ferramenta: custo mensal do pet.
import { toolPage } from '../../templates.mjs';
import { FORMS } from '../../forms.mjs';
import { byId } from '../../site.mjs';
import { CATEGORIES } from '../../js/calc/gastos.mjs';

const racao = byId('racao');
const agenda = byId('agenda');

export default toolPage({
  id: 'gastos',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Custo mensal do pet: calculadora de gastos com cão e gato',
  description: 'Some quanto você gasta por mês e por ano com seu cão ou gato: ração, banho, vacinas, consultas, plano de saúde e imprevistos. Com os seus valores.',
  h1: 'Custo mensal do pet: calcule os gastos com cachorro e gato',
  lead: 'Digite quanto você paga em cada item e veja o total por mês, por ano e por categoria. Nenhum preço é sugerido pelo site.',
  form: FORMS.gastos,
  sections: [
    { h2: 'Como calculamos o custo do pet', html: `<p>A conta é uma soma simples dos valores que você digita. Itens mensais entram como estão; itens anuais (consultas, vacinas e vermífugo) são divididos por 12:</p><p class="formula">total mensal = soma dos itens mensais + (soma dos itens anuais ÷ 12)<br>total anual = total mensal × 12</p><p>As categorias são: ${CATEGORIES.map(c => c.label.toLowerCase()).join('; ')}. Use a reserva para imprevistos para separar um valor todo mês para emergências.</p><p>Não usamos tabela de preços porque os valores mudam muito entre cidades, marcas, portes e clínicas, e qualquer média publicada aqui ficaria desatualizada.</p>` },
    { h2: 'Exemplo resolvido', html: `<p>Uma tutora gasta R$ 150 por mês com ração, R$ 60 com areia e higiene, R$ 1.200 por ano com consultas e separa R$ 50 por mês para imprevistos.</p><ul><li>Itens mensais: 150 + 60 + 50 = R$ 260</li><li>Consultas: 1.200 ÷ 12 = R$ 100 por mês</li><li>Total: <strong>R$ 360 por mês</strong>, ou <strong>R$ 4.320 por ano</strong></li></ul><p>Os números do exemplo são ilustrativos, não uma pesquisa de preços. Para estimar quanto de ração o pet consome, use a <a href="${racao.path}">calculadora de ração</a> e multiplique pelo preço do quilo que você paga.</p>` },
    { h2: 'Quando o orçamento não cobre tudo', html: `<ul><li><strong>Emergências e doenças crônicas.</strong> Cirurgias, internações e tratamentos longos podem superar qualquer reserva mensal.</li><li><strong>Primeiro ano do pet.</strong> Filhotes e animais recém-adotados costumam ter gastos iniciais (consultas, vacinas, castração, enxoval) que não se repetem todo ano.</li><li><strong>Fases da vida.</strong> Animais idosos podem precisar de exames e consultas mais frequentes.</li></ul><p>Para não esquecer as datas de consultas e vacinas que entram no orçamento, crie lembretes na <a href="${agenda.path}">agenda de cuidados</a>.</p>` }
  ],
  faqTitle: 'Perguntas frequentes sobre os gastos com pet',
  faq: [
    { q: 'Quanto custa ter um cachorro por mês?', a: 'Depende muito do porte, da ração, da cidade e dos serviços que você usa. Por isso a calculadora soma os seus próprios valores em vez de dar uma média.' },
    { q: 'Gato é mais barato que cachorro?', a: 'Não há uma resposta única. Gatos costumam dispensar banho e tosa, mas usam areia; cães grandes comem mais. Preencha os dois cenários e compare.' },
    { q: 'Vale a pena ter plano de saúde pet?', a: 'Depende da cobertura, da carência e do preço. Compare o valor anual do plano com o que você gastaria em consultas e exames, e leia o contrato.' },
    { q: 'Posso imprimir o orçamento?', a: 'Sim. Depois de calcular, use o botão Imprimir; a página sai só com a tabela do resultado.' }
  ],
  sources: [],
  sourcesNote: 'Método: soma aritmética dos valores digitados por você. O site não usa nem sugere preços.',
  related: ['racao', 'agenda', 'guia-racao']
});
