$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos4', 
        type: 'GET',
        success: function(photos){
            //console.log(this);
            $(photos).each(function(){
                let container = $('<div>');
                container.attr('class', `photo${this.id}`);
                let photoTitle = $('<h2>').text(this.title);
                let photoImg = $('<img>').attr('src', this.url);

                container.append(photoTitle);
                container.append(photoImg);

                $('#root').append(container);
            });
        },
        // fazer uma requisição é a mesma coisa que consumir API
        error: function(req){
            let errorImage = $('<img>').attr('src', `http://http.cat/${req.status}`);
            $('#root').append(errorImage);
        }



    })



});

// $(function(){
// outro modo de chamar o JQuery    
// })