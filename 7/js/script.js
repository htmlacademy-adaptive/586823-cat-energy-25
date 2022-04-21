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
