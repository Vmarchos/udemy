"use strict";

console.log("запрос данных...");

const req = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("подготовка данных..");

    const product = {
      name: "tv",
      price: 200,
    };

    resolve(product);
  }, 2000);
});
req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = "order";
      resolve(product);
    }, 2000);
  });
  

  }).then(data =>{
    console.log(data)
});
