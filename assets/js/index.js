var API_BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=22f16258&';



fetch(API_BASE_URL + 's=star+wars')
    .then(function (res) {
        if (!res.ok) throw new Error('oops');

        return res.json();
    })
    .then(function (data) {
        console.log('data :>> ', data);
        renderMovieResults(data.Search);
    })
    .catch(function (error) {
        console.error(error);
    });


function createMovieCard(movie) {
    var cardEl = document.createElement('article');
    cardEl.classList.add('card', 'col-2', 'm-2');
    //cardEl.setAttribute('class', 'mx-auto my-2 card');
    //cardEl.setAttribute('style', 'width: 18rem');

    var imgEl = document.createElement('img');
    imgEl.setAttribute('src', movie.Poster);
    imgEl.setAttribute('alt', movie.Title + ' - Movie Poster');
    imgEl.setAttribute('class', 'card-img-top');

    var bodyEl = document.createElement('div');
    bodyEl.setAttribute('class', 'card-body');

    var titleEl = document.createElement('h5');
    titleEl.setAttribute('class', 'card-title');
    titleEl.textContent = movie.Title;

    var yearEl = document.createElement('p');
    yearEl.setAttribute('class', 'card-text');
    yearEl.textContent = 'Year: ' + movie.Year;

    var linkEl = document.createElement('a');
    linkEl.href = 'https://www.imdb.com/title/' + movie.imdbId;
    linkEl.setAttribute('target', 'imdb');
    linkEl.textContent = 'More info';


    bodyEl.append(titleEl, yearEl, linkEl);

    cardEl.append(imgEl, bodyEl);

    return cardEl;
};

function renderMovieResults(movies) {
    var resultsEl = document.getElementById('movie-results');
    for (i = 0; i < movies.length; i++) {
        var movieCard = createMovieCard(movies[i]);
        resultsEl.append(movieCard);
    }
}


    //<div class="mx-auto my-2 card" style="width: 18rem;">
    // <img src="..." class="card-img-top" alt="...">
    // <div class="card-body">
    //  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
    //      card's
    //       content.</p>
    // </div>
    //  </div>

