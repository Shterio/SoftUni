employees = (array) => {
    class Employer {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }

    let staff = new Map();
    //let staff = [];
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let number = array[i].length;
        //let person = new Employer(name, number);
        //staff.push(person)
        staff.set(name, number);

    }

    let staffs = Array.from(staff);
    //staff.forEach(i => console.log(`Name: ${i.name} -- Personal Number: ${i.number}`));
    staffs.forEach(i => console.log(`Name: ${i[0]} -- Personal Number: ${i[1]}`));
};
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);