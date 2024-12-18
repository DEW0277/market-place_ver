let navbarMenu = document.querySelector('#menu');
let navbarBtn = document.querySelector('#media_btn');
let xmark = document.querySelector('#xmark');
let bars = document.querySelector('#bars');

bars.addEventListener('click', () => {
  navbarMenu.style.left = 0;
  bars.style.display = 'none';
  xmark.style.display = 'inline-block';
  navbarMenu.style.transition = 'all 0.6s';
});

xmark.addEventListener('click', () => {
  navbarMenu.style.left = '-100%';
  bars.style.display = 'inline-block';
  xmark.style.display = 'none';
  navbarMenu.style.transition = 'all 0.6s';
});
