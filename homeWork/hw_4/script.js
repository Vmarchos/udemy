// Место для первой задачи
function getTimeFromMinutes(getMinutes) {
  let hours = Math.trunc(getMinutes / 60);
  let minutes = getMinutes % 60;
  let str = "";
  if (
    typeof getMinutes !== "number" ||
    getMinutes < 0 ||
    isNaN(getMinutes) ||
    !Number.isInteger(getMinutes)
  ) {
    return "Ошибка, проверьте данные";
  }

  switch (hours) {
    case 0:
      str = " часов";
      break;

    case 1:
      str = " час";
      break;

    case 2:
    case 3:
    case 4:
      str = " часа";
      break;

    default:
      str = " часов";
  }
  return `это ${hours}${str} и ${minutes} минут`;
}

getTimeFromMinutes(180);
console.log(getTimeFromMinutes(-280));

// Место для второй задачи
function findMaxNumber(num1, num2, num3, num4) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    typeof num3 !== "number" ||
    typeof num4 !== "number"
  ) {
    return 0;
  }
  return Math.max(num1, num2, num3, num4);
}
findMaxNumber(2, 3, 30, 30.4);
console.log(findMaxNumber(1, 2, 3, 6.6));

// (*) Продвинутые задания на использование функций

// В этих задачах мы уже усложним работу с функциями. Они необязательны и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

// Задачи:

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂

function fib(num) {
  if ((typeof num !== "number" && num <= 0) || !Number.isInteger(num)) {
    return "";
  }
  let result = "";
  let first = 0;
  let second = 1;

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += ` ${first}`;
    } else {
      result += ` ${first}`;
    }
    let third = first + second;
    first = second;
    second = third;
  }
  return result;
}
fib(7);
console.log(fib(3));
// (**) Задача с собеседований на числа Фибоначчи

// Это одна из классических задач в программировании на самых разных языках. Скорее всего вы слышали про числа Фибоначчи, где первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. И на собеседованиях часто дают задачи, связанные с этими числами. Есть разные вариации и тут мы попробуем решить одну из них.

// Сразу скажу, что есть варианты решения через прием, называемый рекурсия. Он дальше по курсу. Но этот вариант нужно решить без её применения. Такие условия часто ставят на собеседованиях. Когда вы пройдете урок по рекурсии, вы можете вернуться в это задание и попробовать решить по другому. Так же подсказку (но не решение этой задачи) можно найти тут. Но постарайтесь не открывать 🙂

// Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

// Задача непростая для новичков, так что с первого раза может не получится.

// Ответ с кодом этой задачи можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂

const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let allSquare = "";
  let allVolume = "";

  data.shops.forEach((shop) => {
    allSquare += shop.width * shop.length;
  });

  allVolume = allSquare * data.height;

  if (data.budget - (allVolume * data.moneyPer1m3) <= 0) {
    return "Бюджета недостаточно";
  } else {
    return "Бюджета достаточно";
  }
}
isBudgetEnough(shoppingMallData);
console.log(isBudgetEnough(shoppingMallData));
// (*) Продвинутая задача на работу с объектами и массивами

// В этой задаче мы уже усложним работу с объектами и массивами. Она необязательна и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

// Но постарайтесь решить самостоятельно 🙂
