words = (input) => {
    let target = input.shift().split(' ');

    let map = new Map();

    for (let targetElement of target) {
        map.set(targetElement, 0)
    }
    for (let inputElement of input) {
        let n = map.get(inputElement);
        if (map.has(inputElement)){
            map.set(inputElement, n + 1)
        }
    }
    [...map].forEach(i => {
        return console.log(`${i[0]} -> ${i[1]}`);
    });

};
words(['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task']);