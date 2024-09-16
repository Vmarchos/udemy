"use strict";

let num = 20;
function showFirstMessage(text) {
  console.log(text);
  let num = 10;
}
showFirstMessage("hello world");
console.log(num);

function calc(a, b) {
  return a + b;
}
console.log(calc(4, 3));
console.log(calc(4, 6));

function ret() {
  let num = 50;

  return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("hello");
};
logger();

const two = (a, b) => {
  console.log("hello world");
  return a + b;
};
console.log(two(45, 50));

const usdCurr = 28;
const eurCurr = 35;
const discount = 0.9;
function convert(amount, curr) {
  return curr * amount;
}

function promotion(result) {
  console.log(result * discount);
}
const res = convert(500, usdCurr);
promotion(res);




function test(){
    for(let i=0;i<5;i++){
        console.log(i);
        if(i==3) return;

    }
    console.log('done')
}
test();

function doNothing(){
}
console.log(doNothing()===undefined);
