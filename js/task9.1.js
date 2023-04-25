// Напишите функцию countEverySecond(n), которая каждую секунду печатает в консоль цифру, 
// начиная с 1 и заканчивая {n}.

const countEverySecond = end => {
    let count = 0;
    let interval = setInterval(() => {
        console.log(++count);
        if (count === end) {
            clearInterval(interval);
        }
    }, 1000)
}

countEverySecond(5);