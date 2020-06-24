$(document).ready(function(){


    $('.nav .arrow').click(function(){
        $(this).toggleClass('rotate');
        $(this).next().slideToggle();
    });

    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');
        $(this).toggleClass('act');
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main-menu.open").length) {
            $(".main-menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
            $('.hamburger').removeClass('act');
        }
        e.stopPropagation();
    });


    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        fade:true,
    });


    $(function () {
        var containerEl = document.querySelector('.mixitup_grid');
        var mixer = mixitup(containerEl);
    });

    $('.file').filestyle({
        text : 'Прикрепить макет',
        dragdrop: false,
    });



    $(window).resize(function(){
        var products_position = $('#products').offset().top;
        console.log(products_position);
        $(window).scroll(function(){
            if($(this).scrollTop() > products_position-15){
                $('.btn-fixed').addClass('bg_dark');
                $('.scroll-arrow').addClass('page_up');
            }else{
                $('.scroll-arrow').removeClass('page_up');
                $('.btn-fixed').removeClass('bg_dark');
            }
        });

        $('.scroll-arrow').click(function(){
            if($(window).scrollTop() > products_position-15){
                $("html, body").animate({ scrollTop: 0 }, 1000);
                return false;
            }else{

                $('html,body').animate( { scrollTop: products_position }, 1000 );
                return false;
            }
        });

    });
    $(window).resize();


});


