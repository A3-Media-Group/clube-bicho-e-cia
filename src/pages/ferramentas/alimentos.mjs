// Ferramenta: alimentos proibidos para cães e gatos.
import { toolPage } from '../../templates.mjs';
import { FORMS } from '../../forms.mjs';
import { byId } from '../../site.mjs';
import { ALIMENTOS, FONTES } from '../../../data/alimentos.mjs';

const guia = byId('guia-alimentos');
const nCao = ALIMENTOS.filter(a => a.cao).length;
const nGato = ALIMENTOS.filter(a => a.gato).length;
const perigososCao = ALIMENTOS.filter(a => a.cao?.c === 'perigoso').map(a => a.nome.toLowerCase());

export default toolPage({
  id: 'alimentos',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Alimentos proibidos para cães e gatos: consulte a lista',
  description: 'Consulte se cachorro e gato podem comer uva, chocolate, queijo, banana e outros alimentos: seguro, com cuidado ou perigoso, com motivo e fonte.',
  h1: 'Alimentos proibidos para cães e gatos: consulte se o pet pode comer',
  lead: `Digite um alimento para ver se ele é seguro, pede cuidado ou é perigoso para cães e gatos. São ${ALIMENTOS.length} itens com fonte citada.`,
  intro: `<div class="callout"><p><strong>O pet já comeu algo suspeito?</strong> Não espere sintomas: ligue para a clínica veterinária agora e leve a embalagem. Não induza vômito sem orientação.</p></div><p>Esta é a consulta rápida. Para entender por que cada alimento faz mal e como prevenir acidentes em casa, leia o guia <a href="${guia.path}">alimentos perigosos para cães e gatos</a>.</p>`,
  form: FORMS.alimentos,
  sections: [
    { h2: 'Como funciona a consulta de alimentos', html: `<p>A base reúne ${nCao} alimentos com orientação para cães e ${nGato} para gatos. Cada item tem uma classificação por espécie:</p><ul><li><strong>Perigoso: não ofereça</strong> — a fonte descreve risco de intoxicação ou de lesão (por exemplo: ${perigososCao.slice(0, 6).join(', ')}).</li><li><strong>Com cuidado</strong> — não é tóxico na maioria dos casos, mas costuma causar diarreia, tem muita gordura ou sal, ou depende do preparo.</li><li><strong>Seguro com preparo adequado</strong> — pode ser petisco ocasional, sem tempero e na forma indicada.</li></ul><p>Os motivos são escritos pela redação a partir das fontes (ASPCA, AKC, FDA e Cornell), sempre com o link para conferir. Não informamos quantidades “seguras” de alimentos perigosos: a tolerância varia de animal para animal e esse cálculo é do médico-veterinário.</p>` },
    { h2: 'Exemplo: o cachorro pode comer queijo? E o gato pode tomar leite?', html: `<p>Ao digitar “queijo”, a consulta mostra <strong>com cuidado</strong> para as duas espécies: pedacinhos costumam ser tolerados por cães, mas muitos queijos são gordurosos e têm lactose. Ao digitar “leite”, aparece <strong>com cuidado</strong>: cães e gatos adultos produzem pouca lactase e costumam ter diarreia. Já “uva” aparece como <strong>perigoso</strong> para os dois.</p>` },
    { h2: 'Quando a consulta não basta', html: `<ul><li><strong>O alimento não está na lista.</strong> Ausência não significa que é seguro. Na dúvida, não ofereça.</li><li><strong>O pet comeu algo perigoso.</strong> A consulta não avalia quantidade nem risco individual. Ligue para a clínica veterinária.</li><li><strong>Animais com doença ou dieta especial.</strong> Mesmo alimentos “seguros” podem não servir para pets com problemas renais, diabetes, pancreatite, alergias ou obesidade.</li><li><strong>Pratos prontos.</strong> Molhos, temperos, recheios e massas costumam ter cebola, alho, sal ou açúcar.</li></ul>` }
  ],
  faqTitle: 'Perguntas frequentes sobre alimentos para cães e gatos',
  faq: [
    { q: 'Quais alimentos são proibidos para cachorro?', a: `Entre os perigosos estão ${perigososCao.join(', ')}. A lista completa aparece ao escolher “Perigosos” no filtro.` },
    { q: 'O que fazer se o cachorro comeu chocolate ou uva?', a: 'Ligue imediatamente para a clínica veterinária ou um atendimento de emergência, mesmo que ele pareça bem. Informe o que, quanto e quando ele comeu e leve a embalagem. Não provoque vômito sem orientação.' },
    { q: 'Gato pode comer as mesmas coisas que cachorro?', a: 'Nem sempre. Gatos são carnívoros estritos e, segundo a ASPCA, mais sensíveis a cebola e alho. Para vários alimentos as fontes só tratam de cães; nesses casos a consulta avisa e recomenda não oferecer.' },
    { q: 'Frutas são bons petiscos?', a: 'Algumas, como maçã sem sementes, banana e mirtilo, aparecem como seguras em pequena quantidade. Uva e passas, não. Petiscos devem ser uma parte pequena da alimentação.' },
    { q: 'A consulta substitui o veterinário?', a: 'Não. Ela ajuda a prevenir acidentes, mas não avalia o seu animal nem a quantidade ingerida.' }
  ],
  sources: Object.values(FONTES).map(f => ({ nome: f.nome, url: f.url })),
  related: ['guia-alimentos', 'racao', 'guia-racao']
});
