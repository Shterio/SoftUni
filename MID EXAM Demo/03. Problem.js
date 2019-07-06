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

            if (command === 'Change') {
                if (numbers.includes(firstNum)) {
                    let index = numbers.indexOf(firstNum);
                    numbers[index] = secondNum;
                }
            }else if (command === 'Hide') {
                if (numbers.includes(firstNum)) {
                    let index = numbers.indexOf(firstNum);
                    numbers.splice(index, 1);
                }
            } else if (command === 'Switch') {
                if (numbers.includes(firstNum) && numbers.includes(secondNum)) {
                    let indexOfFirst = numbers.indexOf(firstNum);
                    let indexOfSecond = numbers.indexOf(secondNum);
                    numbers[indexOfFirst] = numbers.splice(indexOfSecond, 1, numbers[indexOfFirst])[0];
                }
            }else if (command === 'Insert') {
                if (firstNum < numbers.length && firstNum >= 0) {
                    numbers.splice(firstNum+1,0,secondNum);
                }
            } else if (command === 'Reverse'){
                numbers.reverse();
            }
        }
    }
};
lastStop(['77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'Reverse',
    'END']);