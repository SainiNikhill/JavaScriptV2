# DOM (Document Object Model)

This file summarizes everything I have learned about the DOM so far. It is written for **revision and long-term reference**.

---

## 1. **What is DOM?**

The **DOM (Document Object Model)** is a programming interface provided by the browser that represents an HTML document as a **tree of objects**. JavaScript uses the DOM to **read, change, add, or remove elements** dynamically.

- HTML → converted into DOM by the browser
- JavaScript → interacts with the DOM
- DOM is **language-independent**, but commonly used with JavaScript

---

##  2. **How Browser Creates the DOM**

1. Browser receives HTML
2. HTML is parsed token by token
3. Nodes are created for each element
4. A **DOM Tree** is constructed
5. JavaScript can now access and manipulate this tree

---

## 3. DOM Tree Explanation

- Root node: `document`
- Parent nodes: elements that contain other elements
- Child nodes: elements inside another element
- Sibling nodes: elements on the same level
- `Types of Nodes`
     - 

Example:
```
document
 └── html
     ├── head
     └── body
         ├── h1
         └── p
```

---

## 4. DOM vs BOM

| DOM | BOM |
|---|---|
| Works with HTML document | Works with browser features |
| document object | window object |
| Manipulates elements | Controls browser (location, alert) |

---


## 5. **DOM Selectors**

DOM selctors are methods used to select (grab) HTML elements so JavaScript can read, change,or mainpulate them.


Think of selectors as:

`ways to tell JS which element you want to work with`

## Why do we need DOM selectors?

without selectors, JS cannot:
- change text;
- change styles;
- Add/Remove elements;
- Handle events(click,input,etc.)

## Types of DOM selectors;

1. `getElementsById()`
    
    Selects one element using its `id`

    ```html
    <h1 id="title">Hello World</h1>
    ```

    ```js
    let heading = document.getElementsById("title");
    console.dir(heading);
    ```
    Key Points:
     - IDs are unique
     - Return a single element
     - Fast and simple.

2. `getElementsByClassName()`
    
    Selects elements by class name;

    ```html
    <p class="text">one</p>
    <p class="text">Two</p>
    <p class="text">Three</p>
    ```
    ```js
    let paragraphs = document.getElementsByClassName("text");
    console.log(paragraphs);
    ```

    Key Points:
     - Return HTML collection
     - looks like an array but not a real array
     - Access using index

    ```js
    paragraphs[0].style.color = "red";
    ```

3. `getElementsByTagName()`

    Selects elements by tag name.

    ```html
       li
    ```
    ```js
    let items = document.getElementsByTagName("li");
    console.log(items);
    ```
    Key Points:
    - Returns HTMLCollection
    - Selects all matching tags
    


## Modern Selectors
`querySelector` → first match

`querySelectorAll` → NodeList of matches



## 1. `querySelector()`

selects the first matching element using CSS selector syntax

```js
document.querySelector("#title");   // id
document.querySelector(".text");    // class
document.querySelector("p");        // tag
```

## 2. `querySelectorAll()`

selects all matching elements;

```js
let allParas = document.querySelectorAll(".info");
```
key Points:
 - Return NodeList
 - Can use `forEach`



---

## 6. **DOM Manipulation**

Changing existing elements using JavaScript.

### Text & Content Manipulation
```js
element.innerText = "Text";
element.innerHTML = "<b>HTML</b>";
```

---

## 7. **Dynamic DOM Manipulation**


Creating, inserting, and removing elements at runtime.

### 1. `Create Element`

Syntax
```js
document.createElement("elementName")
```
creates an HTML element using JS.

It doesnt appear on page automatically you need to insert it into page using append or prepend().


```js
let div = document.createElement("div");
```

### 2. `Append / Prepend`

These are DOM insertion methods
- You create an element using createElement().
- And you put this element in page using these insertion techniques.

```js
parent.append(child); // add at the end
parent.prepend(child); // add at the beginning
```

### `append() vs appendChild()`

| append | appendChild |
|---|---|
| Multiple items allowed | Single node only |
| Can add text | Cannot add text |
| Modern | Older |
|parent.appendChild(c);|parent.append(item1,item2,"text")|

---

### 3. `Removing Elements`
Removes an element from DOM page

After removing:
- elements gone form the page.
- page doesnt reload.
- javaScript still knows varibale.


### Modern Way
```js
element.remove();
```

### Old Way
```js
parent.removeChild(child);
```

---

## 8. **Attribute Manipulation**

Attributes are extra information attached to the HTML elements.

Attributes are defined in HTML and can be changed using JS.

|Atribute | Property|
|---------|----------|
|exists in html|exists in JS object|
|Read using DOM method| reflects current state|
Always String|can be boolean, number, object|


```js
element.setAttribute("hidden", "");
element.removeAttribute("hidden");
element.getAttribute("src");// returns "" if exists  or null if dont
element.hasAttribute("disables")://return true or false
```

---

## 9. **Text Manipulation**

Text manipulation means reading, changing, or inserting text inside HTML elements using JavaScript.

### 1. `innerText`
 - works with visible text only.
 - Respects CSS(display:none text is ignored)

 ```html
 <p id="para">Hello World</p>
````
```js
let p = document.getElementById("para");

// read
console.log(p.innerText);

