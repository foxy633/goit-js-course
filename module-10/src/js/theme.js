const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    body: document.querySelector('body'),
    switchInput: document.querySelector('input.js-switch-input'),
  };

  if (localStorage.getItem('themeColor') === null) {
    localStorage.setItem('themeColor', Theme.LIGHT);
  }
  if (localStorage.getItem('themeColor') === Theme.DARK) {
    refs.switchInput.checked = true;
  }

  refs.body.classList.add(localStorage.getItem('themeColor'));
  refs.switchInput.addEventListener('change', () => {
    if (refs.switchInput.checked) {
      localStorage.setItem('themeColor', Theme.DARK);
    } else {
      localStorage.setItem('themeColor', Theme.LIGHT);
    }
    refs.body.classList.toggle(Theme.DARK);
    refs.body.classList.toggle(Theme.LIGHT);
  });
});
