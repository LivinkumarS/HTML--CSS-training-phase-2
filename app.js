// Eventlisteners

const allLi = document.querySelectorAll("li"); // will not return element. list of elements

for (let i = 0; i < allLi.length; i++) {
  allLi[i].addEventListener("click", () => {
    console.log("I Like You");
  });
}
