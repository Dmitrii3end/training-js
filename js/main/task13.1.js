// Напишите функцию multiply(a, b), которая умножает a на b с помощью сложения и рекурсии.

const multiply = (a, b) => {
    if (b < 0) {
        a = -a;
        b = -b
    }
    if (b === 1) {
        return a;
    }

    return a + multiply(a, b - 1);
}

console.log(multiply(3, -3));
console.log(multiply(3, 0));
console.log(multiply(3, 3));