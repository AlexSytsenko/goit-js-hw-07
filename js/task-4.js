const btnIncrementRef = document.querySelector('button[data-action="increment"]'),
  btnDecrementRef = document.querySelector('button[data-action="decrement"]'),
  valueRef = document.querySelector("#value");

let counterValue = +valueRef.textContent;

btnIncrementRef.addEventListener("click", handleClickIncrement);
btnDecrementRef.addEventListener("click", handleClickDecrement);

function handleClickIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

function handleClickDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
