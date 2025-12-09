# JavaScript Loops
This document explains all loop types in JavaScript, how they work, when to use them, and examples.

---

# 1. What Are Loops?
Loops allow you to repeat a block of code multiple times.  
They help avoid writing the same code again and again.

JavaScript provides several types of loops:
1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop
6. break and continue

---

# 2. for Loop
Used when you know how many times to run the loop.

## Syntax
```js
for (initialization; condition; increment) {
  // code
}
```

## Example
```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

# 3. while Loop
Runs as long as the condition is true.

## Syntax
```js
while (condition) {
  // code
}
```

## Example
```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

---

# 4. do...while Loop
Runs at least once, even if the condition is false.

## Syntax
```js
do {
  // code
} while (condition);
```

## Example
```js
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

# 5. for...in Loop (Object Loop)
Used to loop through object keys.

## Example
```js
let user = { name: "Nikhil", age: 21 };

for (let key in user) {
  console.log(key, user[key]);
}
```

---

# 6. for...of Loop (Array / Iterable Loop)
Used to loop through array values.

## Example
```js
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
```

Works with:
- Arrays
- Strings
- Maps
- Sets

---

# 7. Nested Loops
Loops inside loops.

## Example
```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i, j);
  }
}
```

---

# 8. break Statement
Stops the loop immediately.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}
```
Output:
```
1
2
```

---

# 9. continue Statement
Skips the current iteration and continues the loop.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```
Output:
```
1
2
4
5
```

---

# 10. Choosing the Right Loop
| Loop Type | When to Use |
|-----------|--------------|
| for | Fixed number of iterations |
| while | Unknown number, checks before each run |
| do...while | Run at least once |
| for...in | Loop through object keys |
| for...of | Loop through array values |
| break | Stop a loop early |
| continue | Skip an iteration |

---

# Summary
- Loops repeat code efficiently.
- for, while, and do...while control repetition.
- for...in loops through object keys.
- for...of loops through values in arrays or iterables.
- break stops a loop; continue skips one iteration.

---

