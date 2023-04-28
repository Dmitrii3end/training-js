// Напишите функцию getInfo(persons), которая принимает массив объектов, описывающих человека, 
// имеющих поля {name, age}, и возвращает объект со средним возрастом и именем самого старшего человека.

const getInfo = personsArray => {
    let result = {
        averageAge: 0,
        oldestPersone: ''
    }

    let maxAge = 0;

    for (let i = 0; i < personsArray.length; i++) {
        result.averageAge += personsArray[i].age;

        if (maxAge < personsArray[i].age) {
            maxAge = personsArray[i].age;
            result.oldestPersone = personsArray[i].name;
        }
    }

    result.averageAge /= personsArray.length;

    return result;
}

const arr = [{ name: 'Ivan', age: 43 }, { name: 'Dima', age: 23 }, { name: 'Olga', age: 15 }];

console.log(getInfo(arr));