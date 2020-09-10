import munuJson from '../menu.json';
import menuItem from '../templetes/menu-item.hbs';

document.addEventListener('DOMContentLoaded', () => {
  const menuRef = document.querySelector('ul.js-menu');
  const menuHtml = menuItem(munuJson);

  console.log(menuRef);
  menuRef.insertAdjacentHTML('beforeend', menuHtml);
});
