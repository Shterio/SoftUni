regex = (input) => {
    let [town, lat, lon] =input.shift().split('|').filter(Boolean).map(i => i.trim());
    class City {
        constructor(town,lat, lon){
            this.town = town;
            this.lat = lat;
            this.lon = lon;
        }
    }
