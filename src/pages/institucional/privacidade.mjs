// Dados da página (privacidade).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("privacidade");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-09-13",
  title: "Política de privacidade | Clube Bicho e Cia",
  description: "Saiba quais dados o Clube Bicho e Cia trata: as ferramentas funcionam no navegador, sem cadastro, cookies, analytics ou anúncios. Veja os detalhes.",
  ogTitle: "Política de privacidade",
  ogType: "website",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Política de privacidade | Clube Bicho e Cia",
    "description": "Saiba quais dados o Clube Bicho e Cia trata: as ferramentas funcionam no navegador, sem cadastro, cookies, analytics ou anúncios. Veja os detalhes.",
    "inLanguage": "pt-BR"
  },
  main: `<article class="reading wrap"><h1>Política de privacidade do Clube Bicho e Cia</h1><div class="reading-text"><p>Atualização: 13/09/2026.</p><h2>O que acontece com seus dados</h2><p>Os campos das ferramentas são processados no seu navegador. Este código não envia os valores a um servidor, não cria contas e não usa cookies, armazenamento local, analytics ou pixels de publicidade. Ao recarregar a página, os resultados não são mantidos pelo site; seu navegador pode restaurar campos conforme suas próprias preferências.</p><h2>Arquivos e links</h2><p>O lembrete .ics é criado no seu dispositivo. Se você o importar em outro aplicativo, passam a valer as políticas desse serviço. Fotografias, estilos e scripts são servidos junto com o site. Links externos só levam você ao serviço de destino quando acessados.</p><h2>Hospedagem</h2><p>O provedor que hospeda o site pode tratar informações técnicas de conexão, como endereço IP e registros de acesso, conforme sua própria política. Em uma publicação no GitHub Pages, consulte a <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">política do GitHub ↗</a>.</p><h2>Mudanças futuras</h2><p>A inclusão de anúncios, formulários ou medição de audiência exige atualizar esta página e informar os serviços efetivamente usados. Esta versão não os ativa. Para solicitações relativas à publicação, utilize o canal disponibilizado pelo responsável no repositório, evitando dados pessoais em Issues públicas.</p></div></article>`
};
