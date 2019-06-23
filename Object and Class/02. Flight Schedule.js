schedule = ([flights, statuses, checked]) => {
    let map = [];
    let canseledFligts = [];
    let check = checked.shift();

    for (let status1 of statuses) {
        let [num, status] = status1.split(' ');

        for (let i = 0; i < flights.length; i++) {
            let flight = flights[i];

            if (flight.includes(num)) {
                let index = flights.indexOf(flight);
                let [canseled, des] = flights.splice(index, 1)[0].split(' ');

                canseledFligts.push({
                    'Destination': des,
                    'Status': status
                })
            }
        }
    }
    if (check === 'Cancelled') {
        canseledFligts.forEach(i => console.log(i))
    } else {
        for (let flight of flights) {
            let destination = flight.split(' ')[1];
            map.push({
                'Destination': destination,
                'Status': check
            })
        }
        map.forEach(i => console.log(i))
    }
};

schedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
]);
schedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
]);