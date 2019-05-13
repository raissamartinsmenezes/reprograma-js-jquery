// // Javascript
// var lis = document.querySelectorAll('li');
// for (i = 0; i < lis.length; i++) {
//     lis[i].textContent = "BANANA";
// }

// // Jquery
// $('button').text('BANANINHA')

// primeiro variáveis 
// segundo funções e depois 
// chamar elas dentro do frame 


function mudaTextoLi(){
    if($('li').length > 0){
        console.log($('.lista1 .botao').text());
    }
}

// function mudaTextoLi(){
//     $('li').text('bananinha nanica');
// }

$(document).ready(function(){
    alert('bora comer banana?');
    mudaTextoLi();
});



