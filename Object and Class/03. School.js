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

