'use strict';

(function () {
  var observeOffScreenItems = function (root, targets) {
    if ('IntersectionObserver' in window) {
      var options = {
        root: root,
        rootMargin: '0px',
        threshold: [0.9],
        delay: 100
      };

      var callback = function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio >= 0.9) {
            entry.target.classList.remove('program__item_off-screen');
          } else {
            entry.target.classList.add('program__item_off-screen');
          }
        });
      };

      var observer = new IntersectionObserver(callback, options);

      Array.prototype.forEach.call(targets, function (target) {
        observer.observe(target);
      });
    }
    return;
  };

  var initSlider = function () {
    var body = document.querySelector('.program__list-wrapper');
    var list = body.querySelector('.program__list');
    var items = list.querySelectorAll('.program__item');

    observeOffScreenItems(body, items);
  };

  initSlider();
})();
