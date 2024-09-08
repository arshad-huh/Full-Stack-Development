// Strings in JavaScript - Questions with Answers

// How do you find the length of a string in JavaScript?
let str = "My name is Arshad!";
console.log(str.length);

//How do you convert a string to uppercase in JavaScript?
console.log(str.toUpperCase());

//How can you extract a substring from a string using substring()?
console.log(str.substring(7,3)); //not includes last index
console.log(str.substring(3,7));

console.log(str.slice(3,-10));

//How can you replace a part of a string using replace()?
console.log(str.replace("My name is", "I am"));

//How do you split a string into an array of substrings using split()?
let str2 = "apple,banana,mango";

let arr = str2.split(",");
console.log(arr);

//How can you trim whitespace from the beginning and end of a string?
 let str3 = "     Using Trim         ";
 console.log(str3.trim());

//What method would you use to get the character at a specific index of a string?
console.log(str.charAt(5));

//How do you concatenate two strings in JavaScript?
console.log(str.concat(str2));

let str4 = "Hello";
let str5 = "World";
console.log(str4.concat(", ", str5, "!"));

//How can you convert a string to an array of characters?
console.log(str.split(""));
