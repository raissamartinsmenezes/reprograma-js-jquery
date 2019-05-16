function carregaCarta() {
    $.get('http://localhost:3000/cartas', trocaCartaAleatoria);
}
// iremos consumir de verdade uma API e não consumir apenas um arquivo
// tirando o $.getJSON e colocando $.get de um servidor local que subimos 

// parâmetro padrão, o primeiro o que eu tô consumindo da API e o status dela
function trocaCartaAleatoria(cartas, status) {
    if (status == 'success') {
        let numeroAleatorio = Math.floor(Math.random() * cartas.length);
        // cartas + [] posição qualquer e nome do objeto 
        $('.titulo').text(cartas[numeroAleatorio].nome);
        $('.tipo').text(cartas[numeroAleatorio].tipo);
        $('.descricao').text(cartas[numeroAleatorio].descricao);
        $('.image').attr('src', cartas[numeroAleatorio].imagem);
        $('.saiba-mais').attr('href', cartas[numeroAleatorio].link);
    } else {
        $('.mensagem').text('Não foi possível carregar a carta');
    }
};

$(document).ready(function () {
    carregaCarta();
    $('#novaCarta').click(carregaCarta);
});