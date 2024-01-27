$(document).ready(function(){

    
    const iconic = new Swiper('.iconic', {
        speed: 2000,
        loop: true,
        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
        pagination : {
            el : '.swiper-pagination',
            type : 'bullets',
            clickable : true,
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
        
    });

    const b_right = new Swiper('.b_right', {
        speed: 2000,
        loop: true,

        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 50,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

    const g_right = new Swiper('.g_right', {
        speed: 2000,
        loop: true,

        autoplay : {
            delay : 3000,
            disableOnInteraction : false,
        },
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 50,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });

});

