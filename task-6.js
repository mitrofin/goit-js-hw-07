const inputRef = document.querySelector('#validation-input');

const inputValidation = (event) => { 
    if (inputRef.value.length !== Number(inputRef.dataset.length)) {
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
};
    
    
    /* inputRef.value.length !== Number(inputRef.dataset.length)
        ? inputRef.classList.add('invalid')
        :inputRef.classList.add('valid'); */

inputRef.addEventListener('blur', inputValidation);



const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 6');
    inputRef.before(title);
};
createTitle();

const createDivContainer = () => {
    const divContainer = document.createElement('div');
    divContainer.setAttribute('id', 'validation-container');
    inputRef .before(divContainer);
    divContainer.appendChild(inputRef);

};
createDivContainer();

