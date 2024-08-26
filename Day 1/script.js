// Declare a variable named userName and assign it the value "John".
let userName = "John";
console.log(userName);

// Find type of a variable 
let age = 19;
console.log(typeof age);

// Use the ternary operator to assign a variable status with the value "minor" if age is less than 18, otherwise "adult".
let varStatus = age >= 18 ? "adult":"minor";
console.log(varStatus);

// Write a code snippet that prompts the user to enter their age, then uses an alert to show "You are a minor" if the age is less than 18, otherwise "You are an adult".
{
    let age = Number(prompt('Enter your age:'));
    if (age>=18) {
        console.log("You are an adult");
    } else{
        console.log("You are a minor");
    }
}

// == and ===

let x = 5;
let y = "5";
console.log(x == y); //true
console.log(x === y); //false


//  Write an if statement that checks if a number num is positive, and logs "Positive number" to the console.

{
    let num = 4;
    if (num>=0) {
        console.log("Positive number");
    }
}

// Write a code that log "Even" if the number is even and "Odd" if the number is odd.

{
    let num = 23;
    if (num%2==0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

// Create a code to check a number and logs:
// "Negative" if the number is less than zero,
// "Zero" if the number is zero,
// "Positive" if the number is greater than zero.

{
    let num = -4;
    if (num>0) {
        console.log("Positive");
    } else if (num<0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

// Write a code snippet using if- else if -else statements that assigns a grade based on the following score ranges:

// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"

{
    let grade = 91;
    if (grade>=90 && grade<=100) {
        console.log("A");
    } else if (grade>=80 && grade<=89){
        console.log("B");
    } else if (grade>=70 && grade<=79){
        console.log("c");
    } else if (grade>=60 && grade<=69){
        console.log("D");
    } else {
        console.log("F");
    }
}

//Or

let score = 85;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(grade);

// Write a for loop that logs numbers from 1 to 5.

{
    for (let x=1;x<=5;x++) {
        console.log(x);
    }
}

// Use a while loop to sum numbers from 1 to 10.

{
    let sum = 0;
    let i = 1;
    while (i<=10){
        sum += i;
        i++;
    }
    console.log(sum);
}

// Write a do...while loop that executes the body at least once, and continues as long as a number is less than 5.


// Use a for...in loop to iterate over an object’s properties and log them.
// Write a for...of loop to iterate over an array and log each element.
// Declare a string variable greeting with the value "Hello, World!".
// Write a function that takes a string and returns its length.
// Write a function to convert the first letter of each word in a string to uppercase.
// Write a function that checks if a string is a palindrome (reads the same backward as forward).
// Use template literals to construct a string from variables firstName and lastName.