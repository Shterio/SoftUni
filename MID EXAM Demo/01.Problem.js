party = (input) => {
    let size = Number(input.shift());
    let days = Number(input.shift());

    let earnsCoins = 0;
    for (let i = 1; i <= days; i++) {
        if (i % 10 === 0) {
            size -= 2;
        }
        if (i % 15 === 0) {
            size += 5;
        }
        earnsCoins += 50;
        earnsCoins -= 2 * size;
        if (i % 3 === 0) {
            earnsCoins -= 3 * size;
        }
