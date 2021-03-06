'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0])

// 3, Looping over an array
// print all fruits
// case a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// case b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// case c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index))

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('π', 'π');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// add an item to the beginning
fruits.unshift('π', 'π');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();

// note!!! shift, unshift are slower than pop, push 

// splice: remove an item by index position
console.log(fruits);
fruits.splice(1); // μνλ κ°―μλ₯Ό μ μ§ μμΌλ©΄ ν΄λΉ μΈλ±μ€ λΆν° λͺ¨λ μ§μ΄λ€. 
console.log(fruits);
fruits.splice(1, 1); // 1λ²μ§Έ μΈλ±μ€λ§ μ§μ°κΈ°
console.log(fruits);
fruits.splice(1, 1, 'π', 'π') // 1λ²μ§Έ μΈλ±μ€ μ§μ°κ³  κ·Έμλ¦¬μ μ¬κ³Όμ μλ°μ λ£μ μ μλ€. 
console.log(fruits);

// combine two arrays
const fruits2 = ['π₯₯', 'π₯'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf('π')); // μ¬κ³Όμ μΈλ±μ€ λ°μμ€κΈ°
console.log(fruits.includes('π')) // μλμ§ μλμ§ μ¬λΆ return κ° T or F

// lastIndexOf

console.log(fruits);
fruits.push('π');
console.log(fruits.lastIndexOf('π'));

