// Pequenos auxiliares de HTML usados pelo layout e pelas páginas.
export const esc = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Fotos disponíveis em assets/img/<nome>-600.webp e -1200.webp (scripts/imagens.sh).
export const PHOTOS = {
  dog: { w: 1200, h: 1800 },
  cat: { w: 1200, h: 1800 },
  walk: { w: 1200, h: 800 }
};

// <img> responsivo. lcp=true → carregamento imediato com fetchpriority=high; caso contrário, lazy.
export function img(name, alt, { sizes = '100vw', lcp = false, cls = '' } = {}) {
  const p = PHOTOS[name];
  if (!p) throw new Error('Foto desconhecida: ' + name);
  const src = w => `/assets/img/${name}-${w}.webp`;
  return `<img${cls ? ` class="${cls}"` : ''} src="${src(1200)}" srcset="${src(600)} 600w, ${src(1200)} 1200w" sizes="${sizes}" width="${p.w}" height="${p.h}" alt="${esc(alt)}"${lcp ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}>`;
}
