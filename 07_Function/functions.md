# JavaScript Functions
This document explains what functions are, why we use them, different ways to create them, parameters, return values, scope behavior, and advanced concepts.

---

# 1. What Is a Function?
A function is a reusable block of code that performs a specific task.

## Syntax
```js
function name() {
  // code
}
```

Functions help avoid repeating code and make programs modular.

---

# 2. Function Declaration
A standard way to create a function.

```js
function greet() {
  console.log("Hello");
}

greet();
```

Characteristics:
- Hoisted (can be used before declared)
- Named function

---

# 3. Function Expression
A function stored inside a variable.

```js
const greet = function () {
  console.log("Hello");
};

greet();
```

Characteristics:
- Not hoisted the same way as declarations
- Often used when passing functions as values

---

# 4. Arrow Functions
A shorter syntax introduced in ES6.

```js
const add = (a, b) => a + b;
```

Features:
- Short and clean syntax
- Does not have its own `this`
- Commonly used in callbacks

---

# 5. Parameters and Arguments
Parameters → variables defined in the function.
Arguments → actual values passed when calling.

Example:
```js
function add(a, b) { // parameters
  return a + b;
}

add(5, 3); // arguments
```

---

# 6. Return Statement
A function can return a value.

```js
function multiply(a, b) {
  return a * b;
}
```

If no return is used, the function returns `undefined`.

---

# 7. Default Parameters
Used when a value is not provided.

```js
function greet(name = "Guest") {
  return "Hello " + name;
}
```

---

# 8. Function Scope
Variables declared inside a function cannot be accessed outside.

```js
function demo() {
  let x = 10;
}

console.log(x); // error
```

---

# 9. Nested Functions
Functions can be declared inside other functions.

```js
function outer() {
  let a = 10;

  function inner() {
    console.log(a);
  }

  inner();
}
```

Inner functions form **closures**.

---

# 10. Callback Functions
A function passed as an argument to another function.

```js
function greet() {
  console.log("Hello");
}

function execute(fn) {
  fn(); // calling the callback
}

execute(greet);
```

---

# 11. Anonymous Functions
Functions without a name, often used in expressions.

```js
setTimeout(function () {
  console.log("Hi");
}, 1000);
```

---

# 12. Immediately Invoked Function Expression (IIFE)
A function that runs immediately after creation.

```js
(function () {
  console.log("I run immediately");
})(); // use semicolon to end the function context otherwise next IIFE will not work

or 

((PORT)=>{
  console.log(`databse connected at port ${PORT}`)
})("8080");
```

Used for:
- Avoiding global scope pollution
- Creating private variables

---

# 13. Pure vs Impure Functions
## Pure Function
Same input → same output, no side effects.
1. Always returns the same output for the same input

     - It doesn't matter how many times you call it — same input → same output.
This is called deterministic behavior.

2. Has no side effects

     - The function does not modify anything outside itself.

It does NOT:

- change global variables

- modify arrays/objects passed into it

- update the DOM

- log to console

- make API calls

- change files / database

It only works with:

- its input

- its local variables

- its return value

```js
function add(a, b) {
  return a + b;
}
```

## Impure Function
Modifies external values.

1. Returns different output for the same input

     - Example: using Math.random() or Date()

2. Causes Side Effects

     - A side effect is any interaction with the outside world.

Examples:

- modifying global variables

- changing an array or object passed as argument

- writing to console

- fetching data from API

- updating UI

- updating a database

```js
let count = 0;
function increment() {
  count++;
}
```

---

# 14. this Keyword in Functions
Function declarations have their own `this` based on how they are called.
Arrow functions do not have their own `this`.

Example:
```js
const obj = {
  value: 10,
  show() {
    console.log(this.value);
  }
};
```

---

# 15. Summary
- Functions help organize reusable code.
- Created through declarations, expressions, or arrow syntax.
- Can accept parameters and return values.
- Inner functions create closures.
- Callbacks are functions passed into other functions.
- IIFE runs immediately and creates private scope.
- Arrow functions are concise and do not have their own `this`.

---



