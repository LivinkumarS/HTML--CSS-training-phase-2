// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// function mul(num1, num2) {
//   console.log(num1 * num2);
// }

// function BMIcalc(weight, height) {
// let BMI = weight / (height * height);

// console.log(BMI);

// if (BMI < 14) {
//   console.log("consult doc");
// } else if (BMI < 18) {
//   console.log("under weight");
// } else if (BMI > 30) {
//   console.log("Visit Doc");
// } else if (BMI > 25) {
//   console.log("Obese");
// } else {
//   console.log("Just Correct");
// }
// }

const BMIcalc = (weight, height) => {
  let BMI = weight / (height * height);
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
};

BMIcalc(68, 1.8);
BMIcalc(70, 1.2);
