class Player {
    constructor() {
        this.width = 70
        this.height = 105
        this.x = 255
        this.y = 600 - this.height
        //this.velocity = 0
    }

    draw() {
    //console.log("test spongebob draw")
    image(game.playerImage, this.x, this.y, this.width, this.height)
    }
    
    moveRight() {
        if(this.x <= 1065) 
            this.x += 10  
        }  
    moveLeft() {
        if(this.x >= 255)
            this.x -= 10
        }
    moveUp() {
        if(this.y >= 140)
            this.y -= 10
        }
    moveDown() {
        if(this.y <= 555)
            this.y += 10
    }
}
    

/*     
     if (keyIsDown(LEFT_ARROW)) {
        this.moveLeft()
        }

    if (keyIsDown(RIGHT_ARROW)) {
        this.moveRight()
        }

    if (keyIsDown(UP_ARROW)) {
    this.moveUp()
        }

    if (keyIsDown(DOWN_ARROW)) {
    this.moveDown()
        }                
    } */

