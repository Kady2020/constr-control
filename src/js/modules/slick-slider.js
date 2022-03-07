/*====================SLICK SLIDER====================*/
$(document).ready(function () {
  $(".slider").slick({
    arrows: true, // Отображение стрелок
    dots: true, // Отображение буллетов
    adaptiveHeight: true, // Автоматическая высота
    slidesToShow: 3, // Кол-во отображаемых слайдов
    slidesToScroll: 1, // Кол-во пролистываемых слайдов
    speed: 1000, // Скорость пролистывания слайдов
    easing: "linear", // transition-timing-function
    infinite: true, // Бесконечное повторение
    initialSlide: 0, // Стартовый слайд
    autoplay: false, // Автоматическое пролистывание
    autoplaySpeed: 1500, // Скорость автоматического пролистывания
    pauseOnFocus: true, // Приостановка при фокусе
    pauseOnHover: true, // Приостановка при наведении
    pauseOnDotsHover: true, // Приостановка при наведении на буллеты
    draggable: true, // Swipe cursor
    swipe: true, // Swipe on touchscreen
    touchThreshold: 10, // Момент срабатывания слайда
    touchMove: true, // touchscreen mode on pc
    waitForAnimate: false, // Ускорение прокрутки при ускорении нажатия
    centerMode: false, // Первый слайд по центру
    variableWidth: false, // Контент внутри слайдов определяет ширину. Хорошо работает с параметром centerMode: true
    rows: 1, // Кол-во рядов в слайде (кол-во объектов в одном слайде)
    slidesPerRow: 1, // Кол-во слайдов в ряду
    vertical: false, // Вертикальный слайдер
    verticalSwiping: false, // Для корректной работы параметра vertical: true
    appendArrows: $(".content"), // Для вывода стрелок в другую область (название селектора для примера)
    appendDots: $(".content"), // Для вывода, буллетов в другую область(название селектора для примера)
    mobileFirsr: false, // Меняет @media(max-width: ) на @media(min-width: )
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 482,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    asNavFor: ".slider-big",
  });

  $(".slider-big").slick({
    arrows: false,
    fade: true,
    asNavFor: ".slider"
  });
});
/*====================SLICK SLIDER====================*/
