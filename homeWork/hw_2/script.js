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
