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
// $(".video-wrapper-video").click(function () {
       
       
//         var a = $(this).attr("data-youtube");
//         $(this).css('backgroundImage','none').html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>');

// });
    // слайдер с ценами
    $('.why-items-owl').owlCarousel({
        items:2,
        loop:false,
        center:false,
        margin:0,
        nav: false,
        autoWidth:true,
        autoHeight: true,
        // URLhashListener:true,
        // autoplayHoverPause:true,
        // startPosition: 'URLHash',
        responsive:{
            0:{
                items:1,
                center: false
                // margin: 20
            },
            768:{
                items:2,
                center:false
            }
        }
    });
    $('.packets-c').owlCarousel({
        items:2,
        loop:false,
        center:false,
        margin:10,
        nav: false,
        autoWidth:true,
        // autoHeight: true,
        // URLhashListener:true,
        // autoplayHoverPause:true,
        // startPosition: 'URLHash',
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2,
                margin: 15,
                center:false
            }
        }
    });
    // слайдер с текстовыми отзывами
    $('.revs-slider-text').owlCarousel({
        items:3,
        loop:false,
        center:false,
        margin:20,
        nav: false,
        // URLhashListener:true,
        // autoplayHoverPause:true,
        // startPosition: 'URLHash',
        responsive:{
            0:{
                items:2,
                center: false,
                autoWidth:true,
                // margin: 20
            },
            // 386:{
            //     items:2,
            //     // margin:20
            // },
            561:{
                items:3
            }
        }
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