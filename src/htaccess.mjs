// Gera o .htaccess da raiz (Hostinger/Apache-LiteSpeed).
import { SITE_URL } from './config.mjs';
import { REDIRECTS } from './redirects.mjs';

const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function htaccess() {
  const host = new URL(SITE_URL).host;
  const redirects = Object.entries(REDIRECTS)
    .map(([from, to]) => `RewriteRule ^${reEsc(from.replace(/^\//, ''))}$ ${SITE_URL}${to} [R=301,L]`)
    .join('\n');
  return `# Gerado por build.mjs — não edite à mão.
Options -Indexes
DirectoryIndex index.html
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
RewriteEngine On

# Arquivos de desenvolvimento não são públicos.
RewriteRule ^(src|scripts|tests|docs|data|node_modules)(/|$) - [R=404,L]
RewriteRule ^(build\\.mjs|package(-lock)?\\.json|README\\.md|LEIA-ME\\.md)$ - [R=404,L]
# Arquivos ocultos (ex.: .git), exceto .well-known (validação do certificado SSL).
RewriteRule (^|/)\\.(?!well-known/) - [R=404,L]

# URLs antigas → novas (301 direto para https sem www, sem cadeia).
${redirects || '# (nenhuma)'}

# http → https e www → sem www (301).
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^${reEsc(host)}$ [NC]
RewriteRule ^ ${SITE_URL}%{REQUEST_URI} [R=301,L]

# Qualquer .../index.html → .../ (301).
RewriteCond %{THE_REQUEST} \\s/+((?:[^?\\s]*/)?)index\\.html[?\\s] [NC]
RewriteRule ^ /%1 [R=301,L]
</IfModule>

<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/xml application/javascript text/javascript application/json application/manifest+json image/svg+xml
</IfModule>

<IfModule mod_mime.c>
AddType application/manifest+json .webmanifest
AddType image/webp .webp
AddType text/javascript .js
</IfModule>

<IfModule mod_headers.c>
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
# Arquivos com hash no nome e imagens: 1 ano. HTML, XML e TXT: cache curto.
<FilesMatch "\\.[0-9a-f]{8}\\.(css|js)$">
Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>
<FilesMatch "\\.(webp|jpe?g|png|svg|ico)$">
Header set Cache-Control "public, max-age=31536000"
</FilesMatch>
<FilesMatch "\\.(html|xml|txt|webmanifest)$">
Header set Cache-Control "public, max-age=600, must-revalidate"
</FilesMatch>
</IfModule>
`;
}
