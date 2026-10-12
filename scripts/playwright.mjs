// Carrega o Playwright (dependência só de desenvolvimento, usada por og.mjs, icones.mjs e testes de navegador).
// Usa a instalação local (npm i -D playwright) ou, se não houver, a global do ambiente.
export async function chromium() {
  let mod;
  try { mod = await import('playwright'); } catch {
    try { mod = await import('/opt/node-tools/node_modules/playwright/index.mjs'); } catch {
      throw new Error('Playwright não encontrado. Rode: npm i -D playwright && npx playwright install chromium');
    }
  }
  const executablePath = process.env.CHROMIUM_PATH;
  return mod.chromium.launch(executablePath ? { executablePath } : {});
}
