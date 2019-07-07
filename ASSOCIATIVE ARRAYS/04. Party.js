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
