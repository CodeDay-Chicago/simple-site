---
layout: page
---

# Javscript & Canvas Workshop
## Javascript
### Before we begin...
**Javascript, ECMAScript, JS, ES** is a programming language for websites and web applications.
It has multiple versions. In a nutshell:
* Pre-2015 Javascript is *bad*
* Post-2015 Javascript, aka ECMAscript 6, is *good*, so that's what we're learning

Remember that Google is an excellent tool for looking up *anything*.
A good website for all-things Javascript is the [Mozilla Developer Network](developer.mozilla.org/en-US/docs).

*Side note*: Do **not** use [w3schools](https://www.w3schools.com) for javascript. Their results often come up above the Mozilla Developer Network but their code examples are full of bad practices and outdated functions.

---
### Basics & Syntax
```js
console.log('Hello World!')
```
#### *Variables* store data for the program. There are two ways to declare them:
```js
const number = 3  // can't change later on
let number = 3    // can change later on

// old javascript, gross, don't use it
var number = 3
```
`let` statements act slightly differently than normal variable declarations - if you declare a let inside a conditional or loop it won't be accesible from outside the statement:
```js
let x = true
// Doesn't work:
if (x) {
  let y = 'set!' // here y is inly accessible in the if statement and its children
}
console.log(y) // will log undefined
// Works:
let y // declare y outside of the if statement
if (x) {
  y = 'set!'
}
console.log(y) // will log 'set!''
```
Declaring only needs to happen once, so you should never redeclare variables.
```js
// Wrong:
let number = 3
let number = 4 // error
// Right:
number = 4 // reassigns the value of an existing variable
```

#### *Operators* modify or test variables.

Most standard math operators are implemented:
```js
// Some basic arithmetic works as you'd expect.
1 + 1 // = 2
0.1 + 0.2 // = 0.30000000000000004
8 - 1 // = 7
10 * 2 // = 20
35 / 5 // = 7

// Including uneven division.
5 / 2 // = 2.5

// And modulo division.
10 % 2 // = 0
30 % 4 // = 2
18.5 % 7 // = 4.5

// Bitwise operations also work when you perform a bitwise operation your float
// is converted to a signed int *up to* 32 bits.
1 << 2 // = 4

// order of operations is enforced with parentheses.
(1 + 3) * 2 // = 8

// There's shorthand for performing math operations on variables:
someVar += 5 // equivalent to someVar = someVar + 5 someVar is 10 now
someVar *= 10 // now someVar is 100

// and an even-shorter-hand for adding or subtracting 1
someVar++ // now someVar is 101
someVar-- // back to 100
```
You're not limited to numbers though
```js
// Boolean type.
true
false

// Negation uses the ! symbol
!true // = false
!false // = true

// There's also `null` and `undefined`.
null      // used to indicate a deliberate non-value
undefined // used to indicate a value is not currently present (although
           // `undefined` is actually a value itself)
```
Last but not least the most important of which is the *string*
```js
// Strings are created with ' '
'abc'

// Strings are concatenated with +
'Hello ' + 'world!' // = 'Hello world!'

// ... which works with more than just strings
'1, 2, ' + 3 // = '1, 2, 3'
'Hello ' + ['world', '!'] // = 'Hello world,!'


// You can access characters in a string with `charAt`
'This is a string'.charAt(0)  // = 'T'

// ...or use `substring` to get larger pieces.
'Hello world'.substring(0, 5) // = 'Hello'

// `length` is a property, so don't use ().
'Hello'.length // = 5
```

#### *Conditional Statements* can be used to create programs flow:

`if` statements test whether a condition is true and can be followed by an `else if` or `else` statement if the initial if statement is not true.
```js
let i = 2
if (i === 0) {
  i += 2
} else if ( i === 1 ) {
  i++
} else {
  i -= 1
}
```
A quick library of comparators (the defined values simply represent potential variables, any of the valuse can be replaced with a variable)
```js
// Equality is ===
1 === 1 // = true
2 === 1 // = false

// Inequality is !==
1 !== 1 // = false
2 !== 1 // = true

// More comparisons
1 < 10 // = true
1 > 10 // = false
2 <= 2 // = true
2 >= 2 // = true

// string alphabetical order can be compared with < and >
'a' < 'b' // = true
```
`for` loops iterate over a number a set amount of times. `while` loops iterate while the conditional statement given is true. Both can be used for the same purposes.
```js
// ( Iterator | Condition | Increment )
// for each loop, the Increment is applied to the iterator while the condition is longer met
for (let i = 0; i < 5; i++) {
  console.log(i)
} // will output 0, 1, 2, 3, 4, 5
// Executes while j is less than 5
let j = 0
while (j < 5) {
  j++
}
```

#### *Functions* can be used to declare code that is repeatedly used
```js
function add (a, b) {
  return a + b
} // use this for global functions

passAFunctionToMe((a, b) => {
  return a + b
}) // use this for inline functions
```
#### Including javascript in a page
Here we include two scripts
* `script1.js` loads before the DOM is loaded
* `script2.js` loads while the DOM is being loaded - this is the reccomended method because it does not block loading the DOM until your javascript is loaded.

Some online code snippet editors like Codepen automatically link your scripts
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
#### Objects
```js
// JavaScript's objects are equivalent to 'dictionaries' or 'maps' in other
// languages: an unordered collection of key-value pairs.
let myObj = {key1: 'Hello', key2: 'World'}

// Keys are strings, but quotes aren't required if they're a valid
// JavaScript identifier. Values can be any type.
let myObj = {myKey: 'myValue', 'my other key': 4}

// Object attributes can also be accessed using the subscript syntax,
myObj['my other key'] // = 4

// ... or using the dot syntax, provided the key is a valid identifier.
myObj.myKey // = 'myValue'

// Objects are mutable values can be changed and new keys added.
myObj.myThirdKey = true

// If you try to access a value that's not yet set, you'll get undefined.
myObj.myFourthKey // = undefined
```

### Object Oriented Programming!

Object oriented programming uses **classes** which define objects. Think of it as making your own type of variable.
```js
//class declaration
class Car {
	//insert code for the class
}
```

Constructors function as a template when initializing an object. Think of it as setting the parameters/blueprint for your object.
```js
class Car {
	constructor (mileage, model, color) {
		this.color = color
		this.miles = mileage
		this.model = model
	}
}
```

Use methods as a function that can only be called by your object.
```js
class Car {
  /* other code */
  incrementMileage (miles) {
    this.miles += miles
  }
}
```

You can then use the template of the constructor to store an instance of your object as a variable. Think of it as filling in the holes that were in your blueprint.
```js
let myCoolCar = new Car(2000, 'Zippy 2.0', '#FF0000')
```


---
### Canvas
todo: organize code
Now we will be interacting with a thing called **Canvas** which is a simple viewport where you can easily render 2d objects. Add a Canvas object using the `<canvas>` tag
```html
<body>
  <!-- DOM/HTML -->
  <canvas id='c'></canvas>
</body>
```

Now the rest of the work will be done in JS. First we need to set up the parameters of our canvas. This sets up the width and height of our canvas, initializes it, and sets up some easy variables for us to access in the future. The ctx variable is going to be the variable that we are going to draw things to. The keys variable is where we will store the keys that are currently pressed down.
```js
const VIEWPORT_WIDTH = 250
const VIEWPORT_HEIGHT = 250

let keys = []
c = document.getElementById('c')
c.width = VIEWPORT_WIDTH
c.height = VIEWPORT_HEIGHT
ctx = c.getContext('2d')
```

Now we are going to define a clear function, which will define the background of our canvas. We need this to call on every frame in order to clear the entire screen and redraw it.
```js
function clear () {
  ctx.clearRect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
}
```

Now we need to create a **Game Loop** which will infinitely run our game. At the moment it just infinitely redraws our background every frame.
```js
function GameLoop () {
  clear()
  gLoop = window.requestAnimationFrame(GameLoop)
}
window.requestAnimationFrame(GameLoop)
```
`window.requestAnimationFrame` tells the browser to run the function on the next animation frame.

Now we want to define a **Player Class** which can be reused for multiple players. This will have parameters inside of the constructor so that we can differentiate between different players. There are also methods that will do important functions for the game.
```js
class Player {
  constructor(pos, speed, color) {
    this.pos = pos
    this.startx = pos[0]
    this.starty = pos[1]
    this.speed = speed
    this.color = color
  }

  move (dir) {
    if(dir === 'up') {
      this.pos[1] -= this.speed
    } else if (dir === 'down') {
      this.pos[1] += this.speed
    } else if (dir === 'left') {
      this.pos[0] -= this.speed
    } else {
      this.pos[0] += this.speed
    }
  }

  bndCheck (width,height) {
    if (this.pos[0] < 0) {
      this.pos[0] = 0
    } else if (this.pos[0] > 230) {
      this.pos[0] = 230
    }

    if (this.pos[1] < 0) {
      this.pos[1] = 0
    } else if (this.pos[1] > 230) {
      this.pos[1] = 230
    }
  }

  render (ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos[0], this.pos[1], 20, 20)
  }

  playerCollide (player) {
    return ((this.pos[0] < player.pos[0] + player.pos[0]) &&
            (player.pos[0] < this.pos[0] + 20) &&
            (this.pos[1] < player.pos[1] + 20) &&
            (player.pos[1] < this.pos[1] + 20))
  }
  reset () {
    this.pos[0] = this.startx
    this.pos[1] = this.starty
  }
}
```

Now lets initialize two players. One red and one blue:
```js
player1 = new Player([0, 0], 2, '#0000FF')
player2 = new Player([220, 220], 4, 'FF0000')
```

We will also want to get information about keypresses which we store into the keys array
```js
document.body.addEventListener('keydown', function (e) {
    keys[e.keyCode] = true
})
document.body.addEventListener('keyup', function (e) {
    keys[e.keyCode] = false
})
```

Now we implement the player **input, movement, and rendering** into the Game Loop
```js
function GameLoop(){
  clear()

  //player 1
  if (keys[38]) {
    player1.move('up')
  }
  if (keys[40]) {
    player1.move('down')
  }
  if (keys[37]) {
    player1.move('left')
  }
  if (keys[39]) {
    player1.move('right')
  }
  //player 2
  if (keys[87]) {
    player2.move('up')
  }
  if (keys[83]) {
    player2.move('down')
  }
  if (keys[65]) {
    player2.move('left')
  }
  if (keys[68]) {
    player2.move('right')
  }
  player1.bndCheck(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
  player2.bndCheck(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
  player1.render(ctx)
  player2.render(ctx)
  if (player1.playerCollide(player2) || player2.playerCollide(player1)) {
    player1.reset()
    player2.reset()
  }
  window.requestAnimationFrame(GameLoop)
}
window.requestAnimationFrame(GameLoop)
```

---
### Try it out!
Head on over to [Codepen](https://codepen.io/pen) and make a simple game with the canvas
