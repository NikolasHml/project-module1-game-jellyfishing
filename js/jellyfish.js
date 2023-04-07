/* let increaseSpeedX = []
let increaseSpeedY = [] */



class Jellyfish {
    constructor(image) {
        game.jellyfishImage = image
        this.width = 35
        this.heigth = 45
        //this.velocity = 0.6
        this.side = int(random(4));
		switch (this.side)
		{
			case 0:
				this.x = 0;
				this.y = int(random(height));
				break;
			case 1:
				this.x = int(random(width));
				this.y = 0;
				break;
			case 2:
				this.x = width;
				this.y = int(random(height));
				break;
			case 3:
				this.x = int(random(width));
				this.y = height;
				break;
		} 
        this.targetSquidwardX = game.squidward.x
        this.targetSquidwardY = game.squidward.y
        this.targetDir = createVector(this.targetSquidwardX - this.x, this.targetSquidwardY - this.y)
        this.targetDir.normalize()
        //this.increaseSpeedX = 1
        //this.increaseSpeedY = 1

/*         for (let count of game.jellyfishCountingArray) {
            increaseSpeedX += count
            increaseSpeedY += count
        } */
/*         if (game.jellyfishCountingArray % 2 === 0) {
            increaseSpeedX++
            increaseSpeedY++
        } */

        
/*         if (game.jellyfishCountingArray.length > 2) {
            this.increaseSpeedX += 5
            this.increaseSpeedY += 5
             } */
        // übern Array machen? 
       

        this.xSpeed = this.targetDir.x * ( 1 + (game.jellyfishCountingArray.length + 1) / 10 )
        this.ySpeed = this.targetDir.y * ( 1 + (game.jellyfishCountingArray.length + 1) / 10 )

    }

    draw() {
        //console.log("jellyfish test frame count")
        image(game.jellyfishImage, this.x, this.y, this.width, this.heigth)
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    collision(squidwardLifes) {
        //I don't need the middle of the jellyfish, so this.x and this.y is fine
        // I don't need the middle of squidward, but don't know if that works? 
        //squidwardLifes is my parameter and in game.js I have the argument this.squidward. Deshalb
        // weiß er, was squidwardLifes.lifes ist, weil er da bei this.squidward und dann .lifes schaut
        if (dist(this.x/2, this.y/2, game.squidward.x/2, game.squidward.y/2) > 25) {
            return false
            } 
/*             if (this.x/2 > game.squidward.xH && this.x/2 < game.squidward.xH + game.squidward.widthH && 
            this.y/2 > game.squidward.xY && this.y/2 < game.squidward.xY + game.squidward.heightH) {
                return false
                }   */
        //zweites if statement für height mehr below? 
        else {
            squidwardLifes.lifes -= 1
            //document.querySelector("#lifes span").innerText = squidwardLifes.lifes
            //console.log("collision lifes console test")
            return true 
            }
    }

    collisionSponge() {
        if (dist(this.x/2, this.y/2, game.player.x/2, game.player.y/2) > 25) {
            return false
        }
        else {
            return true
        }
}
}





/* 
random Ideen/ Sachen gefunden, die ich anwenden kann:
ok, Plan:
hitbox einfügen, wenn das irgwie geht
bild mit collision im Hintergund einfügen wie hier, einfach background der color ändert (und dann vllt quallen die drum herum wandern) --> https://p5js.org/reference/#/p5.Color/setAlpha 
Spongebob diagonal laufen lassen
squidwards health bar auf 100 statt einer Schritten ändern und immer 20(?) abziehen lassen, sodass man fünfmal failen kann
 --->ODER: ich machs einfach ganz ohne healthbar, und der erste hit ist direkt verloren? Weil mit den Einstellungen bisher ist es eg ziemlich einfach
 --->vllt einfach erstmal auf start screen konzentrieren und high score und diese Sachen, das ist wichtiger als healthbar oder nicht usw. 
startbildschirm einfügen mit 4 png start, instructions, highscore, music on/off 

sources:
für jellyfish towards center siehe: https://editor.p5js.org/carrefinho/sketches/Sk7ZvoMn7
abgespeichert, hier im Project Ordner zum ausprobieren
---> fürs Verständnis, Video über vector normalize: https://www.youtube.com/watch?v=ttz05d8DSOs

Notizen für Präse:
Quallen von außerhalb, weil sonst zu schwer
proud of increasing speed of jellyfish





//trash can:
/* constructor(image) {
    game.jellyfishImage = image
    this.x = width
    this.y = Math.random() * height 
    this.width = 40
    this.heigth = 50
    this.velocity = 0.6
    //this.velocity2 = 3

} */

/* draw() {
    //console.log("jellyfish test")
    image(game.jellyfishImage, width, Math.random() * height , this.width, this.heigth)
    //this.x -= this.velocity
    let d = 1
    let x2 = 555
    let y2 = 400
    let movement = createVector(555 - this.x, 400 - this.y)
    movement.normalize()
    this.x -= movement.x * d
    this.y -= movement.y * d
    //this.y =- this.velocity /* --> wenn ich das dazu mache, starten alle oben rechts */
    /* if (frameCount === 2000) {
        this.x -= this.velocity2
    } */   
    
