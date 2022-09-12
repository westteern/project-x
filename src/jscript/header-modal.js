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
const allBtns = document.querySelectorAll('.js-list button');

const allSpan = document.querySelectorAll('.js-list span');

const coctails = {
  icecream: 0,
  icecoffee: 0,
  milshakes: 0,
}


allBtns[0].addEventListener('click', () => {
  if (coctails.icecream > 0) {
    coctails.icecream -= 1;
    allSpan[0].textContent = coctails.icecream;
  } else {
    return alert('WRONG QUANTITY!!! It cannot be a negative number');
  }
})

allBtns[1].addEventListener('click', () => {
  coctails.icecream += 1;
  allSpan[0].textContent = coctails.icecream;
})

allBtns[2].addEventListener('click', () => {
  if (coctails.icecoffee > 0) {
    coctails.icecoffee -= 1;
    allSpan[1].textContent = coctails.icecoffee;
  } else {
    return alert('WRONG QUANTITY!!! It cannot be a negative number');
  }
})

allBtns[3].addEventListener('click', () => {
  coctails.icecoffee += 1;
  allSpan[1].textContent = coctails.icecoffee;
})

allBtns[4].addEventListener('click', () => {
  if (coctails.milshakes > 0) {
    coctails.milshakes -= 1;
    allSpan[2].textContent = coctails.milshakes;
  } else {
    return alert('WRONG QUANTITY!!! It cannot be a negative number');
  }
})

allBtns[5].addEventListener('click', () => {
  coctails.milshakes += 1;
  allSpan[2].textContent = coctails.milshakes;
})