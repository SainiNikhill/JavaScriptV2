# How JavaScript Works: Execution Context, Call Stack, and Temporal Dead Zone

This file explains how JavaScript executes code step by step, using simple language and diagrams.

---

# What Happens When You Run JavaScript Code
JavaScript does not execute your code line by line immediately.  
Instead, execution happens in **two phases** inside something called an **Execution Context**.

---

# What Is an Execution Context?
An execution context is the environment where your code runs.

There are two types:
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)

Each execution context has:
- Memory Component (also called Variable Environment)
- Code Component (also called Thread of Execution)

Think of it as:
```
Execution Context
│
├── Memory Component (variables, functions)
└── Code Component (line-by-line execution)
```

---

# The Two-Phase Process
JavaScript executes code in two steps:

## Phase 1: Memory Creation Phase
JS sets up memory for variables and functions.

- var → stored as undefined
- let, const → memory created but not initialized (Temporal Dead Zone)
- functions → full function copied into memory

## Phase 2: Code Execution Phase
JS executes your code line by line and assigns real values.

Example:
```js
console.log(a);
var a = 5;
```

Memory phase result:
```
a: undefined
```

Execution phase:
```
console.log(a);  // prints undefined
a = 5;
```

---

# Call Stack
The call stack manages the execution contexts.
The Call Stack is a data structure that JavaScript uses to keep track of
which function is currently running
and
which function should run next.

Think of it like a stack of plates:
- The last plate you put on top is the first you remove.
- This is called LIFO (Last In, First Out)

JavaScript uses the same idea.

## How the Call Stack Works

- The program starts → Global Execution Context (GEC) is pushed on the stack

- Whenever a function is called → A Function Execution Context (FEC) is pushed

- When the function finishes → Its FEC is popped

- Only one function runs at a time (JS is single-threaded)

Diagram:
```
┌──────────────┐
│   Global EC  │  ← created first
└──────────────┘
      ▲
      │ push
┌──────────────┐
│ Function EC  │  ← when a function is called
└──────────────┘
      │ pop when finished
```

Whenever a function is called:
- A new Function Execution Context is created
- It is pushed onto the stack
- When the function finishes, it is removed

---

# Example with Call Stack
Code:
```js
function one() {
  two();
}
function two() {}
one();
```

Call Stack flow:
```
Start
│
│ Create Global EC
│
│ Call one()
├── Push FEC(one)
│
│ Call two()
├── Push FEC(two)
│
│ Return from two()
├── Pop FEC(two)
│
│ Return from one()
├── Pop FEC(one)
│
End
```

---

# What Is the Temporal Dead Zone (TDZ)?
TDZ is the time between:
- variable creation in memory (during Phase 1)
- and the actual line where the variable is declared

During TDZ, you cannot access the variable.

Example:
```js
console.log(x); // error (x is in TDZ)
let x = 10;
```

Diagram:
```
Memory Phase:
let x;   // created but not initialized

Execution Phase:
Line 1: access x → TDZ error
Line 2: x = 10 (TDZ ends here)
```

TDZ applies only to:
- let
- const

Var does not have TDZ because it is initialized as undefined.

---

# Execution Context Diagram (Simple Model)
```
Global Execution Context
│
├── Memory Component
│     var a → undefined
│     let b → TDZ
│     function foo → function object
│
└── Code Component
      runs code line-by-line
```

When foo() is called:
```
Function Execution Context (foo)
│
├── Memory Component
│     local variables
│
└── Code Component
      executes foo's code
```

---

# Summary
- JavaScript creates an Execution Context before running code.
- Two phases: Memory Creation and Code Execution.
- var is hoisted with undefined.
- let and const are hoisted but in the Temporal Dead Zone.
- Functions get fully hoisted.
- Call Stack manages all execution contexts.

---
