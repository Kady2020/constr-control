/*====================SLICK SLIDER====================*/
$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    easing: "linear",
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    touchMove: true,
  });
});
