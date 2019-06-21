movies = (input) => {
    let movies = {};

    for (let inputElement of input) {
        if (inputElement.includes('addMovie')) {
            let element = inputElement.split('addMovie ');
            if (!movies.hasOwnProperty(element[1])){
                movies[element] = []
            }
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