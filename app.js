let i = 11;

//nested if

// if (i < 10) {
//   if (i < 5) {
//     console.log("very less");
//   } else {
//     console.log("less");
//   }
// } else {
//   console.log("Higher value");
// }

//else if

if (i < 5) {
  console.log("very less");
} else if (i <= 10) {
  console.log("less");
} else {
  console.log("Higher value");
}

// i<5---> print "very less"
// 5,6,7,8,9,10---> print "less"

// 11,12...,10<i----> print "higher value"
