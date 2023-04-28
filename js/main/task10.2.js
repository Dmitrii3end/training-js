// Сверстайте 5 параграфов с текстом. С помощью JS меняйте цвет фона каждого параграфа 
// на случайный каждую секунду. Создайте массив с названиями цветов ['blue', 'cyan', ...] и с помощью функции 
// из предыдущего задания выбирайте случайный цвет из массива.


const getRandom = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomColor = arr => arr[getRandom(0, arr.length)];


const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'purple'];

let test = document.querySelectorAll('.test');

for (let i = 0; i < test.length; i++) {
    test[i].style.backgroundColor = getRandomColor(colors);
}

console.log(test);