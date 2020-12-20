//Исправил после обратной связи ментора.

const categoriesRef = document.querySelectorAll(".item");

console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const quantityItems = item.querySelectorAll("ul li").length;

  console.log(`Категория: ${title}\nКоличество элементов: ${quantityItems}`);
});

//Мое первое решение сделал так!

/*const categoriesRef = document.querySelector("#categories"),
  itemsCategories = [...categoriesRef.children];

console.log(`В списке ${itemsCategories.length} категории.`);

itemsCategories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const quantityItems = item.querySelectorAll("ul li").length;

  console.log(`Категория: ${title}\nКоличество элементов: ${quantityItems}`);
});
*/
