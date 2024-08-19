$(window).on('load resize', function() {
    $('.partners__slider:not(.slick-initialized)').slick({
      infinite: true,
      speed: 200,
      slidesToShow: 6,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 790,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
        },
      ]
    });


    if ($(window).width() < 1200) {
      $('.answer__slider-cards:not(.slick-initialized)').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        variableWidth: true,
      });
    } else {
      $(".answer__slider-cards.slick-initialized").slick("unslick");
    }
    $('.answer__slider-certificates:not(.slick-initialized)').slick({
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      centerMode: true,
      variableWidth: true,
    });

    if ($(window).width() > 789) {
      $('.budget__slider--cards:not(.slick-initialized)').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // centerMode: true,
                variableWidth: true,
              }
          },
        ]
      });
    } else {
      $(".budget__slider--cards.slick-initialized").slick("unslick");
    }
    $('.steps__slider--cards:not(.slick-initialized)').slick({
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              variableWidth: true,
            }
        },
        {
          breakpoint: 790,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            }
        },
      ]
    });
    if ($(window).width() < 789) {
      $('.comments__slider--cards:not(.slick-initialized)').slick({
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        variableWidth: true,
      });
    } else {
      $(".comments__slider--cards.slick-initialized").slick("unslick");
    }
});