// update
p.innerText = "Hello Nikhil";
```
✔ Human-readable text

❌ Ignores hidden text

### 2. `textContent`

- Reads all text,even hidden
- Fatser than innerText.
- No formatting

```js
p.textContent = "Learning DOM Text Manipulation";
```
✔ Best for pure text work

✔ Includes hidden text

### 3. `innerHTML`
- Reads/ Writes HTML + text.
- can insert tags 

```js
p.innerHTML = "<b>Hello</b> <i>DOM</i>";
```

✔ Allows HTML

❌ Risky if user input is inserted (XSS risk)

## 10. **Style Manipulation using `.style`**

Inline CSS manipulation using JavaScript.

```js
element.style.color = "red";
element.style.backgroundColor = "blue";
```

Rules:
- CSS kebab-case → JS camelCase
- Units like `px` must be provided as strings

---

## 11. **Styling using `classList` (Best Practice)**

Recommended way to apply styles dynamically.

Writing css in js can be bulky or messy when we have larger projects so we write classes in css file and when we want to use them we just add them using JavaScript (classList) using mehods like (add,remove,toggle,contains)

### Methods
```js
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("active");
element.classList.contains("active");
```

### Why classList is better
- Clean code
- Reusable styles
- Separation of CSS and JS

---

## 12. Mental Model

- HTML → structure
- CSS → appearance
- JavaScript → control
- DOM → bridge between HTML and JavaScript

---

> ##  **INTERVIEW QUESTIONS**   
```js
===============================
DOM INTERVIEW QUESTIONS – JS NOTES
===============================


1. What is DOM?
// DOM (Document Object Model) is a tree-like structure created by the browser.
// JavaScript uses this tree to read, change, add, or remove HTML elements.


2. Different types of Nodes in DOM tree?
// 1. Element Node   -> HTML tags like <div>, <p>, <img>
// 2. Text Node      -> Text inside HTML elements
// 3. Comment Node   -> HTML comments <!-- comment -->
// 4. Document Node  -> The whole document (document)


3. Difference between ElementNode vs TextNode?
// Element Node:
// - Represents HTML tags
// - Node type = 1
// - Can have attributes and child nodes
//
// Text Node:
// - Represents text inside elements
// - Node type = 3
// - Cannot have attributes or children


 4. Difference between getElementById() vs querySelector()?
// getElementById():
// - Selects element by id only
// - Faster
// - Returns a single element
//
// querySelector():
// - Selects using any CSS selector (#, ., tag, attribute)
// - Returns the first matching element
// - More flexible


 5. What does getElementsByClassName() return? Is it an array?
// It returns an HTMLCollection
// - Not an array
// - Live collection (auto-updates when DOM changes)
// - Contains only element nodes


6. Difference between NodeList and HTMLCollection?
// NodeList:
// - Returned by querySelectorAll()
// - Static (does not auto-update)
// - Can include element, text, or comment nodes
// - Supports forEach()
//
// HTMLCollection:
// - Returned by getElementsByClassName(), getElementsByTagName()
// - Live (auto-updates)
// - Contains only element nodes
// - Does NOT support forEach()



7. What is the Document node?
// The Document node represents the entire HTML document.
// It is the root of the DOM tree and accessed using `document`.


8. What is the difference between document and window?
// window -> Represents the browser window (BOM)
// document -> Represents the HTML page (DOM)
// window contains document.


9. What is BOM?
// BOM (Browser Object Model) allows JavaScript to interact with the browser.
// Examples: window, navigator, location, history, screen.


10. What does querySelectorAll() return?
// It returns a NodeList.
// The NodeList is static and does not auto-update.


11. Why cant we directly use array methods on HTMLCollection?
// Because HTMLCollection is NOT an array.
// It does not support methods like map(), filter(), forEach().


12. How to convert HTMLCollection or NodeList into an array?
// Use Array.from() or spread operator [...collection].


13. What is a live collection?
// A live collection automatically updates when the DOM changes.
// Example: HTMLCollection.


14. What is a static collection?
// A static collection does not update after DOM changes.
// Example: NodeList returned by querySelectorAll().


15. Difference between innerText and textContent?
// innerText -> Reads only visible text and respects CSS.
// textContent -> Reads all text including hidden text.


16. Difference between innerHTML and textContent?
// innerHTML -> Reads and writes HTML + text.
// textContent -> Works with text only (safer).


17. What is createElement() used for?
// It is used to create a new HTML element dynamically in JavaScript.


18. What is append() vs appendChild()?
// append() -> Can append text and multiple nodes.
// appendChild() -> Appends only one node.


19. Difference between remove() and removeChild()?
// remove() -> Removes element directly.
// removeChild() -> Removes a child element using parent reference.


20. What is attribute manipulation in DOM?
// It means adding, removing, or reading attributes using
// setAttribute(), getAttribute(), removeAttribute().


21. Difference between attribute and property?
// Attribute -> Exists in HTML.
// Property -> Exists on DOM object.
// They may have different values.


22. What is classList?
// classList provides methods to manage CSS classes dynamically.
// Methods: add(), remove(), toggle(), contains().


23. What is event handling in DOM?
// Event handling means responding to user actions like click, input, keypress.


24. What is addEventListener()?
// It attaches an event handler to an element without overwriting existing ones.


25. Difference between inline event handler and addEventListener?
// Inline -> HTML based, bad practice.
// addEventListener -> JS based, clean and reusable.


26. What is event bubbling?
// Event bubbling means event flows from child to parent.


27. What is event capturing?
// Event capturing means event flows from parent to child.


28. What is event delegation?
// Event delegation uses bubbling to handle events efficiently
// by attaching a single listener to a parent.


29. What is DOMContentLoaded event?
// It fires when HTML is fully loaded but before images/styles.


30. Why is DOM manipulation considered expensive?
// Because frequent DOM changes cause reflow and repaint,
// which affects performance.



```





