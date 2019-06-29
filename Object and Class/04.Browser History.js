browser = (input, array) => {
    let history = input;
    for (let arrayElement of array) {
        let [command, name] = arrayElement.split(' ');
        if (command === 'Close') {
            let index = history["Open Tabs"].indexOf(name);
            if (index !== -1) {
                let element = history["Open Tabs"].splice(index, 1);
                history["Recently Closed"].push(element.join());
                history["Browser Logs"].push(arrayElement);
            }

        } else if (command === 'Open') {
            history["Open Tabs"].push(name);
            history["Browser Logs"].push(arrayElement)
        } else if (command === 'Clear') {
            history["Open Tabs"] = [];
            history["Recently Closed"] = [];
            history["Browser Logs"] = [];
        }

    }
    let browsers = Object.entries(history);

    console.log(`${browsers[0][1]}`);
    console.log(`Open Tabs: ${browsers[1][1].join(', ')}`);
    console.log(`Recently Closed: ${browsers[2][1].join(', ')}`);
    console.log(`Browser Logs: ${browsers[3][1].join(', ')}`);

};
