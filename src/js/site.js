// Menu principal: fecha os submenus ao abrir outro, ao clicar fora e com Esc.
const menus = [...document.querySelectorAll('.menu')];
menus.forEach(menu => menu.addEventListener('toggle', () => {
  if (menu.open) menus.forEach(other => { if (other !== menu) other.open = false; });
}));
document.addEventListener('click', event => {
  menus.forEach(menu => { if (menu.open && !menu.contains(event.target)) menu.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  menus.forEach(menu => { if (menu.open) { menu.open = false; menu.querySelector('summary').focus(); } });
});
