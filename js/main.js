// Select DOM items

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set initial state of menu

let showMenu = false;

// need an event listener

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  console.log('Sandbox sanity test')
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');

    // loop through first and add each 
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');

    // loop through first and remove each 
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
  }
}