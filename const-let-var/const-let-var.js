
// Excercise 1 
// scope is the context and variables
function sayNumber() {
  var number = 7;
  console.log("In the function the number is ", number);

  function sayAnotherNumber() {
    console.log("In sayAnotherNumber the number is ", number);
  }
}

sayNumber();
// it should throw an error 
console.log("Outside the function the number is ", number);

// Excercise 2 
// block scope

if (true) {
  let newNumber = 10;
  console.log("In if scope, number is ", newNumber);
}
// number is actually defined, and its a gotcha.
console.log("outside if scope, number is ", newNumber);


// Excercise 3 
// const

let myName = 'aaron';
myName = 'bhaumik';

const greeting = "say Hi";
greeting = "say Hello instead";

// Exercise 4
// Which variable declaration should I use?

var currentTime = 8;

function sayHello() {
  var greeting = 'Hi';
  var firstName = 'Aaron';

  if (currentTime < 12 ) {
  greeting = 'Good Morning';
  } 

  return greeting + ' ' + firstName; 
}

console.log(sayHello());
