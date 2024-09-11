const form = document.querySelector('.login-form');

form.addEventListener('submit', checkValid);

function checkValid(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All form fields must be filled in');
  }

  const userInfo = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(userInfo);
  event.currentTarget.reset();
}
