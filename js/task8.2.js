// Переменная, объявленная с помощью var, всплывает и видна на уровне функции, даже если объявлена внутри 
// цикла for. Перепишите программу так, чтобы она печатала от 1 до 10 в консоль. Используйте замыкания.
// Исходный код:

// for (var i = 0; i < 10; ++i) {
// 	setTimeout(() => console.log(i), 0);
// }


for (var i = 0; i < 10; ++i) {
    ((i) => {
        setTimeout(() => console.log(i), 0);
    })(i)
}