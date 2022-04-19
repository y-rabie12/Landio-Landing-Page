'use strict';




const pressBtn =  document.querySelector('[data-nav-toggle-button]');

const navBar = document.querySelector('.navbar');

pressBtn.addEventListener('click', function(){
      navBar.classList.toggle('shown')
})


