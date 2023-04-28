// На сайте Reddit ссылки на разделы (сабреддиты) формируются следующим образом: 
// https://reddit.com/r/название_раздела/. Напишите функцию, которая принимает ссылку на раздел и возвращает 
// название раздела.

const sectionTitle = str => {
    arr = str.split('/');
    return arr[arr.length - 2];
}

let url = 'https://reddit.com/r/git/';

console.log(sectionTitle(url));