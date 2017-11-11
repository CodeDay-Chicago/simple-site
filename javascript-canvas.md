---
layout: page
---

# Javscript & Canvas Workshop
## Javascript
### Before we begin...
Remember that Google is an excellent tool for looking up *anything*.
A good website for all-things Javascript is the [Mozilla Developer Network](developer.mozilla.org/en-US/docs).

---
### Basics & Syntax
**Javascript(JS)** is a programming language for websites and web applications
The obligatory "Hello World!" script in JS:
```js
console.log("Hello World!")
```
**Variables** store data for the program. You must declare a variable by using the keyword **var** then the name of the variable followed by setting the variable equal to a value.
```js
var bool = true
var int = 5
var string = "Put some text in quotes."
```
**Semicolons** are not needed in javascript unless you want to add multiple statements onto a single line

You can change variables by using the format: **name = value**, but make sure that the variables have been declared!
```js
bool = false
int = 4
string = "Heres some more text!"
```

**Operators** modify or test variables. They consist of 

| Operator | Action
|-
| `=, +=, -=, *=, /=` | Assigns a value and applies any given arithmetic operator
| `===` | Tests equality
| `+, -, *, /` | Standard arithmetic
| `<, >, <=, >=, !=` | Comparing values
| `&&, ||, !`| Logical and, or, and not

**Conditional Statements** There are a number of conditional statements in JS:

**If** statements test whether a condition is true and can be followed by an **else if** or **else** statement if the initial if statement is not true.
```js
var i = 2
if(i===0) {
  i+=2
}
else if(i===1) {
  i++
}
else {
  i-=1
}
```
**For** loops iterate over a number a set amount of times. **While** loops iterate while the conditional statement given is true.
```js
// ( Iterator | Condition | Increment )
for( var i = 0;      i < 5;  i++) {

}
//Executes while j is less than 5
var j = 0
while(j < 5) {
  j++
}
```


Use **functions** in order to encapsulate a certain task combining a certain set of instructions into an easily accessable piece of code.
```js
function add(a,b) {
  return a+b
}
```

---
### Implementing Javascript in a Webpage
Remember HTML? Well we need to **link** our script to the HTML file to load the script. You can do this in multiple ways:
```html
<html>
  <head>
    <script type="text/javascript" src="script1.js"></script>
  </head>
  <body>
    <!-- DOM/HTML -->
    <script type="text/javascript" src="script2.js"></script>
  </body>
</html>
```
There are two scripts:
* `script1.js` loads before the DOM is loaded
* `script2.js` loads while the DOM is being loaded

Some online code snippet editors like codepen automatically link your scripts

---
### Essentials

There are only a couple of tags that are actually important. Here they are:

| tag | usage | attributes | closing tag?
|-
| `<p>` | standard text
| `<h1>...<h5>` | headings
| `<a>` | links | *href*: the URI to link to
| `<image>` | image | *src*: source of the image | no
| `<div>` | a generic tag

---

### Try it out!
Head on over to [Codepen](https://codepen.io/pen) and make a simple website with text and at least one image.
---

## Canvas