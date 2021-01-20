$(function() {

    // scrolling nav-bar

    var scrollLink = $('.scroll');

    scrollLink.click(function(e) {

        e.preventDefault(); // we use it to ignore jumping and just scrolling smoothly
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 65
        }, 1000)
    });

    // Add class to the nav-bar

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black')
        }
    });

    // Add class after realoding

    $(document).ready(function () {
        if ($("#mainNav").offset().top > 100 ) {
    
            $('nav').addClass('black');
    
        } else {
    
            $('nav').removeClass('black');
        }
    });

        // Active Link Switching

    $(window).scroll(function() {
            var scrollBarLocation = $(this).scrollTop();

            scrollLink.each(function() {

                var sectionOffset = $(this.hash).offset().top;

                if ( sectionOffset <= scrollBarLocation ) {

                    $(this).parent().addClass('active');
                    $(this).parent().sibilings().removeClass('active');
                }
            })
    });

        // portofolio images

    $('#Portfolio').magnificPopup({
        tClose: 'Close (Esc)',
        type: 'image',
        delegate: 'a',
        tLoading: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1],
            tPrev: 'previous',
            tNext: 'Next'
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
          }
    });

    $('navbar-toggler').click(function() {

        $('nav').toggle();

    });

    function mediaSize() {
        if (window.matchMedia("(max-width: 991px)").matches) {
            
            $("#mainNav").addClass("black");
    
        } else {
    
            $("#mainNav").removeClass("black");
        }
    }
    
    window.addEventListener("resize", mediaSize, false);

})