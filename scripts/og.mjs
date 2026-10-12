// Gera as imagens de compartilhamento (1200×675, JPG) de cada página em assets/og/<id>.jpg.
// Usa page.ogTitle (ou title sem a marca), page.ogLabel e page.ogPhoto. Requer Playwright.
// Rode depois de mudar títulos: npm run og
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadPages } from '../build.mjs';
import { ogImagePath } from '../src/layout.mjs';
import { esc } from '../src/html.mjs';
import { chromium } from './playwright.mjs';

const only = process.argv.slice(2);
const pages = (await loadPages()).filter(p => !only.length || only.includes(p.id));
const browser = await chromium();
const page = await browser.newPage({ viewport: { width: 1200, height: 675 } });
fs.mkdirSync(path.join(ROOT, 'assets/og'), { recursive: true });
for (const p of pages) {
  const title = (p.ogTitle || p.title).replace(/ \| Clube Bicho e Cia$/, '');
  const photo = 'data:image/webp;base64,' + fs.readFileSync(path.join(ROOT, `assets/img/${p.ogPhoto || 'dog'}-1200.webp`)).toString('base64');
  const label = p.ogLabel || (p.noindex ? 'CLUBE BICHO E CIA' : 'CUIDADOS COM CÃES E GATOS');
  const size = title.length > 60 ? 58 : title.length > 38 ? 66 : 76;
  await page.setContent(`<!doctype html><html><head><style>
    *{box-sizing:border-box}html,body{margin:0;width:1200px;height:675px;overflow:hidden;font-family:'Trebuchet MS','Liberation Sans',Arial,sans-serif}
    .card{display:grid;grid-template-columns:690px 510px;height:675px;background:#fffefa}
    .copy{padding:58px 56px 50px 64px;display:flex;flex-direction:column;justify-content:space-between}
    .brand{display:flex;align-items:center;gap:14px;font-weight:800;font-size:34px;letter-spacing:-1.5px;color:#262131}
    .brand b{color:#702bd4}.mark{width:58px;height:58px;border-radius:18px;background:#e6fc7a;display:grid;place-items:center;transform:rotate(-10deg)}
    .label{font-size:20px;font-weight:900;letter-spacing:3px;color:#702bd4;margin-bottom:18px}
    h1{margin:0;font-size:${size}px;line-height:1.04;letter-spacing:-2.5px;color:#262131;font-weight:900}
    .url{font-size:22px;color:#605b68;font-weight:bold}
    .photo{background:#ffe07c;padding:22px 0 22px 22px;border-radius:0}
    .photo img{width:100%;height:100%;object-fit:cover;border-radius:160px 0 0 40px;display:block}
  </style></head><body><div class="card"><div class="copy">
    <div class="brand"><span class="mark"><svg width="34" height="34" viewBox="0 0 64 64"><path fill="#702bd4" d="M32 0c2 17 15 30 32 32-17 2-30 15-32 32C30 47 17 34 0 32 17 30 30 17 32 0z"/></svg></span><span>clube <b>bicho</b> &amp; cia.</span></div>
    <div><div class="label">${esc(label)}</div><h1>${esc(title)}</h1></div>
    <div class="url">clubebichoecia.com.br</div>
  </div><div class="photo"><img src="${photo}"></div></div></body></html>`, { waitUntil: 'load' });
  await page.screenshot({ path: path.join(ROOT, ogImagePath(p)), type: 'jpeg', quality: 82 });
}
await browser.close();
console.log(`og: ${pages.length} imagens em assets/og/`);
