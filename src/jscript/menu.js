(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open-btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.mob-menu'),
    mobList: document.querySelector('.mob-menu-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.mobList.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
