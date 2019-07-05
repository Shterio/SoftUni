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

            }