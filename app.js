function sendBack() {
  console.log("First");
  console.log("Second");
  console.log("Third");
  return true;
}

// let value=sendBack();

// console.log("Returned Value: ",value);

function sqr(num) {
  return num * num;
}

function BMIcalc(weight, height) {
  let BMI = weight / sqr(height);
  console.log(BMI);
  if (BMI < 14) {
    console.log("consult doc");
  } else if (BMI < 18) {
    console.log("under weight");
  } else if (BMI > 30) {
    console.log("Visit Doc");
  } else if (BMI > 25) {
    console.log("Obese");
  } else {
    console.log("Just Correct");
  }
}

BMIcalc(68,1.8)
