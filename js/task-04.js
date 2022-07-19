let counterValue = 0;
const onIncrementBtn = document.querySelector('[data-action="increment"]');
const onDecrementBtn = document.querySelector('[data-action="decrement"]');
const counter = document.querySelector('#value');

const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

onIncrementBtn.addEventListener('click', increment);
onDecrementBtn.addEventListener('click', decrement);
