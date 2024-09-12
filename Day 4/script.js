// 1. Write a basic if statement to check if a number is positive.
let num = 90;
if (num>0) {
    console.log("The number is positive.");
}

// 2. Create an if-else statement that checks whether a number is even or odd.
num = 10;
if (num%2===0) {
    console.log("It is Even.");
} else {
    console.log("It is Odd.");
}

// 3. Write an if-else if-else statement to check if a given number is positive, negative, or zero.
if (num===0) {
    console.log("Zero");
} else if (num>0) {
    console.log("positive");
} else {
    console.log("negative");
}

// 4. Use a switch statement to log a message based on the value of a variable day (e.g., 'Monday', 'Tuesday', etc.).
let day = 'Tuesday';
switch(day) {
   case 'Monday':
      console.log("It's Monday!");
      break;
   case 'Tuesday':
      console.log("It's Tuesday!");
      break;
   case 'Wednesday':
      console.log("It's Wednesday!");
      break;
   default:
      console.log("Invalid day");
}

// 5. Write an if statement to check if a person is eligible to vote (age >= 18).
let age = 24;
if (age>=18){
    console.log("Eligible to Vote");
} else{
    console.log("Not eligible to vote");
}

// 6. Use a conditional (ternary) operator to assign "pass" or "fail" based on a student's score.
let marks = 55;

marks>=33 ? console.log("Pass") : console.log("Fail");

// 7. Create a switch statement to evaluate different grades (A, B, C, etc.) and output appropriate feedback.
let grade = 'B';
switch(grade) {
   case 'A':
      console.log("Excellent");
      break;
   case 'B':
      console.log("Good");
      break;
   case 'C':
      console.log("Fair");
      break;
   default:
      console.log("Invalid grade");
}

// 8. Write an if-else statement to check if a number is divisible by both 3 and 5 (FizzBuzz logic).
num = 65;

if (num%3===0 && num%5===0) {
    console.log("fizzBuzz");
} else if (num%3===0) {
    console.log("Fizz");
} else if (num%5===0) {
    console.log("Buzz");
} else {
    console.log(num);
}

// 9. Use an if statement to check if a string starts with the letter "A".
let string = "Arshad";

if (string.toLowerCase()[0]==="a") {  // charAt(0)==="a"
    console.log("The string starts with A");
}

// 10. Create an if-else if statement to categorize a number as small (1-10), medium (11-20), or large (21-30).
num = 27;

if (num >= 1 && num <= 10) {
    console.log("Small number");
 } else if (num >= 11 && num <= 20) {
    console.log("Medium number");
 } else if (num >= 21 && num <= 30) {
    console.log("Large number");
 } else {
    console.log("Out of range");
 }

// 11. Write a conditional statement to determine if a variable contains a truthy or falsy value.
let value = 0;
if (value) {
   console.log("Truthy");
} else {
   console.log("Falsy");
}

// 12. Create an if statement to check if an array is empty.
let arr = [];
if (arr.length === 0) {
   console.log("Array is empty");
}

// 13. Write a switch statement to determine the current season based on a month number (1-12).
let month = 4;

switch(month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Fall");
        break;
    default:
        console.log("Invalid Month");
}

// 14. Use a ternary operator to check if a user is logged in or not, and display a different message accordingly.
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// 15. Write an if-else statement to check if a character is a vowel or consonant.
let char = 'e';
if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
   console.log("Vowel");
} else {
   console.log("Consonant");
}

// 16. Create a switch statement that checks for different modes (like 'dark', 'light', 'auto') in a UI theme switcher.
let mode = 'dark';
switch(mode) {
   case 'dark':
      console.log("Dark mode activated");
      break;
   case 'light':
      console.log("Light mode activated");
      break;
   case 'auto':
      console.log("Auto mode activated");
      break;
   default:
      console.log("Unknown mode");
}

// 17. Write a conditional statement that checks if a year is a leap year.
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
   console.log("Leap year");
} else {
   console.log("Not a leap year");
}

// 18. Use if-else to check if two strings are the same or not.
let str1 = "hello";
let str2 = "hello";
if (str1 === str2) {
   console.log("The strings are the same");
} else {
   console.log("The strings are different");
}

// 19. Write a switch statement that takes a number between 1 and 12 and returns the corresponding month name.

switch(month) {
   case 1:
      console.log("January");
      break;
   case 2:
      console.log("February");
      break;
   case 3:
      console.log("March");
      break;
   case 4:
      console.log("April");
      break;
   case 5:
      console.log("May");
      break;
   // add cases for the remaining months
   default:
      console.log("Invalid month number");
}
// 20. Write an if-else statement to determine whether a person is a child, teenager, adult, or senior based on their //age

if (age < 13) {
   console.log("Child");
} else if (age >= 13 && age < 18) {
   console.log("Teenager");
} else if (age >= 18 && age < 65) {
   console.log("Adult");
} else {
   console.log("Senior");
}