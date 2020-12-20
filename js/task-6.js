const inputRef = document.querySelector("#validation-input");

const dataValue = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", handleInput);

function handleInput() {
  if (event.target.value.length !== dataValue) {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  } else {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  }
}
