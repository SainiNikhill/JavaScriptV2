# Event and EventHandling

This file contains everything that is important for learning Events and EventHandling


## Index
1. [What is an Event?](#what-is-an-event)
2. [Types of Events](#types-of-events)
3. [Event Handling Methods](#event-handling-methods)
4. [addEventListener()](#addeventlistener)
5. [Event Object](#event-object)
6. [Event Bubbling](#event-bubbling)
7. [Event Delegation](#event-delegation)

> ## What is an Event?
An event is an action performed bu user that happens in browser, actions such as click, mouse movement, input etc.

JavaScript can listen to these events and respond.


> ## Types of events
- Mouse events [`click`, `dbClick`, `mouseOver`, `mouseOut`, `mouseMove`]
- Keyboard events[`keyDown`, `keyUp`,`keyPress`]
- Form events[`Submit`,`change`,`inputs`,`focus`,`blur`]
- Window events[`Load`,`DOMContentLoad`,`scroll`,`resize`]
>## Event Handler?
An event handler is a function that runs when an event occurs.

Simple idea:

- Event = Action.
- Handler = Reaction.

Example:
- Event :  button Click.
- Handler :  function that runs on click


> ## EventHandling Methods
- Inline Method - old method
- DOM property Event handler
- Add EventListners() - best method

### 1. `Inline method`
Inline Event handling
- mixes HTML + JS
- Hard to maintain
- Not reusable

```html
<button onClick="sayHello()">Click</button>
<script>
    function sayHello(){
        alert("hello")
    }
</script>
```
Inline events are discouraged because they mix structure and behavior.

### 2. `DOM property EventHandler`
```html
<button id="btn">Click</button>
```
```js
let btn = document.getElementById("btn");

btn.onclick = function(){
    alert("button clicked")
};
```
Problem: 
- Only one event hnadler is allowed 
- New Assignment overwrites old one

### 3. `addEventListener`
```js
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("Button Clicked");
});
```

why best?
- Multiple handlers allowed.
- sepration of concerns
- clean & professional

### addEventListener allows attaching multiple event handlers to the same element.

> ## Remove Event listener

Used to remove eventListeners from elements.

Syntax:
```js
element.removeEventListener("eventName", function);
```

Example:

```html
<p> lorem </p>
```

```js
let p = document.querySelector("p")

function handleDoubleClick () {
    p.style.color="yellow";
}

p.addEventListener("dblclick", handleDoubleClick); // adding event listener
p.removeEventListener("dblclick",handleDoubleClick); // removing event listener
```



>## Event Object

whenever an event happens, js Automatically creates an event object

```js
btn.addEventListener("click",function(event){
    console.log(event);
})
```
Useful properties:
- `event.target` -> element that triggered event
- `event.type` -> eventName
- `event.preventDefault()` -> stop default behavior [Behavior like form reload]

>## Event Handler vs Event Listener