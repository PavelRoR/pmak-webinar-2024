$(document).ready(function() {
    /* Якорь */
    $("a[href^='#']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
// Видео
$(".video-wrapper-video").click(function () {
       
       
        var a = $(this).attr("data-youtube");
        $(this).css('backgroundImage','none').html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>');

});
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').slick({
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        loop: false,
        dots: 0,
        speed: 300,
        arrows: false,
        centerPadding: '40px',
        adaptiveHeight: false,
        centerMode: 0,
        // initialSlide: -1,
        // appendArrows: '.text-revs-arrows-2',
        responsive: [
             {
                 breakpoint: 1200,
                 settings: {
                     slidesToShow: 2
                 }},
            {
            breakpoint: 767,
            
            settings: {
                slidesToShow: 1,
                // initialSlide: -1,
                centerPadding: '60px'
            },
            breakpoint: 386,
            
            settings: {
                slidesToShow: 3,
                initialSlide: -1,
                centerPadding: '0px'
            }
        }
            // {
            // breakpoint: 1200,
            // settings: {
            //     slidesToShow: 1
            // }
        // }
    ]
    });

    // План
    $('.plan-button').on('click', function(e){
        e.preventDefault();
        var plan = $('.general-list-plan');
        plan.toggle("slow")
        $(this).toggleClass('active');
    });

    // модалка
    $(['data-fancybox']).fancybox();
/*Конец документа*/
});