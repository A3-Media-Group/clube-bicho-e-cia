// URLs antigas → novas (301). Usado pelo .htaccess gerado, pelo servidor local e pelos testes.
import { byId } from './site.mjs';

export const REDIRECTS = {
  '/idade.html': byId('idade').path,
  '/racao.html': byId('racao').path,
  '/alimentos.html': byId('alimentos').path,
  '/gastos.html': byId('gastos').path,
  '/agenda.html': byId('agenda').path,
  '/nomes.html': byId('nomes').path,
  '/vacinacao-antirrabica.html': byId('guia-vacina').path,
  '/alimentacao-e-porcoes.html': byId('guia-racao').path,
  '/alimentos-perigosos.html': byId('guia-alimentos').path,
  '/peso-e-condicao-corporal.html': byId('guia-peso').path,
  '/idade-caes-gatos.html': byId('guia-idade').path,
  '/sobre.html': byId('sobre').path,
  '/privacidade.html': byId('privacidade').path,
  '/termos.html': byId('termos').path,
  '/creditos.html': byId('creditos').path
};
