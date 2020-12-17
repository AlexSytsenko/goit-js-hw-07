const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const IngredientsRef = document.querySelector("#ingredients");

const creatrItem = (element) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;

  return itemEl;
};

const itemsElArray = ingredients.map((element) => creatrItem(element));

IngredientsRef.append(...itemsElArray);
