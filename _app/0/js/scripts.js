$(document).ready(function() {
//     /* Якорь */
//     $("a[href^='#']").click(function (h) {
//         h.preventDefault();
//         var f = $(this).attr("href"),
//             g = $(f).offset().top;
//         $("body,html").animate({
//             scrollTop: g
//         }, 1500)
//     });
//     // Мобильное меню
//     var mobMenu = $('.mobile-menu'),
//     headNav = $('.header-menu'),
//     mml1 = $('.mobile-menu-line-1'),
//     mml2 = $('.mobile-menu-line-2'),
//     mml3 = $('.mobile-menu-line-3');

// mobMenu.on('click', function () {
//     if (!headNav.hasClass('nav-active')) {
//         mobMenu.addClass('fixed');
//         headNav.addClass('nav-active');
//         mml1.addClass('switched');
//         mml2.addClass('switched');
//         mml3.addClass('switched');
//     } else {
//         mobMenu.removeClass('fixed');
//         headNav.removeClass('nav-active');
//         mml1.removeClass('switched');
//         mml2.removeClass('switched');
//         mml3.removeClass('switched');
//         $('.header-menu li a').click(function(){
//             mobMenu.removeClass('fixed');
//             headNav.removeClass('nav-active');
//             mml1.removeClass('switched');
//             mml2.removeClass('switched');
//             mml3.removeClass('switched');
//         })
//     }
// });
// Видео
$(".video-wrapper-video").click(function () {
       
       
        var a = $(this).attr("data-youtube");
        $(this).css('backgroundImage','none').html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>');

});
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: 0,
        loop: false,
        dots: 0,
        speed: 300,
        arrows: true,
        centerPadding: '20px',
        adaptiveHeight: true,
        centerMode: 0,
        // appendArrows: '.text-revs-arrows-2',
        responsive: [
            // {
            //     breakpoint: 1200,
            //     settings: {
            //         slidesToShow: 3
            //     }},
            // {
            // breakpoint: 992,
            // settings: {
            //     slidesToShow: 2
            // }},
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // модалка
    $(['data-fancybox']).fancybox();
/*Конец документа*/
});