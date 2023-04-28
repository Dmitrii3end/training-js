// Напишите функцию repeatWord(word, count), которая принимает слово и количество 
// раз для его повторения. Например, если вызвать repeatWord('слово', 3) функция напечатает
//  "слово1, слово2, слово3" на одной строке.

function repeatWord(word, count) {
    let result = word;

    for (let i = 0; i < count - 1; i++) {
        result += `, ${word}`;
    }

    return result;
}

console.log(repeatWord('слово', 3));