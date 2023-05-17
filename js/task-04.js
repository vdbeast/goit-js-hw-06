const decrementBtn = document.querySelector('button[data-action = "decrement"]');

const counterValue = document.getElementById('value');

const incrementBtn = document.querySelector('button[data-action = "increment"]');

let count = 0;

decrementBtn.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
});
incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
})



