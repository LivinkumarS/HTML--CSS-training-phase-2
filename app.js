// let number1 = 89;
// number1 = 90;
// console.log(number1);

let a = 10;
let b = 1;

// a = a + 1;
// a++;  //11 (10+1)
// ++a;  //11 (10+1)

// const c = ++a; //a=11, c=11 pre
const c = a++; //c=10,a=11 post

console.log("a:", a);
console.log("c:", c);

// String Operations

// //concatination

let first_name = "pratap";
let last_name = "pojari";

let fullname = first_name + " " + last_name;

console.log(fullname);

//length

console.log(first_name.length);

// Slice

const str = "banana and apple I would love to eat";

let newStr = str.slice(8, 17);
console.log(newStr);

console.log(newStr.toLowerCase());
console.log(newStr.toUpperCase());
