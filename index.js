/* lets you select a specific element within HTML file */
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

/* Makes canvas full screen*/
canvas.width = window.innerWidth
canvas.height = window.innerHeight

/*Global gravity*/
const gravity = .5

/* How to create a player. Create a class to create a player or artwork on canvas*/
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        /*Gravity - measurement that is going to move player and added to players position */
        this.velocity ={
            x: 0,
            y: 1
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
        this.position.y += this.velocity.y

        this.velocity.y += gravity
    }
}

/*Implements player class */
const player = new Player()
player.update()

/*animation loop to get player moving*/
function animate() {
    requestAnimationFrame(animate)
    /*clears canvas takes everything off but allows draw to be called right after - maintaining players shape*/
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
}

animate()