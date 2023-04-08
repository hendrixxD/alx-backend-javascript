#!/usr/bin/node

// The Map object holds key-value pairs and remembers the original
// insertion order of the keys.
// Any value (both objects and primitive values)
// may be used as either a key or a value.
const map1 = new Map();
 map1.set('a', 1);
 map1.set('b', 2);
 map1.set('c', 3);

 console.log(map1.get('a'));

 // get the siz of map1
 console.log(map1.size)