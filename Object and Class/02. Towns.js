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
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let city = new Town(town,latitude,longitude);
        citys.push(city);
    }
    for (let i = 0; i < citys.length; i++) {
        console.log(`{ town: '${citys[i].town}', latitude: '${citys[i].latatude}', longitude: '${citys[i].longitude}' }`);

    }

};
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);