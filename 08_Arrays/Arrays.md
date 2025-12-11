# JavaScript Arrays
This document explains arrays in JavaScript, how they work, how to create them, common methods, iteration techniques, and best practices.

---

# 1. What Is an Array?
An array is an ordered list of values stored under a single variable name.

Example:
```js
let numbers = [10, 20, 30];
```

Arrays can store:
- Numbers
- Strings
- Booleans
- Objects
- Other arrays
- Mixed types

```js
let mixed = [1, "Hello", true, { a: 10 }, [1, 2]];
```

---

# 2. Creating Arrays
### Using square brackets (most common)
```js
let arr = [1, 2, 3];
```

### Using Array constructor
```js
let arr = new Array(1, 2, 3);
```

### Empty array
```js
let list = [];
```

---

# 3. Accessing Array Elements
Array values are accessed using index numbers starting from 0.

```js
let arr = [10, 20, 30];
console.log(arr[0]); // 10
console.log(arr[2]); // 30
```

---

# 4. Changing Values
```js
let arr = [1, 2, 3];
arr[1] = 20;
```

---

# 5. Array Length
```js
let arr = [1, 2, 3, 4];
console.log(arr.length); // 4
```

---

# 6. Common Array Methods
Below are the most commonly used array methods.

## 6.1 push() – Add to end
```js
arr.push(50);
```

## 6.2 pop() – Remove from end
```js
arr.pop();
```

## 6.3 unshift() – Add to beginning
```js
arr.unshift(0);
```

## 6.4 shift() – Remove from beginning
```js
arr.shift();
```

## 6.5 includes() – Check if value exists
```js
arr.includes(20);
```

## 6.6 indexOf()
```js
arr.indexOf(20);
```

## 6.7 slice() – Returns a portion (does not modify original)
```js
arr.slice(1, 3);
```

## 6.8 splice() – Add/remove items (modifies original)
```js
arr.splice(1, 2);
```

## 6.9 concat() – Join two arrays
```js
let newArr = arr.concat([4, 5]);
```

## 6.10 join() – Convert array to string
```js
arr.join("-");
```

## 6.11 reverse() – Reverse array
```js
arr.reverse();
```

## 6.12 sort() – Sort array
```js
arr.sort();
```

---

# 7. Looping Through Arrays
## for loop
```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## for...of loop (recommended)
```js
for (let value of arr) {
  console.log(value);
}
```

## forEach() – Modern iteration
```js
arr.forEach((value) => console.log(value));
```

---

# 8. Multidimensional Arrays
Arrays inside arrays.

```js
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3
```

---

# 9. Array Spread Operator
```js
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
```

---

# 10. Destructuring Arrays
```js
let arr = [10, 20, 30];
let [a, b, c] = arr;
```

---

# 11. Important Notes
- Arrays are objects internally.
- Indexes are keys like "0", "1", "2".
- Arrays are mutable.
- `typeof arr` returns "object".

---

# 12. Summary
Arrays store ordered lists of values.  
They support many built-in methods for adding, removing, slicing, and iterating.  
They are flexible, dynamic, and widely used in JavaScript.

---

