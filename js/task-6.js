const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

const createBtnBoxes = document.querySelector('[data-create]');
const deleteBtnBoxes = document.querySelector('[data-destroy]');

createBtnBoxes.addEventListener('click', () => {
  const value = Number(input.value);

  if (value >= input.min && value <= input.max) {
    destroyBoxes();
    createBoxes(value);
  } else {
    alert(
      value < input.min
        ? 'Sorry, minimum number is 1'
        : 'Sorry, maximum number is 100'
    );
  }

  input.value = '';
});

deleteBtnBoxes.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const collection = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;

    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.classList.add('colorised-boxes');
    newBox.style.height = size + 'px';
    newBox.style.width = size + 'px';

    collection.appendChild(newBox);
  }

  boxes.prepend(collection);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
