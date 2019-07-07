const name = ['gosho', 'pesho', 'stamat'];
const phone = ['123', '456', '789'];

function phones(name, phone) {
    const book = {};
    for (let index in name) {
        book[name[index]] = phone[index];
    }
    for (const bookElement in book) {
        let phone;
        phone = book[bookElement];
        console.log(`${bookElement} => ${phone}`);
    }
}

console.log(phones(name,phone));