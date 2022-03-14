let headerScroll;
window.onscroll = function () {
  headerScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (headerScroll > 50) {
    $(".header").css({ "background": "#E6F1F9" })
  }
  if (50 > headerScroll) {
    $(".header").css({ "background": "none" })
  }
}
