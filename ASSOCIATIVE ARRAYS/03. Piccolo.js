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
