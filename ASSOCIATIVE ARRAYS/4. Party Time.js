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
