$(document).ready(function(){
    let qtdPalavras = $('.frase-correta').text().split(' ').length;
    $('.qtdPalavras').html(qtdPalavras);
    //.on('input',function(){}) ou .on('change', ... )
    $('.campo-digitacao').keyup(function(){
        let text = $(this).val()
        $('.texto-digitado').html(text);
        // split (separa as palavras em um array) e trim (remove os espaços)
        
    });
})

// // outra forma
// $(document).ready(function(){
//     $('.campo-digitacao').on('input', function(){
//         $('.texto-digitado').text($(this).val());
//     });
// })
