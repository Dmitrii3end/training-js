// Создайте раскрывающийся блок (accordion). Сверху блок с заголовком, при 
// нажатии на который снизу показывается блок с текстом, при повторном нажатии блок с 
// текстом скрывается.

document.querySelectorAll(".header").forEach(el => {
    el.addEventListener('click', () => {
        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll(".panel").forEach(el => {
                el.style.maxHeight = null;
                el.style.padding = null;
            });

        } else {
            document.querySelectorAll(".panel").forEach(el => {
                el.style.maxHeight = null;
                el.style.padding = null;
            });
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "5px 10px 10px";
        }
    })
})