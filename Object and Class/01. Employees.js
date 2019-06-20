employees = (array) => {
    class Employer {
        constructor (name,number){
            this.name = name;
            this.number = number;
        }
    }

    let staff = [];
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let number = array[i].length;
        let person = new Employer(name,number);
        staff.push(person);

    }
    staff.forEach(i => console.log(`Name: ${i.name} -- Personal Number: ${i.number}`));
};
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);