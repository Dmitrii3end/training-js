// Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и 
// возвращает перевернутый отрицательный массив.

const negativeRevers = arr => arr.reverse().map(item => -item);

let arr = [1, -2, 5, 4];

console.log(negativeRevers(arr));