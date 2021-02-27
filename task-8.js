

const createBoxesBtnRef = document.querySelector('[data-action="render"]');
const removeBoxesBtnRef = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById('boxes')
const amountRef = document.querySelector('#controls > input');
const controlsContainerRef = document.getElementById('controls');

controlsContainerRef.firstElementChild.classList.add('button-left');
controlsContainerRef.lastElementChild.classList.add('button-right');

const onCreateBoxes = amount=> {
    let startSize = 30;
    for (let i = 0; i < amount; i += 1) {
        let size = startSize + i * 10;
        const divItem = document.createElement('div');
    divItem.style.cssText = `width: ${size}px;
     height: ${size}px; 
     background-color: rgba( ${random()} , ${random()} , ${random()} )`;
        divItem.classList.add('box-container');
        
    boxes.appendChild(divItem)
    };
  
 };
const onRemoveBoxes = () => {
    boxes.innerHTML = '';
    amountRef.value = "";
};

const onRenderBtnClick=()=> {
    onCreateBoxes(amountRef.value);
}


const random =()=> {
    return Math.floor(Math.random() * 256);
}

const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 8');
    controlsContainerRef.before(title);
 };


createBoxesBtnRef.addEventListener('click', onRenderBtnClick);
removeBoxesBtnRef.addEventListener('click', onRemoveBoxes);
createTitle();



