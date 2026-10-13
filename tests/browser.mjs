// Validação no navegador a 390 px (npm run test:browser). Requer Playwright/Chromium.
// Cobre cada ferramenta com zero, vazio, decimais com vírgula, valores extremos, query string,
// copiar e impressão, além de erros de console e rolagem horizontal em todas as páginas.
import assert from 'node:assert/strict';
import { createServer } from '../scripts/serve.mjs';
import { chromium } from '../scripts/playwright.mjs';
import { loadSite } from '../scripts/site.mjs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 4190, B = `http://127.0.0.1:${PORT}`;
const srv = createServer().listen(PORT);
const browser = await chromium();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, permissions: ['clipboard-read', 'clipboard-write'] });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(`${page.url()}: ${e.message}`));
page.on('console', m => { if (m.type() === 'error' && !m.text().includes('404')) errors.push(`${page.url()}: ${m.text()}`); });
const text = async (sel = '#result') => (await page.textContent(sel)).replace(/\s+/g, ' ');
const submit = () => page.click('form[data-tool] button[type=submit]');
let checks = 0;
const check = async (name, fn) => { try { await fn(); checks++; } catch (e) { console.error('FALHOU:', name, '\n ', e.message); process.exitCode = 1; } };
const T = '/ferramentas/';

await check('todas as páginas: sem erro e sem rolagem horizontal', async () => {
  for (const p of loadSite(root).pages) {
    const res = await page.goto(B + p.urlPath);
    assert.equal(res.status(), p.urlPath === '/404.html' ? 200 : 200, p.urlPath);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), true, `rolagem horizontal em ${p.urlPath}`);
  }
});

await check('idade', async () => {
  await page.goto(B + T + 'idade-do-pet-em-anos-humanos/');
  await submit(); assert.match(await text(), /Confira os campos/);
  await page.fill('#anos', '0'); await page.fill('#meses', '0'); await submit(); assert.match(await text(), /pelo menos 1 mês/);
  await page.fill('#anos', '2,5'); await submit(); assert.match(await text(), /número inteiro/);
  await page.fill('#anos', '30'); await page.fill('#meses', ''); await submit(); assert.match(await text(), /Cerca de 164 anos humanos/);
  await page.fill('#anos', '31'); await submit(); assert.match(await text(), /Confira/);
  await page.fill('#anos', '3'); await page.fill('#meses', '6'); await submit(); assert.match(await text(), /Cerca de 29 anos humanos/); assert.match(page.url(), /especie=cao&anos=3&meses=6/);
  await page.goto(B + T + 'idade-do-pet-em-anos-humanos/?especie=gato&anos=10'); assert.match(await text(), /Cerca de 56 anos/);
});

await check('ração + copiar + impressão', async () => {
  await page.goto(B + T + 'calculadora-de-racao-para-caes-e-gatos/');
  await submit(); assert.match(await text(), /Confira/);
  await page.fill('#peso', '0'); await page.fill('#kcal', '3600'); await submit(); assert.match(await text(), /entre 0,5 e 100/);
  await page.fill('#peso', '10,0'); await page.fill('#kcal', '3.600'); await submit(); assert.match(await text(), /153 a 175 g/);
  assert.match(page.url(), /peso=10%2C0/);
  await page.click('text=Copiar resultado'); await page.waitForTimeout(150);
  assert.match(await page.evaluate(() => navigator.clipboard.readText()), /153 a 175 g/);
  await page.emulateMedia({ media: 'print' });
  assert.equal(await page.isVisible('form[data-tool]'), false, 'formulário aparece na impressão');
  assert.equal(await page.isVisible('#result'), true);
  await page.emulateMedia({ media: 'screen' });
  await page.fill('#peso', '100'); await page.fill('#kcal', '10000'); await submit(); assert.match(await text(), /g de ração por dia/);
  await page.goto(B + T + 'calculadora-de-racao-para-caes-e-gatos/?especie=gato&peso=4&kcal=4000'); assert.match(await text(), /59 a 69 g/);
});

await check('alimentos', async () => {
  await page.goto(B + T + 'alimentos-proibidos-para-caes-e-gatos/?q=uva'); assert.match(await text(), /Uva: cachorro — perigoso/);
  await page.fill('#q', 'cafe'); await page.waitForTimeout(400); assert.match(await text(), /Café e cafeína/);
  await page.fill('#q', 'zzzz'); await submit(); assert.match(await text(), /Não encontramos/);
});

await check('gastos', async () => {
  await page.goto(B + T + 'custo-mensal-do-pet/');
  await submit(); assert.match(await text(), /pelo menos um valor/);
  await page.fill('#racao', '150,50'); await page.fill('#consulta', '1.200'); await submit(); assert.match(await text(), /R\$ 250,50 por mês/);
  await page.fill('#areia', '-1'); await submit(); assert.match(await text(), /números positivos/);
});

await check('agenda', async () => {
  await page.goto(B + T + 'agenda-de-cuidados-do-pet/');
  await submit(); assert.match(await text(), /Informe o cuidado/);
  await page.fill('#evento', 'Retorno'); await page.fill('#data', '2026-12-01');
  const [dl] = await Promise.all([page.waitForEvent('download'), submit()]);
  assert.equal(dl.suggestedFilename(), 'cuidado-pet.ics');
  assert.doesNotMatch(page.url(), /Retorno/);
});

await check('nomes e listas', async () => {
  await page.goto(B + T + 'nomes-para-cachorro-e-gato/?especie=cao&sexo=f'); assert.match(await text(), /Sorteados entre/);
  await page.goto(B + T + 'nomes-para-cachorro-e-gato/gato/?sexo=f&estilo=comidas'); assert.match(await text('#nomes-contagem'), /\d+ nomes/);
});

await check('condição corporal, plantas e primeiro ano', async () => {
  await page.goto(B + T + 'condicao-corporal-do-cachorro/'); await submit(); assert.match(await text(), /Responda/);
  await page.goto(B + T + 'condicao-corporal-do-cachorro/?costelas=0&cintura=0&barriga=0'); assert.match(await text(), /próximo do peso ideal/);
  await page.goto(B + T + 'plantas-toxicas-para-caes-e-gatos/?q=lirio'); assert.match(await text('#plantas-contagem'), /2 plantas/);
  await page.goto(B + T + 'custo-do-primeiro-ano-com-pet/'); await page.fill('#enxoval', '500'); await page.fill('#racao', '150'); await submit(); assert.match(await text(), /R\$ 2.300,00 no primeiro ano/);
});

await check('404 real e 301', async () => {
  const r = await page.request.get(B + '/nao-existe'); assert.equal(r.status(), 404);
  const old = await page.request.get(B + '/racao.html', { maxRedirects: 0 }); assert.equal(old.status(), 301);
  assert.equal(old.headers().location, '/ferramentas/calculadora-de-racao-para-caes-e-gatos/');
});

assert.deepEqual(errors, [], 'erros de console');
console.log(`navegador: ${checks} grupos de verificação ok a 390 px`);
await browser.close(); srv.close();
