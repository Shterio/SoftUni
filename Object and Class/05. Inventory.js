inventory = (input) => {
    let inventory = [];

    for (let inputElement of input) {
        let [hero, level, items] = inputElement.split(' / ');
        items = items.split(', ');
        items.sort((a, b) => a.localeCompare(b));
        inventory.push({
            Hero: hero,
            level: Number(level),
            items
        });
    }
    inventory.sort((a, b) => a.level - b.level);

    for (let hero of inventory) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
};
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);