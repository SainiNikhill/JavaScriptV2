# JavaScript Interview Questions

>## 1. *`JS Basics & Language Fundamentals`*
## 1. **What is JavaScript?**

JavaScript is a **high-level, interpreted, dynamically typed programming language** used to make **web pages interactive**.

It allows developers to:
- Handle user events (click, input, submit)
- Manipulate the DOM
- Make API calls
- Update content without reloading the page

JavaScript runs mainly in the **browser**, and with **Node.js**, it can also run on the **server**, enabling full-stack development.

### Key Characteristics
- High-level language
- Interpreted / JIT compiled
- Dynamically typed
- Event-driven and asynchronous
- Single-threaded with non-blocking behavior

### Example
```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Hello JavaScript");
});
```
---

## 2. **Is JavaScript is synchronous or asynchronous ?**
JavaScript is synchronous and single-threaded by default, meaning it executes code line by line, one task at a time.

However, JavaScript can handle asynchronous operations using:

- Callbacks

- Promises

- async / await

This is possible because of the **event loop**, which allows long-running tasks like API calls, timers, or file operations to run in the background without blocking the main thread.

---

## 3. **Why is JavaScript called a single-threaded language?**
JavaScript is called single-threaded because it has only one call stack, which means it can execute only one task at a time.

At any moment, JavaScript handles one operation, completes it, and then moves to the next. This prevents issues like race conditions but also means long-running tasks could block execution.

To handle time-consuming operations efficiently, JavaScript uses:

- The event loop

- Callback queue / microtask queue

- Asynchronous APIs (setTimeout, fetch, promises)

These allow JavaScript to perform non-blocking operations without using multiple threads.

---

## 4. **How does JavaScript handle asynchronous operations?**
JavaScript handles asynchronous operations using the event loop along with Web APIs, the callback queue, and the microtask queue.

When an asynchronous task (like setTimeout, fetch, or a Promise) is started:

- The task is sent to Web APIs (browser or Node environment)

- JavaScript continues executing other code

- Once the task is complete, its callback is placed in a queue

- The event loop pushes it to the call stack when the stack is empty

Promises and async/await use the microtask queue, which has higher priority than the callback queue.

---
## 5. **What are the data types in JavaScript?**
JavaScript has two categories of data types: primitive and non-primitive (reference).

### Primitive data types (7):

1. Number

2. String

3. Boolean

4. Undefined

5. Null

6. Symbol

7. BigInt

These store single values and are immutable.

### Non-primitive (Reference) data type:

1. Object

   - Includes Array, Function, Date, etc.

Objects store multiple values and are accessed by reference.

---

## 6. **Difference between primitive and non-primitive data types**
The main difference between primitive and non-primitive data types in JavaScript is how they store and access data.

| Feature | Primitive Data Types | Non-Primitive (Reference) Data Types |
|--------|---------------------|-------------------------------------|
| Definition | Store a single value | Store multiple values |
| Data Storage | Stored by value | Stored by reference |
| Mutability | Immutable | Mutable |
| Memory Location | Stack memory | Heap memory |
| Copy Behavior | Creates a new copy | Copies the reference |
| Comparison | Compared by value | Compared by reference |
| Examples | Number, String, Boolean, Undefined, Null, Symbol, BigInt | Object, Array, Function, Date |
| Size | Fixed size | Dynamic size |

--- 

## 7. **Are strings mutable in JavaScript?**

No, strings are immutable in JavaScript.
Once a string is created, its value cannot be changed.

If you try to modify a string, JavaScript actually creates a new string instead of changing the original one.

```js
let str = "hello";
str[0] = "H"; // JS ingnores this operation as hello is stored as a whole value so you cant modify it but can be reassigned; (str="Hello" // Reassignment)

console.log(str); // "hello"
```
---
## 8. **What is NaN?**

NaN stands for **Not a Number**.
It is a special numeric value in JavaScript that represents the result of an invalid or undefined mathematical operation.

Even though it means “Not a Number”, its type is number.

```js
Number("abc")      // NaN
0 / 0              // NaN
Math.sqrt(-1)      // NaN
```
`NaN` is not equal to itself
```js
NaN === NaN // false
```
### To check whether the value is NaN 
```js
Number.isNaN(NaN) // true
Number.isNaN("abc") //false

// !!!! important always use Number.isNaN() not isNaN alone as it first convert the value into number then check
```
---
## 9. **What is type coercion?**
Type coercion is the process by which JavaScript automatically converts one data type into another during operations or comparisons.

It usually happens when JavaScript tries to perform an operation on different data types.

```js
"5" + 2    // "52"  (number → string)
"5" - 2    // 3     (string → number)
true + 1   // 2     (true → 1)
```
---
## 10. **Difference between == and ===**

- `==` is the **loose equality operator**. It compares values **after performing type coercion**.
- `===` is the **strict equality operator**. It compares **both value and type** without type conversion.

**Examples:**
```js
5 == "5"      // true
5 === "5"     // false

null == undefined   // true
null === undefined  // false
```

---

## 11. **What are truthy and falsy values?**
In JavaScript, **truthy** and **falsy** values are values that are evaluated as `true` or `false` when used in a **boolean context** (like `if` conditions).

### Falsy Values (only these are falsy)
- `false`
- `0`
- `-0`
- `0n`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values
- **All values except falsy ones**
- Examples: `"hello"`, `1`, `[]`, `{}`, `function(){}`, `"0"`

### Example:
```js
if ("hello") {
  // runs (truthy)
}

if (0) {
  // does not run (falsy)
}
```
---

