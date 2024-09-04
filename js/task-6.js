const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

const createBtnBoxes = document.querySelector('[data-create]');
const deleteBtnBoxes = document.querySelector('[data-destroy]');

createBtnBoxes.addEventListener('click', () => {
  const value = input.value;
  const add = createBoxes(value);

  if (Number(value) >= input.min && Number(value) <= input.max) {
    boxes.prepend(...add);
    boxes.classList.add('boxes');
  } else if (value === '' || value === '0') {
    alert('Sorry, minimum number is 1');
    boxes.classList.remove('boxes');
  } else {
    alert('Sorry, maximum number is 100');
    boxes.classList.remove('boxes');
  }
});

deleteBtnBoxes.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const collection = [];

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;

    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.classList.add('colorised-boxes');
    newBox.style.height = size + 'px';
    newBox.style.width = size + 'px';

    // newBox.style.cssText = ` background-color: ${getRandomHexColor()};
    // height: ${baseSize + 'px'}; width: ${baseSize + 'px'};`;

    collection.push(newBox);
  }

  return collection;
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
  boxes.classList.remove('boxes');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
