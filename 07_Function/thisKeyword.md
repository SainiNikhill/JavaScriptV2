# The `this` Keyword in JavaScript (Super Easy Revision)

## 1. What is `this`?
`this` is a special keyword in JavaScript that refers to the **current owner of the function**.
The value of `this` depends on **how the function is called**, not where it is written.

## 2. `this` in Different Situations

### A. Global Scope
```js
console.log(this);
```
- Browser: window
- Node.js: {}

### B. Inside an Object (Method Call)
```js
const user = {
  name: "Nikhil",
  showName() {
    console.log(this.name);
  }
};
user.showName(); // "Nikhil"
```

### C. Inside a Regular Function
```js
function test() {
  console.log(this);
}
test();
```
- Browser: window
- Strict mode: undefined

### D. call, apply, bind
```js
function show() {
  console.log(this.name);
}
const obj = { name: "Nikhil" };
show.call(obj);
show.apply(obj);
const fn = show.bind(obj);
fn();
```

### E. Arrow Functions
```js
const user = {
  name: "Nikhil",
  show: () => {
    console.log(this.name);
  }
};
user.show();
```

### F. Classes
```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(this.name);
  }
}
const p = new Person("Nikhil");
p.greet();
```

### G. Event Listeners
Regular function → element  
Arrow function → outer scope

## 3. Summary Table

| Situation                   | `this` refers to   |
|-----------------------------|---------------------|
| Global scope                | window/global       |
| Object method               | object              |
| Regular function            | window/undefined    |
| Arrow function              | outer scope         |
| call/apply/bind             | manually set        |
| Class methods               | instance            |
| Event listener (function)   | element             |
| Event listener (arrow)      | outer scope         |
