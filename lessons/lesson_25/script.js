const log = function (a, b, ...rest) {
  console.log(a, b, rest);
};

log("basic", "rest", "operator", 32, "usage");

function calcorDouble(number, basis = 2) {
//   basis = basis || 2;
  console.log(number * basis);
}

calcorDouble(3, 5);
