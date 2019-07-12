picolo = (array) => {
    let line;
    let map = new Map();

    for (let line of array) {
        let [command, car] = line.split(', ');
        if (command === 'IN') {
            if (!map.has(car)) {
                map.set(car, 1);
            }
        } else if (command === 'OUT') {
            if (map.has(car)) {
                map.delete(car);
            }
        }
    }
    let sorted = [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))
    if (sorted.length > 0) {
        sorted.forEach(i => console.log(i[0]))
    } else {
        console.log('Parking Lot is Empty');
    }
};
