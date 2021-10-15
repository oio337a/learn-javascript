/*
    Objects
    one of the JavaScript's data types.
    a collection of related data and/or functionality
    Nearly all objects in JavaScript are instances of Object
    object = { key : value };
*/

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const here = { name: 'hero', age: 4 };
print(hero)

// 2. Computed properties
console.log(here.name); // .name 으로 값을 불러올수도 있지만
console.log(here['name']);  // ['string'] 으로도 값을 가져올 수 있다. 

// 3. Property value shortahand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 5 };
const person3 = { name: 'dave', age: 4 };
// 새로운 사람을 만들려면 이름과 나이를 적어야 한다. 하지만 너무 번거롭다.
// 함수를 만들어 return 하면 어떨까??
const person4 = makePerson('hero', 20);
console.log(person4)
function makePerson(name, age) {
    return {
        name,
        age,
        // JS에는 프로펄티 벨류 쇼트핸디드 라는 기능이 있다. 
        // 키와 벨류의 이름이 동일하다면 생략 가능.
        // name: name,
        // age: age
    };
}

// 4. Constructor Funtion
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in hero);  // true
console.log('age' in here); // true
console.log('random' in here); //false

// 6. for..in vs for..of
// for (key in obj)
for (key in here) {
    console.log(key)
    // name, age
    // 모든 키들을 받아와서 처리하고 싶을 때 사용한다.
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (value of array) {
    console.log(value);
    // array 에 있는 값들이 value 에 할 당되면서 값이 출력 된다. 
}

// 7. cloning

const user = { name: 'hero', age: 4 };
const user2 = user;
// user2 -> user 가르키고 있는 상황
// user2 의 name 을 바꾸면 user 는 변할까??
user2.name = 'holy';
console.log(user); // 'holy' 변한다. 

// 그렇다면 기존값을 변경하지 않고 복제된 값을 변경하려면??
ㅇ
// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

// object.assign() 사용
const user4 = Object.assign(user4, user);
console.log(user4);
// assign 은 뒤에 나오는 것을 덮어 씌우는 방식이기 때문에 주의해서 사용해야 한다.
const mixed = Object.assign(user4, user, user2);
// 위 예시처럼 하게 된다면, user4 에 user를 넣고, user2 를 넣기 때문에
// user4 에  user2의 값이 들어가게 된다. 