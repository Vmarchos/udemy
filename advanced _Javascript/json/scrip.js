'use strict'

const person ={
    name: 'Alex',
    tel: '+37291141994',
    parents:{
        mom: 'olga',
        dad: 'mike'

    }
};

const clone = JSON.parse(JSON.stringify(person));// Глубокое клонирование 
clone.parents.mom = 'ann'

console.log(person)
console.log(clone)
