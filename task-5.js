const inputRefChange = document.getElementById('name-input');

let outputRefChange = document.querySelector('#name-output');
const controlsContainerRef = document.getElementById('input-name');
const getTitlleRef = document.querySelector('body > h1');


const makeChangeOutputValue = (event) => {
    outputRefChange.textContent = event.target.value;
    if (event.target.value === "") {
        outputRefChange.textContent = "незнакомец"
    }
};
inputRefChange.addEventListener('input', makeChangeOutputValue);

const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 5');
    inputRefChange.before(title);
};
createTitle();

const createDivContainer = () => {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'input-name');
    inputRefChange.before(divContainer);
    divContainer.appendChild(inputRefChange, getTitlleRef);
    

};

createDivContainer();


