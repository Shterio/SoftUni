towns = (array) => {
    class Town {
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latatude = latitude;
            this.longitude = longitude;
        }
    }
    let citys = [];
    for (let arrayElement of array) {
        let [town,latitude,longitude] = arrayElement.split(' | ');
        let city = new Town(town,latitude,longitude);
        citys.push(city);
    }
    console.log(citys);
};
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);