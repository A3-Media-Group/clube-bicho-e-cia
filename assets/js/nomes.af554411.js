import { output, onSubmit } from './lib-ui.bb9afc40.js';

const names = { fofos: ['Pipoca', 'Nina', 'Tico', 'Luna', 'Bento', 'Amora', 'Lili', 'Chico', 'Mel', 'Nino', 'Cacau', 'Belinha'], comida: ['Paçoca', 'Cookie', 'Mochi', 'Jujuba', 'Pudim', 'Canela', 'Waffle', 'Farofa', 'Quindim', 'Caju', 'Pimenta', 'Avelã'], natureza: ['Sol', 'Lua', 'Jade', 'Flora', 'Rio', 'Gaia', 'Nuvem', 'Brisa', 'Lótus', 'Íris', 'Aurora', 'Céu'], divertidos: ['Pixel', 'Ziggy', 'Zeca', 'Pingo', 'Yoda', 'Jazz', 'Tetris', 'Bowie', 'Fubá', 'Sushi', 'Zuzu', 'Chulé'] };
let nameRound = 0;

onSubmit((data, result) => {
  const list = names[data.get('style')];
  const start = (nameRound++ % 3) * 4;
  output(result, list.slice(start, start + 4).join(' • '), 'Gostou de algum? Clique novamente para ver mais quatro sugestões.');
});
