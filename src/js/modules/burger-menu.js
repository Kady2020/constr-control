$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__logo,.header__menu,.header__burger").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $('.header__menu-link,.header__sign-in,.header__sign-up').click(function (event) {
    $(".header__logo,.header__menu,.header__burger").removeClass('active');
    $('body').removeClass('lock');
  });
});
