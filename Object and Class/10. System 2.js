system = (input) => {
    let systems = new Map();

    for (let argument of input) {
        let [system,component,subComponent] = argument.split(' | ');

        if (!systems.has(system)){
            systems.set(system, new Map())
        }
        if (!systems.get(system).get(component)){
            systems.get(system).set(component, [])
        }
        systems.get(system).get(component).push(subComponent);
    }

    let sortedSystem = Array.from(systems.keys())
        .sort((a,b) => a.localeCompare(b))
        .sort((a,b)=>systems.get(b).size - systems.get(a).size);

    for (let item of sortedSystem) {
        console.log(item);

        let componentsArr = Array.from(systems.get(item).keys())
            .sort((a,b)=> systems.get(item).get(b).length - systems.get(item).get(a).length);

        for (let key of componentsArr) {
            console.log(`|||${key}`);

            for (let any of systems.get(item).get(key)) {
                console.log(`||||||${any}`);
            }
        }

    }

};
system(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']);