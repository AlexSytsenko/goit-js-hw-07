const fontControlRef = document.getElementById("font-size-control"),
  textRef = document.getElementById("text");

textRef.style.fontSize = fontControlRef.value + "px";

fontControlRef.addEventListener("input", handleChangeFont);

function handleChangeFont() {
  let size = fontControlRef.value;
  textRef.style.fontSize = size + "px";
}
