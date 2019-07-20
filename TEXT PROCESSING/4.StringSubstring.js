function solve(word, inputText) {
    let text = inputText.toLowerCase();
    text = text.split(' ')
        .forEach(i => (i === word) ? console.log(word) : console.log(`${word} not found!`));

    for (let i = 0; i < text.length; i++) {
        if (text[i] === word) {
            console.log(word);
            return;

        }
    }
    console.log(`${word} not found!`);
}

solve('python',
    'JavaScript is the best programming language')