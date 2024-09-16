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
    default:console.log("не в этот раз");
    break;
}
