const decrementBtn = document.querySelector("[data-action=decrement]");
const incrementBtn = document.querySelector("[data-action=increment]");
const counterValue = document.querySelector("#value");
let  curentValue = 0;

const decrement = () => {
    return (counterValue.textContent = curentValue -= 1);
 };
const increment = () => {
    return (counterValue.textContent = curentValue += 1);
 };
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener('click', increment);
