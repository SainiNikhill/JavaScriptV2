# JavaScript Advanced Concepts
This document covers Closures, the Event Loop, Asynchronous JavaScript, and JavaScript Engine Internals in a clear, beginner-friendly way.

---

# 1. Closures
A closure is created when an inner function remembers variables from its outer function, even after the outer function has finished executing.

## Example
```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }

  return inner;
}

const counter = outer();
console.log(counter());
console.log(counter());
```
The inner function still remembers `count`, even though `outer()` has finished.

## Why Closures Happen
Closures exist due to **lexical scoping**: functions remember where they were written.

## Uses
- Data privacy
- Function factories
- Maintaining state

---

# 2. Event Loop
JavaScript is single-threaded, meaning it executes one line at a time.  
The Event Loop allows JavaScript to handle asynchronous operations without blocking.

## Event Loop Components
- Call Stack
- Web APIs (browser environment)
- Callback Queue (macrotask queue)
- Microtask Queue (promises)
- Event Loop (manages execution)

## Flow Diagram
```
Call Stack ← Event Loop ← Microtask Queue
                      ↑
                      ↓
                Callback Queue
```

## Example
```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```
Output:
```
A
C
B
```
Because `setTimeout` goes to the Web API and is queued.

## Microtasks vs Macrotasks
- Microtasks (Promise callbacks) run before macrotasks

Example:
```js
console.log(1);
Promise.resolve().then(() => console.log(2));
console.log(3);
```
Output:
```
1
3
2
```

---

# 3. Asynchronous JavaScript
JavaScript handles async tasks using:
- Callbacks
- Promises
- Async/Await

## Callbacks
```js
setTimeout(() => {
  console.log("Done");
}, 1000);
```
Callback issues include callback hell.

## Promises
A promise represents a future value.

```js
let p = new Promise((resolve, reject) => {
  resolve("Success");
});

p.then(result => console.log(result));
```

## Async/Await
Async syntax makes asynchronous code look synchronous.

```js
async function run() {
  let data = await fetchData();
  console.log(data);
}
```

Rules:
- `await` pauses inside the async function
- The async function always returns a promise

---

# 4. JavaScript Engine Internals (V8)
The JavaScript engine (like Google's V8) runs your JS code.

## How JS Is Executed Internally
1. Parsing: code converted into AST (Abstract Syntax Tree)
2. Interpreter (Ignition): converts AST into bytecode
3. Optimizing compiler (TurboFan): optimizes hot code paths

## Hidden Classes and Inline Caching
V8 optimizes objects using hidden classes.
If you use consistent property structure, V8 runs faster.

Example:
```js
let obj = {x: 1, y: 2};
```
Changing structure repeatedly slows things down.

## Garbage Collection
V8 uses generational garbage collection to free unused memory.

---

# Summary
| Concept | Meaning |
|---------|---------|
| Closures | Functions remember outer variables |
| Event Loop | Manages asynchronous execution |
| Async JS | Callbacks, Promises, async/await |
| JS Engine | Parses, interprets, optimizes code |

---

If you want, we can now build modules for:  
- Prototypes and Inheritance  
- Classes  
- Modules (import/export)  
- DOM and Browser APIs

