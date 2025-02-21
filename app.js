const height = Number(prompt("Enter Your Height"));

const h1=document.querySelector("h1")

if(height>180){
    h1.textContent="Over Height"
    h1.style.backgroundColor="red"
}else if(height>160){
    h1.textContent="Correct Heght"
    h1.style.backgroundColor="green"
}else{
    h1.textContent="Under height"
    h1.style.backgroundColor="red"
}


//create BMI Calculator.