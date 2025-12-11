# JavaScript Scoping

This document explains **scopes in JavaScript**, how they work, and how `var`, `let`, and `const` behave inside different scopes.

---

# What Is Scope?
Scope determines **where a variable can be accessed** in your code.

If a variable is inside a certain scope, it can only be used within that area unless declared globally.

---

# Types of Scope in JavaScript
JavaScript has three main types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

---

# 1. Global Scope
A variable is in the **global scope** when it is declared **outside** of any function or block.

It can be accessed anywhere in the program.

Example:
```js
let x = 10; // global

function demo() {
  console.log(x); // accessible
}

demo();
console.log(x); // also accessible
```

---

# 2. Function Scope
Variables declared using `var`, `let`, or `const` **inside a function** are only accessible within that function.

Example:
```js
function test() {
  let a = 5;
  var b = 10;
  const c = 15;
  console.log(a, b, c); // accessible
}

test();
console.log(a); // error, not accessible
```

Any variable inside a function is private to that function.

---

# 3. Block Scope
A **block** in JavaScript is any code wrapped inside `{ }`.

Block scope applies to **let** and **const** only.

Example:
```js
{
  let a = 1;
  const b = 2;
}
console.log(a); // error
console.log(b); // error
```

`var` ignores block scope, meaning it leaks outside the block.

Example:
```js
{
  var x = 10;
}
console.log(x); // works
```

---

# How var, let, and const Behave in Scope

## var
- Function-scoped
- Not block-scoped
- Can be accessed outside blocks

Example:
```js
if (true) {
  var x = 20;
}
console.log(x); // 20
```

## let
- Block-scoped
- Cannot be redeclared in the same scope

Example:
```js
if (true) {
  let y = 30;
}
console.log(y); // error
```

## const
- Block-scoped
- Cannot be reassigned or redeclared

Example:
```js
if (true) {
  const z = 40;
}
console.log(z); // error
```

---

# Scope Chain
When accessing a variable, JavaScript looks for it in the current scope. If not found, it checks outer scopes until it reaches the global scope.

Example:
```js
let x = 5;

function outer() {
  let y = 10;

  function inner() {
    let z = 15;
    console.log(x, y, z); // all accessible
  }

  inner();
}

outer();
```

Inner functions can access variables from outer functions, but outer functions cannot access inner variables.

---

# Lexical Scope
Lexical scope means the **position of your code** determines the scope.

Inner functions have access to variables defined in their parent functions.

Example:
```js
function parent() {
  let a = 10;
  function child() {
    console.log(a); // accessible due to lexical scope
  }
  child();
}

parent();
```

---

# Summary Table
| Scope Type | Applies To | Accessible From |
|------------|------------|------------------|
| Global | var, let, const | Entire program |
| Function | var, let, const | Inside the function only |
| Block | let, const | Only inside block `{ }` |

---

# Key Points
- Use `let` and `const` for predictable block scoping.
- Avoid `var` to prevent accidental leaks.
- Functions create their own scope.
- Blocks create scope only for `let` and `const`.
- Variables are searched in the scope chain.



