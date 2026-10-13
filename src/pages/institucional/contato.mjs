// Contato. O e-mail vem de CONTATO_EMAIL; sem ele, a página fica noindex e o build avisa.
import { byId } from '../../site.mjs';
import { CONTATO_EMAIL } from '../../config.mjs';
import { esc } from '../../html.mjs';

const item = byId('contato');
const email = CONTATO_EMAIL
  ? `<p>Escreva para <a href="mailto:${esc(CONTATO_EMAIL)}" data-evento="clicou_contato">${esc(CONTATO_EMAIL)}</a>.</p>`
  : '<p class="review-note">O canal de contato ainda está sendo configurado. Enquanto isso, confira as fontes indicadas no fim de cada guia.</p>';

export default {
  id: item.id,
  path: item.path,
  crumbs: [{ name: item.name }],
  noindex: !CONTATO_EMAIL,
  warn: CONTATO_EMAIL ? null : 'CONTATO_EMAIL não definido: /contato/ foi gerada sem e-mail e com noindex.',
  updated: '2026-10-13',
  title: 'Contato | Clube Bicho e Cia',
  description: 'Fale com o Clube Bicho e Cia para sugerir correções, novas ferramentas ou guias. Não fazemos atendimento veterinário: em emergências, procure uma clínica.',
  main: `<article class="reading wrap"><h1>Contato com o Clube Bicho e Cia</h1><div class="reading-text">${email}<h2>Para que serve este canal</h2><ul><li>Avisar sobre um erro, um link quebrado ou uma fonte desatualizada.</li><li>Sugerir uma ferramenta ou um guia.</li><li>Pedidos relacionados aos seus dados, conforme a <a href="/privacidade/">política de privacidade</a>.</li></ul><h2>O que não respondemos</h2><p>Não fazemos atendimento, diagnóstico ou orientação veterinária individual por e-mail. <strong>Se o seu pet está passando mal ou comeu algo perigoso, ligue para uma clínica veterinária</strong> e veja <a href="/guias/meu-pet-comeu-algo-perigoso/">o que fazer agora</a>.</p><p>Evite enviar dados pessoais desnecessários ou informações de saúde de pessoas.</p></div></article>`
};
