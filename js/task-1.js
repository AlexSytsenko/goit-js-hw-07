const categoriesRef = document.querySelector("#categories"),
  itemsCategories = [...categoriesRef.children];

console.log(`В списке ${itemsCategories.length} категории.`);

itemsCategories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const quantityItems = item.querySelectorAll("ul li").length;

  console.log(`Категория: ${title}\nКоличество элементов: ${quantityItems}`);
});
