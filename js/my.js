// 1-masala
// function capitalizeArray(arg = []) {
//   let arr = arg.filter((item) => {
//     return item.length >= 5;
//   });

//   let arr1 = arr.map((item) => {
//     item = item.toLowerCase();
//     item = item.replace(item[0], item[0].toUpperCase());
//     return item
//   });

//   return arr1;
// }
// console.log(capitalizeArray(['salom', 'assalomu aleyKum', 'xayr']));

// let capitalize = function (arg = []) {
//   let arr = arg.filter((item) => {
//       return item.length >= 5;
//     });
//     let arr1 = arr.map((item) => {
//       item = item.toLowerCase();
//       item = item.replace(item[0], item[0].toUpperCase());
//       return item
//     });
//     return arr1;
// };
// console.log(capitalize(['salom', 'assalomu aleyKum', 'xayr']));

// let capitalize = (arg = []) => {
//     let arr = arg.filter((item) => {
//         return item.length >= 5;
//       });
//       let arr1 = arr.map((item) => {
//         item = item.toLowerCase();
//         item = item.replace(item[0], item[0].toUpperCase());
//         return item
//       });
//       return arr1;
//   };
//   console.log(capitalize(['salom', 'assalomu aleyKum', 'xayr']));

// ------------------------------------------------------------------

// 2-masala
// function student(arg=[]){
//     let s=arg.find(item=>{
//         return item.age > 20;
//     })
//     return s.name.toUpperCase();
// }
// console.log(student([{name: 'Johon', age: 18}, {name: "alisher", age: 22}]));

// let student = function(arg=[]){
//     let s=arg.find(item=>{
//         return item.age > 20;
//     })
//     return s.name.toUpperCase();
// }
// console.log(student([{name: 'Johon', age: 18}, {name: "alisher", age: 22}]));

// let student = (arg = []) => {
//   let s = arg.find((item) => {
//     return item.age > 20;
//   });
//   return s.name.toUpperCase();
// };
// console.log(
//   student([
//     { name: "Johon", age: 18 },
//     { name: "alisher", age: 22 },
//   ])
// );

// ------------------------------------------------------------------------------------

// 3-masala
// function arraySum(arg = []) {
//   let arr = arg.filter((item) => {
//     return item >= 100;
//   });

//   let sum=0;
//   arr.forEach(item=>{
//     sum+=item;
//   })
//   return sum;
// }
// console.log(arraySum([120, 85, 100, 200, 65]));

// let arraySum = function(arg = []) {
//     let arr = arg.filter((item) => {
//       return item >= 100;
//     });
  
//     let sum=0;
//     arr.forEach(item=>{
//       sum+=item;
//     })
//     return sum;
//   }
//   console.log(arraySum([120, 85, 100, 200, 65]));
