// $(window).on("scroll", function () {
//   $(".header").toggleClass("active", $(this).scrollTop() > $(window).height());
// });

let headerScroll;
window.onscroll = function () {
  headerScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (headerScroll > 140) {
    $(".header").css({ "background": "#222" })
  }
  if (140 > headerScroll) {
    $(".header").css({ "background": "none" })
  }
}
