// Pipeline de arquivos estáticos: CSS e módulos JS com hash de conteúdo no nome.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const hash = s => crypto.createHash('sha256').update(s).digest('hex').slice(0, 8);
const IMPORT_RE = /(\bfrom\s*|\bimport\s*\(\s*|\bimport\s+)(['"])(\.{1,2}\/[^'"]+)\2/g;

export function createPipeline(root) {
  const outDir = path.join(root, 'assets');
  const jsDir = path.join(outDir, 'js');
  fs.mkdirSync(jsDir, { recursive: true });
  const written = new Set();
  const modules = new Map(); // caminho de origem → { url, deps }

  function writeHashed(dir, base, ext, content) {
    const name = `${base}.${hash(content)}.${ext}`;
    fs.writeFileSync(path.join(dir, name), content);
    written.add(path.join(dir, name));
    return name;
  }

  function css(srcFile) {
    const content = fs.readFileSync(srcFile, 'utf8');
    return '/assets/' + writeHashed(outDir, path.basename(srcFile, '.css'), 'css', content);
  }

  // Processa um módulo e suas dependências relativas; devolve a URL pública.
  function js(srcFile) {
    srcFile = path.resolve(srcFile);
    if (modules.has(srcFile)) return modules.get(srcFile).url;
    let content = fs.readFileSync(srcFile, 'utf8');
    const deps = new Set();
    content = content.replace(IMPORT_RE, (all, prefix, quote, spec) => {
      const depUrl = js(path.resolve(path.dirname(srcFile), spec));
      deps.add(depUrl);
      for (const d of modules.get(path.resolve(path.dirname(srcFile), spec)).deps) deps.add(d);
      return prefix + quote + './' + path.basename(depUrl) + quote;
    });
    const name = path.basename(srcFile).replace(/\.m?js$/, '');
    const dir = path.basename(path.dirname(srcFile));
    const base = dir === 'tools' ? name : `${dir}-${name}`;
    const url = '/assets/js/' + writeHashed(jsDir, base, 'js', content);
    modules.set(srcFile, { url, deps: [...deps] });
    return url;
  }

  const depsOf = srcFile => modules.get(path.resolve(srcFile))?.deps || [];

  // Remove arquivos com hash de builds anteriores que não foram gerados agora.
  function clean() {
    const stale = [];
    for (const dir of [outDir, jsDir]) {
      for (const f of fs.readdirSync(dir)) {
        const p = path.join(dir, f);
        if (/\.[0-9a-f]{8}\.(css|js)$/.test(f) && !written.has(p)) { fs.unlinkSync(p); stale.push(f); }
      }
    }
    return stale;
  }

  return { css, js, depsOf, clean };
}
