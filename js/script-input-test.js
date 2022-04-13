const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');
let total = 0;
btnAdd.addEventListener('click', function () {
    console.log('click :)');
    const value = Number(valueInput.value);
    console.log(value);
    total += value;
    outputEl.textContent = total;
    valueInput.value = '';
});