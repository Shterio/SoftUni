let mark = [
    {name: 'blend', price: '200'},
    {name: 'knifes', price: '12'},
    {name: 'blender', price: '200'},
    {name: 'knife', price: '10'}
];

let hasPrice = (element, obj) => obj.price === element;

let markObj = mark.filter(x => hasPrice('200', x));

console.log(markObj);