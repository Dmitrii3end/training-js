// Факториал числа n (n!) — это произведение натуральных чисел от 1 до n. 
// Напишите функцию fac(n).


const fac = n => {
    if (n === 1) return n;
    if (n < 1) return 1;

    return n * fac(n - 1);
}

console.log(fac(5));
console.log(fac(1));
console.log(fac(0));
console.log(fac(-10));