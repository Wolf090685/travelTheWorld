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

    // Tabs
    $('.tab-item').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab-item--active');
        $($(this).closest('.tabs').siblings().find('div')).removeClass('tab-content--active');

        $(this).addClass('tab-item--active');
        $($(this).attr('data-id')).addClass('tab-content--active');

    });

    // Active country-list__item 
    $(document).on('click', function (event) {       
   
        if (event.target.closest('.country-item') && !event.target.closest('.country-item--selected')) {          
            $(event.target.closest('.country-item')).toggleClass('country-item--active');
        }  
        
    // Close footer__link-more after click on body
 
        if (!$(event.target).is('.footer__link') && !$(event.target).is('.footer__link-icon')) {
            $('.footer__link-more').removeClass('footer__link-more--show');
        }

        // if (event.target.closest('[data-id="#europe"]')) {   
        //     console.log('1');  
        //     $('#europe').css('display', 'block');
        // } 
        // if (event.target.closest('[data-id="#top"]') || event.target.closest('[data-id="#east"]') || event.target.closest('[data-id="#asia"]') 
        // || event.target.closest('[data-id="#africa"]') || event.target.closest('[data-id="#africa"]') || event.target.closest('[data-id="#america"]')
        // || event.target.closest('[data-id="#oceania"]') )
        //  {
        //     $('#europe').css('display', 'none');
        // }

    });

    // $('.choice-country__nav-tab').on('click', function(event) {
    //     event.preventDefault();
    //     console.log('click');       
    //     $('#europe').css('display', 'block');      
    //     $('.choice-region__nav-tab-item.tab-item--active').css('display', 'block');         
    //     $($(this).closest('.tabs').siblings().find('div')).removeClass('tab-content--active');        
    //     $($(this).attr('data-id')).addClass('tab-content--active');       

    // });

    // Custom calendar
    $('.datepicker').datepicker({
        showOn: "button",
        buttonImage: "../images/icons/icon-calendar.svg",
        buttonImageOnly: true,
        buttonText: "Выберите дату"
    });

    // Block footer__link-more show
    $('.footer__link').on('click', function (event) {
        event.preventDefault();
        $('.footer__link-more').toggleClass('footer__link-more--show'); 
    });    

});