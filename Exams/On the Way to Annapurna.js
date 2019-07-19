function solve(input){
    let endList = [];

    for(line of input){
        let param = line.split(' ')[0];
        let [command, shop, items] = param.split('->');
        let repeatShop = endList.find(param => param.name === shop);

        if(command.includes("Add")){

            endList.push({name: shop, items: items});
            if(repeatShop){
                repeatShop.items += (`,${items}`);
                endList.pop();
            }
        } else if (command.includes('Remove')){
            let toRemove = param.split('->')[1];
            endList = endList.filter(n => n.name !== toRemove);
        }
    }

    endList = endList.sort((a, b) => b.items.length - a.items.length || b.name.localeCompare(a.name));

    console.log(`Stores list:`);
    for(let stores of endList){
        let store = Object.values(stores)[0];
        let items = Object.values(stores)[1].split(',');

        console.log(store);
        for(let item of items){
            console.log(`<<${item}>>`);
        }
    }
}

solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END' ]);

function onTheWayToAnnapurna(input) {
    let output = {};
    let curCommand = input.shift();

    while (curCommand !== 'END') {
        let [command, store, items] = curCommand.split('->');
        if (command === 'Add') {
            if (!Object.keys(output).includes(store)) {
                output[store] = []
            }
            items.split(',').forEach(element => {
                output[store].push(element);
            });
        } else if (command === 'Remove') {
            if (Object.keys(output).includes(store)) {
                delete(output[store]);
            }
        }
        curCommand = input.shift();
    }
