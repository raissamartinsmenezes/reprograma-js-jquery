$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('a').click(function(event){
        if(this.hash !== ''){
            let hash = this.hash;

            $('html, body').animate({
                // offset = calcular distância
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // coloca na url do navegador
                window.location.hash = hash;
            });

        }
    })
});