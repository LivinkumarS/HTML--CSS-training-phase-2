// Eventlisteners

const h1 = document.querySelector(".head");
const h2 = document.querySelector(".head1");
const h3 = document.querySelector(".head2");

h1.addEventListener("click", (e) => {
  console.log(e.target);
});

h2.addEventListener("click", (e) => {
  console.log(e.target);
});

h3.addEventListener("click", (e) => {
  console.log(e.target);
});