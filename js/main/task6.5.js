// Напишите функцию transformUpvotes(arr), которая принимает массив сокращенных записей количества 
// лайков ['10k', '2.3k', '5k', '32', '28.4k'] и возвращает массив чисел [10000, 2300, 5000, 32, 28400].

const transformUpvotes = arr => {
    return arr.map(function(item) {
        if (item.lastIndexOf('k') === -1) {
            return +item;
        }

        return +item.slice(0, -1) * 1000;
    })
}

arr = ['10k', '2.3k', '5k', '32', '28.4k'];

console.log(transformUpvotes(arr));