// const body = document.querySelector("body");

// const para1 = document.createElement("span");

// para1.textContent = "Hello World";

// para1.style.color = "aqua";

// body.appendChild(para1);

// const h2 = document.createElement("h2");
// h2.textContent = "I Like You";

const h1 = document.querySelector("h1");

// body.insertBefore(h2, h1);

// h1.parentElement.removeChild(h1);

// h1.remove();

const h2 = document.createElement("h2");
h2.textContent = "Be Happy!";
h2.style.color = "green";

h1.parentElement.replaceChild(h2, h1);
