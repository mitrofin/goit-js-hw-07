const listRefCategories = document.querySelector('#categories');
const lengthlistRefCategories = listRefCategories.children.length;
console.log(`В списке ${lengthlistRefCategories} категории.`);

const liItems = listRefCategories.querySelectorAll('li.item');
liItems.forEach(({ children }) =>
  console.log(`Категория: ${children[0].textContent}
Количество элементов: ${children[1].children.length}`),
);