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
        } else if (action.includes('Open ')) {
            let nameSite = action.split('Open ')[1];
            output['Open Tabs'].push(nameSite);
            output['Browser Logs'].push(action);
        } else if (action === 'Clear History and Cache') {
            output['Open Tabs'] = [];
            output['Recently Closed'] = [];
            output['Browser Logs'] = [];
        }
    }
