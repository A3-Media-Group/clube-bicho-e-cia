// Dados da página (creditos).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("creditos");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-09-13",
  title: "Créditos das fotos | Clube Bicho e Cia",
  description: "Créditos e licenças das fotografias de cães e gatos usadas no Clube Bicho e Cia, obtidas no Pexels, com links para as imagens originais dos autores.",
  ogTitle: "Créditos das fotos",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Créditos das fotos | Clube Bicho e Cia",
    "description": "Créditos e licenças das fotografias de cães e gatos usadas no Clube Bicho e Cia, obtidas no Pexels, com links para as imagens originais dos autores.",
    "inLanguage": "pt-BR"
  },
  main: `<article class="reading wrap"><h1>Créditos das fotos do Clube Bicho e Cia</h1><div class="reading-text"><p>Imagens obtidas no Pexels em 13/09/2026 e distribuídas localmente com o site, sob a <a href="https://www.pexels.com/pt-br/licenca/" target="_blank" rel="noopener noreferrer">Licença Pexels ↗</a>. Uso gratuito, inclusive comercial; não implicam endosso dos fotógrafos ao projeto.</p><h2>Cachorro</h2><p>Foto de david hou: <a href="https://www.pexels.com/photo/happy-golden-retriever-indoors-portrait-28914761/" target="_blank" rel="noopener noreferrer">Golden Retriever ↗</a>.</p><h2>Gato</h2><p>Foto de archisude: <a href="https://www.pexels.com/photo/portrait-of-cute-cat-19698730/" target="_blank" rel="noopener noreferrer">Portrait of Cute Cat ↗</a>.</p><h2>Passeio</h2><p>Foto de gabesdotphotos photographer: <a href="https://www.pexels.com/photo/a-person-walking-their-dog-11512143/" target="_blank" rel="noopener noreferrer">Walking their Dog ↗</a>.</p></div></article>`
};
