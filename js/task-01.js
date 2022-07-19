const countItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${countItem.length}`);

countItem.forEach(item => {
  console.log();
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// const items = [...countItem];
// for (let item of items) {
//   let categoryItem = item.firstElementChild.textContent;
//   let quantityItem = item.lastElementChild.children.length;
//   console.log();
//   console.log(`Category: ${categoryItem}`);
//   console.log(`Elements: ${quantityItem}`);
// }

// const items = [...countItem]
//   .map(
//     items => `
// Category: ${items.firstElementChild.textContent}
// Elements: ${items.lastElementChild.children.length}`
//   )
//   .join('\n');
