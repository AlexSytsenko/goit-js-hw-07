const listCategories = document.querySelector("#categories"),
  itemsListCategories = [...listCategories.children];

console.log(`В списке ${itemsListCategories.length} категории.`);

itemsListCategories.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const quantityItems = item.querySelectorAll("ul li").length;

  console.log(`Категория: ${title}\nКоличество элементов: ${quantityItems}`);
});
