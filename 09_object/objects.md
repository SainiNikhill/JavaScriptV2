# JavaScript Objects
This document explains objects in JavaScript, how they work, how to create and modify them, object methods, nested objects, copying behavior, and best practices.

---

# 1. What Is an Object?
An object is a collection of key-value pairs.  
Each key is called a **property**, and a function stored inside an object is called a **method**.

Example:
```js
let user = {
  name: "Nikhil",
  age: 21
};
```

---

# 2. Creating Objects
## 2.1 Object Literal (most common)
```js
let person = {
  name: "Amit",
  age: 22
};
```

## 2.2 Using new Object()
```js
let obj = new Object();
obj.name = "Amit";
obj.age = 22;
```

## 2.3 Using a Function Constructor
```js
function User(name, age) {
  this.name = name;
  this.age = age;
}

let u1 = new User("Amit", 22);
```

## 2.4 Using Classes (ES6)
```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const u1 = new User("Amit", 22);
```

---

# 3. Accessing Object Properties
Two ways:

## Dot notation
```js
user.name;
```

## Bracket notation
```js
user["age"];
```

Use bracket notation when:
- Key has spaces
- Key is dynamic

Example:
```js
let key = "email";
user[key] = "abc@example.com";
```

---

# 4. Adding Properties
```js
user.city = "Delhi";
```

---

# 5. Modifying Properties
```js
user.age = 23;
```

---

# 6. Deleting Properties
```js
delete user.age;
```

---

# 7. Methods (Functions inside Objects)
```js
let car = {
  brand: "Honda",
  start: function() {
    return "Car started";
  }
};
```

Shorthand:
```js
let car = {
  brand: "Honda",
  start() {
    return "Car started";
  }
};
```

---

# 8. Nested Objects
```js
let user = {
  name: "Amit",
  address: {
    city: "Delhi",
    pin: 110001
  }
};
```

Access:
```js
user.address.city;
```

---

# 9. Looping Through Objects (for...in)
```js
for (let key in user) {
  console.log(key, user[key]);
}
```

---

# 10. Object.keys(), Object.values(), Object.entries()
```js
Object.keys(user);   // ["name", "age"]
Object.values(user); // ["Amit", 22]
Object.entries(user); // [["name", "Amit"], ["age", 22]]
```

---

# 11. Copying Objects
Objects are copied by **reference**, not value.

## Example (reference copy)
```js
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 5;
console.log(obj1.a); // 5
```

---

# 12. Shallow Copy
## Using spread operator
```js
let obj2 = { ...obj1 };
```

## Using Object.assign()
```js
let obj2 = Object.assign({}, obj1);
```

---

# 13. Deep Copy
To copy nested objects completely:

```js
let deepCopy = JSON.parse(JSON.stringify(obj1));
```

Or using custom functions/libraries.

---

# 14. Optional Chaining (?.)
Safely access nested properties.
```js
user.address?.city;
```

---

# 15. Destructuring Objects
```js
let { name, age } = user;
```

---

# 16. Object Freeze and Seal
## Object.freeze()
Prevents adding, removing, or modifying properties.
```js
Object.freeze(user);
```

## Object.seal()
Prevents adding/removing properties but allows modification.
```js
Object.seal(user);
```

---

# 17. Summary
- Objects store key-value pairs.
- Can contain methods, nested objects, and arrays.
- Properties can be added, modified, or deleted.
- Objects are mutable and copied by reference.
- Use spread or Object.assign for shallow copies.
- Use JSON methods or libraries for deep copies.

---

