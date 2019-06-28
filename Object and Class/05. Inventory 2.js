function solve(input) {
    let inventory = [];

    for (let inputRow of input) {
        let [name, level, items] = inputRow.split(' / ');
        level = +level;
        items = items.split(', ');

        inventory.push({
            name,
            level,
            items
        })
    }
    console.log(JSON.stringify(inventory))
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);