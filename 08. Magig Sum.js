function name(arr) {
    let array = arr[0].split(' ').map(Number);
    let num = +arr[1];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            if (array[i] + array[j] === num) {
                console.log(array[i] + ' ' + array[j]);
            }
        }
    }

}

name(['1 7 6 2 19 23', '8']);