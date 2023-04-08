#!/usr/bin/node

// a buffer with a fixed length 0f 16 bytes
const buffer = new ArrayBuffer(16);

//confirming the action above
if (buffer.byteLength === 16) {
    console.log("Yes, its 16 byte")
} else {
    console.log('ohh no, its not')
}

// Before we can really work with this buffer,
// we need to create a view.
// Let's create a view that treats the data
// in the buffer as an array of 32-bit signed integers:

const int32View = new Int32Array(buffer);

// now we can access the fields in
// the array just like a normal array

// This fills out the 4 entries in the array
// (4 entries at 4 bytes each makes 16 total bytes)
// with the values 0, 2, 4, and 6.

for (let i = 0; i < int32View.length; i++) {
    console.log(int32View[i] = i * 2)
    // let int32 = int32View[i] = i * 2;
}

// Multiple view on the same Data
const int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
    console.log(`Entry ${i}: ${int16View[i]}`);
}