cut = (input) => {
    let output = [];

    let firstStr = input.slice(0, Math.round(input.length / 2));
    output.push(firstStr);

    let secondStr = input.slice(Math.round(input.length / 2), input.length);
    output.push(secondStr);

    output.forEach(i => console.log(i.split('').reverse().join('')));

};
cut('tluciffiDsIsihTgnizamAoSsIsihT');