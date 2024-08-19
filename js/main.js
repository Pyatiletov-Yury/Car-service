const sliderOne = tns({
    container: '.partners__slider',
    items: 6,
    slideBy: 'page',
    mouseDrag: true,
    centr: true,
    speed: 1200,
    controlsContainer: '.partners__contrlos',
    nav: false,
    gutter: 30,
    responsive: {
        300: {
            gutter: 20,
            items: 1
        },
        320: {
            gutter: 20,
            items: 2
        },
        790: {
            gutter: 20,
            items: 4
            },
        1150: {
            gutter: 20,
            items: 5
        },
        1200: {
            items: 6
        }
      }
});

const sliderTwo = tns({
    container: '.answer__slider-certificates',
    items: 1,
    slideBy: 'page',
    mouseDrag: true,
    centr: true,
    speed: 1200,
    controlsContainer: '.answer__contrlos',
    nav: false,
    gutter: 30,
});

const sliderThree = tns({
    container: '.budget__slider--cards',
    items: 3,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    centr: true,
    // loop: false,
    // autoWidth: true,
    // lazyload: true,
    // swipeAngle: false,
    controlsContainer: '.budget__contrlos',
    nav: false,
    responsive: {
        320: {
            items: 1,
        },
        790: {
            items: 2
        },
        1200: {
            items: 3
        },
    }
});

const sliderFour = tns({
    container: '.steps__slider--cards',
    items: 3,
    gutter: 10,
    mouseDrag: true,
    speed: 400,
    centr: true,
    // loop: false,
    // autoWidth: true,
    // lazyload: true,
    // swipeAngle: false,
    controlsContainer: '.steps__contrlos',
    nav: false,
    responsive: {
        320: {
            items: 1,
        },
        790: {
            items: 2
        },
        1200: {
            items: 3
        },
    }
});




