import { renderCarsCardsImage } from './index-render.js';

renderCarsCardsImage();

document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelector('.buy-form__bg');
  console.log(elem.offsetTop + elem.parentNode.offsetTop);
  document.addEventListener('scroll', () => {
    elem.style.right = (-1 * (elem.offsetTop + elem.parentNode.offsetTop) * 0.3) + (0.3 * window.pageYOffset) + 'px';
  });
});
