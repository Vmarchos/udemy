"use strict";

// Filter

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter(function (name) {
  return name.length < 5;
});

console.log(shortNames);

// Map

const answers = ["IvAn", "AnnA", "Hello"];

const result = answers.map((item) => {
  return item.toLowerCase();
});
console.log(result);

// Every/some

const some = [4, "qwq", "sfrefref"];

console.log(some.some((item) => typeof item === "number"));
console.log(some.every((item) => typeof item === "number"));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current);
// console.log(res);

const arr = ["apple", "pear", "plum"];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(res);
