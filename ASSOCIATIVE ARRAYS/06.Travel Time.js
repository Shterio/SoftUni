travel = (array) => {
    let obj = {};

    for (let line of array) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);
        if (!obj.hasOwnProperty(country)) {
            obj[country] = {};
            obj[country][town] = cost
        } else {
            if (!obj[country].hasOwnProperty(town)) {
                obj[country][town] = cost;
            } else {
                if (obj[country][town] > cost) {
                    obj[country][town] = cost;
                }
            }
        }
    }
    let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let sortedElement of sorted) {
        let sort = Object.entries(sortedElement[1]).sort((a, b) => a[1] - b[1])
            .map(kvp => `${kvp[0]} -> ${kvp[1]}`).join(' ');

        console.log(`${sortedElement[0]} -> ${sort}`);
    }
};
travel([
        "Bulgaria > Sofia > 500",
        "Bulgaria > Sopot > 800",
        "France > Paris > 2000",
        "Albania > Tirana > 1000",
        "Bulgaria > Sofia > 200"
    ]
);