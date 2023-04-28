// Напишите функцию, которая принимает массив массивов вида [['ключ1', 'значение1'], ['ключ2', 'значение2']] 
// и возвращает объект вида: {ключ1: 'значение1', ключ2: 'значение2'}.

const arrayToObject = arr => {
    const result = {};

    arr.forEach(item => result[item[0]] = item[1]);

    return result;
}

const arr = [
    ['key2', 3],
    ['key1', 'hello']
];

console.log(arrayToObject(arr));