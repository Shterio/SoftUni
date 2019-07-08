function solve(array) {
    let result = {};
    for (let arrayElement of array) {
        if (arrayElement.includes(' -> ')) {
            let [name, technique, skill] = arrayElement.split(' -> ');
            skill = Number(skill);
            if (!result.hasOwnProperty(name)) {
                result[name] = {};
                result[name][technique] = skill;
                result[name]['__total__'] = skill;
            } else {
                if (!result[name].hasOwnProperty(technique)) {
                    result[name][technique] = Number(skill);
                    result[name]['__total__'] += Number(skill);
                } else {
                    if (result[name][technique] < skill) {
                        result[name]['__total__'] -= Number(skill);
                        result[name]['__total__'] += Number(skill);
                        result[name]['__total__'] = Number(skill);
                    }
                }
            }
        } else if (arrayElement.includes(' vs ')) {
            //TODO vs
            let [glOne, glTwo] = arrayElement.split(' vs ')

        } else if (true) {
            //TODO Ave Cesar
        }
    }
    let sortedGladiators = Object.keys(result).sort((a, b) => {
        return result[b]['__total__'] - result[a]['__total__'];
    });
    for (let gl of sortedGladiators) {
        console.log(`${gl}: ${result[gl]['__total__']} skill`);
        let sortedTechnique = Object.keys(result[gl]).filter(i => i !== '__total__').sort((a, b) => {
            let diff = result[gl][a] - result[gl][b];
            if (diff === 0) {
                return a.localeCompare(b);
            }
            return diff;
        });
        for (let string of sortedTechnique) {
            console.log(`- ${string} <!> ${result[gl][string]}`);
        }
    }
}

//cardGame(['Pesho -> BattleCry -> 400',
//    'Gosho -> PowerPunch -> 300',
//    'Stamat -> Duck -> 200',
//    'Stamat -> Tiger -> 250',
//    'Ave Cesar']);
solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'])