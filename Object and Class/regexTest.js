regex = (input) => {
    let [town, lat, lon] =input.shift().split('|').filter(Boolean).map(i => i.trim());
    class City {
        constructor(town,lat, lon){
            this.town = town;
            this.lat = lat;
            this.lon = lon;
        }
    }
    let arr = [];

    for (let inputElement of input) {
        let [town, lat, lon] = inputElement.split('|').filter(Boolean).map(i => i.trim());
        let city = new City(town, lat, lon)
        arr.push(city)
    }
    console.log(arr.map(i => JSON.stringify(i)));
};
regex(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);