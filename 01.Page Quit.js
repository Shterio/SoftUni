function pageQuit1(input) {
    let inputArray = String(input[0]).split('');
    let currArray = [];
    let currArrayCounter = [];
    let currentString = '';
    let newIndex = 0;
    let count = '';
    for (let index = 0; index < inputArray.length; index++) {
        if (48 <= inputArray[index].charCodeAt() && inputArray[index].charCodeAt() <= 57) {
            [newIndex, count] = startNextString(inputArray, index);
        } else {
            currentString += inputArray[index];
            newIndex = index;
        }
        if (newIndex != index || newIndex === inputArray.length - 1) {
            currentString = currentString.toUpperCase();
            currArray.push(currentString);
            currArrayCounter.push(Number(count));
            currentString = '';
            count = ''
            if (newIndex !== inputArray.length - 1) {
                index = newIndex - 1;
            } else {
                break
            }
        }
    }
    let output = '';
    for (let i = 0; i < currArray.length; i++) {
        for (let y = 0; y < currArrayCounter[i]; y++) {
            output += currArray[i];
        }
    }
    let uniqueSymbols = [...new Set(currArray.join(''))].length;

    console.log(`Unique symbols used: ${uniqueSymbols}`);
    console.log(output);



    function startNextString(inputArray, index) {
        newIndex = index;
        let lastPart = ''
        while (48 <= inputArray[newIndex].charCodeAt() && inputArray[newIndex].charCodeAt() <= 57) {
            lastPart += inputArray[newIndex];
            newIndex++;
            if (newIndex === inputArray.length) {
                newIndex--;
                break;
            }
        }
        return [newIndex, lastPart];
    }
}