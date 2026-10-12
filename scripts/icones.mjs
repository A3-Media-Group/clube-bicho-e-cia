// Gera favicon.ico, icon-192.png, icon-512.png e apple-touch-icon.png a partir de favicon.svg.
// Requer Playwright (Chromium) e ImageMagick (para o .ico). Rode só quando o ícone mudar.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from './playwright.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const svg = fs.readFileSync(path.join(root, 'favicon.svg'), 'utf8');
const browser = await chromium();
const page = await browser.newPage();
const tmp = fs.mkdtempSync(path.join(process.env.TMPDIR || '/tmp', 'icones-'));
async function png(size, file, { padded = false } = {}) {
  // apple-touch-icon: fundo cheio (iOS arredonda os cantos sozinho).
  const inner = padded ? svg.replace('rx="18"', 'rx="0"') : svg;
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`<style>html,body{margin:0;background:transparent}svg{display:block;width:${size}px;height:${size}px}</style>${inner}`);
  await page.screenshot({ path: file, omitBackground: true });
}
await png(192, path.join(root, 'icon-192.png'));
await png(512, path.join(root, 'icon-512.png'));
await png(180, path.join(root, 'apple-touch-icon.png'), { padded: true });
for (const s of [16, 32, 48]) await png(s, path.join(tmp, `i${s}.png`));
await browser.close();
execFileSync('convert', [16, 32, 48].map(s => path.join(tmp, `i${s}.png`)).concat(path.join(root, 'favicon.ico')));
fs.rmSync(tmp, { recursive: true });
console.log('ícones gerados');
