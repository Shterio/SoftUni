store = (stock,delivery) => {
    let products = {};

    for (let i = 0; i < stock.length; i+=2) {

        products[stock[i]]= Number(stock[i+1]);

    }
    console.log(products);
};
store([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);