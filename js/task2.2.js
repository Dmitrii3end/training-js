// Напишите программу, которая запрашивает у пользователя три числа и выводит максимальное из них, 
// используйте if/else/else if. Попытайтесь не использовать &&.

let firstNum = 3;
let secondNum = 10;
let thirdNum = -5;

function maxNum(a, b, c) {
    let max = a;
    if (max < b) {
        max = b;
    }
    if (max < c) {
        max = c;
    }

    return max;
}

console.log(maxNum(firstNum, secondNum, thirdNum));