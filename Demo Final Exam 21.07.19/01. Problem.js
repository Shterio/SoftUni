one = (arr) => {
    let result = '';
    for (let line of arr) {
        let [command, str] = line.split(' ');
        if (command === 'End') {
            break;
        }
        if (command === 'Add') {
            result += str;
        } else if (command === 'Upgrade') {
            result = result.replace(new RegExp(str, 'g'), String.fromCharCode(str.charCodeAt() + 1))
        } else if (command === 'Print') {
            console.log(result);
        } else if (command === 'Index') {
            let ind = result.split('').map((e, id) => {
                if (e === str) {
                    return id
                }
            }).filter(e => e == Number(e)).join(' ')
            console.log(ind.length > 0? ind : 'None');
        } else if (command === 'Remove') {
            result = result.replace(new RegExp(str, 'gi'), '')
        }
    }
};