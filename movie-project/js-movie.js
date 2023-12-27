(function() {
    "use strict"
    /*
    /////////////////////////////////////////////////////////////////////////////
    Main Library Section
    /////////////////////////////////////////////////////////////////////////////
    */

    /*
    /////////////////////////////////////////////////////////////////////////////
    Utility Functions Section
    /////////////////////////////////////////////////////////////////////////////
    */

    /*
    /////////////////////////////////////////////////////////////////////////////
    Edit Modal Section
    /////////////////////////////////////////////////////////////////////////////
    */

    /*
    /////////////////////////////////////////////////////////////////////////////
    Movie Search Section
    /////////////////////////////////////////////////////////////////////////////
    */
    function searchMovie(e){
        e.preventDefault();
        searchMovieDB(addTitle.value);
    }

    function searchMovieDB(movie){
        $.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${movie}`,
            {}
        ).done(function (data) {
            createMovieSearchHtml(data);
        });
    }
    function createMovieSearchHtml(data){
        let hasImageArray = getMoviesWithImages(data);
        let numberOfDisplayedMovies = 10;
        if(hasImageArray.length < numberOfDisplayedMovies){
            numberOfDisplayedMovies = hasImageArray.length
        }
        let html = "";
        for(let i = 0; i < numberOfDisplayedMovies; i++){
            html += `<div class="card col-auto mx-auto my-3 p-0 searchedCards border-0 h-100">`
            html += `<div class="card-header position-relative p-0 overflow-hidden">`
            html += `<img src="https://image.tmdb.org/t/p/w300/${data.results[(hasImageArray[i])].backdrop_path}" alt="${data.results[(hasImageArray[i])].title}'s image"
                        class = "img-fluid">`
            html += `<span class="badge search-badge rounded-pill">${(data.results[(hasImageArray[i])].vote_average).toFixed(1)}</span>`;
            html += `</div>`//end of card-header
            html += `<div class="card-footer bg-accent-dark text-light text-center border-0">`
            html += `<p class="h5">${data.results[(hasImageArray[i])].title}</p>`
            html += `<p id="selectMovieId-${i}" class="visually-hidden">${data.results[(hasImageArray[i])].id}</p>`
            html += `<button id="btnSelect-${i}" type="button" class="btn bg-accent-normal text-light">Select</button>`
            html += `</div>`//end of footer
            html += `</div>`//end of card

            selectMovieBtns.push(`#btnSelect-${[i]}`);
        }
        movieSearchDiv.innerHTML = html;
        createButtons(selectMovieBtns, selectMovie);
    }
    function getMoviesWithImages(data){
        let hasImageArray = [];
        for (let i = 0; i < data.results.length; i++){
            let dbImage = data.results[i].backdrop.path;
            if (!dbImage){
            } else {
                hasImageArray.push(i);
            }
        }
        console.log(hasImageArray);
        return hasImageArray;
    }
    function selectMovie(e){
        let btnId = findBtnId(e.target.id);

        let db = document.getElementById(`selectMovieId-${btnId}`)
        let dbId = db.innerText;

        let userRating = 0;

        addMovie(dbId, userRating);
        movieSearchDiv.innerHTML = "";
    }
    // add click functions to js-create buttons
    function createButtons(btnArray, btnFunction){
        for(let button of btnArray){
            let newButton = document.querySelector(button);
            newButton.addEventListener("click",btnFunction);
        }
    }
    /*
    /////////////////////////////////////////////////////////////////////////////
    Fetch & Loading Logic
    /////////////////////////////////////////////////////////////////////////////
    */

    /*
    /////////////////////////////////////////////////////////////////////////////
    Movie Library Sorting Section
    /////////////////////////////////////////////////////////////////////////////
    */

    /*
    /////////////////////////////////////////////////////////////////////////////
    HTML Builder Sections
    /////////////////////////////////////////////////////////////////////////////
    */

    /*
    /////////////////////////////////////////////////////////////////////////////
    Global variables and listeners
    /////////////////////////////////////////////////////////////////////////////
    */
    const dbUrl = "https://productive-bristle-edam.glitch.me/movies/"
    let userMovieLibrary = [];
    let editDeleteBtns = [];
    let editSubmitBtns =[];
    let selectMovieBtns = [];
    let genreList = [];
    let cardList = [];
    let moviesByGenre = [];
    let currentGenreSelected = 0;

    let addTitle = document.getElementById("addMovieName");
    const movieSearchDiv = document.getElementById("movieSearchDiv");
    const searchMovieBtn = document.querySelector("#btn-addMovie");
    const selectSortType = document.querySelector("selector-sort");
    const selectGenre = document.querySelector("#select-genre");
    //creat click functions to html buttons
    searchMovieBtn.addEventListener("click", searchMovie);
    selectSortType.addEventListener("change", sortByRating);
    selectGenre.addEventListener("change", sortByGenre);

})();
