# ES6 Javascript

## Description

New features are added into javascript each time it gets an update, this won't ruin our old code, but it will allow us to be more efficient in the future! I am sure there are already a lot of helpful resources out there to test out the newest javascript features, this will just be a few things we will use in the course.

## const let and var

[There are some exercises in the folder](./const-let-var)

From now on we will be using `const` and `let`. Forget `var` exists! We have talked a little about scope, but here is your chance to put it into practice, check out the examples and figure out what is different.

`let` is *block scoped* which means that the program won't know it exists outside of the block. 

``` javascript
if (true) {
  let newNumber = 10;
  console.log("In if scope, number is ", newNumber);
}
// It will throw an error because the variable stays within the if statement
console.log("outside if scope, number is ", newNumber);
```

If we were to use `var` instead, it would work as intended. Possibly not as intended. And now you see it might be confusing if this was a mistake, calling the variable outside of it's scope, instead of an intended effect! 

`const` are variables that maintain constant values. So we cannot assign them a value and then reassign them a new value. 

``` javascript
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable. 
``` 

If we need our values to be reassigned, `let` must be used!

> `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.

> `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.

### Resources
- [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)


## Arrow functions

[There are some exercises in the folder](./arrow-functions)

You will be expected to use arrow functions for the rest of the course! They are just normal functions using a slightly different syntax, but they also allow us to use some cool updated javascript. Check out the [mdn guide on how to break down a normal function into an arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). And then use the `.js` file to practice it yourself! 

### Resources
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

## Setup

In the html file, link your script to one of the `.js` files and check the console in your browser! 