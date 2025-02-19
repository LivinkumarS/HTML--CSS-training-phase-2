// Map Method

// let arr = [1, 2, 3, 4, 5, 6]; //add 2 (6 elements)

// ["0:1","1:2"...."5:6"]

// const newArr=arr.map((element,index)=>{
//     return `${index}:${element}`
// })

// console.log(newArr);

// let arr2 = [3, 324, 324, 6464, 35, 46, 45, 356]; // *8, /6

// let newArr=arr.map((ele,ind)=>{
//     return [ele,ele+1,ele+2]
// })
// console.log(newArr);

// const newArr = arr2.map((number, ind) => {
//   return (number * 8) / 6;
// });

// console.log(newArr);

// let nameArr = ["Livin ", "Surya ", "chandra "];

// ["kumar","kumar","kumar"]

// let newNames = nameArr.map((name, index) => {
//   return `${name}kumar`;
// });

// console.log(newNames);

// Filter

let arr = [
  2, 3, 3, 5, 35, 56, 35, 57, 7865, 65, 5, 56, 54, 34, 324, 54, 56, 534,
]; //[6,7,8]

// [6,7,8]

const newArr = arr.filter((ele, ind) => {
  return ele % 2 === 1;
});

console.log(newArr);
