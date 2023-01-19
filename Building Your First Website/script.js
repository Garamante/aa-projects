'use strict';

const lienHome = document.querySelector('.index');
const lienWork = document.querySelector('.work');
const lienCurri = document.querySelector('.curri');
const lienContact = document.querySelector('.contact');

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    window.location.replace(`${id}`);
  }
});
