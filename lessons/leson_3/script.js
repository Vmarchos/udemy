// "use strict";
// if (4 == 9) {
//   console.log("OK!");
// } else {
//   console.log("error");
// }

// const num = 200;

// if (num < 49) {
//   console.log("error");
// }
// else if(num>100){
//     console.log("слишком много")

// }
// else{
//     console.log("ок")
// }

// (num===50)? console.log("ок"):console.log("error");

const num = 20;
switch (num) {
  case 49:
    console.log("неверно");
    break;
  case 100:
    console.log("неверно");
    break;
  case 50:
    console.log("верно");
    break;
  default:
    console.log("не в этот раз");
    break;
}

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries ){
//     console.log("я сыт")
// }
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if (hamburger === 3 && cola && fries) {
//   console.log("мы  сыты");
// } else {
//   console.log("мы уходим");
// }

// let jonhReport,
//   alexReport,
//   samReport,
//   mariaReport = "done";
// console.log(jonhReport || alexReport || samReport || mariaReport);

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
}
