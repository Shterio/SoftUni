sequences = (array) => {
    let arr = [];
    for (let argument of array) {
        arr.push(JSON.parse(argument).sort((a,b)=> b - a));
    }
    console.log(arr);

};
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]);