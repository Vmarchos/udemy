"use strict";

let number = 5;
debugger;

function logNumber() {
  let number = 4;
  debugger;
  console.log(number);
}

number = 6;
logNumber();
debugger;

// let x = 5;
// // alert(x++);
// console.log(x++);

let y = 1;
let x = y = 2;
console.log(x);
