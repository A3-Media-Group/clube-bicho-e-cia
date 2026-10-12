#!/bin/sh
# Regenera as fotos WebP (600 e 1200 px) a partir dos originais em src/img/.
# Requer ImageMagick com suporte a WebP. Só é necessário quando uma foto mudar;
# os arquivos gerados ficam commitados em assets/img/. Ao trocar uma foto,
# troque também o nome do arquivo (o cache de imagens é de 1 ano).
set -e
cd "$(dirname "$0")/.."
for n in dog walk; do
  for w in 600 1200; do
    convert "src/img/$n.jpg" -resize "${w}x" -strip -quality 72 -define webp:method=6 "assets/img/$n-$w.webp"
  done
done
# A foto do gato tem bastante ruído; um desfoque leve mantém o arquivo abaixo de 120 KB.
convert src/img/cat.jpg -resize 600x -strip -quality 72 -define webp:method=6 assets/img/cat-600.webp
convert src/img/cat.jpg -resize 1200x -gaussian-blur 0x0.8 -strip -quality 75 -define webp:method=6 assets/img/cat-1200.webp
ls -l assets/img/*.webp
