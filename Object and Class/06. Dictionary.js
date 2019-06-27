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
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);