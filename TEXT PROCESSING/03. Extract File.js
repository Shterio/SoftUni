words = (text) => {
    let indexPoint = text.lastIndexOf('.');
    let index = text.lastIndexOf('\\');

    let word = text.substring(index + 1, indexPoint);
    let file = text.substr(indexPoint + 1)

    console.log(`File name: ${word}`)
    console.log(`File extension: ${file}`)
};
words('C:\\Internal\\training-internal\\Template.pptx');