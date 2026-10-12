// Gera os HTMLs publicados a partir de src/layout.mjs + src/pages/*.mjs.
// Uso: node build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { render } from './src/layout.mjs';

const root = path.dirname(new URL(import.meta.url).pathname);
const pagesDir = path.join(root, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.mjs')).sort();
for (const f of files) {
  const { default: page } = await import(path.join(pagesDir, f));
  fs.writeFileSync(path.join(root, page.file), render(page));
}
console.log(`build: ${files.length} páginas geradas`);
