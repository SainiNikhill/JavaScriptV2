# JavaScript Control Flow
This document explains control flow statements in JavaScript including if/else, switch, and conditional logic.

---

# 1. What Is Control Flow?
Control flow determines the order in which statements in a program are executed.  
By default, JavaScript executes code from top to bottom, but control flow statements allow you to:
- Make decisions
- Run specific blocks of code
- Skip code
- Choose between multiple paths

---

# 2. if Statement
The `if` statement executes a block of code when a condition is true.

## Syntax
```js
if (condition) {
  // code runs when condition is true
}
```

## Example
```js
let age = 20;
if (age >= 18) {
  console.log("Can vote");
}
```

---

# 3. if...else Statement
Used when you need two paths: one for true, one for false.

## Syntax
```js
if (condition) {
  // true block
} else {
  // false block
}
```

## Example
```js
let marks = 35;
if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

---

# 4. else if Statement
Used when multiple conditions need to be checked.

## Syntax
```js
if (condition1) {
  // block 1
} else if (condition2) {
  // block 2
} else {
  // final block
}
```

## Example
```js
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

---

# 5. Nested if Statements
You can place an `if` inside another `if`.

```js
let age = 25;
if (age >= 18) {
  if (age > 21) {
    console.log("Adult - 21+");
  }
}
```

---

# 6. switch Statement
The `switch` statement selects a block of code based on a matching case.

## Syntax
```js
switch(value) {
  case option1:
    // code
    break;
  case option2:
    // code
    break;
  default:
    // code
}
```

## Example
```js
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

### break Keyword
`break` stops execution from continuing to the next case.

### default Case
Runs when no case matches.

---

# 7. Ternary Operator (Short Form of if/else)
Used for simple conditions.

## Syntax
```js
condition ? value_if_true : value_if_false
```

## Example
```js
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
```

---

# 8. Logical Operators in Control Flow
Combine multiple conditions.

## AND (&&)
```js
if (age >= 18 && hasID) {
  console.log("Allowed");
}
```

## OR (||)
```js
if (role === "admin" || role === "manager") {
  console.log("Access granted");
}
```

## NOT (!)
```js
if (!isLoggedIn) {
  console.log("Please login");
}
```

---

# 9. Truthy and Falsy Values
JavaScript treats some values as true or false in conditions.

## Falsy values:
- false
- 0
- ""
- null
- undefined
- NaN

Everything else is truthy.

Example:
```js
if ("") {
  console.log("runs");
} else {
  console.log("does not run"); // empty string is falsy
}
```

---

# 10. Summary
- `if`, `else`, and `else if` help in decision-making.
- `switch` handles multiple choices cleanly.
- Ternary operator offers short conditional syntax.
- Logical operators help combine conditions.
- Falsy values automatically behave as false in conditions.

---

