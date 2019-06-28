function browserHistory(input, actions) {
    let output = input;
    for (let action of actions) {
        if (action.includes('Close ')) {
            let nameSite = action.split('Close ')[1];
            if (output['Open Tabs'].includes(nameSite)) {
                output['Open Tabs'].splice(output['Open Tabs'].indexOf(nameSite), 1);
                output['Recently Closed'].push(nameSite);
                output['Browser Logs'].push(action);
            }
