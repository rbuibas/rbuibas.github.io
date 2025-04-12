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
  $(this).find('.level').css('width', skillLevels[this.id] + '%');
});

// skills animations
$('.skills').on('mouseenter', function () {
  $(this).find('.skill-entry').each(function () {
    $(this).find('.skill-name').addClass('colorify-' + this.id + '-name');
    $(this).find('.level').addClass('colorify-' + this.id + '-level');
  });
});

$('.skills').on('mouseleave', function () {
  $(this).find('.skill-entry').each(function () {
    $(this).find('.skill-name').removeClass('colorify-' + this.id + '-name');
    $(this).find('.level').removeClass('colorify-' + this.id + '-level');
  });
});


// expand button logic
$('#p-language-expand').on('click', function () {
  const programmingMatrix = $('#programming-matrix');
  if (programmingMatrix.is(':hidden')) {
    programmingMatrix.children().fadeIn(500);
    programmingMatrix.fadeIn(500);
  } else {
    programmingMatrix.children().fadeOut(500);
    programmingMatrix.fadeOut(500);
  }
});

$('#s-language-expand').on('click', function () {
  const languageMatrix = $('#language-matrix');
  if (languageMatrix.is(':hidden')) {
    languageMatrix.children().fadeIn(500);
    languageMatrix.fadeIn(500);
  } else {
    languageMatrix.children().fadeOut(500);
    languageMatrix.fadeOut(500);
  }
});

// Update copyright year automatically - direct approach
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded event fired");
  const footers = document.querySelectorAll('#main-footer');
  console.log("Found footers:", footers.length);
  
  if (footers.length > 0) {
    const currentYear = new Date().getFullYear();
    console.log("Setting year to:", currentYear);
    
    footers.forEach(function(footer) {
      footer.innerHTML = `Copyright &copy; ${currentYear}`;
    });
  }
});