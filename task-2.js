const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listOfItem = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    return liItem;
    
});
const listRef = document.querySelector('#ingredients')
    .append(...listOfItem);
