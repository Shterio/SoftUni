words =(searchWords, text) => {
    let searchWord = searchWords.split(', ');

    searchWord.forEach(word => {
        text = text.replace('*'.repeat(word.length), word)
    });