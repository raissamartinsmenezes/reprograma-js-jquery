$(document).ready(function(){
    // $('li').hover(function(){
    //     $(this).find('.menu2').show();
    // }, function (){
    //     $(this).find('.menu2').hide();
    // });

    $('li').click(function(){
        $(this).find('.menu2').slideToggle();
        $(this).siblings().find('.menu2').slideUp();
    

    });
});