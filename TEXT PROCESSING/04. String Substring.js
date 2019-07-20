string = (searchWord, str) => {
    let text = str.toLowerCase();
    (text.startsWith(searchWord)) ? console.log(searchWord) : console.log(`${searchWord} not found!`);
};

string('javascript',
    'JavaScript is the best programming language');
string('python',
    'JavaScript is the best programming language');
