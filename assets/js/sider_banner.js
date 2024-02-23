$(document).ready(function () {
    $(".banner-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: true,
      draggable: false,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'>></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'>></button>`,
      // dots: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            arrows: false,
            infinite: true,
          },
        },
      ],
      autoplay: true,
      autoplaySpeed: 1000,
    });
  });

 