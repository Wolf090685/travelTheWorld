$(function () {
    // Main slider
    $('.main-slider__box').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/arrow-left.svg" alt="prev"></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/arrow-right.svg" alt="next"></button>',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });

    // Calenadar selection
    // $('input').styler();

    // Tabs
    $('.tab-item').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab-item--active');
        $($(this).closest('.tabs').siblings().find('div')).removeClass('tab-content--active');

        $(this).addClass('tab-item--active');
        $($(this).attr('data-id')).addClass('tab-content--active');

    });

    // $('.choice-country__nav-tab').on('click', function (event) {
    //     event.preventDefault();

    //     $($(this).siblings()).removeClass('tab-item--active');
    //     $($(this).closest('.tabs').siblings().find('div')).removeClass('tab-content--active');

    //     $(this).addClass('tab-item--active');
    //     $($(this).attr('data-id')).addClass('tab-content--active');

    // });
});