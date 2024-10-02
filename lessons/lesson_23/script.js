"use strict";

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return this.a + this.b;
  }
  console.log(sum());
}
showThis(4, 5);

const obj = {
  a: 20,
  b: 15,
  sum: function () {
    function shout() {
      console.log(this);
    }
    shout();
  },
};
obj.sum();

function User(name,id){
    this.name = name;
    this.id = id;
    this.human = true;
};
let ivan = new User('Ivan', 23)


function sayName(surname){
    console.log(this)
    console.log(this.name + surname)
}
const user ={
    name: "john"
};

sayName.call(user, "Smith");
sayName.apply(user, ['Smith']);


function count(num){
    return this*num;
};

const double = count.bind(2);

//  1) обычная функция :this = window, но если use strict -undefined;
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и класах - это новый экземпляр объекта
//  4) ручная привязка this: call, aplly, bind


