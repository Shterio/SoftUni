const regex = /(?<product>>>[A-Za-z]+<<\b)/gmi;
const str = `>>Sofa<<312.23!3
>>TV<<300!5
>Invalid<<!5
Purchase
`;
let m;

while ((m = regex.exec(str)) !== null) {
    // The result can be accessed through the `m`-variable.
    m.forEach((match) => {
        console.log(`Found match: ${match}`);
    });
}