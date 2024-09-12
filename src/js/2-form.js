const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

try {
  const { email, message } =
    JSON.parse(localStorage.getItem(localStorageKey)) ?? '';
  form.elements.email.value = email ?? '';
  form.elements.message.value = message ?? '';
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

const formData = {
  email: '',
  message: '',
};

form.addEventListener('input', onFormData);
form.addEventListener('submit', onSubmitForm);

function onFormData(e) {
  const { name, value } = e.target;

  formData[name] = value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();

  const data = localStorage.getItem(localStorageKey);

  if (!data) {
    return alert('Oops, fiels is empty');
  }

  const parsedData = JSON.parse(data);
  console.log('parsedData: ', parsedData);

  form.reset();
  localStorage.removeItem(localStorageKey);
}
