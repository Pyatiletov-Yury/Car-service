// $(document).ready(function(){
//     const slider = tns({
//         container: '.carousel__inner',
//         items: 1,
//         slideBy: 'page',
//         autoplay: false,
//         controls: false,
//         nav: false,
//         controlsText: [
//             '<img src="img/icons/right.svg"/>',
//             '<img src="img/icons/left.svg"/>',
//         ],
//     });

//     document.querySelector('.prev').addEventListener('click', function () {
//         slider.goTo('prev');
//     });

//     document.querySelector('.next').addEventListener('click', function () {
//         slider.goTo('next');
//     });


//     $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
//         $(this)
//           .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
//           .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
//     });

//     function toggleSlide(item) {
//         $(item).each(function(i) {
//             $(this).on('click', function(e) {
//                 e.preventDefault();
//                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
//                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
//             })
//         })
//     };
//     toggleSlide('.catalog-item__link');
//     toggleSlide('.catalog-item__back');

//     // Modal

//     $('[data-modal=consultation]').on('click', function() {
//         $('.overlay, #consultation').fadeIn('slow');
//     });

//     $('.modal__close').on('click', function(params){
//         $('.overlay, #consultation, #thenks, #order').fadeOut('slow');
//     });

//     $('.button--mini').each(function(i) {
//         $(this).on('click', function() {
//             $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//             $('.overlay, #order').fadeIn('slow');
//         });
//     });
// });



