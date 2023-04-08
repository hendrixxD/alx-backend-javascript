// set operations

// new net object
const myset1 = new Set();

// add items to a set
myset1.add([1, 2, 3, 4]);
myset1.add(3);
myset1.add('some text')
myset1.add(3, 4, 5);
myset1.add(2)

// check validity of a set
myset1.has(1);
myset1.has(Math.sqrt(25));
myset1.has('some text'.toLocaleLowerCase());

// checks the size of a set
myset1.size

// deletes an item from a set
myset1.delete(5);

// Iterating a set
for (const item of myset1) {
    console.log(item);
}

for (const item of myset1.keys()) {
    console.log(item);
}

for (const item of myset1.values()) {
    console.log(item)
}

//console.log(myset1)