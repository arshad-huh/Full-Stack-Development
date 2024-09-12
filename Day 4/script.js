// Arrays in JavaScript - Questions with Answers

// How do you add an element to the end of an array?
let arr1 = [2,4,5,6,8,10];
arr1.push(12);
console.log(arr1);

// How do you remove the last element from an array?
arr1.pop();
console.log(arr1);

// How do you add an element to the beginning of an array?
arr1.unshift(0)
console.log(arr1);

// How can you remove the first element of an array?
arr1.shift();
console.log(arr1);

// How do you find the length of an array?
console.log(arr1.length);

// How can you check if an array includes a certain value using includes()?
console.log(arr1.includes(8));

// How can you join all elements of an array into a single string?
console.log(arr1.join(","));


// How do you create a new array from an existing array using map()?
let arr2 = arr1.map(val => val*2);
console.log(arr2);


// How can you filter an array based on a condition using filter()?
let arr3 = arr2.filter(val => val%5===0);
console.log(arr3);


// How do you find the index of an element in an array using indexOf()?
console.log(arr1.indexOf(6))