function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorValue = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  const bgColor = getRandomHexColor();
  body.style.backgroundColor = bgColor;
  colorValue.textContent = bgColor;
});
