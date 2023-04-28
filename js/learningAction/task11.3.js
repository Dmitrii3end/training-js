// Напишите игру: в центре экрана появляется кнопка «Нажми меня». Когда юзер 
// наводит на неё курсор, она сразу же перемещается на случайные координаты.

const random = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const btn = document.querySelector('.play-me');

btn.onmouseover = () => {
    let parentWidth = Number(btn.parentNode.offsetWidth);
    let parentHeight = Number(btn.parentNode.offsetHeight);
    let btnWidthHalf = Number(btn.offsetWidth) / 2;
    let btnWHeightHalf = Number(btn.offsetHeight) / 2;

    btn.style.left = random(btnWidthHalf, parentWidth - btnWidthHalf) + 'px';
    btn.style.top = random(btnWHeightHalf, parentHeight - btnWHeightHalf) + 'px';
};