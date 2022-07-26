(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-header-open]'),
    closeModalBtn: document.querySelector('[data-modal-header-close]'),
    modal: document.querySelector('[data-modal-header]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-header');
    refs.modal.classList.toggle('hidden');
  }
})();
