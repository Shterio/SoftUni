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
        }else {
            let [title, genre] = element.split(', ');
            for (const key in books) {
                if (books[key].includes(genre)) {
                    books[key][1].push(title);
                }
            }
        }
    });
