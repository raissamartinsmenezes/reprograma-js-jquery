function carregaCarta() {
    $.getJSON('tarot.json', trocaCartaAleatoria);
}


// parâmetro padrão, o primeiro o que eu tô consumindo da API e o status dela
function trocaCartaAleatoria(cartas, status) {
    if (status == 'success') {
        let numeroAleatorio = Math.floor(Math.random() * cartas.length);
        // cartas + [] posição qualquer e nome do objeto 
        $('.titulo').text(cartas[numeroAleatorio].nome);
        $('.tipo').text(cartas[numeroAleatorio].tipo);
        $('.descricao').text(cartas[numeroAleatorio].descricao);
        $('.image').attr('src', cartas[numeroAleatorio].imagem);
        $('.saiba-mais').attr('src', cartas[numeroAleatorio].link);
    } else {
        $('.mensagem').text('Não foi possível carregar a carta');
    }
};


$(document).ready(function () {
    carregaCarta();
    $('#novaCarta').click(carregaCarta);
});