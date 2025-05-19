// BURGER MENU
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(max-width: 699px)').matches) {
  let isNavOpen = false;
  const burger = document.querySelector('.burger');
  const navMenu = document.querySelector('.navMenu');
  const main = document.querySelector('main');
  const overlay = document.querySelector('.overlay');
  let mainHeight = document.querySelector('main').offsetHeight;
  let navHeight = document.querySelector('.navMenu a').offsetHeight;

  // function for å åpne nav
  function openNav() {
    navMenu.style.height = `${navHeight * 5}px`;
    overlay.style.height = `${mainHeight + 193}px`;
    burger.classList.toggle('change');
    isNavOpen = true;
  }

  //  function for å lukke nav
  function closeNav() {
    navMenu.style.height = '';
    overlay.style.height = '';
    burger.classList.toggle('change');
    isNavOpen = false;
  }

  // Åpne nav når du trykke på burgermenyen
  burger.addEventListener('click', () => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  // lukker nav når du trykker på main (utenfor menyen)
  main.addEventListener('click', () => {
    if (isNavOpen) {
      closeNav();
    } else {
      // do nothing
    }
  });

  //  åpner og lukker nav når du trykker på "m" og lukker nav når du trykker på "ESC"
  let keypress = {};
  document.addEventListener('keydown', handler);
  function handler(x) {
    keypress[x.key] = true;
    if ((x.key === 'm' || x.key === 'Escape') && isNavOpen) {
      closeNav();
    } else if (x.key === 'm') {
      openNav();
    } else {
      // do nothing
    }
  }

  // hide/show header on scroll men berre hvis nav menyen ikkje e åpen
  let prevScrollpos = window.scrollY;
  window.onscroll = function hideHeader() {
    let currentScrollPos = window.scrollY;
    if (!isNavOpen) {
      if (prevScrollpos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
      } else {
        document.querySelector('header').style.top = '-78px';
      }
    } else {
      document.querySelector('header').style.top = '0';
    }
    prevScrollpos = currentScrollPos;
  };
}
});

//


