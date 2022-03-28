'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
// console.log(btnsOpenModal);

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++){
  btnsOpenModal[i].addEventListener('click', function(){
        console.log(`Btn "${btnsOpenModal[i].innerText}"`);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    })};

    
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);