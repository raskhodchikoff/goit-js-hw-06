const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All fields must be filled');
  }
  const userInfo = {
    Email: email.value,
    Password: password.value,
  };

  console.log(userInfo);

  event.currentTarget.reset();
}
