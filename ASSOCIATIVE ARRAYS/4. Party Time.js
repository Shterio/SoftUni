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
