eastern = (array) => {
    let gifts = array.shift().split(' ');

    for (let arrayElement of array) {
        if (arrayElement === 'No Money') {
            let filteredGifts = gifts.filter(i => i !== 'None');
            console.log(filteredGifts.join(' '));
            break;
        }else {
            let [command, gift, index] = arrayElement.split(' ');
            if (command === 'OutOfStock') {
                if (gifts.includes(gift)) {
                    while (gifts.includes(gift)) {
                        let indexOfGift = gifts.indexOf(gift);
                        gifts[indexOfGift] = 'None'
                    }
                }
            }else if (command === 'Required') {
                index = Number(index);
                if (index < gifts.length && index >= 0) {
                    gifts.splice(index, 1, gift);
                }

            }else if (command === 'JustInCase') {
                let lastGift = gifts.pop();
                gifts.push(gift)
            }
        }
    }
};
eastern(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money']);

eastern([ 'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 2',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money' ]);