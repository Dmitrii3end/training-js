// Перепишите функцию так, чтобы она писала 'Hello, {name}' в консоль только при первых трёх вызовах, 
// начиная с 4-го ничего не делала. Используйте замыкания.
// Исходный код:

// const sayHello = name => {
//   console.log(`Hello, ${name}`);
// }

function sayH() {
    let counter = 0;

    return function(name) {
        if (counter < 3) {
            counter++;
            return `Hello, ${name}`;

        }
    }
}

let sayHello = sayH();

console.log(sayHello('Andrew'));
console.log(sayHello('Andrew'));
console.log(sayHello('Andrew'));
console.log(sayHello('Andrew'));
console.log(sayHello('Andrew'));
console.log(sayHello('Andrew'));
console.log(sayHello('Andrew'));