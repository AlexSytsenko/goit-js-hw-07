const inputRef = document.querySelector("#validation-input");

const dataValue = +inputRef.dataset.length;

inputRef.addEventListener("blur", handleInput);
inputRef.addEventListener("focus", removeClass);

function handleInput() {
  if (event.target.value.length !== dataValue) {
    inputRef.classList.add("invalid");
  }
  inputRef.classList.add("valid");
}

function removeClass() {
  inputRef.classList.remove("valid");
  inputRef.classList.remove("invalid");
}
