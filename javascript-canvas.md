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

Use **functions** in order to encapsulate a certain task combining a certain set of instructions into an easily accessable piece of code. There are multiple ways of defining functions:
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
### OOP!

Object oriented programming uses **classes** which define objects. Think of it as making your own type of variable.
```js
//class declaration
class Car {
	//insert code for the class
}
```

**Constructors** function as a template when initializing an object. Think of it as setting the parameters/blueprint for your object.
```js
class Car {
	constructor(mileage,model,color) {
		this.color = color
		this.miles = mileage
		this.model = model
	}
}
```

Use **methods** as a function that can only be called by your object.
```js
function changeMileage(miles) {
  this.miles += miles
}
```

You can then use the template of the constructor to store an instance of your object as a variable. Think of it as filling in the holes that were in your blueprint.
```js
var myCoolCar = new Car(2000,"Zippy 2.0", "#FF0000")
```


---
### Canvas
todo: organize code
Now we will be interacting with a thing called **Canvas** which is a simple viewport where you can easily render 2d objects. Add a Canvas object using the `<canvas>` tag
```html
<body>
  <!-- DOM/HTML -->
  <canvas id="c"></canvas>
</body>
```

Now the rest of the work will be done in JS. First we need to set up the parameters of our canvas. This sets up the width and height of our canvas, initializes it, and sets up some easy variables for us to access in the future. The ctx variable is going to be the variable that we are going to draw things to.

```js
const VIEWPORT_WIDTH = 250;
const VIEWPORT_HEIGHT = 250;

var keys=[]
c = document.getElementById('c');
c.width=VIEWPORT_WIDTH;
c.height=VIEWPORT_HEIGHT;
ctx = c.getContext('2d');
```

class Player {
  constructor(pos,speed,color,size) {
    this.pos = pos;
    this.startx = pos[0];
    this.starty = pos[1];
    this.speed = speed;
    this.color = color;
  }
  move(dir) {
    if(dir==='up') {
      this.pos[1] -= this.speed;
    }
    else if(dir==='down') {
      this.pos[1] += this.speed;
    }
    else if(dir==='left') {
      this.pos[0] -= this.speed;
    }
    else {
      this.pos[0] += this.speed;
    }
  }
  bndCheck(width,height) {
    if(this.pos[0]<0) {
      this.pos[0]=0
    }
    else if(this.pos[0]>230) {
      this.pos[0]=230
    }
    if(this.pos[1]<0) {
      this.pos[1]=0
    }
    else if(this.pos[1]>230) {
      this.pos[1]=230
    }
  }
  render(ctx) {
    ctx.fillStyle=this.color;
    ctx.fillRect(this.pos[0],this.pos[1],20,20);
  }
  playerCollide(player) {
    return ((this.pos[0] < player.pos[0] + player.pos[0]) &&
            (player.pos[0] < this.pos[0] + 20) &&
            (this.pos[1] < player.pos[1] + 20) &&
            (player.pos[1] < this.pos[1] + 20))
  }
  reset(){
    this.pos[0]=this.startx
    this.pos[1]=this.starty
  }
}

player1 = new Player([0,0],2,"#0000FF")
player2 = new Player([220,220],4,"FF0000")

function clear(){
  ctx.fillStyle = '#00ff00';
  ctx.beginPath();
  ctx.rect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
  ctx.closePath();
  ctx.fill();
}
document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
function GameLoop(){
  clear();
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
  player1.bndCheck(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
  player2.bndCheck(VIEWPORT_WIDTH, VIEWPORT_HEIGHT);
  player1.render(ctx);
  player2.render(ctx);
  if(player1.playerCollide(player2)||player2.playerCollide(player1)){
    player1.reset()
    player2.reset()
  }
  gLoop = setTimeout(GameLoop, 1000 / 50);
}
GameLoop();
```

---

### Try it out!
Head on over to [Codepen](https://codepen.io/pen) and make a simple website with text and at least one image.
---

## Canvas