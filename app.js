const addBtn = document.querySelector(".add-btn");
const any = document.querySelector("#food-name");
const ul = document.querySelector("ul");



addBtn.addEventListener("click", () => {

  if(any.value===""){
    return alert("you cannot add empty string!")
  }

  const newElement = document.createElement("div");
  newElement.innerHTML =
    any.value + ' <button onclick="delElement(event)">x</button>';

  ul.appendChild(newElement);
  any.value = "";
});

function delElement(event) {
  event.target.parentElement.remove();
}
