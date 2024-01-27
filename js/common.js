$(document).ready(function(){

    $('.gnb_bg').hide();
    $('.gnb > li').hover(function(){
        $('.gnb_bg').stop().slideToggle();
    });

    $('.depth2').hide();
    //.gnb>li에 마우스 올렸을 때 .depth2가 slideDown
    $('.gnb > li').hover(function(){
        $(this).find('.depth2').stop().slideToggle();
    });

    $('.ham').click(function(){
        $('.close').toggle();
    });
    
    $('.mgnb_wrap').hide();
    $('.ham').click(function(){
        $('.mgnb_wrap').toggle();
    });
    
    $('.mdepth2').hide();
    $('.mgnb > li').click(function(){
        $(this).find('.mdepth2').stop().slideToggle();
        $(this).siblings().find('.mdepth2').stop().slideUp();
    });

});