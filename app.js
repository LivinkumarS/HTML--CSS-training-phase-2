const btn1 = document.querySelector(".button1");
const btn2 = document.querySelector(".button2");
const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const h1 = document.querySelector("h1");

let random1 = 0; //1-6
let random2 = 0;

btn1.addEventListener("click", () => {
  dice1.classList.add("spinning-dice");
  random1 = Math.floor(Math.random() * 6) + 1;
});

btn2.addEventListener("click", () => {
  dice2.classList.add("spinning-dice");
  random2 = Math.floor(Math.random() * 6) + 1;

  setTimeout(() => {
    if (random1 && random2) {
      dice1.textContent = random1;
      dice2.textContent = random2;
  
      if (random1 > random2) {
        h1.textContent = "Player 1 is the winner!";
      } else if (random1 === random2) {
        h1.textContent = "Its a Tie!";
      } else {
        h1.textContent = "Player 2 is the winner!";
      }
    } else {
      h1.textContent = "Both Should Play!";
    }
  
    dice1.classList.remove("spinning-dice");
    dice2.classList.remove("spinning-dice");
  
    random1 = 0;
    random2 = 0;
  }, 3000);
});



