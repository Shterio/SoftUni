towns = (array) => {
    let citys = [];

    for (let arrayElement of array) {
        let [town, latitude, longitude] = arrayElement.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        citys.push({
            town: town,
            latitude: latitude,
            longitude: longitude
        })



    }
    citys.forEach(i => console.log(i));

};
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);