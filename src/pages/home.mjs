// Página inicial: vitrine de ferramentas e guias.
import { img } from '../html.mjs';
import { MENU_TOOLS as TOOLS, MENU_GUIDES as GUIDES } from '../site.mjs';
import { toolCard, guideCard } from '../components.mjs';
import { SITE_URL, SITE_NAME } from '../config.mjs';

export default {
  id: 'home',
  path: '/',
  updated: '2026-10-13',
  title: 'Clube Bicho e Cia: cuidados com cães e gatos e ferramentas',
  ogTitle: 'Cuidados com cães e gatos, com ferramentas grátis',
  ogLabel: 'CLUBE BICHO E CIA',
  description: 'Guias sobre cuidados com cães e gatos com fontes oficiais e ferramentas grátis: idade em anos humanos, ração por dia, alimentos proibidos e mais.',
  jsonLd: [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: SITE_URL + '/', inLanguage: 'pt-BR' },
    { '@context': 'https://schema.org', '@type': 'Organization', name: SITE_NAME, url: SITE_URL + '/', logo: SITE_URL + '/icon-512.png' }
  ],
  main: `<section class="hero wrap"><div class="hero-copy"><span class="eyebrow">PARA TODAS AS PATAS. E TODOS OS AFETOS.</span><h1>Cuidados com cães e gatos: <em>amar é natural, cuidar se aprende.</em></h1><p>Guias com fontes oficiais e ferramentas grátis para as dúvidas do dia a dia: idade em anos humanos, quantidade de ração, alimentos proibidos, vacinas e gastos.</p><div class="actions"><a class="button" href="/ferramentas/">Explorar ferramentas <span aria-hidden="true">↗</span></a><a class="text-link" href="/guias/">Ler os guias</a></div><div class="hero-note"><span aria-hidden="true">♡</span> Informação com fonte. Carinho de verdade.</div></div><div class="hero-photo">${img('dog', 'Golden retriever sorridente olhando para a câmera', { lcp: true, sizes: '(max-width: 600px) 100vw, 45vw' })}<div class="photo-label" aria-hidden="true">O melhor amigo merece<br><b>o melhor cuidado.</b> ♡</div><span class="sticker" aria-hidden="true">vida boa<br><b>é com pet!</b></span></div></section><div class="ribbon" aria-hidden="true"><span>CUIDADO COM CARINHO ✦</span><span>DESCOBERTAS TODOS OS DIAS ✦</span><span>MAIS TEMPO JUNTINHOS ✦</span></div><section class="wrap section" id="ferramentas"><div class="section-heading"><div><span class="eyebrow">MENOS DÚVIDAS, MAIS CUIDADO</span><h2>Ferramentas grátis para cães e gatos</h2></div><p>Seis calculadoras e consultas para a vida real.<br>Grátis, simples e sem cadastro.</p></div><div class="tool-grid">${TOOLS.map((t, i) => toolCard(t, i + 1)).join('')}</div><p class="hub-more"><a href="/ferramentas/">Ver todas as ferramentas</a></p></section><section class="guide-section" id="guias"><div class="wrap section"><div class="section-heading"><div><span class="eyebrow">INFORMAÇÃO QUE FAZ BEM</span><h2>Guias de cuidados com fontes citadas</h2></div><span class="source-badge"><span aria-hidden="true">✦</span> Links para as fontes em cada guia</span></div><div class="article-grid">${GUIDES.map(g => guideCard(g)).join('')}</div><p class="hub-more"><a href="/guias/">Ver todos os guias</a></p></div></section><section class="wrap care-banner"><span class="big-star" aria-hidden="true">✦</span><div><span class="eyebrow">JUNTOS PELO BEM-ESTAR ANIMAL</span><h2>Como escolhemos as nossas fontes</h2><p>Consultamos instituições como o Ministério da Saúde, a AAHA, a WSAVA e a ASPCA.<br>Você encontra os links para as páginas exatas ao final de cada guia e ferramenta.</p><a class="button light" href="/sobre/">Conheça a política editorial <span aria-hidden="true">↗</span></a></div></section>`
};
