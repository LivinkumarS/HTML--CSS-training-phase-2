const btn = document.querySelector("button");
const inp = document.querySelector("#year");
const h2=document.querySelector("h2")

btn.addEventListener("click", () => {
  if (inp.value % 100 == 0) {
    if (inp.value % 400 == 0) {
      h2.textContent="Leap Year"
    } else {
      h2.textContent="Non Leap Year"
    }
  } else {
    if (inp.value % 4 === 0) {
      h2.textContent="Leap Year"
    } else {
      h2.textContent="Non Leap Year"
    }
  }
});
