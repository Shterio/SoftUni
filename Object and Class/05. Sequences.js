function solve(input) {
    let arr = [];
    for (const str of input) {
        arr.push(JSON.parse(str).sort((a, b) => b - a));
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (compareArrays(arr[i],arr[j])) {
                arr.splice(j,1);
                j--;
            }
        }
    }

    arr.sort((a,b) => a.length - b.length);
    arr.forEach(a => console.log(`[${a.join(', ')}]`))

    function compareArrays(arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }
        else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return false;
                }
            }
            return true;
        }
    }
}