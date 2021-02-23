const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
console.log(ingredients);
const listOfItem = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
    liItem.textContent = ingredient;
    console.log(liItem);
    return liItem;
    
});
const listRef = document.querySelector('#ingredients')
    .append(...listOfItem);
