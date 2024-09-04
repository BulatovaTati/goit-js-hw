const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories: ', categories.length); // Number of categories:  3

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2').textContent;

  const categoryElementsCount = category.querySelectorAll('ul li');

  for (let i = 0; i < categoryElementsCount.length; i++) {
    categoryElementsCount[i].classList.add('option-item');
  }

  console.log(`Category: ${categoryTitle}`); // Category: ;
  console.log(`Elements: ${categoryElementsCount.length}`); // Elements: ;
});
