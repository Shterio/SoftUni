let string = ['Pesho', 'Gosho', 'Stamat', 'Mariyka'];

let listString = string.reduce((acc, val, i) => {
    return `${acc}\n${i}. ${val}`
}, '');
//console.log(listString);


let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
//console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

const people = [
    {name: 'Alice', age: 21},
    {name: 'Max', age: 20},
    {name: 'Jane', age: 20}
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}

//console.log(groupBy(people, 'age'));

// friends - an array of objects
// where object field "books" - list of favorite books
const friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = friends.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.books];
}, ['Alphabet']);
//console.log(allbooks);
// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
const myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator
}, []);

//console.log(myOrderedArray);

let arrOfArrs = [
    ['Pesho', 'Gosho', 'Stamat'],
    ['Alice', 'Bob', 'Tiff'],
    ['Bruce', 'Alice'],
    ['Bible', 'Harry Potter']
];

let makeRow = function (acc, val) {
    return `${acc}, ${val}`
};
let makeCSV = function (acc, val) {
    let row = val.slice(1).reduce(makeRow, val.slice(0, 1));
    return `${acc}\n${row}`
};
let superCSV = arrOfArrs.reduce(makeCSV, 'Firstname, Lastname, Super Identity');

console.log(superCSV);