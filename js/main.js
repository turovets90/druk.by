$(document).ready(function(){


    $('.main-menu .arrow').click(function(){
        $(this).toggleClass('rotate');
        $(this).next().slideToggle();
    });
    $('.hamburger').click(function () {
        $('.main-menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main-menu .mm-close').click(function () {
            $('.main-menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main-menu.open").length) {
            $(".main-menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
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

});


