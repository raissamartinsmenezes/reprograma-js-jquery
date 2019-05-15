const app = document.getElementById('root');
const container = document.createElement('div');

app.appendChild(container);

// abriu um request para utilizar a API do JSON
let request = new XMLHttpRequest();
// abrir a conexão 
request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);

// início do carregamento do conteúdo
// preparando o que eu quero receber
request.onload = function(){
    // parsear, pois o Javascript nativo não consegue entender sozinho as informações que queremos carregar 
    // transforma o texto em um objeto manipulável

    // response = resultado do que eu pedi > AJAX 
    let photos = JSON.parse(this.response);
    // toda requisição retorna um status code
    if(request.status >= 200 && request.status < 400){
        photos.forEach(function(photo){
            const conteudo = document.createElement('div');
            // conteudo.setAttribute('class', photo.id)
            // isso que eu peguei tá na API que eu tô consumindo
            const h2 = document.createElement('h2');
            h2.textContent = photo.title;

            const img = document.createElement('img');
            img.setAttribute('src', photo.url);

            container.appendChild(conteudo);
            conteudo.appendChild(h2);
            conteudo.appendChild(img);
        });
    } else {
        const errorMessage = document.createElement('img');
        errorMessage.setAttribute('src', 'https://http.cat/' + request.status);
        app.appendChild(errorMessage);

    }

}

// executar o que eu recebi 
request.send();