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
