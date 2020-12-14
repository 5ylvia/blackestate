const menu = document.querySelector('.menu-nav');
const btn = document.querySelector('.nav__btn');

btn.addEventListener('click', function(event) {
  menu.classList.toggle('menu-nav--open');
})

var image = document.getElementsByClassName('parallax');
new simpleParallax(image, {
	scale: 2
});