// Dados da página (privacidade).html. O layout comum está em src/layout.mjs.
import { byId } from '../../site.mjs';

const item = byId("privacidade");
export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  updated: "2026-10-13",
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
  main: `<article class="reading wrap"><h1>Política de privacidade do Clube Bicho e Cia</h1><div class="reading-text"><p>Última atualização: 13/10/2026.</p><h2>Resumo</h2><ul><li>Não pedimos cadastro nem login.</li><li>O site não usa cookies, armazenamento local do navegador, ferramentas de análise de audiência (analytics), pixels de publicidade ou anúncios.</li><li>As ferramentas fazem as contas no seu navegador; os valores não são enviados para um servidor do site nem guardados por nós.</li></ul><h2>O que acontece com os valores das ferramentas</h2><p>Para que você possa salvar ou compartilhar um resultado, os campos das calculadoras aparecem no endereço da página (por exemplo, <code>?especie=cao&amp;peso=10</code>). Esse endereço fica no histórico do seu navegador e vai junto se você compartilhar o link. Se você abrir ou recarregar uma página com esses parâmetros, o endereço completo é recebido pelo servidor de hospedagem, como acontece com qualquer página da internet, e pode constar nos registros técnicos dele. O título digitado na agenda de cuidados não é colocado no endereço.</p><p>O lembrete .ics é criado no seu próprio aparelho. Se você importá-lo em um aplicativo de calendário, passam a valer as regras desse aplicativo.</p><h2>Hospedagem</h2><p>O site é hospedado na Hostinger. Como qualquer servidor, ela pode registrar dados técnicos de acesso, como endereço IP, data, página pedida e navegador, para segurança e funcionamento, conforme a política de privacidade da própria Hostinger. Não usamos esses registros para identificar visitantes.</p><h2>Links externos e contato</h2><p>Os links para fontes e para fotos levam a sites de terceiros, com políticas próprias. Se você nos escrever pelo e-mail indicado na página de <a href="/contato/">contato</a>, usaremos sua mensagem e seu endereço apenas para responder.</p><h2>Seus direitos</h2><p>Você pode pedir informações sobre dados pessoais tratados pelo site, nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), pelo canal de contato.</p><h2>Mudanças futuras</h2><p>Se o site passar a usar medição de audiência, anúncios ou formulários, esta política será atualizada antes, informando os serviços usados, e o consentimento será pedido quando a lei exigir.</p></div></article>`
};
