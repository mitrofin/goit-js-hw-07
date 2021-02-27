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
const listRef = document.querySelector('#ingredients');

const appendItems = () => { 
  listRef.append(...listOfItem);
};
appendItems();
 
const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 2');
    listRef.before(title);
};
createTitle();    