## 12. **Difference between undefined and null**
`undefined` means a variable has been declared but **has not been assigned a value**, whereas `null` is an **intentional absence of value** assigned by the developer.

### Key Differences

| Feature | undefined | null |
|-------|-----------|------|
| Meaning | Variable declared but not assigned | Intentional empty value |
| Assigned by | JavaScript | Developer |
| Type | `"undefined"` | `"object"` (JS bug) |
| Value | Default value | Explicit value |
| Use case | Missing or uninitialized data | Reset or empty value |

### Examples:
```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```
```js
null == undefined    // true
null === undefined   // false
```

---

## 13. **What happens when you add a number and a string?**
When a **number is added to a string**, JavaScript performs **type coercion** and converts the **number into a string**, then **concatenates** them.

### Example:
```js
5 + "10"   // "510"
"10" + 5   // "105"
```


Important Interview Points:

- The + operator prefers string concatenation

- Other operators (-, *, /) convert strings to numbers

```js
"10" - 5   // 5
"10" * 2   // 20

```

---
## 14. **What does "use strict" do?**
`"use strict"` enables **strict mode** in JavaScript, which enforces **stricter parsing and error handling** to help write safer and cleaner code.

### What strict mode does:
- Prevents use of **undeclared variables**
- Throws errors for **silent mistakes**
- Disallows duplicate parameter names
- Restricts use of certain keywords
- Changes `this` behavior in functions (becomes `undefined`)

### Example:
```js
"use strict";
x = 10; // ReferenceError
```


>## 2. *`Varibales , Scopes & Hoisting`*

## 1. **Difference between var, let, and const**

| Feature | var | let | const |
|-------|-----|-----|-------|
| Scope | Function scope | Block scope | Block scope |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Hoisting | Yes (initialized as `undefined`) | Yes (TDZ) | Yes (TDZ) |
| Global Object | Added to `window` | Not added | Not added |

---

## 2. **What is Scope?**
Scope defines **where a variable is accessible** in a JavaScript program.

### Types of Scopes
1. Global scope  
2. Function scope  
3. Block scope  

`Block Scope`

Block scope means variables declared with `let` and `const` are accessible **only within the `{}` block** where they are defined.

`Global Scope `

Variables declared outside any function or block are in the global scope and can be accessed anywhere in the program.

`Functional Scope`

Variables declared with var inside a function are accessible only within that function.

```js
function test() {
  var y = 5;
}
```
---
## 3. **What is Hoisting**
Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the compilation phase.

### What gets hoisted in JS ?
- Variable declarations (var, let, const)

- Function declarations

Note : 
- var is hoisted and initialized as undefined

- let and const are hoisted but not initialized(They are in Temporal Dead Zone)

## 4. **Temporal Dead Zone**
TDZ is the time between entering a block and the actual declaration of a let or const variable, during which accessing it throws a ReferenceError.

```js
console.log(a); // ReferenceError
let a = 10;
```

## Why `let` and `const` are not accessible before declaration?
Because they exist in the Temporal Dead Zone, meaning they are hoisted but cannot be accessed before initialization to prevent bugs.

---

> ## 3. **`Functions`**



## 1. **What is a Function?**
A function is a reusable block of code designed to perform a specific task. It executes when it is called or invoked.

```js
function greet() {
  console.log("Hello");
}
```

---

## 2. **Difference between Function Declaration and Function Expression**

| Feature | Function Declaration | Function Expression |
|-------|----------------------|--------------------|
|Defination |A **function declaration** defines a function using the `function` keyword with a **function name**.|A function expression stores a function inside a variable.|
| Syntax | function foo() {} | const foo = function() {} |
| Hoisting | Fully hoisted | Not hoisted |
| Usage before definition | Allowed | Not allowed |
| Name | Mandatory | Optional |

---

## 3. **What are Arrow Functions?**
Arrow functions are a shorter syntax for writing functions introduced in ES6. They do not have their own `this`.

```js
const add = (a, b) => a + b;
```

---

## 4. **Difference between Arrow Function and Normal Function**

| Feature | Normal Function | Arrow Function |
|-------|----------------|----------------|
| this | Has its own this | Inherits this |
| arguments object | Available | Not available |
| Constructor | Can be used | Cannot be used |
| Syntax | Longer | Shorter |

---

## 5. **What is a Callback Function?**
A callback function is a function passed as an argument to another function and executed later.

```js
function greet(name, callback) {
  callback(name);
}
```

---

## 6. **What is a Higher-Order Function?**
A higher-order function is a function that takes another function as an argument or returns a function.

Examples:
- map()
- filter()
- reduce()

---

## 7. **What is an IIFE?**
IIFE stands for Immediately Invoked Function Expression. It runs as soon as it is defined.

```js
(function () {
  console.log("IIFE executed");
})();
```

---

## 8. **What is Function Currying?**
Function currying is a technique where a function takes one argument at a time.

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}
```

---

## 9. **Can Functions be Stored in Variables?**
Yes. Functions are first-class citizens in JavaScript.

```js
const sayHello = function() {
  console.log("Hello");
};
```

---

## 10. **Pure vs Impure Functions**

### Pure Functions
- Same input produces same output
- No side effects
- Does not modify external state

```js
function sum(a, b) {
  return a + b;
}
```

### Impure Functions
- Depends on external state
- Causes side effects

```js
let count = 0;
function increment() {
  count++;
}
```

| Feature | Pure Function | Impure Function |
|-------|--------------|----------------|
| Side effects | No | Yes |
| Predictability | High | Low |
| Testing | Easy | Hard |

---





