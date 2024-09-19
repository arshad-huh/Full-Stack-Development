// What is Function Declaration in js?

function greet(name) {
   return `Hello ${name}!\nHow are you?`;
}

console.log(greet("Arshad Ahmad"));

// What is Function Expression?
const greet1 = function(name) {
   return `Hello ${name}!\nHow do you do?`;
};

console.log(greet1("Arshad Ahmad"));

// what is an Anonymous function?

(function(a,b) {
   return a+b;
})

// What  is an Arrow Function?
let multiplyFunc = (a,b) => a*b;

console.log(multiplyFunc(10,199));

// What is an Immediately Invoked Function Expression?
(function(a,b) {
   console.log(a/b);
})(22,2);

// How to use default parameters in functions?

let divide = (a,b=1) => a/b;

console.log(divide(100));
console.log(divide(100,5));

// How to use rest parameters in a functions

let add = (...numbers) => {
   return numbers.reduce((acc, curr) => acc+curr);
};

console.log(add(1,2,3,4));

// How to use spread operators in function calls?
const arr = [1,2,3,4,5,6,7,8,9,90,0,120,6,77];

console.log(Math.max(...arr));

// How to return a function from another function?
function multiplier(factor) {
   return function(num) {
      return factor*num;
   };
}
let triple = multiplier(3);
console.log(triple(20));

console.log(multiplier(2)(5));

// How to create a recursive function?

function factorial(num) {
   if (num===0) return 1;
   return num*factorial(num-1);
}

console.log(factorial(10));

// How does the "this" keyword behave differently in arrow functions vs regular functions.
const objx = {
   name: "Arshad",
   greetf() {
      console.log(this.name);
   },
   greeta : () => {console.log(this.name)}
};

objx.greetf();
objx.greeta();