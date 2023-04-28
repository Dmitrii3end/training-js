// Создайте кнопку, которая при клике создает другую кнопку, которая, в свою очередь, создаёт другую 
// кнопку, и т.д.

const division = () => {
    let field = document.querySelector('#test-field1');
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Clic kme';
    newButton.addEventListener('click', division);
    field.appendChild(newButton);
}