const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const inputUserName = event => {
  output.textContent = input.value === '' ? 'Anonymous' : event.currentTarget.value;
};

input.addEventListener('input', inputUserName);
