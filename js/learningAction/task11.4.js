// Выведите на экран надпись «Ширина экрана {width} пикселей» и обновляйте её при изменении 
// ширины экрана.

const currentWindowWidth = () => {
    let currentWidth = window.innerWidth;
    document.querySelector('.window-width').innerHTML = `Ширина экрана ${currentWidth} пикселей`;

}

currentWindowWidth();
window.addEventListener('resize', currentWindowWidth);