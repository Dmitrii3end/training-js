// Напишите функцию countChars(str), которая принимает строку и возвращает количество букв в этой строке.
// Например: countChars('Арарат') должен вернуть: { а: 3, р: 2, т: 1 }.

const countChars = str => {
    const result = {};

    str.split('').forEach(item => {
        if (result.hasOwnProperty(item.toLowerCase())) {
            result[item.toLowerCase()] += 1;
        } else {
            result[item.toLowerCase()] = 1;
        }
    })

    return result;
}

let str = 'Арарат';

console.log(countChars(str));