/* lets you select a specific element within HTML file */
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

/* Makes canvas full screen*/
canvas.width = window.innerWidth
canvas.height = window.innerHeight

/*Global gravity*/
const gravity = 1.5

/* How to create a player. Create a class to create a player or artwork on canvas*/
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        /*Gravity - measurement that is going to move player and added to players position */
        this.velocity = {
            x: 0,
            y: 0
        }
        /*character size*/
        this.width = 30
        this.height = 30
    }
    /* creates square - draws character */
    draw() {
        /*fills character color'red'*/
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    /*alters players properties*/
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        /*Keeps character from falling past canvas height - stops at bottom of canvas*/
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        else this.velocity.y  = 0
    }
}

/*Implements player class */
const player = new Player()
player.update()

/* defines the keys to monitor */
const keys = {
    right: {
        pressed : false
    },
    left: {
        pressed : false
    }
}
/*animation loop to get player moving*/
function animate() {
    requestAnimationFrame(animate)
    /*clears canvas takes everything off but allows draw to be called right after - maintaining players shape*/
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()

    if (keys.right.pressed) {
        player.velocity.x = 5
    }
}

animate()
/* event listener listens for the keydown of w a s d by user and moves 
player depending on selection in switch statement*/
window.addEventListener('keydown', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 65: 
            console.log('left')
            keys.left.pressed = true
            break;
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            keys.right.pressed = true
            /* move by one pexel on x axis*/
            // player.velocity.x = 1
            break
        case 87:
            console.log('up')
            player.velocity.y -= 20
            break
    }
    console.log(keys.right.pressed)
})

/* keyup event listener */
window.addEventListener('keyup', ({ keyCode }) => {
    //console.log(keyCode)
    switch (keyCode) {
        case 65: 
            console.log('left')
            keys.left.pressed = false
            break;
        case 83:
            console.log('down')
            break
        case 68:
            console.log('right')
            keys.right.pressed = false
            break
        case 87:
            console.log('up')
            player.velocity.y -= 20
            break
    }
    console.log(keys.right.pressed)
})