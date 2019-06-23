school =(array) => {
    let grade9 = [[],[]];
    let grade10 = [[],[]];
    let grade11 = [[],[]];
    let grade12 = [[],[]];

    for (let arrayElement of array) {
        let [name,grade,score]= arrayElement.split(', ');
        name = name.split(': ')[1];
        grade = Number(grade.split(': ')[1]);
        score = Number(score.split(': ')[1]);

        if (grade === 8){
            if (score >= 3){
                grade9[0].push(name);
                grade9[1].push(score);
            }
        }
        if (grade === 9){
            if (score >= 3){
                grade10[0].push(name);
                grade10[1].push(score);
            }
        }
        if (grade === 10){
            if (score >= 3){
                grade11[0].push(name);
                grade11[1].push(score);
            }
        }
        if (grade === 11){
            if (score >= 3){
                grade12[0].push(name);
                grade12[1].push(score);
            }
        }
    }

    console.log(grade9);
    console.log(grade10);
    console.log(grade11);
    console.log(grade12);
};
school([ 'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
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
    'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00' ]
);