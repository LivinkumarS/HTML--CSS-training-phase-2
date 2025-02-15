let person = {
  name: "Pratap Poojari",
  Role: "Developer",
  Company: "TCS",
  Qualification: "BE",
  age: 28,
  isMarried: false,

  printFullname: function () {
    console.log(`His name is ${this.name} and his age is ${this.age}`);
  },
  printRole: () => {
    console.log("Developer in TCS");
  },

  object: {
    favMovie: "KGF",
    favFood: "Biriyani",
    innerObject: {
      favCartoon: "Mr Been",
    },
  },
};

delete person.object.favFood;

person.printFullname();
