const input = document.querySelector("#food-name");
const addBtn = document.querySelector(".add-btn");
const ul = document.querySelector("ul");

addBtn.addEventListener("click", () => {
  const newLiTag = document.createElement("li");
  newLiTag.innerHTML = `<div>${input.value} <button onclick="removeELement(event)">x</button></div>`;
  ul.appendChild(newLiTag);
  input.value = "";
});

const allRemBtn = document.querySelectorAll(".rem-btn");

function removeELement(e){
    e.target.parentElement.parentElement.remove()
}