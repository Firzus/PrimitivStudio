const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i))
}

class Boundary {
    static width = 48
    static height = 48
    constructor({ position }) {
        this.position = position
        this.width = 48
        this.height = 48
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = []
const offset = {
    x: -740,
    y: -650
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 1025)
        boundaries.push(
            new Boundary({
                position: {
                    x: j * Boundary.width + offset.x,
                    y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const playerImage = new Image()
playerImage.src = './img/playerDown.png'

class Sprite {
    constructor({
        position,
        velocity,
        image,
        frames = {max: 1}
    }) {
        this.position = position
        this.image = image
        this.frames = frames
    }

    draw() {
        c.drawImage(
            this.image,
            0,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )
    }
}

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerImage
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: image
})

const keys = {
    s: {
        pressed: false
    },
    z: {
        pressed: false
    },
    q: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


const testBoundary = new Boundary({
    position: {
        x: 400,
        y: 400
    }
})

const movables = [background, testBoundary]

function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    // boundaries.forEach(boundary => {
    //     boundary.draw()
    // })
    testBoundary.draw()
    player.draw()

//    if (player.position.x + player.width)

    if (keys.z.pressed && lastKey === 'z') {
        movables.forEach((movable) => {
            movable.position.y += 2
        })
    } else if (keys.q.pressed && lastKey === 'q') {
        movables.forEach((movable) => {
            movable.position.x += 2
        })
    } else if (keys.d.pressed && lastKey === 'd') {
        movables.forEach((movable) => {
            movable.position.x -= 2
        })
    } else if (keys.s.pressed && lastKey === 's') {
        movables.forEach((movable) => {
            movable.position.x -= 2
        })
    }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'z':
            keys.z.pressed = true
            lastKey = 'z'
            break
        case 'q':
            keys.q.pressed = true
            lastKey = 'q'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 's':
            keys.s.pressed = false
            break
        case 'z':
            keys.z.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})