# Hoisting and Shadowing in JavaScript

This document explains hoisting and shadowing in simple, clear terms with examples.

---

# What Is Hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before code execution.

This means you can use a variable or function before writing it in the code, but the behavior depends on whether you used `var`, `let`, `const`, or a function declaration.

---

# Variable Hoisting

## var Hoisting
Variables declared with `var` are hoisted and initialized with the value `undefined`.

Example:
```js
console.log(a); // undefined
var a = 10;
```

JavaScript moves the declaration to the top, but not the assignment.

---

## let and const Hoisting
Variables declared with `let` and `const` are hoisted but not initialized.

They remain in the "Temporal Dead Zone" until the actual line where they are declared.

Example:
```js
console.log(b); // error
let b = 20;
```

---

# Function Hoisting

## Function Declarations
Function declarations are fully hoisted.

Example:
```js
sayHello(); // works
function sayHello() {
  console.log("Hello");
}
```

## Function Expressions
Function expressions are not fully hoisted.

Example:
```js
hello(); // error
const hello = function() {
  console.log("Hello");
};
```

---

# What Is Shadowing?
Shadowing occurs when a variable declared inside a block or function has the same name as a variable in an outer scope.

The inner variable "shadows" the outer one, making the outer variable inaccessible within that block.

---

# Example of Shadowing
```js
let x = 10;

function test() {
  let x = 20; // shadowing
  console.log(x); // 20
}

test();
console.log(x); // 10
```

The inner `x` hides the outer `x` inside the function.

---

# Illegal Shadowing
Shadowing is illegal when `var` tries to shadow a `let` or `const` variable in the same scope.

Example:
```js
let a = 10;
{
  var a = 20; // error
}
```

But this is allowed:
```js
var a = 10;
{
  let a = 20; // allowed
}
```

---

# Key Differences
| Feature | Hoisting | Shadowing |
|---------|----------|-----------|
| Meaning | Moving declarations to top | Inner variable hides outer one |
| Happens When | Before code runs | During variable lookup |
| Affects | var, let, const, functions | let, const, var |
| Common Issue | Using variables too early | Confusing variable names |

---

# Summary
- Hoisting moves declarations to the top of scope.
- var is hoisted with undefined; let and const are hoisted but uninitialized.
- Function declarations are fully hoisted; function expressions are not.
- Shadowing occurs when inner and outer scopes have the same variable name.
- let and const create block scope; var does not.
- Illegal shadowing happens when var tries to shadow a let or const.

---

If you want the next file, we can continue with Execution Context, Closures, or Temporal Dead Zone.

