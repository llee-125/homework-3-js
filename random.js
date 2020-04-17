// let varOne = 0;
// for (i = 0; i < 4; i++){
//     for (j = 0; j < 4; j++){
//         varOne++;
//     }
// }
// console.log(varOne);

// var arr = ["a", "b", "c", "d" , "e"];
// var randNum = Math.floor(Math.random() * arr.length);
// console.log(randNum);

// var arr = ["a", "b", "c", "d"];
// var randNum = Math.floor(Math.random() * arr.length);
// console.log(arr[randNum]);

// var arr = ["a", "b", "c", "d"];
// var randNum;
// for (let i = 0; i < arr.length; i++) {
//   randNum = Math.floor(Math.random() * arr.length);
//   console.log(arr[randNum]);
// }

var arr = ["a", "b", "c", "d"];
var randNum;
var randomString = "";
for (let i = 0; i < arr.length; i++) {
  randNum = Math.floor(Math.random() * arr.length);
  randomString += arr[randNum];
}
console.log(randomString);
