# JavaScript Variables and Declaration

This document explains **what variables are**, **how to declare them**, and the differences between `var`, `let`, and `const` in JavaScript.

---

##  What is a Variable?
A **variable** is a container used to store data values.

Example:
```js
let age = 20;
```
Here:
- `age` → variable name
- `20` → value stored in the variable

---

##  Why Do We Use Variables?
Variables allow us to:
- store data
- reuse values
- update information
- make programs dynamic

---

#  Variable Declaration Keywords
JavaScript provides **three** ways to declare variables:

- `var`
- `let`
- `const`

Each has different rules and use cases.

---

#  1. `var`
###  Introduced in early JavaScript
###  Function-scoped
###  Allows redeclaration
###  Avoid using in modern JavaScript

Example:
```js
var name = "Nikhil";
var name = "Saini"; // Allowed
```
```js
function demo(){

  if(true){
    var x= 10;
  }
  console.log(x)
}
demo(); // gives 10 (as var is function scoped it can be used any where in the function but you can do this with let can const, var doesnt resepct the `BLOCK SCOPE`
``` 

`why var doesnt respect block `
- var is a functional scoped so var inside any block (outside the function) behaves like a global variable so it leaks outside the blocks.

```js
var a = 10

{
  var a = 20;
}

console.log(a); // 20 as it doesnt obeys blocks so it leaks its value and shadows the above value of a
```

---

#  2. `let`
###  Introduced in ES6 (modern JavaScript)
###  Block-scoped
###  Cannot be redeclared in the same block
###  Can be updated
###  Recommended for most cases

Example:
```js
let age = 20;
age = 21; // Allowed
```

But this is NOT allowed:
```js
let age = 20;
let age = 30; // ❌ Error
```

---

#  3. `const`
###  Block-scoped
###  Cannot be redeclared
###  Cannot be updated
###  Must be given a value during declaration
###  Best for values that should NOT change

Example:
```js
const PI = 3.14;
PI = 3.15; // ❌ Error
```

---

#  Block Scope vs Function Scope
### Block Scope → `{ }`
Used by `let` and `const`.

Example:
```js
{
  let x = 10;
  const y = 20;
}
// x and y not accessible here
```

### Function Scope → `var`
```js
function demo() {
  var a = 5;
}
// a not accessible outside
```

---

#  Summary Table
| Feature | var | let | const |
|--------|-----|------|--------|
| Scope | Function | Block | Block |
| Redeclare | ✔ Yes | ❌ No | ❌ No |
| Reassign | ✔ Yes | ✔ Yes | ❌ No |
| Must set value on declaration | ❌ No | ❌ No | ✔ Yes |
| Modern Usage Recommendation | ❌ Avoid | ✔ Use | ✔ Use |

---

#  Best Practices
- Prefer **`let`** for variables that will change.
- Use **`const`** for values that stay constant.
- Avoid **`var`** unless required for legacy code.

---



