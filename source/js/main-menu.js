'use strict';

(function () {
  var menu = document.querySelector('.page-header');
  var menuToggle = menu.querySelector('.page-header__menu-toggle');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('page-header_open');
  });
})();
