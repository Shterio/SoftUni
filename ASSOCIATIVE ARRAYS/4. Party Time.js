party = (input) => {
    let index = input.indexOf('PARTY');
    let list = input.slice(0, index);
    let start = input.slice(index + 1);

    let guest = {
        'vip': [],
        'regular': []
    };
    for (let person of list) {
        if (isRegular(person)) {
            guest.regular.push(person)
        } else {
            guest.vip.push(person)
        }
    }
    for (let propt of start) {
        if (isRegular(propt)) {
            let regular = guest.regular;
            let indexOf = regular.indexOf(propt);

            regular.splice(indexOf, 1);
        } else {
            let vip = guest.vip;
            let indexOf = vip.indexOf(propt);

            vip.splice(indexOf, 1);
        }
    }

    function isRegular (quest){
        let symbol = Number(quest[0]);
        return isNaN(symbol);
    }
    let length = guest.vip.length + guest.regular.length;
    console.log(length);
    console.log(guest.vip.join('\n'));
    console.log(guest.regular.join('\n'));
};
party([
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    '7IK9Yo0h',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
party(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);