class Squidward {
/*     constructor(image) {
        game.squidwardImage = image 
        this.x = 600
        this.y = 400
        this.width = 200
        this.height = 200
    } 
    -----> ich verstehe hier nicht, warum das nicht analog zu obstacle funzt. Wegen dem Array? Da muss man das als Argument einsetzen oder wie?  
    */
    constructor() { 
        this.x = 1400/2 - 30
        this.y = 380
        this.width = 60
        this.height = 150
        this.lifes = 1
        this.xH = 560
        this.yH = 400 
        this.widthH = 80
        this.heightH = 180
    }

    draw() {
        //console.log("squidward-test")
        image(game.squidwardImage, this.x, this.y, this.width, this.height)   /* --> wie bekomme ich da automatisch die Ausgangsgröße nur kleiner hin??  */
        //game.squidwardImage.resize(80, 0)

/*         fill(100, 0, 0, 50)
        noStroke()
        //setAlpha(0)
        rect(this.xH, this.yH, this.widthH, this.heightH) */
    }
}