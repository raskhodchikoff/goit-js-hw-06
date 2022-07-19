const inputSymbol = document.querySelector('#validation-input');

function onInputBlur(event) {
  if (Number(event.currentTarget.value.length) === Number(event.currentTarget.dataset.length)) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.add('valid');
  } else {
    event.currentTarget.classList.add('invalid');
  }
}

inputSymbol.addEventListener('blur', onInputBlur);
