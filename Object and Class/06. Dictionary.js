solve = (input) => {
    let dictionary = {};
    let obj = input.map(i => JSON.parse(i));

    obj.forEach(i => {
        let tuple = Object.entries(i);
        let term = tuple[0][0];
        dictionary[term] = tuple[0][1];
    });
    let sorted = Object.entries(dictionary)
        .sort((a, b) => a[0].localeCompare(b[0]));

    sorted.forEach(i => console.log(`Term: ${i[0]} => Definition: ${i[1]}`))
};
