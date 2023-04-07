class Game {
    constructor() {
        this.background = new Background()
        this.backgroundImage
        this.player = new Player()
        this.playerImage
        this.squidward = new Squidward()  
        this.squidwardImage
        this.jellyfishs = []
        this.jellyfishImage
        this.jellyfishCountingArray = []
        this.retryButton
        this.backToMenuButton
        this.highscoreArray = []


    }

    preload() {
        this.backgroundImage = loadImage("images/png-pirate-with-jellyfields-background.png")
        this.playerImage = loadImage("images/png-Spongebob.png")
        this.squidwardImage = loadImage("images/png-squidward-ohne-copyright.png")
        this.jellyfishImage = loadImage("images/png-jellyfish.png")
        this.youLostImage = loadImage("images/png-Squidward-bandages.png")
        spongeFont = loadFont("Spongeboy Me Bob 400.ttf")
        soundFormats("mp3")
        spongeMusicGame = loadSound("sounds/SpongeBob SquarePants - Tomfoolery - game.mp3")
    }

    gameOver() {
        if (this.squidward.lifes <= 0) {
            console.log("losing condition check")
            image(this.youLostImage, width/2 - 512/2, height/2-(384/2), 512, 384)
            textSize(50)
            translate(width / 2, height / 2)
            rotate(radians(30))
            fill("yellow")
            stroke("black")
            textFont(spongeFont)
            text("You're awful, Spongebob", -100, -200)

            // if condition to check whether score is < or > than highscore
            if (this.highscoreArray.length < this.jellyfishCountingArray.length) {
                this.highscoreArray = this.jellyfishCountingArray
            }

            // showing score and highscore
            textSize(20)
            rotate(radians(-30))
            text("Jellyfish catched", -360, -75)
            text(this.jellyfishCountingArray.length, -145, -75)
            text("Highscore", -360, -40)
            text(this.highscoreArray.length, -145, -40)

            // Retry button: 
            this.retryButton = createButton("Retry")
            this.retryButton.class("retry-button")
            this.retryButton.mousePressed(() => {
                this.retryButton.hide()
                this.backToMenuButton.hide()
                game.squidward.lifes = 1
                this.jellyfishCountingArray = []
                loop()})

            // Back to Menu button:
            this.backToMenuButton = createButton("Back to Menu")
            this.backToMenuButton.class("back-to-menu-button")
            this.backToMenuButton.mousePressed(() => {
                this.backToMenuButton.hide()
                this.retryButton.hide()
                menu.stage = 0
                game.squidward.lifes = 1
                this.jellyfishCountingArray = []
                menu.buttonCheck = false
                menu.spongeButtonImg.show()
                loop()
            })
 
            noLoop()    
        }
    } 
    
    draw() {
        //clear()
        this.background.draw()
        this.player.draw()
        this.squidward.draw()
        //playTheMusic()

        if (frameCount % 100 === 0) {
            this.jellyfishs.push(new Jellyfish(this.jellyfishImage))
        }

        this.jellyfishs.forEach(jellyfish => {
            jellyfish.draw()
        })

        this.jellyfishs = this.jellyfishs.filter(jellyfish => {
            if (jellyfish.collision(this.squidward)) {
                return false  /* =wenn jellyfish mit squidward collided dann nimm ihn nicht in den neuen Array auf*/
            } 
            else {
                return true
            }
        })

        this.jellyfishs = this.jellyfishs.filter(jellyfish => {
            if (jellyfish.collisionSponge(this.player)) {
                this.jellyfishCountingArray.push(jellyfish)
                //console.log(this.jellyfishCountingArray) /* funzt, er nimmt es jedes Mal in den Array auf */
                return false 
            }
            else {
                return true /* --> wenn ich hier auf false mache, dann filtert er mir gleich alles raus */
            }
        })

        this.gameOver()
    }
}

