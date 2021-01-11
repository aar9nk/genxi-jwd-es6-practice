// Part 1
// A basic function using a variable declaration
const sum = function(a, b) {
  return a + b;
};

console.log(sum(1, 2));

// Try it yourself
// Refactor this code! 
function sayName(name) {
  return 'Hi, ' + name;
};

console.log(sayName('Aaron'));

// Part 2
// The arrow function
const sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2));

// Try it yourself
function sayName(name) {
  return 'Hi, ' + name;
};

console.log(sayName('Aaron'));

// Part 3 
// If you can make the function shorter:
const sum = (a, b) => a + b;

console.log(sum(1, 2));

// Try it yourself
function sayName(name) {
  return 'Hi, ' + name;
};

console.log(sayName('Aaron'));

// Part 4 
// Other functions:

// Traditional Function
const addOneHundred = function (a, b){
  return a + b + 100;
}

// Arrow Function
const addOneHundred = (a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;
const addOneHundred = function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
const addOneHundred = () => a + b + 100;