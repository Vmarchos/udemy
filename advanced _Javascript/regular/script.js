"use strict";
// new RegExp("pattern", "flags");
// // /pattern /flags

// const ans = prompt("введите ваше имя");
// const reg = /n/ig;
// // i
// // g
// // m

// // console.log(ans.search(reg));
// console.log(ans.match(reg)); все найденные элементы

const pass = prompt("Password");
console.log(pass.replace(/./g, "*"));
