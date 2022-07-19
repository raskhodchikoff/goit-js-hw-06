const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const elemList = document.createElement('li');
  elemList.textContent = ingredient;
  elemList.classList.add('item');

  return elemList;
});

list.append(...elements);

// const makeList = options => {
//   return options.map(ingredient => {
//     const elemList = document.createElement('li');
//     elemList.textContent = ingredient;
//     elemList.classList.add('item');

//     return elemList;
//   });
// };

// const elements = makeList(ingredients);
// list.append(...elements);
