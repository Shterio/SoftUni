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

