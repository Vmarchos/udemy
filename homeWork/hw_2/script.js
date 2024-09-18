const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  const allFamily = arr.join(" ");
  if (!arr.length) {
    return "Семья пуста";
  } else {
    return `Семья состоит из: ${allFamily}`;
  }
}
showFamily(family);

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}

standardizeStrings(favoriteCities);
console.log(standardizeStrings(favoriteCities));

const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  let strMass = [];
  strMass = str.split("").reverse("").join("");
  return strMass;
}
reverse(someString);
console.log(reverse(someString));

const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  arr.forEach(function (curr) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });
  return str;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))
