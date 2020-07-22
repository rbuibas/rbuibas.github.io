// Select DOM items

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

const firstName = document.querySelector('.first-name');
const surName = document.querySelector('.last-name');

// experimental - I can click on any span
const spans = document.getElementsByTagName('span');
for(i=0;i<spans.length;i++) {
  spans[i].onclick=toggleMenu;
}

// Set initial state of menu

let showMenu = false;

// need an event listener

menuBtn.addEventListener('click', toggleMenu);
// firstName.addEventListener('click', toggleMenu);
// surName.addEventListener('click', toggleMenu);

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

// =============== jQuery ===============

// skills level set up

const skillLevels = {
  // spoken
  serbian: 95,
  romanian: 99,
  english: 90,
  french: 60,
  russian: 27,

  // programming
  c: 90,
  java: 80,
  js: 60,
  bash: 66,
  python: 30
};

$('.skill-entry').each(function () {
  $('.level', this).css('width', skillLevels[$(this).attr('id')] + '%');
});

// skills animations
$('.skills').mouseenter(function () {
  $('.skill-entry', this).each(function () {
    $('.skill-name', this).addClass('colorify-' + $(this).attr('id') + '-name');
    $('.level', this).addClass('colorify-' + $(this).attr('id') + '-level');
  });
});

$('.skills').mouseleave(function () {
  $('.skill-entry', this).each(function () {
    $('.skill-name', this).removeClass('colorify-' + $(this).attr('id') + '-name');
    $('.level', this).removeClass('colorify-' + $(this).attr('id') + '-level');
  });
});


// expand button logic
$('#p-language-expand').click(function () {
  if ($('#programming-matrix').is(':hidden')) {
    $('#programming-matrix').children().fadeIn(500);
    $('#programming-matrix').fadeIn(500);
  } else {
    $('#programming-matrix').children().fadeOut(500);
    $('#programming-matrix').fadeOut(500);
  }
})

$('#s-language-expand').click(function () {
  if ($('#language-matrix').is(':hidden')) {
    $('#language-matrix').children().fadeIn(500);
    $('#language-matrix').fadeIn(500);
  } else {
    $('#language-matrix').children().fadeOut(500);
    $('#language-matrix').fadeOut(500);
  }
})