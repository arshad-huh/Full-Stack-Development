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

    let age1 = Number(prompt('Enter your age:'));
    if (age1>=18) {
        console.log("You are an adult");
    } else{
        console.log("You are a minor");
    }


// == and ===

let x = 5;
let y = "5";
console.log(x == y); //true
console.log(x === y); //false


//  Write an if statement that checks if a number num is positive, and logs "Positive number" to the console.


    let num = 4;
    if (num>=0) {
        console.log("Positive number");
    }


// Write a code that log "Even" if the number is even and "Odd" if the number is odd.


    let num1 = 23;
    if (num1%2==0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }


// Create a code to check a number and logs:
// "Negative" if the number is less than zero,
// "Zero" if the number is zero,
// "Positive" if the number is greater than zero.


    let num2 = -4;
    if (num2>0) {
        console.log("Positive");
    } else if (num2<0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }


// Write a code snippet using if- else if -else statements that assigns a grade based on the following score ranges:

// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"


    let grade1 = 91;
    if (grade1>=90 && grade1<=100) {
        console.log("A");
    } else if (grade1>=80 && grade<=89){
        console.log("B");
    } else if (grade1>=70 && grade1<=79){
        console.log("c");
    } else if (grade1>=60 && grade1<=69){
        console.log("D");
    } else {
        console.log("F");
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


    for (let x=1;x<=5;x++) {
        console.log(x);
    }


// Use a while loop to sum numbers from 1 to 10.


    let sum = 0;
    let i = 1;
    while (i<=10){
        sum += i;
        i++;
    }
    console.log(sum);


// Write a do...while loop that executes the body at least once, and continues as long as a number is less than 5.


    let num4 = 5;
    do {
        console.log(num4);
        num4--;
    } while(num4>0);


// Use a for...in loop to iterate over an object’s properties and log them.


    let person = {
        firstName: "Arshad",
        age: 19 
    };

    for (let key in person) {
        console.log(`${key} : ${person[key]}`);
    }

// Write a for...of loop to iterate over an array and log each element.


    let text0 = "Arshad";
    for (let i in text0) {
        console.log(i);
    } 


// Write a code that log string's length.


    let text9 = 'Arshad';
    console.log(text9.length);


// Write a code to convert each word in a string to uppercase.
let text101 = "to the point";
console.log(text101.toUpperCase());


// Use template literals to construct a string from variables firstName and lastName.
let firstName3 = "Arshad";
let lastName3 = "Ahmad";

let fullName3 = `${firstName3} ${lastName3}`;
console.log(fullName3);