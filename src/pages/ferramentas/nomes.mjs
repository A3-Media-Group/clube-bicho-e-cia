// Ferramenta: nomes para cachorro e gato.
import { toolPage } from '../../templates.mjs';
import { byId, NAME_LISTS } from '../../site.mjs';
import { FORMS } from '../../forms.mjs';
import { filterNames, ESTILOS } from '../../js/calc/nomes.mjs';

const total = filterNames({}).length;

export default toolPage({
  id: 'nomes',
  updated: '2026-10-13',
  consulted: '2026-10-12',
  title: 'Nomes para cachorro e gato: gerador por estilo e sexo',
  description: `Gerador de nomes para cachorro e gato com ${total} sugestões: escolha espécie, macho ou fêmea, estilo e porte e sorteie ideias para o seu pet.`,
  h1: 'Nomes para cachorro e gato: gerador de ideias',
  lead: 'Escolha espécie, sexo, estilo e porte e sorteie seis sugestões por vez.',
  intro: `<p>Prefere ver todos de uma vez? Confira as listas completas de ${NAME_LISTS.map(l => `<a href="${l.path}">${l.name.toLowerCase()}</a>`).join(', ').replace(/, ([^,]*)$/, ' e $1')}.</p>`,
  form: FORMS.nomes,
  sections: [
    { h2: 'Como o gerador escolhe os nomes', html: `<p>Os ${total} nomes foram selecionados pela redação e marcados por espécie, sexo, estilo (${Object.values(ESTILOS).map(e => e.toLowerCase()).join(', ')}) e, em alguns casos, porte do cão. O gerador filtra a lista com as opções escolhidas e sorteia seis nomes; cada clique sorteia de novo.</p><p>Não é um ranking de popularidade: não temos dados de registro de nomes de pets no Brasil.</p>` },
    { h2: 'Exemplo: cadela de porte grande', html: '<p>Escolhendo cachorro, fêmea e porte grande, o sorteio usa nomes marcados como grandes ou sem porte definido, como Atena, Freya, Xena ou Luna. Se quiser só nomes de comida, troque o estilo para “Comidinhas”.</p>' },
    { h2: 'Dicas para escolher o nome', html: `<ul><li><strong>Prefira nomes curtos</strong>, de duas sílabas, que o animal reconhece com mais facilidade.</li><li><strong>Evite nomes parecidos com comandos</strong> que você vai usar, como “não” ou “senta”.</li><li><strong>Teste em voz alta</strong> e veja se toda a família consegue chamar do mesmo jeito.</li><li><strong>Combine com a coleira de identificação</strong>: nome e telefone ajudam se o pet se perder.</li></ul><p>Chegou um filhote? Registre a primeira consulta na <a href="${byId('agenda').path}">agenda de cuidados</a> e descubra a fase de vida dele com a <a href="${byId('idade').path}">calculadora de idade do pet</a>.</p>` }
  ],
  faqTitle: 'Perguntas frequentes sobre nomes de pets',
  faq: [
    { q: 'Posso usar os nomes para gato e para cachorro?', a: 'A maioria serve para os dois. Alguns aparecem só para cães, como os ligados a porte.' },
    { q: 'Os nomes são os mais populares?', a: 'Não. É uma seleção editorial; não usamos ranking de popularidade.' },
    { q: 'Como trocar o nome de um pet adotado?', a: 'Use o nome novo com frequência e associe a coisas boas, como carinho e petiscos. Com paciência, o animal se acostuma.' }
  ],
  sources: [],
  sourcesNote: 'Seleção editorial original do Clube Bicho e Cia, sem dados de popularidade.',
  related: ['idade', 'agenda', 'guia-idade']
});
