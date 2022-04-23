'use strict';

const pressBtn =  document.querySelector('[data-nav-toggle-button]');

const header = document.querySelector('.header')


pressBtn.addEventListener('click', function(){
      header.classList.toggle('active')
})



