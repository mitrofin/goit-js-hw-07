const listRefCategories = document.querySelector('#categories');
const lengthlistRefCategories = listRefCategories.children.length;
console.log(`В списке ${lengthlistRefCategories} категории.`);

const liItems = listRefCategories.querySelectorAll('li.item');
liItems.forEach(({ children }) =>
  console.log(`Категория: ${children[0].textContent}
Количество элементов: ${children[1].children.length}`),
);

const createTitle = () => {
    const title = document.createElement('h3');
    title.textContent = ('Задание 1');
    listRefCategories.before(title);
};
createTitle();