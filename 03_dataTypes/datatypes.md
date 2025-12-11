# JavaScript Data Types and Type System
This document explains JavaScript data types and how its type system works. It is written simply and clearly.

---

# 1. What Are Data Types?
A data type describes the kind of value stored in a variable.  
JavaScript values fall into two main categories:

1. Primitive Types
2. Non‑Primitive (Reference) Types

---

# 2. Primitive Data Types
These hold simple, immutable values and are stored directly in memory.

List of primitive types:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

## Example values
```js
let age = 20;           // Number
let name = "Nikhil";     // String
let isAdmin = false;    // Boolean
let x;                  // Undefined
let user = null;        // Null
let id = Symbol("id"); // Symbol
let big = 10n;          // BigInt
```

---

# 3. Non‑Primitive (Reference) Data Types
These store references to memory locations, not the actual value.

Types include:
1. Object
2. Array
3. Function

## Examples
```js
let person = { name: "Nikhil", age: 21 };       // Object
let list = [1, 2, 3];                            // Array
function greet() { return "Hello"; }             // Function
```

---
# `Why primitive are immutable but non-primitives are mutable`

### 1. Primitive values are immutable

This means:

- You cannot change the value once it is created.
- If you try to modify it, JavaScript actually creates a new value instead of changing the old one.

Example:
```js
let a = "hello";
a[0] = "H";   // does nothing
```
- Why?
Because primitive values (string, number, boolean, etc.) cannot be changed in memory.

If you update a primitive variable:
```js
let x = 10;
x = 20;
```

You are not modifying 10.
You are simply making x point to a new value (20).

Old value remains unchanged.
### 2. Non-primitive values are mutable

Objects, arrays, and functions can be changed after creation.

Example:
```js
let user = { name: "Nikhil" };
user.name = "Saini";
```


This changes the original object in the heap.

Because:

- Non-primitives store references, not values

- JavaScript allows modifying the content at that memory location

---

# `Primitives directly stored in memory but non-primitves have reference`

- primitves are small and their size is known so storing them directly in memory is efficient.
- But non primitves can grow or shrink so only their reference (Pointer) is stored in variable memory which refers to an object placed in heap memory.

### Primitive 
```js
let a = 10;
let b = "Hi";
```
```lua
Memory:
+--------+--------+
|   a    |   10   |
+--------+--------+
|   b    |  "Hi"  |
+--------+--------+
```
### Non-Primitive
```js
let user = {
  name: "Nikhil",
  age: 21
};
```
```yaml
Variable Memory:
+----------+------------------+
|  user    |   0x0012 (ref)   |
+----------+------------------+

Heap Memory:
0x0012 →  { name: "Nikhil", age: 21 }
```


# 4. JavaScript Type System Overview
JavaScript uses a **dynamic**, **weak**, and **loosely-typed** type system.
+


---

# 4.1 Dynamic Typing
A variable’s type is decided at runtime, not in advance.

```js
let a = 10;    // a is Number
a = "Hi";     // now a is String
```

The type can change anytime.

---

# 4.2 Weak Typing (Loose Typing)
JavaScript automatically converts types when needed.  
This is called **type coercion**.

Example:
```js
"5" + 1;   // "51"  (string + number → string)
"5" - 1;   // 4     (string - number → number)
```

This behavior can sometimes cause unexpected results.

---

# 4.3 Type Coercion
JavaScript can convert one type into another.

Two types:
1. Implicit (automatic)
2. Explicit (manual)

## Implicit example
```js
1 + "2"   // "12"
```

## Explicit example
```js
Number("20")  // 20
String(30)     // "30"
```

---

# 4.4 typeof Operator
The `typeof` operator returns the type of a value.

Examples:
```js
typeof 10;        // "number"
typeof "Hi";      // "string"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof null;      // "object" (historical bug)
typeof {};        // "object"
typeof [];        // "object"
typeof function(){}; // "function"
```

Note: Arrays are objects, so typeof returns "object".

---

# 5. Passing by Value vs Passing by Reference
Primitive values → passed by value  
Reference types → passed by reference

## Example (primitive)
```js
let x = 10;
let y = x;
x = 20;
console.log(y); // 10
```
`y` remains unchanged because it received a copy.

## Example (reference)
```js
let obj1 = { a: 1 };
let obj2 = obj1;
obj1.a = 5;
console.log(obj2.a); // 5
```
Both variables point to the same memory.

---

# 6. Equality and Types
JavaScript has two equality operators:

## 6.1 == (Loose Equality)
Performs type coercion.
```js
"5" == 5;  // true
```

## 6.2 === (Strict Equality)
Does not perform coercion.
```js
"5" === 5; // false
```

Strict equality is safer and recommended.

---

| Data Type | Category | Description | Mutable | Example |
|-----------|----------|-------------|---------|---------|
| Number | Primitive | Represents integers and decimals | No | let x = 10; |
| String | Primitive | Text inside quotes | No | let s = "Hello"; |
| Boolean | Primitive | true or false values | No | let flag = true; |
| Undefined | Primitive | Variable declared but not assigned | No | let a; |
| Null | Primitive | Intentional empty value | No | let a = null; |
| BigInt | Primitive | Very large integers | No | let big = 123n; |
| Symbol | Primitive | Unique identifier | No | let id = Symbol("key"); |
| Object | Non-Primitive | Key-value pair data structure | Yes | let obj = { name: "A" }; |
| Array | Non-Primitive | Ordered list of values | Yes | let arr = [1,2,3]; |
| Function | Non-Primitive | Executable code object | Yes | function greet() {}; |


# 7. Summary
- JavaScript has 7 primitive and several reference data types.
- It uses dynamic typing (types can change at runtime).
- It uses weak typing, meaning automatic type coercion occurs.
- Primitive values are stored by value; reference types store memory addresses.
- typeof helps identify data types but has quirks (e.g., null returns "object").
- Use === instead of == to avoid unwanted type coercion.

---



