# JavaScript Operators
This document explains all major operator types in JavaScript with clear examples.

---

# 1. What Are Operators?
Operators are symbols that perform operations on values or variables.  
Example:
```js
let sum = 5 + 3;
```
`+` is an operator.

---

# 2. Types of Operators in JavaScript
1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators
6. Ternary Operator
7. String Operators
8. Bitwise Operators
9. Type Operators

---

# 3. Arithmetic Operators
Used for mathematical calculations.

| Operator | Meaning | Example | Result |
|----------|----------|---------|--------|
| + | Addition | 5 + 3 | 8 |
| - | Subtraction | 5 - 3 | 2 |
| * | Multiplication | 5 * 3 | 15 |
| / | Division | 6 / 3 | 2 |
| % | Modulus (remainder) | 7 % 3 | 1 |
| ** | Exponent | 2 ** 3 | 8 |
| ++ | Increment | x++ | x + 1 |
| -- | Decrement | x-- | x - 1 |

---

# 4. Assignment Operators
Assign values to variables.

| Operator | Meaning | Example |
|----------|----------|---------|
| = | Assign | x = 10 |
| += | Add and assign | x += 5 → x = x + 5 |
| -= | Subtract and assign | x -= 5 |
| *= | Multiply and assign | x *= 5 |
| /= | Divide and assign | x /= 5 |
| %= | Modulus and assign | x %= 5 |
| **= | Exponent and assign | x **= 2 |

---

# 5. Comparison Operators
Used to compare values. They return boolean results (`true` or `false`).

| Operator | Meaning | Example | Result |
|----------|----------|---------|--------|
| == | Equal (loose) | 5 == "5" | true |
| === | Strict equal | 5 === "5" | false |
| != | Not equal | 5 != "5" | false |
| !== | Strict not equal | 5 !== "5" | true |
| > | Greater than | 5 > 3 | true |
| < | Less than | 5 < 3 | false |
| >= | Greater or equal | 5 >= 5 | true |
| <= | Less or equal | 3 <= 3 | true |

---

# 6. Logical Operators
Used for logical operations.

| Operator | Meaning | Example | Result |
|----------|----------|---------|--------|
| && | Logical AND | true && false | false |
| \|\| | Logical OR | true || false | true |
| ! | Logical NOT | !true | false |

---

# 7. Unary Operators
Operators that work on a single operand.

| Operator | Meaning | Example |
|----------|----------|---------|
| + | Converts to number | +"5" → 5 |
| - | Negates or converts | -"5" → -5 |
| typeof | Type of value | typeof 10 → "number" |
| void | Returns undefined | void 0 |
| delete | Deletes object property | delete obj.name |

---

# 8. Ternary Operator
Short form of if-else.

Syntax:
```js
condition ? value_if_true : value_if_false
```

Example:
```js
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
```

---

# 9. String Operators
The `+` operator can also concatenate strings.

Example:
```js
"Hello" + " World"; // "Hello World"
```

---

# 10. Bitwise Operators
Work on 32-bit binary numbers.

| Operator | Meaning |
|----------|----------|
| & | AND |
| \| | OR |
| ^ | XOR |
| ~ | NOT |
| << | Left shift |
| >> | Right shift |
| >>> | Unsigned right shift |

Example:
```js
5 & 1  // 1
```

---

# 11. Type Operators
Two important type operators:

| Operator | Meaning |
|----------|----------|
| typeof | Returns data type |
| instanceof | Checks if object is instance of a class |

Example:
```js
typeof 10;           // "number"
user instanceof Object; // true
```

---

# Summary
- JavaScript operators help perform calculations, comparisons, assignments, and logical operations.
- Use strict comparison (===) to avoid unwanted type coercion.
- Ternary operator is a quick form of if-else.
- Bitwise operators are rarely used in everyday JS.

---

If you want, we can now create a file for Expressions, Control Flow, Loops, or Functions.

