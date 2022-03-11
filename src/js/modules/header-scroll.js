let headerScroll;
window.onscroll = function () {
  headerScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (headerScroll > 150) {
    $(".header").css({ "background": "#E6F1F9" })
  }
  if (150 > headerScroll) {
    $(".header").css({ "background": "none" })
  }
}
