movies = (input) => {
    let movies = [];

    for (let inputElement of input) {
        if (inputElement.includes('addMovie')) {
            let token = inputElement.split('addMovie ');
            addMovie(token[1])
        } else if (inputElement.includes('directedBy')){
            let [movieName, director] = inputElement.split(' directedBy ');
        }
    }
    function addMovie (movieName){
        return movies.push({name: movieName});
    }
    function addDirector (movieName, director){
        let foundMovie = movies.find(m => m.name === movieName);
        if (foundMovie){
            movies.movieName = director;
        }
    }
    console.log(movies);

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