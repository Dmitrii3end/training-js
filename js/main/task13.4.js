// Напишите функцию len(str), которая принимает строку и рекурсивно считает её длину. 
// Свойство str.length использовать нельзя.


const len = function len(str, n = 0) {
    if (str === '') return n;
    return len(str.slice(1), n + 1);
}

console.log(len('999 999 999'));
console.log(len(''));