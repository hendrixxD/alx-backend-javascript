const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3

fruits[5] = 'mango'
console.log(fruits['5'])

console.log(Object.keys(fruits));

console.log(fruits.length);

// increasing the length
fruits.length = 10;
console.log(fruits)

//decreasing the length
fruits.length = 2

console.log(fruits)

// Arrays
// an array with just one element
const arr = [42];

// this createsa an array with no elements and arr.length set to 42
const arR = Array(42);

//creating array with single values
const WisenArray = Array.of(9.3);

