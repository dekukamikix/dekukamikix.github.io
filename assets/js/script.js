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
