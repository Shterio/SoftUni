book = (array) => {
    let books = {};

    array.forEach(element => {
        if (element.includes(' -> ')) {
            let [id, genre] = element.split(' -> ');
            id = Number(id);
            if (!(id in books)) {
                books[id] = [];
                books[id].push(genre, [])
            }
        }