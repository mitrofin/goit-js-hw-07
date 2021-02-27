const sizeControlRef = document.querySelector('#font-size-control');
const sizeTextRef = document.getElementById('text');
const onChangeTextSize = event => {
    sizeTextRef.style.fontSize = sizeControlRef.value + 'px';
};
sizeControlRef.addEventListener('input', onChangeTextSize);


const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 7');
    sizeControlRef.before(title);
};
createTitle();

const createDivContainer = () => {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'input-font-size');
    sizeControlRef .before(divContainer);
    divContainer.appendChild(sizeControlRef,sizeTextRef);

};
createDivContainer();