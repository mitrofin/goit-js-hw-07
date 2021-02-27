const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const counterValue = document.querySelector("#value");
const controlsContainerRef = document.getElementById('counter');

let  curentValue = 0;

const decrement = () => {
    return (counterValue.textContent = curentValue -= 1);
 };
const increment = () => {
    return (counterValue.textContent = curentValue += 1);
 };
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener('click', increment);


const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 4');
    controlsContainerRef.before(title);
};
createTitle();