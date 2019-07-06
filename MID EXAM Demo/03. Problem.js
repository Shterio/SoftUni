lastStop = (array) => {
    let numbers = array.shift().split(' ').map(Number);

    for (let arrayElement of array) {
        if (arrayElement === 'END') {
            console.log(numbers.join(' '));
            break;
        }else {
            let [command, firstNum, secondNum] = arrayElement.split(' ');
            firstNum = Number(firstNum);
            secondNum = Number(secondNum);

