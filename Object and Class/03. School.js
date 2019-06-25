function solve(arr) {
    let studentObj = {};
    let students = {};
    let allStudents = [];

    for (const line of arr) {
        let splitedLine = line.split(': ').join(' ').split(', ');

        let name = splitedLine[0].split(' ')[2];
        let grade = +splitedLine[1].split(' ')[1] + 1;
        let averageScore = +splitedLine[2].split(' ')[5];

        if (averageScore < 3) {

        } else {
            if (!studentObj.hasOwnProperty(grade)) {

                studentObj[grade] = [{'name': name, 'averageScore': averageScore}];
            } else {

                studentObj[grade].push({'name': name, 'averageScore': averageScore});
            }
        }
    }

    let objEntries = Object.entries(studentObj)
        .sort((a, b) => a[0] - b[0]);
    let names = [];
    let sum = 0;
    let average = 1;
    let counter = 0;

