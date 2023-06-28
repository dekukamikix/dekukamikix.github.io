$(document).ready(function() {
  var navbar = $('#floating-navbar');
  var stickyNavTop = navbar.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > stickyNavTop) {
      navbar.addClass('fixed');
    } else {
      navbar.removeClass('fixed');
    }
  });

  $('#darkModeToggle').change(function() {
    $('body').toggleClass('dark-mode');
    if ($('body').hasClass('dark-mode')) {
      $('.navbar').addClass('navbar-dark').removeClass('navbar-light');
    } else {
      $('.navbar').addClass('navbar-light').removeClass('navbar-dark');
    }
  });
});

// Mengambil referensi elemen toggle dan menu navbar
const hamburgerToggle = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');

// Event listener untuk menutup hamburger menu ketika diklik di luar menu
document.addEventListener('click', function(event) {
  const targetElement = event.target;

  // Cek apakah target element di luar menu navbar
  if (!navbarMenu.contains(targetElement) && !hamburgerToggle.contains(targetElement)) {
    // Menutup hamburger menu
    if (navbarMenu.classList.contains('show')) {
      navbarMenu.classList.remove('show');
      hamburgerToggle.setAttribute('aria-expanded', 'false');
    }
  }
});
