# Clube Bicho e Cia

Site estático em pt-BR sobre cuidados com cães e gatos — https://clubebichoecia.com.br — hospedado na **Hostinger**, que serve a raiz deste repositório.

Os HTMLs publicados são **gerados** por `build.mjs` e ficam commitados na raiz, para que o deploy da Hostinger continue funcionando sem configuração extra. **Não edite HTML gerado à mão**: edite `src/` e rode o build.

## Requisitos

- Node.js 22 (sem dependências de produção; o build usa só Node puro).
- Opcional, apenas para regenerar imagens: ImageMagick (WebP e .ico) e Playwright/Chromium (imagens de compartilhamento e ícones).

## Comandos

| Comando | O que faz |
|---|---|
| `npm run build` | Gera HTMLs, `assets/style.<hash>.css`, `assets/js/*.<hash>.js`, `sitemap.xml`, `robots.txt`, `.htaccess` e `site.webmanifest`. |
| `npm start` | Servidor local em http://127.0.0.1:4173 que imita a Hostinger (índice de pasta, 404 real, 301 das URLs antigas). |
| `npm run audit` | Relatório por página: title, description, palavras, H1, links de entrada/saída, canonical, og:image. |
| `npm run og` | Regenera as imagens de compartilhamento 1200×675 (`assets/og/<id>.jpg`) e roda o build. Rode depois de mudar títulos. |
| `npm run icones` | Regenera favicon.ico e PNGs a partir de `favicon.svg`. |
| `npm run imagens` | Regenera as fotos WebP 600/1200 px a partir de `src/img/*.jpg`. |

Variáveis de ambiente do build:

- `SITE_URL` — padrão `https://clubebichoecia.com.br` (sem barra final). Define canonical, og:url, og:image, sitemap, robots e os redirecionamentos do `.htaccess`.

## Estrutura

```
build.mjs              gera o site
src/config.mjs         SITE_URL e demais constantes
src/layout.mjs         head, topbar, header e footer únicos
src/pages/*.mjs        dados de cada página (id, path, title, description, updated, conteúdo)
src/assets/style.css   CSS único (vira assets/style.<hash>.css)
src/js/tools/*.js      um módulo por ferramenta, carregado só na sua página
src/js/calc/*.mjs      lógica das ferramentas (testável em Node)
src/js/lib/ui.js       utilidades de interface
src/redirects.mjs      URLs antigas → novas (301)
src/htaccess.mjs       modelo do .htaccess
src/img/               fotos originais (fonte das versões WebP)
scripts/               auditoria, servidor local e geradores de imagens
```

Cada página tem o campo `updated` (data da última mudança **real de conteúdo**), usado no `lastmod` do sitemap. Não altere a data se o conteúdo não mudou.

## Publicação na Hostinger

1. Rode `npm run build` e commite tudo (HTMLs gerados, `assets/`, `.htaccess`, `sitemap.xml`, `robots.txt`).
2. Faça o deploy como hoje (Git da Hostinger apontando para a raiz do repositório, ou envio dos arquivos para `public_html`).
3. O `.htaccess` gerado faz: http→https e www→sem www (301), `…/index.html` → `…/` (301), 301 das URLs antigas, `ErrorDocument 404 /404.html` com status 404 real, compressão, cache de 1 ano para arquivos com hash e imagens e cache curto para HTML, e bloqueia o acesso público a `src/`, `scripts/`, `docs/`, `data/`, `tests/`, `package.json`, `build.mjs`, `README.md` e arquivos ocultos (como `.git`).
4. Ao trocar uma foto, troque também o nome do arquivo: imagens ficam em cache por 1 ano.

### Testes com curl após o deploy

As quatro variantes devem terminar em `https://clubebichoecia.com.br/` com **um único** 301:

```sh
curl -sIL http://clubebichoecia.com.br/      | grep -iE '^(HTTP|location)'
curl -sIL http://www.clubebichoecia.com.br/  | grep -iE '^(HTTP|location)'
curl -sIL https://www.clubebichoecia.com.br/ | grep -iE '^(HTTP|location)'
curl -sIL https://clubebichoecia.com.br/     | grep -iE '^(HTTP|location)'   # 200 direto
```

`index.html` vira barra, página inexistente devolve 404 e arquivos de desenvolvimento não são públicos:

```sh
curl -sIL https://clubebichoecia.com.br/index.html | grep -iE '^(HTTP|location)'   # 301 → /
curl -sI  https://clubebichoecia.com.br/nao-existe | head -1                       # HTTP/… 404
curl -sI  https://clubebichoecia.com.br/package.json | head -1                     # HTTP/… 404
curl -sI  https://clubebichoecia.com.br/assets/img/dog-1200.webp | grep -i cache-control
```

## Google Search Console

Depois do deploy, envie `https://clubebichoecia.com.br/sitemap.xml` no Search Console (propriedade de domínio). Não há garantia de posição ou indexação.

## Privacidade, anúncios e medição

O site **não** usa rastreadores, cookies, analytics nem anúncios, e as ferramentas processam tudo no navegador. Ativar AdSense ou analytics exige conta própria, banner de consentimento e atualização da política de privacidade **antes** de publicar — nenhum ID foi criado neste repositório.

## Conteúdo e fontes

Conteúdo educativo, sem revisão clínica por médico-veterinário (até que um revisor seja indicado). Toda constante clínica usada pelas ferramentas precisa de fonte oficial citada com a página exata. Fotos: licença Pexels (ver `/creditos.html`).
