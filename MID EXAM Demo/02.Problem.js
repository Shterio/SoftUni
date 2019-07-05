eastern = (array) => {
    let gifts = array.shift().split(' ');

    for (let arrayElement of array) {
        if (arrayElement === 'No Money') {
            let filteredGifts = gifts.filter(i => i !== 'None');
            console.log(filteredGifts.join(' '));
            break;
        }