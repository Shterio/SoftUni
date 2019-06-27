solve = (input) => {
    let dictionary = {};
    let obj = input.map(i => JSON.parse(i));

    obj.forEach(i => {
        let tuple = Object.entries(i);
        let term = tuple[0][0];
        dictionary[term] = tuple[0][1];
    });
