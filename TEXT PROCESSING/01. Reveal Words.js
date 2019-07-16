words =(searchWords, text) => {
    let searchWord = searchWords.split(', ');

    searchWord.forEach(word => {
        text = text.replace('*'.repeat(word.length), word)
    });

    console.log(text)
};
words('great, learning',
    'softuni is ***** place for ******** new programming languages');