// Listas de nomes (cachorro macho, cachorro fêmea, gato). Cada página tem texto próprio.
import { byId, NAME_LISTS } from '../../site.mjs';
import { esc } from '../../html.mjs';
import { filterNames, ESTILOS } from '../../js/calc/nomes.mjs';
import { relatedHtml, byline, reviewNote } from '../../templates.mjs';
import { SITE_URL } from '../../config.mjs';

const gerador = byId('nomes');

const TEXTOS = {
  'nomes-cachorro-macho': {
    title: 'Nomes para cachorro macho: ideias por estilo',
    description: 'Lista de nomes para cachorro macho organizada por estilo: clássicos, fofos, fortes para cães grandes, comidinhas, natureza, famosos e bem brasileiros.',
    h1: 'Nomes para cachorro macho',
    lead: 'Mais de cem nomes para cães machos, separados por estilo, para ler em voz alta e ver qual combina com o seu.',
    intro: '<p>Nomes de duas sílabas, como Thor, Bento ou Fred, costumam ser fáceis de chamar no parque e de o cão reconhecer. Nos estilos “Fortes e marcantes” estão os nomes que a redação associou a cães de porte grande; em “Fofinhos”, os que combinam com os pequenos. Os nomes marcados para os dois sexos também aparecem aqui.</p>'
  },
  'nomes-cachorro-femea': {
    title: 'Nomes para cachorro fêmea: ideias para cadelas',
    description: 'Lista de nomes para cachorro fêmea por estilo: clássicos como Luna e Mel, fortes como Atena, fofinhos, comidinhas, natureza e nomes bem brasileiros.',
    h1: 'Nomes para cachorro fêmea',
    lead: 'Mais de cem nomes para cadelas, separados por estilo, do clássico ao divertido.',
    intro: '<p>Se a sua cadela vai atender pelo nome na rua, evite nomes parecidos com comandos e com o nome de outras pessoas da casa. Nomes curtos, como Mel, Nina ou Lola, são fáceis de chamar; nomes mais longos, como Penélope ou Cleópatra, costumam virar apelidos, e tudo bem.</p>'
  },
  'nomes-gato': {
    title: 'Nomes para gato e gata: lista por estilo',
    description: 'Lista de nomes para gato e gata por estilo e sexo: clássicos como Felix e Mia, comidinhas, natureza, personagens famosos e nomes bem brasileiros.',
    h1: 'Nomes para gato e gata',
    lead: 'Centenas de nomes para gatos e gatas, com filtro por sexo e estilo.',
    intro: '<p>Escolha um nome curto e fácil de repetir, use sempre o mesmo e associe-o a coisas boas, como comida e carinho. Use o filtro de sexo para ver só nomes de gato macho ou de gata, e o de estilo para ir direto às comidinhas, aos famosos ou aos nomes bem brasileiros.</p>'
  }
};

export default NAME_LISTS.map(list => {
  const t = TEXTOS[list.id];
  const names = filterNames(list.filtro);
  const isCat = list.filtro.especie === 'gato';
  const groups = Object.entries(ESTILOS).map(([k, label]) => {
    const items = names.filter(n => n.estilo === k);
    return items.length ? `<section class="name-group" data-estilo="${k}"><h2>${label}</h2><ul class="name-list">${items.map(n => `<li data-sexo="${n.sexo}">${esc(n.nome)}</li>`).join('')}</ul></section>` : '';
  }).join('');
  const others = NAME_LISTS.filter(l => l.id !== list.id);
  const form = `<div class="calculator roxo"><form data-tool="lista-nomes" novalidate><div class="field"><label for="q">Buscar nome</label><input id="q" name="q" type="search" autocomplete="off" placeholder="Ex.: Bel, Th"></div><div class="inline-fields"><div class="field"><label for="estilo">Estilo</label><select id="estilo" name="estilo"><option value="">Todos os estilos</option>${Object.entries(ESTILOS).map(([k, v]) => `<option value="${k}">${v}</option>`).join('')}</select></div>${isCat ? '<div class="field"><label for="sexo">Sexo</label><select id="sexo" name="sexo"><option value="">Qualquer</option><option value="m">Gato macho</option><option value="f">Gata</option></select></div>' : ''}</div><button class="button" type="submit" data-evento="ferramenta_calculou" data-ferramenta="lista-nomes">Filtrar <span aria-hidden="true">↗</span></button></form><div class="result"><p id="nomes-contagem">${names.length} nomes.</p><p>Prefere um sorteio? Use o <a href="${gerador.path}">gerador de nomes para cachorro e gato</a>.</p></div><p id="result-status" class="visually-hidden" role="status" aria-live="polite"></p></div>`;
  return {
    id: list.id, path: list.path,
    crumbs: [{ name: 'Ferramentas', path: '/ferramentas/' }, { name: gerador.short, path: gerador.path }, { name: list.short }],
    title: t.title, description: t.description, ogLabel: 'NOMES PARA PETS', ogPhoto: isCat ? 'cat' : 'dog',
    updated: '2026-10-13', scripts: ['src/js/tools/lista-nomes.js'],
    jsonLd: { '@context': 'https://schema.org', '@type': 'ItemList', name: t.h1, numberOfItems: names.length, url: SITE_URL + list.path },
    main: `<section class="wrap tool-page"><div class="tool-layout"><div><p class="eyebrow">LISTA DE NOMES • ${names.length} SUGESTÕES</p><h1>${t.h1}</h1><p class="lead">${t.lead}</p>${t.intro}<p>Veja também: ${others.map(o => `<a href="${o.path}">${o.name.toLowerCase()}</a>`).join(' e ')}.</p></div>${form}</div></section><div class="wrap tool-content"><div class="reading-text names-content">${groups}<section><h2>Como escolhemos estes nomes</h2><p>É uma seleção editorial do Clube Bicho e Cia, sem ranking de popularidade: não há dados públicos de registro de nomes de pets no Brasil. Os nomes foram agrupados por estilo para facilitar a escolha.</p></section>${relatedHtml(['nomes', ...others.map(o => o.id), 'primeiro-ano'], 'Mais ideias e ferramentas', { path: '/ferramentas/', label: 'Ver todas as ferramentas grátis para cães e gatos' })}${byline({ updated: '2026-10-13' })}</div></div>`
  };
});
