const inputRefChange = document.getElementById('name-input');
let outputRefChange = document.querySelector('#name-output');

const makeChangeOutputValue = (event) => {
    outputRefChange.textContent = event.target.value;
    if (event.target.value === "") {
        outputRefChange.textContent = "незнакомец"
    }
};
inputRefChange.addEventListener('input', makeChangeOutputValue);