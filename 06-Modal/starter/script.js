'use strict';

const modalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < modalBtns.length; i++) {
  modalBtns[i].addEventListener('click', openModal);
}

overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
