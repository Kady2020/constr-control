$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header,.header__menu,.header__button,.header__burger").toggleClass("active");
    $(".header__button").toggleClass("main-button_bg_white");
    $("body").toggleClass("lock");
  });

  $('.header__menu-link,.header__button').click(function (event) {
    $(".header,.header__menu,.header__button,.header__burger").removeClass('active');
    $(".header__button").removeClass("main-button_bg_white");
    $('body').removeClass('lock');
  });
});
