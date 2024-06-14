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

// let arraySum = (arg = []) => {
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

// ------------------------------------------------------

// 4-masala
// function son(arg) {
//   let a = arg.every((item) => {
//     return item > 0;
//   });
//   let res1 = a ? "Barcha sonlar musbat" : "Musbat bo'lmagan sonlar bor";

//   let b = arg.some((item) => {
//     return item > 100;
//   });

//   let res2 = b ? "Katta son bor" : "";

//   return {res1, res2};
// }

// console.log(son([1, 2, -3, 5, 101, 22, 206]));

// const son=function(arg) {
//     let a = arg.every((item) => {
//       return item > 0;
//     });
//     let res1 = a ? "Barcha sonlar musbat" : "Musbat bo'lmagan sonlar bor";

//     let b = arg.some((item) => {
//       return item > 100;
//     });

//     let res2 = b ? "Katta son bor" : "";

//     return {res1, res2};
//   }

//   console.log(son([1, 2, -3, 5, 101, 22, 206]));

// const son = (arg) => {
//   let a = arg.every((item) => {
//     return item > 0;
//   });
//   let res1 = a ? "Barcha sonlar musbat" : "Musbat bo'lmagan sonlar bor";

//   let b = arg.some((item) => {
//     return item > 100;
//   });

//   let res2 = b ? "Katta son bor" : "";

//   return { res1, res2 };
// };

// console.log(son([1, 2, -3, 5, 101, 22, 206]));

// -----------------------------------------------------------------

// 5-masala
// function createArr(arg=[]){
//     let newArr=arg.map(item=>{
//         return item**2;
//     })
//     newArr.forEach(item=>{
//         console.log(item);
//     })
// }
// createArr([1,2,3,4,5]);

// const createArr=function(arg = []) {
//   let newArr = arg.map((item) => {
//     return item ** 2;
//   });
//   newArr.forEach((item) => {
//     console.log(item);
//   });
// }
// createArr([1, 2, 3, 4, 5]);

// const createArr=(arg = []) => {
//     let newArr = arg.map((item) => {
//       return item ** 2;
//     });
//     newArr.forEach((item) => {
//       console.log(item);
//     });
//   }
// createArr([1, 2, 3, 4, 5]);

// ------------------------------------------------

// 6-masala
// function maosh(arr = []) {
//   let arr1 = arr.filter((item) => {
//     return item.oylik < 2000;
//   });

//   let arr2 = arr1.map((item) => {
//     item.oylik = item.oylik + item.oylik * 0.1;
//     return item;
//   });

//   return arr2;
// }
// console.log(
//   maosh([
//     { name: "Alex", oylik: 1500 },
//     { name: "Doe", oylik: 2200 },
//     { name: "John", oylik: 5100 },
//     { name: "Doni", oylik: 1800 },
//     { name: "Max", oylik: 2500 },
//   ])
// );

// const maosh = function (arr = []) {
//   let arr1 = arr.filter((item) => {
//     return item.oylik < 2000;
//   });

//   let arr2 = arr1.map((item) => {
//     item.oylik = item.oylik + item.oylik * 0.1;
//     return item;
//   });

//   return arr2;
// };
// console.log(
//   maosh([
//     { name: "Alex", oylik: 1500 },
//     { name: "Doe", oylik: 2200 },
//     { name: "John", oylik: 5100 },
//     { name: "Doni", oylik: 1800 },
//     { name: "Max", oylik: 2500 },
//   ])
// );

// const maosh = (arr = []) => {
//     let arr1 = arr.filter((item) => {
//       return item.oylik < 2000;
//     });

//     let arr2 = arr1.map((item) => {
//       item.oylik = item.oylik + item.oylik * 0.1;
//       return item;
//     });

//     return arr2;
//   };
//   console.log(
//     maosh([
//       { name: "Alex", oylik: 1500 },
//       { name: "Doe", oylik: 2200 },
//       { name: "John", oylik: 5100 },
//       { name: "Doni", oylik: 1800 },
//       { name: "Max", oylik: 2500 },
//     ])
//   );

// -----------------------------------------------------

// 7-masala
let students = [
  { name: "Alex", age: 25, baho: 65 },
  { name: "Doe", age: 25, baho: 85 },
  { name: "John", age: 25, baho: 95 },
  { name: "Doni", age: 25, baho: 76 },
  { name: "Max", age: 25, baho: 80 },
];

// function studentFind(arr){
//     let res=arr.find(talaba=>{
//         return talaba.baho >= 80;
//     })
//     console.log(`Birinchi 80 balldan yuqori baho olgan talaba - ${res.name}`);

//     let res2=arr.filter(item=>{
//         return item.baho > 80;
//     })

//     res2=res2.map(item=>{
//         return item.name.toUpperCase();
//     })
//     return res2;
// }
// console.log(studentFind(students));

// const studentFind = function (arr) {
//   let res = arr.find((talaba) => {
//     return talaba.baho >= 80;
//   });
//   console.log(`Birinchi 80 balldan yuqori baho olgan talaba - ${res.name}`);

//   let res2 = arr.filter((item) => {
//     return item.baho > 80;
//   });

//   res2 = res2.map((item) => {
//     return item.name.toUpperCase();
//   });
//   return res2;
// };
// console.log(studentFind(students));

// const studentFind = (arr) => {
//   let res = arr.find((talaba) => {
//     return talaba.baho >= 80;
//   });
//   console.log(`Birinchi 80 balldan yuqori baho olgan talaba - ${res.name}`);

//   let res2 = arr.filter((item) => {
//     return item.baho > 80;
//   });

//   res2 = res2.map((item) => {
//     return item.name.toUpperCase();
//   });
//   return res2;
// };
// console.log(studentFind(students));





// ------------------   Yozuvlarga oid.   ----------------------
// 1-masala
// function strToUpperCase(str){
//     return str.toUpperCase();
// }
// console.log(strToUpperCase('salom'));

// 2-masala
// function findItem(str, a){
//     let b=str.includes(a);
//     return b;
// }
// console.log(findItem('salom', 'lom'));

// 3-masala
// function changeStr(str, a){
//     let b=str.replaceAll("Javascript", a);
//     return b;
// }
// console.log(changeStr('salom Javascript. men bugun Javascriptni organyapman', "JS"));

// 4-masala
// function strEdit(a){
//     let b=a.split("");
//     let c="";
//     for(let i=b.length-1; i>=0; i--){
//         c+=b[i];
//     }
//     return c;
// }
// console.log(strEdit('salom'));

// 5-masala
// function deletePadFromString(str){
//     return str.trim();
// }
// console.log(deletePadFromString("  salom  "));