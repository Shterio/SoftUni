catalogue = (input) => {
    let obj = {};

    for (let element of input) {
        let initial = element[0];
        let [product, price] = element.split(' : ');
        price = Number(price);
        if (!obj.hasOwnProperty(initial)) {
            obj[initial] = [];
        }
        obj[initial].push(element);
    }
    let sorted = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let [initial, products] of sorted) {
        console.log(initial);
        let sortedProducts = products
            .sort((a, b) => a[0].localeCompare(b[0]));
        for (let sortedProduct of sortedProducts) {
            console.log(sortedProduct.split(' : ').join(': '));
        }
    }
};
