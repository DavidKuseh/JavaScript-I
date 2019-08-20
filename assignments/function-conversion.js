// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
var myFunction = (x, y) => console.log(x*y);
myFunction(2,2);

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
var anotherFunction = param => console.log(param);
anotherFunction('anotherFunction');

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
var add = (param1, param2) => console.log(param1 + param2);
add(1,2);


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

var subtract = (param1, param2) => console.log(param1 - param2);
subtract(1,2);

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
exampleArray = [1,2,3,4];
const triple = exampleArray.map(function(num) {
    return num*3;
});

console.log(triple);