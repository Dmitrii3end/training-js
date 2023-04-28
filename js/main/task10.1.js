// Напишите функцию random(min, max), которая принимает минимальное и максимальное значение и возвращает 
// целое случайное число n, такое, что: min ≤ n ≤ max. Эта функция понадобится нам для следующих заданий.

// Используйте Math.random(), умножение и сложение.

const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

// for (let i = 0; i < 10; i++) {
//     console.log(getRandom(5, 10));
// }