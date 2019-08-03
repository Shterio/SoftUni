company = (array) => {
    let map = new Map();
    array = array.map((line) => line.split(' -> '));
    array.map(i => map.set(i[0], []));

    // [ 'SoftUni', 'AA12345' ],
    //   [ 'SoftUni', 'BB12345' ],
    //   [ 'Microsoft', 'CC12345' ],
    //   [ 'HP', 'BB12345' ]

    for (const arrayElement of array) {
        let [companyName, employer] = arrayElement;
        let employees = [];
        if (map.has(companyName)) {
            if (map.get(companyName).includes(employer)) {
                employees = map.get(companyName);
            } else {
                map.get(companyName).push(employer);
                employees = map.get(companyName);
            }
        }
        map.set(companyName, employees);
    }
    console.log(map);
};
company([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);