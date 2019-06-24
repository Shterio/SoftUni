catalogue = (input) => {
    let obj = new Map();

    for (let item of input) {
        let el = item[0];
        obj.set(el, []);
    }
    for (let element of input) {
        obj.get(element[0]).push(element)
    }
    let sorted = Array.from(obj.keys())
        .sort((a, b) => a[0].localeCompare(b[0]));
    for (let any of sorted) {
        console.log(any);
        let components = Array.from(obj.get(any))
            .sort((a, b) => a.localeCompare(b))
            .forEach(i => {
                let item = i.split(' : ').join(': ')
                console.log(`  ${item}`);
            });
    }
};
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);