// How do you create an object in Js?
let person = {
   name:"Arshad",
   age : 19,
   isStudent : true
};

console.log(person);

// How to access object's properties?
console.log(person.name, person.age);

// How to add and update properties in an object?

person.mail = "2005arshadahmad@gmail.com"; //add
person.name = "Arshad Ahmad"; // update

console.log(person);

// How to delete an property from an object?
delete person.isStudent;

console.log(person);

// How to check if a property exists in an object

console.log('age' in person);

// How to loop through the properties of an obect?
for (let prop in person) {
   console.log(`${prop} : ${person[prop]}`);
}

// How to get all the keys and values of an obect?
console.log(Object.keys(person));
console.log(Object.values(person));

// How to copy an Object?

let person1 = {...person};
console.log(person1);

// How to merge to Objects?

let obj1 = {
   a: 1,
   b: 2,
   c: 3
};

let obj2 = {
   d: 4,
   e: 5,
   f: 6
};

let obj3 = {...obj1, ...obj2};
console.log(obj3);

// How to define methods inside of objects?
let calculator = {
   add : function(a,b) {
      return a+b;
   },
   subtract(a,b) {
      return a-b;
   }
};

console.log(calculator.add(333,777));
console.log(calculator.subtract(777,1000));