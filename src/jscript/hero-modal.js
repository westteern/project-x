(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-hero-open]'),
        closeModalBtn: document.querySelector('[data-modal-hero-close]'),
        modal: document.querySelector('[data-modal-hero]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        document.body.classList.toggle('modal-open-hero');
        refs.modal.classList.toggle('hidden');
    }
})();
