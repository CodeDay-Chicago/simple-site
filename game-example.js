class Player {
  constructor (pos, speed, color) {
    this.pos = pos
    this.startx = pos[0]
    this.starty = pos[1]
    this.speed = speed
    this.color = color
  }

  move (dir) {
    if (dir === 'up') {
      this.pos[1] -= this.speed
    } else if (dir === 'down') {
      this.pos[1] += this.speed
    } else if (dir === 'left') {
      this.pos[0] -= this.speed
    } else {
      this.pos[0] += this.speed
    }
  }

  boundCheck (width, height) {
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
    return ((this.pos[0] < player.pos[0] + 20) &&
            (player.pos[0] < this.pos[0] + 20) &&
            (this.pos[1] < player.pos[1] + 20) &&
            (player.pos[1] < this.pos[1] + 20))
  }
  reset () {
    this.pos[0] = this.startx
    this.pos[1] = this.starty
  }
}

const VIEWPORT_WIDTH = 250
const VIEWPORT_HEIGHT = 250

let keys = []
const c = document.getElementById('c')
c.width = VIEWPORT_WIDTH
c.height = VIEWPORT_HEIGHT
const ctx = c.getContext('2d')

document.body.addEventListener('keydown', function (e) {
  keys[e.keyCode] = true
})
document.body.addEventListener('keyup', function (e) {
  keys[e.keyCode] = false
})

let player1 = new Player([0, 0], 2, '#0000FF')
let player2 = new Player([220, 220], 4, 'FF0000')

function GameLoop () {
  ctx.clearRect(0, 0, VIEWPORT_WIDTH, VIEWPORT_HEIGHT)

  // player 1
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
  // player 2
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
  player1.boundCheck(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
  player2.boundCheck(VIEWPORT_WIDTH, VIEWPORT_HEIGHT)
  player1.render(ctx)
  player2.render(ctx)
  if (player1.playerCollide(player2) || player2.playerCollide(player1)) {
    player1.reset()
    player2.reset()
  }
  window.requestAnimationFrame(GameLoop)
}
window.requestAnimationFrame(GameLoop)
