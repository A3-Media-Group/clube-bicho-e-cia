// Servidor local que imita a Hostinger: índice de diretório, 404 real, 301 das URLs antigas
// e bloqueio dos arquivos de desenvolvimento. Uso: npm start  (porta via PORT, padrão 4173)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { REDIRECTS } from '../src/redirects.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.webmanifest': 'application/manifest+json', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
const blocked = /^\/(src|scripts|tests|docs|data|node_modules)(\/|$)|^\/(build\.mjs|package(-lock)?\.json|README\.md)$|(^|\/)\.(?!well-known\/)/;

export function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    const p = decodeURIComponent(url.pathname);
    if (REDIRECTS[p]) { res.writeHead(301, { Location: REDIRECTS[p] }); return res.end(); }
    if (/(^|\/)index\.html$/.test(p)) { res.writeHead(301, { Location: p.replace(/index\.html$/, '') }); return res.end(); }
    let file = blocked.test(p) ? null : path.join(root, p);
    if (file && !file.startsWith(root)) file = null;
    if (file && fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      if (!p.endsWith('/')) { res.writeHead(301, { Location: p + '/' }); return res.end(); }
      file = path.join(file, 'index.html');
    }
    if (!file || !fs.existsSync(file)) {
      res.writeHead(404, { 'Content-Type': types['.html'] });
      return res.end(fs.readFileSync(path.join(root, '404.html')));
    }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.env.PORT) || 4173;
  createServer().listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}/`));
}
