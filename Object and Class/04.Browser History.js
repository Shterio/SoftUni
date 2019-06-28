browser = (input, array) => {
    let history = input;
    for (let arrayElement of array) {
        let [command, name] = arrayElement.split(' ');
        if (command === 'Close') {
            let index = history["Open Tabs"].indexOf(name);
            if (index !== -1) {
                history["Open Tabs"].splice(index, 1);
            }
            console.log(history["Open Tabs"]);
        } else if (command === 'Open') {

        }
    }
};
browser({
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]);