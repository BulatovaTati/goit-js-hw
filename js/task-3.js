const input = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

input.addEventListener('input', onOutputChange);

function onOutputChange(event) {
  nameOutput.textContent =
    event.target.value.trim() !== '' ? event.target.value : 'Anonymous';
}
