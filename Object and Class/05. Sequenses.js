sequences = (array) => {
    let arr = [];
    for (let argument of array) {
        arr.push(JSON.parse(argument).sort((a,b)=> b - a));
    }
    console.log(arr);

};
