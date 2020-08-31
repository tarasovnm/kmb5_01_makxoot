$(document).ready(function () {
  $(".header-slider").slick({
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".reviews__slider").slick({
    infinite: true,
    slidesToShow: 2,
    arrows: true,
    adaptiveHeight: true,
  });
});