miner = (array) => {
    let book = {};

    for (let i = 0; i < array.length; i += 2) {
        const resource = array[i];
        const quantity = Number(array[i + 1]);


        if (!book.hasOwnProperty(resource)) {
            book[resource] = 0;
        }

        book[resource] += quantity;


    }
    Object.entries(book).forEach(i => console.log(`${i[0]} -> ${i[1]}`));
