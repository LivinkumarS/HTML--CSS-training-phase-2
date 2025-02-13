let person = {
  name: "Pratap",
  Role: "Developer",
  Company: "TCS",
  Qualification: "BE",
  age: 28,
  isMarried: false,

  printFullname: function () {
    console.log("Pratap Poojari");
  },
  printRole: () => {
    console.log("Developer in TCS");
  },
};



//Dot
// console.log(person.name);
// console.log(person.Qualification);

// //sqr brackets
// console.log(person["name"]);
// console.log(person["Qualification"]);
person.age--;
person.printFullname();
person.printRole();