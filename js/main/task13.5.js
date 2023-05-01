// Переверните строку с помощью рекурсии.


const reverse = (str) => {
    if (str === '') return str;
    const lastIdx = str.length - 1;
    return str[lastIdx] + reverse(str.slice(0, lastIdx))
}


console.log(
    reverse(''),
    reverse('12345'),
)