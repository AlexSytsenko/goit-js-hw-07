const inputRef = document.querySelector("#controls input");

const btnCreateRef = document.querySelector('button[data-action="render"]');

const btnDestroyRef = document.querySelector('button[data-action="destroy"]');

const boxesRef = document.querySelector("#boxes");

const amount = 0;
const defaultSize = 30;

btnCreateRef.addEventListener("click", () => createBoxes(amount));
btnDestroyRef.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(inputRef.value);

  const rezult = [];
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement("div");
    const dimension = defaultSize + 10 * i + "px";
    element.style.width = dimension;
    element.style.height = dimension;
    element.style.background = getRandomColor();

    rezult.push(element);
  }
  boxesRef.append(...rezult);
}

function destroyBoxes() {
  boxesRef.innerHTML = "";

  inputRef.value = "";
}

function getRandomColor() {
  const o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")";
}
