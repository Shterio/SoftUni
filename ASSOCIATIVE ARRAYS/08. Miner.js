miner = (array) => {
    let book = {};

    for (let i = 0; i < array.length; i += 2) {
        const resource = array[i];
        const quantity = Number(array[i + 1]);


