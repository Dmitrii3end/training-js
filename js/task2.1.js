// Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, 
// и Гипотенуза C. Программа проверяет по теореме Пифагора эти стороны треугольника и пишет 
// в консоль "Это прямоугольный треугольник!" или "Это не прямоугольный треугольник!". 
// Используйте if/else для проверки условия.


function isRightTriangle(leg1, leg2, hypotenuse) {
    return (Math.pow(hypotenuse, 2) === Math.pow(leg1, 2) + Math.pow(leg2, 2)) ? true : false;
}

let leg1 = 3;
let leg2 = 4;
let hypotenuse = 5;

if (isRightTriangle(leg1, leg2, hypotenuse)) {
    console.log("Это прямоугольный треугольник!");
} else {
    console.log("Это не прямоугольный треугольник!");
}