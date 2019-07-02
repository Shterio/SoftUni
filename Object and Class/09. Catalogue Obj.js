catalogue = (input) => {
    let obj = {};

    for (let element of input) {
        let initial = element[0];
        let [product, price] = element.split(' : ');
        price = Number(price);
        if (!obj.hasOwnProperty(initial)) {
            obj[initial] = [];
        }