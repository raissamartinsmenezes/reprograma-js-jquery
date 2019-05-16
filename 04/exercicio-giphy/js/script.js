$(document).ready(function () {

    $('#btn-busca').click(function (e) {
        // prevenir que o form envie as informações e mude a url
        e.preventDefault();
        let palavraBusca = $('#campo-busca').val();
        // alert(palavraBusca);
        $('.area-gif').html('');
        // abrir a conexão fazendo a função
        $.ajax({
            //endpoint
            url: `https://api.giphy.com/v1/gifs/search?api_key=5fRLBnY6xod8SK72JCmfXf4DaqaE6qYN&q=${palavraBusca}&limit=25`,
            type: 'GET',
            // se a conexão der certo é isso que vai acontecer
            success: function (gifs) {
                let arrayDeGifs = gifs.data;

                $(arrayDeGifs).each(function () {

                    let link = $('<a>').attr('href', this.url).attr('target', '_blank');
                    let resultadoBusca = $('<img>').attr('src', this.images.fixed_height.url).css('margin', '5px');
                    $('.area-gif').append(link);
                    $(link).append(resultadoBusca);

                });

            },

            error: function (req) {
                let errorImage = $("<img>").attr("src", `https://http.cat/${req.status}`);
                $("#root").append(errorImage);



            },

        });
    });

})