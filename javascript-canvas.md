---
layout: page
---

# Javascript
### Some history
Javascript (also known as ECMAscript) has multiple versions. In a nutshell:
* Pre-2015 Javascript is *bad*
* Post-2015 Javascript, aka ECMAscript 6, is *good*, so that's what we're learning

---

### Variables
There are two ways to declare variables
```js
const number = 3  // can't change later on
let number = 3    // can change later on

// old javascript, gross, don't use it
var number = 3
```
Declaring only needs to happen once, so you should never redeclare variables.
```js
let number = 3
let number = 4 // error
```

### Values
