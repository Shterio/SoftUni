tracker = (array) => {
    let words = array.shift().split(' ');

    let map = new Map();
    for (const word of words) {
        map.set(word, 0);
    }
    for (const arrayElement of array) {
        if (map.has(arrayElement)) {
            let newWord = map.get(arrayElement) + 1;
            map.set(arrayElement, newWord);
        }
    }
    [...map.entries()].sort((a,b) => b[1] - a[1]).forEach(i => console.log(`${i[0]} - ${i[1]}`))
};
tracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);