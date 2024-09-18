"use strict";
function hello() {
  console.log("hello world");
}
hello();

function hi() {
  console.log("say hi!");
}
hi();

const arr = [1, 14, 4, 30, 54],
  sorted = arr.sort(compareNum);

function compareNum(a, b) {
  return a - b;
}
console.log(sorted);

//To String

//1)

console.log(typeof String(null));
console.log(typeof String(4));

//2)
console.log(typeof (5 + ""));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + "px";

//To Number

//1)
console.log(typeof Number("4"));

//2)
console.log(typeof +"4");

//3)
console.log(typeof parseInt("15px", 10));

let answ = +prompt("hello", "");

//To Boolen

// Всегда -false - 0, '', null, undefined, NAN;
//1)
let switcher = null;
if (switcher) {
  console.log("work...");
}

switcher = 1;

if (switcher) {
  console.log("work...");
}
//2)

console.log(typeof Boolean("15"));

//3)
console.log(typeof !!"15");
