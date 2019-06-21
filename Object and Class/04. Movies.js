movies = (input) => {
    let movies = [];

    for (let inputElement of input) {
        if (inputElement.includes('addMovie')) {
            let token = inputElement.split('addMovie ');
            let movieName = token[1];
            addMovie(movieName)
        } else if (inputElement.includes('directedBy')) {
            let [movieName, directorName] = inputElement.split(' directedBy ');
            addDirector(movieName, directorName)
        } else {
            let [movieName, date] = inputElement.split(' onDate ');
            addDate(movieName, date);
        }
    }

    for (let movie of movies) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }

    function addMovie(movieName) {
        movies.push({name: movieName});
    }

    function addDirector(movieName, directorName) {
        let foundMovie = movies.find(m => m.name === movieName);
        if (foundMovie) {
            foundMovie.director = directorName;
        }
    }

    function addDate(movieName, date) {
        let foundDate = movies.find(m => m.name === movieName);
        if (foundDate) {
            foundDate.date = date;
        }
    }
};
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);