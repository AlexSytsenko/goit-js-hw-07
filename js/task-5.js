const inputRef = document.querySelector("#name-input");
const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", handlerInput);

function handlerInput() {
  const value = event.target.value;

  value !== "" ? (nameRef.textContent = event.target.value) : (nameRef.textContent = "незнакомец");
}

// if (event.target.value !== "") {
//   nameRef.textContent = event.target.value;

// } else {
//   nameRef.textContent = "незнакомец";
// }
//}

//Сначала было так. Ментор - неверная логика, нужно проверять сначало значение...

// function handlerInput() {
//   nameRef.textContent = event.target.value;

//   if (event.target.value === "") {
//     nameRef.textContent = "незнакомец";
//   }
// }
