// Opcional: node preparar-seo.cjs https://usuario.github.io/repositorio
const fs=require('fs'),path=require('path');
const input=process.argv[2];if(!input)throw new Error('Informe a URL pública completa.');
const parsed=new URL(input);if(parsed.protocol!=='https:'||parsed.search||parsed.hash||parsed.username||parsed.password)throw new Error('Use uma URL https pública sem parâmetros.');
const base=parsed.href.replace(/\/$/,'');const dir=__dirname;
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const files=fs.readdirSync(dir).filter(f=>f.endsWith('.html')&&f!=='404.html');
for(const f of files){const p=path.join(dir,f),url=base+'/'+(f==='index.html'?'':f);let html=fs.readFileSync(p,'utf8').replace(/<link rel="canonical"[^>]*>/g,'').replace(/<meta property="og:url"[^>]*>/g,'');html=html.replace('</head>',`<link rel="canonical" href="${escape(url)}"><meta property="og:url" content="${escape(url)}"></head>`);fs.writeFileSync(p,html);}
fs.writeFileSync(path.join(dir,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+files.map(f=>'<url><loc>'+escape(base+'/'+(f==='index.html'?'':f))+'</loc></url>').join('')+'</urlset>');
fs.writeFileSync(path.join(dir,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+base+'/sitemap.xml\n');
console.log('SEO configurado: '+files.length+' páginas, canonical, og:url e sitemap.');
