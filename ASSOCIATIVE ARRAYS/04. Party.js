party = (input) => {

    let result = {
        in: []
    };
    let isStarted = false;
    input.forEach(elem => {
        if (elem === "PARTY") {
            isStarted = true;
        } else {
            void (0);
        }
        if (elem !== 'PARTY') {
            if (isStarted) {
                result.in.splice(result.in.indexOf(elem), 1)
            } else {
                result.in.push(elem)
            }
        }
    });
    let vip = result.in.filter(a => a[0] == Number(a[0]));
    let regular = result.in.filter(a => a[0] != Number(a[0]));

    console.log(result.in.length);
    vip.concat(regular).forEach(elem => console.log(elem))
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