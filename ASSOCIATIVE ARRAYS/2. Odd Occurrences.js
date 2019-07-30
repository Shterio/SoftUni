odd = (array) => {
    array = array.split(' ');
    let map = new Map();
    for (const string of array) {
        let word = string.toLowerCase();
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            let value = map.get(word) + 1;
            map.set(word, value);
        }
    }
    let result = [];
    let newMap = [...map.entries()];
    for (let [key, value] of newMap) {
        if (value % 2 !== 0) {
            result.push(key);
        }
    }
    console.log(result.join(' '));
};
odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');