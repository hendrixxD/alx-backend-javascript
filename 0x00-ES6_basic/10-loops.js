// Rewrite the function appendToEachArrayValue to use 
// ES6s for...of operator. And dont forget that var is not ES6-friendly.

export default function appendToEachArrayValue(array, appendString) {
  for (const arr of array) {
    array[array.indexOf(arr)] = appendString + arr;
  }

  return array;
}
