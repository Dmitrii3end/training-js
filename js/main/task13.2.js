// Напишите функцию pow(a, b), которая возводит a в степень b с помощью умножения и рекурсии.

const pow = (a, b) => {
    if (b < 0) {
        a = 1 / a;
        b = -b;
    }
    if (a === 0) return 0;
    if (b === 0) return 1;
    if (b === 1) return a;

    return a * pow(a, b - 1);
}

console.log(pow(3, 0));
console.log(pow(3, 1));
console.log(pow(3, -3));
console.log(pow(3, 3));