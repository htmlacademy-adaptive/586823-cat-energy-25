// Sandwich menu
let mainNavSandwich = document.querySelector('.main-header__toggle');
let mainNav = document.querySelector('.main-nav');

mainNavSandwich.classList.remove('main-header__toggle--nojs');
mainNavSandwich.classList.add('main-header__toggle--closed');

mainNav.classList.add('main-nav--closed')

mainNavSandwich.addEventListener('click', function () {
  if(mainNav.classList.contains('main-nav--closed')) {
    mainNavSandwich.classList.remove('main-header__toggle--closed');
    mainNavSandwich.classList.add('main-header__toggle--opened');

    mainNav.classList.remove('main-nav--closed')
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNavSandwich.classList.remove('main-header__toggle--opened');
    mainNavSandwich.classList.add('main-header__toggle--closed');

    mainNav.classList.remove('main-nav--opened')
    mainNav.classList.add('main-nav--closed');
  }
});

// User-history-slider (mobile)
let imageAfter = document.querySelector('.compare__image--after');
let imageBefore = document.querySelector('.compare__image--before');
let sliderButton = document.querySelector('.toggle__button');

sliderButton.addEventListener('click', function () {
  if(imageAfter.classList.contains('compare__image--hide')) {
    sliderButton.classList.add('toggle__button--after');

    imageAfter.classList.remove('compare__image--hide')
    imageBefore.classList.add('compare__image--hide');
  } else {
    sliderButton.classList.remove('toggle__button--after');

    imageBefore.classList.remove('compare__image--hide')
    imageAfter.classList.add('compare__image--hide');
  }
});


// User-history (tablet + desktop)
let beforeContainer = document.querySelector('.compare__image-before-container');
let afterContainer = document.querySelector('.compare__image-after-conatiner');
let slider = document.querySelector('.toggle__input');

slider.addEventListener('input', function() {
  beforeContainer.style.width = slider.value + '%';
  afterContainer.style.width = 100 - slider.value + '%';
});
