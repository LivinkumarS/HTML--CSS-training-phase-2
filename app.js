const h2 = document.querySelector("h2");

const num = Number(prompt("Type a Number:"));

if (num > 10) {
  h2.style.backgroundColor = "red";
  h2.style.fontSize = "larger";
  h2.style.color = "blue";
}
