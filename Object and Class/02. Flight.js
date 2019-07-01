flights = ([flights, info, toDisplay]) => {
    toDisplay = toDisplay[0];

    let result = {};

    flights.forEach(elem => {
        let flightNumber = elem.split(' ')[0];
        let destination = elem.split(' ').slice(1).join(' ');

        result[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });

    // Change status to 'Canceled'
    info.forEach(elem => {
        let [code, status] = elem.split(' ');
        if (code in result) {
            result[code].Status = status;
        }
    });

    Object.values(result)
        .filter(f => f.Status === toDisplay)
        .forEach(i => console.log(i))
};
flights([['WN269 Delaware',
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
flights([['WN269 Delaware',
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