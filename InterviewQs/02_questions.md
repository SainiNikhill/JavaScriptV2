# JavaScript Interview Questions 

> ## 1. *`Clousers & Memory`*

## 1. **What is a Closure?**

A closure is a function that **remembers and accesses variables from its outer scope**, even after the outer function has finished execution.

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
counter(); // 1
counter(); // 2
```

---

## 2. **Why are Closures Useful?**

Closures are useful because they:
- Preserve data (data encapsulation)
- Help create private variables
- Maintain state between function calls
- Are used in callbacks, event handlers, and currying

---

## 3. **Explain Closure with an Example?**

```js
function greet(name) {
  return function () {
    console.log("Hello " + name);
  };
}

const sayHello = greet("Nikhil");
sayHello(); // Hello Nikhil
```

Here, the inner function remembers the variable `name` even after `greet()` has executed.

---

## 4. **What is the Call Stack?**

The call stack is a **data structure** that keeps track of function calls in JavaScript.

- Executes functions in **LIFO** order (Last In, First Out)
- Each function call is pushed onto the stack
- Removed after execution

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Hello");
}

a();
```

---

## 5. **What Causes Stack Overflow?**

Stack overflow occurs when:
- There is **infinite or very deep recursion**
- Too many function calls are added to the call stack

```js
function infinite() {
  infinite();
}
```

---

## 6. **What is Garbage Collection in JavaScript?**

Garbage collection is the process by which JavaScript **automatically frees memory** that is no longer in use.

- Managed by the JavaScript engine
- Uses reference-based cleanup
- Removes unreachable objects from memory

---

## 7. **What is a Memory Leak?**

A memory leak occurs when **memory that is no longer needed is not released**, causing increased memory usage.

Common causes:
- Unused global variables
- Forgotten timers or event listeners
- Closures holding unnecessary references

---

## 8. **Difference between Pass by Value and Pass by Reference**

| Feature | Pass by Value | Pass by Reference |
|------|--------------|------------------|
| Data types | Primitive types | Objects, Arrays |
| Memory behavior | Copies value | Copies reference |
| Original value | Not affected | Can be modified |
| Example | Number, String | Object, Array |

### Example:
```js
let a = 10;
let b = a;
b = 20;
// a remains 10

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 5;
// obj1.x becomes 5
```

---

> ## 2. *`Objects`*


## 1. **What is an Object in JavaScript?**

An object is a **collection of key–value pairs** used to store related data and functionality.

```js
const user = {
  name: "Nikhil",
  age: 22
};
```

---

## 2. **How do you create objects?**

### Using Object Literal (most common)
```js
const obj = { a: 1 };
```

### Using Constructor
```js
const obj = new Object();
obj.a = 1;
```

### Using Constructor Function
```js
function Person(name) {
  this.name = name;
}
const p1 = new Person("Nikhil");
```

---

## 3. **How do you access object properties?**

### Dot Notation
```js
user.name;
```

### Bracket Notation
```js
user["name"];
```

---

## 4. **What is Shallow Copy?**

A shallow copy copies only the **top-level properties**. Nested objects still share the same reference.

```js
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 };
```

---

## 5. **What is Deep Copy?**

A deep copy creates a **completely new object**, including all nested objects.

```js
const deepCopy = JSON.parse(JSON.stringify(obj1));
```

---

## 6. **Difference between Shallow Copy and Deep Copy**

| Feature | Shallow Copy | Deep Copy |
|------|-------------|-----------|
| Nested objects | Shared reference | New copy |
| Memory | Less | More |
| Risk | Mutation issues | Safe |
| Methods | Spread, Object.assign | JSON, structuredClone |

---

## 7. **How do you clone an object?**

### Shallow Clone
```js
const clone = Object.assign({}, obj);
```

### Deep Clone
```js
const clone = structuredClone(obj);
```

---

## 8. **What is Object.assign()?**

`Object.assign()` copies properties from one or more source objects into a target object.

```js
const target = {};
const source = { a: 1 };
Object.assign(target, source);
```

---

## 9. **What is Spread Operator in Objects?**

The spread operator (`...`) expands object properties into a new object.

```js
const obj2 = { ...obj1, b: 2 };
```

---
