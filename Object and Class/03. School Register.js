school = (array) => {
    let students = {};

    for (let argument of array) {
        let line = argument.split(': ').join(' ').split(', ');
        let name = line[0].split(' ')[2];
        let grade = Number(line[1].split(' ')[1]) + 1;
        let score = Number(line[2].split(' ')[5]);

        if (score >= 3) {
            if (students.hasOwnProperty(grade)) {
                students[grade].push({'name': name, 'average': score})
            } else {
                students[grade] = [{'name': name, 'average': score}]
            }
        }
    }
    let obj = Object.entries(students);
    let sort = Object.entries(obj[0][1]);

    console.log(sort);
};
school(['Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
    'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
    'Student name: George, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
    'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
    'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
    'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
    'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
    'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
    'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
    'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00']
);