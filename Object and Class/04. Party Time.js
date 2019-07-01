party = (input) => {    let output = new Map();
    output.set("VIP", []);
    output.set("regular", []);
    let guestComming = false;

    for (let currentOperation of input) {
        if (currentOperation === 'PARTY') {
            guestComming = true;
        } else {
            if (guestComming === false) {
                if (!isNaN(currentOperation[0])) {
                    output.get('VIP').push(currentOperation);
                } else {
                    output.get('regular').push(currentOperation);
                }
            } else {
                if (!isNaN(currentOperation[0])) {
                    output.get('VIP').splice(output.get('VIP').indexOf(currentOperation), 1);
                } else {
                    output.get('regular').splice(output.get('regular').indexOf(currentOperation), 1);
                }
            }
        }
    }

