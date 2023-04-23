// Напишите функцию match, которая принимает 2 строки и возвращает true, если эти строки равны без 
// учета регистра. Например, match('hEllO', 'HELLo') должен вернуть true.

const match = (fitstStr, secondStr) => fitstStr.toLowerCase() === secondStr.toLowerCase();

console.log(match('12qq', '12QQ'));
console.log(match('qqqq', 'qq'));
console.log(match('', ''));