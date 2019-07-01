party = (input) => {    let output = new Map();
    output.set("VIP", []);
    output.set("regular", []);
    let guestComming = false;

    for (let currentOperation of input) {
        if (currentOperation === 'PARTY') {
            guestComming = true;
        } else {

