const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories: ', categories.length); // Number of categories:  3

categories.forEach(category => {
  const categoryElementsCount = category.querySelectorAll('ul li');

  for (let i = 0; i < categoryElementsCount.length; i++) {
    categoryElementsCount[i].classList.add('option-item');
  }

  console.log('Category:', category.firstElementChild.textContent);
  console.log('Elements:', category.lastElementChild.children.length);
});
