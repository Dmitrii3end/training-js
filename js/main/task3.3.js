// Напишите программу, которая говорит пользователю "Введите 10", 
// пока он не введёт 10. Затем говорит "Введите 20", потом 40 и т.д. Если пользователь вводит 
// другое число, нужно спросить его ещё раз, пока он не введёт нужное. Когда пользователь введёт 
// больше 100, напишите "Спасибо!" и остановите программу.

const START = 10;
const STEP = 10;
const END = 100;

for (let i = START; i <= END; i += STEP) {
    let num = 0;
    do {
        num = +prompt(`Введите ${i} :`, 0);
    } while (num != i);
}

alert('Спасибо!');