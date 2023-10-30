$(function(){

    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        autoplay: true,
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'  <button class="slick-arrow slick-prev"><img src="./images/icons/bluearrow_left.png" alt=""></button>',
        nextArrow:'  <button class="slick-arrow slick-next"><img src="./images/icons/bluearrow_right.png" alt=""></button>', 
        responsive:[
        {
            breakpoint: 911,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 681,
            settings:{
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 455,
            settings:{
                slidesToShow: 1,
            }
        }]      
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu > ul').slideToggle();
    });
    $('.header__drop-down.drop-down').on('click', function(){
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });

});