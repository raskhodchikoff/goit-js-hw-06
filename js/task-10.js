const inputNumber = document.querySelector('[type="number"]');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  boxes.innerHTML = '';

  const blocks = [];

  for (let i = 1; i <= inputNumber.value; i += 1) {
    const createBlock = document.createElement('div');

    createBlock.style.cssText = `width: ${20 + 10 * i}px;
		height: ${20 + 10 * i}px;
		background-color: ${getRandomHexColor()}`;

    blocks.push(createBlock);
  }

  boxes.append(...blocks);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  inputNumber.value = '';
}
