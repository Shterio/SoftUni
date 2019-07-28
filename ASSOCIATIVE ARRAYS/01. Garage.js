garage = (input) => {
    let garages = new Map();

    input.forEach(line => {
        let [garage, info] = line.split(' - ');
        if (!garages.has(garage)) {
            garages.set(garage, [info]);
        } else {
            garages.get(garage).push(info);
        }

    });

    let result = [...garages.entries()];
    result.forEach(line => {
        console.log(`Garage № ${line[0]}`);
        line[1].forEach(i => {
            console.log(`--- ${i.split(': ').join(' - ')}`);
        })
    });
};
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);