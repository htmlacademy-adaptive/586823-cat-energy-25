// Sandwich menu
const mainNavSandwich = document.querySelector('.main-header__toggle');
const mainNav = document.querySelector('.main-nav');

mainNavSandwich.classList.remove('main-header__toggle--nojs');
mainNavSandwich.classList.add('main-header__toggle--closed');

mainNav.classList.add('main-nav--closed')

if (mainNavSandwich) {
  mainNavSandwich.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--closed')) {
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
}


// User-history-slider (mobile)
const imageAfter = document.querySelector('.compare__image--after');
const imageBefore = document.querySelector('.compare__image--before');
const sliderButton = document.querySelector('.toggle__button');

if (sliderButton) {
  sliderButton.addEventListener('click', function () {
    if (imageAfter.classList.contains('compare__image--hide')) {
      sliderButton.classList.add('toggle__button--after');

      imageAfter.classList.remove('compare__image--hide')
      imageBefore.classList.add('compare__image--hide');
    } else {
      sliderButton.classList.remove('toggle__button--after');

      imageBefore.classList.remove('compare__image--hide')
      imageAfter.classList.add('compare__image--hide');
    }
  });
}



// User-history (tablet + desktop)
const beforeContainer = document.querySelector('.compare__image-before-container');
const afterContainer = document.querySelector('.compare__image-after-conatiner');
const slider = document.querySelector('.toggle__input');

if (slider) {
  slider.addEventListener('input', function () {
    beforeContainer.style.width = slider.value + '%';
    afterContainer.style.width = 100 - slider.value + '%';
  });
}
