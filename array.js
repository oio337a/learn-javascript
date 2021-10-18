'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎', '🍌'];
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
fruits.push('🍑', '🍇');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// add an item to the beginning
fruits.unshift('🍑', '🍇');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();

// note!!! shift, unshift are slower than pop, push 

// splice: remove an item by index position
console.log(fruits);
fruits.splice(1); // 원하는 갯수를 적지 않으면 해당 인덱스 부터 모두 지운다. 
console.log(fruits);
fruits.splice(1, 1); // 1번째 인덱스만 지우기
console.log(fruits);
fruits.splice(1, 1, '🍏', '🍉') // 1번째 인덱스 지우고 그자리에 사과와 수박을 넣을 수 있다. 
console.log(fruits);

// combine two arrays
const fruits2 = ['🥥', '🥝'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf('🍎')); // 사과의 인덱스 받아오기
console.log(fruits.includes('🍉')) // 있는지 없는지 여부 return 값 T or F

// lastIndexOf

console.log(fruits);
fruits.push('🍎');
console.log(fruits.lastIndexOf('🍎'));

