flights = ([flights, info, toDisplay]) => {
    let result = {};

    flights.forEach(elem => {

        let flightNumber = elem.split(' ')[0];
        let destination = elem.split(' ').slice(1).join(' ');

        result[flightNumber] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    })
    info.forEach(elem => {
        let [code, status] = elem.split(' ');
        if (code in result) {
            result[code].Status = status
        }
    });
    for (flight in result) {

        if (result[flight].Status === toDisplay[0]) {
            console.log(result[flight]);
        }
    }
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