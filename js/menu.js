class Menu {
    constructor() {
        this.background = new Background()
        this.backgroundImage
        
        // menu screen:
        this.stage = 0

        //buttons for Spongebob image:
        this.spongeButtonImg 
        this.startGameButton
        this.buttonCheck = false
        this.startGameButtonCreated = false

        //buttons for Patrick image:
        // this.patrickButtonImg
        // this.buttonCheckPatrick = false
        // this.instructionsButtonCreated = false
        }
  
    preload() {
        this.backgroundImage = loadImage("images/png-pirate-intro-background.png")
        this.spongeStartImage = loadImage("images/png-Spongebob-start.png")
        this.patrickInstructionsImage = loadImage("images/png-Patrick-instructions.png")
        this.squidwardMusicImage = loadImage("images/png-Squidward-music.png")
        this.sandyHighscoreImage = loadImage("images/png-Sandy-highscore.png")
        spongeFont = loadFont("SpongeboyMeBob400.ttf")
        soundFormats("mp3")
        spongeMusicMenu = loadSound("sounds/SpongeBobSquarePants-TheRakeHornpipe-menu")
        }
  
    draw() {
        this.background.draw()
    
        textSize(20)
        translate(width / 2, height / 2)
        //rotate(radians(-30))
        fill("yellow")
        stroke("black")
        textFont(spongeFont)
        text("Catch the jellyfish to protect Squidward, cause that lousy sea creature doesn't know how mean jellyfish are! Move with the arrow keys! Click on Spongebob, if you're ready!", -420, 100, 400, 200)

//---------------------------------------------------------------SPONGEBOB START GAME BUTTONS:---------------------------------------------------------------

        //with default spongeButtonImg and startGameButtonCreated = false

        // if condition to create spongeButtonImg only if it doesn't already exist
        if (this.stage == 0 && this.buttonCheck == false) {
            if (!this.startGameButtonCreated) {
                //console.log("hello sponge")
                this.spongeButtonImg = createImg("../images/png-Spongebob-start.png", "")
                this.spongeButtonImg.class("sponge-button")
                //this.spongeButtonImg.parent(div1)
                this.startGameButtonCreated = true
                }

            // create start game button when clicked on spongeButtonImg
            this.spongeButtonImg.mousePressed(() => {
                if (this.buttonCheck === false) {
                    this.startGameButton = createButton("Start Game")
                    this.startGameButton.class("start-game-button")
                    //this.startGameButton.parent(div1)
                } // close if condition
            this.buttonCheck = true
            })
        } // close if condition

        // if condition to hide both buttons when game is started
        if (this.startGameButton && this.buttonCheck == true) {
            this.startGameButton.mousePressed(() => {
                this.spongeButtonImg.hide()
                this.startGameButton.hide()
                this.stage = 1
                })
        } 
        
    }
}

// close if condition
    //} // close draw()
  //} // close Menu ()

//---------------------------------------------------------------PATRICK INSTRUCTION BUTTON:---------------------------------------------------------------




        
        // if condition to create patrickButtonImg only if it doesn't already exist
        // if (this.stage == 0 && this.buttonCheckPatrick == false) {
        //     if (!this.instructionsButtonCreated) {
        //         this.patrickButtonImg = createImg("../images/png-Patrick-instructions.png", "")
        //         this.patrickButtonImg.class("patrick-button")
        //         this.patrickButtonImg.parent(div1)
        //         this.instructionsButtonCreated = true
        //         }

            
        //     //create field of instructions when clicked on patrickButtonImg
        //     this.patrickButtonImg.mousePressed(() => {
        //         if (this.buttonCheckPatrick === false) {
        //             console.log(this.buttonCheckPatrick)
        //             window.alert("Hello world!");
        //             textSize(35)
        //             translate(width / 2, height / 2)
        //             //rotate(radians(-30))
        //             fill("yellow")
        //             stroke("black")
        //             textFont(spongeFont)
        //             text("Catch the jellyfish to protect Squidward, cause that lousy sea creature doesn't know what jellyfish can do! Move with the arrow keys!", -25, 100) 
        //         } // close if condition
        //     this.buttonCheckPatrick = true
        //     })
        // } // close if condition


/*
        // if condition to hide instructions when game is started
            if (this.startGameButton && this.buttonCheck == true) {
                this.startGameButton.mousePressed(() => {
                    this.spongeButtonImg.hide()
                    this.startGameButton.hide()
                    this.stage = 1
                    })
                } // close if condition
            } // close draw()
         } // close Menu ()
    //}  
}
  /*
//   trash can:


        //text out of pirate's mouth:
        // textSize(35)
        // translate(width / 2, height / 2)
        // rotate(radians(-30))
        // fill("yellow")
        // stroke("black")
        // textFont(spongeFont)
        // text("Click on my friends, arrr", -25, 100)

//           image(this.spongeStartImage, width-440 , height-330 )
//         this.spongeStartImage.resize(300, 0)
//         image(this.patrickInstructionsImage, 170 , height-260 )
//         this.patrickInstructionsImage.resize(130, 0)


//         class Menu {
//     constructor() {
//         this.background = new Background()
//         this.backgroundImage
//         //this.spongeStartImage
//         this.patrickInstructionsImage
//         this.squidwardMusicImage
//         this.sandyHighscoreImage
//     }

//     preload() {
//         this.backgroundImage = loadImage("../images/png-pirate-intro-background.png")
//         this.spongeStartImage = loadImage("../images/png-Spongebob-start.png")
//         this.patrickInstructionsImage = loadImage("../images/png-Patrick-instructions.png")
//         this.squidwardMusicImage = loadImage("../images/png-Squidward-music.png")
//         this.sandyHighscoreImage = loadImage("../images/png-Sandy-highscore.png")
//         spongeFont = loadFont("../Spongeboy Me Bob 400.ttf")
//     }

// /*     mousePressed() {
//         console.log("clicked on spongebob") 
//         let button = createButton('click me');
//         button = {x: 200, y: 200, w: 100, text: "Button1"}
//         //button.position(200, 400);
//         //button.color("black")
//         //button.mousePressed("clicked on the button to start game");
//         //textFont(spongeFont)
//     } */

// /*     startButton() {
//         console.log("This is a p5 button")
//         if (mouseIsPressed == true) {
//             stage == 1
//             main.preload()
//             main.draw()

//         } 
//         //stage == 1


//     } */

// /*     mousePressed() {
//         this.spongeStartImage = this.clickedSpongebob()
//     }

//     clickedSpongebob() {
//         console.log("clicked Spongebob test")
//     } 

//     draw() {
//         //console.log("menu test draw")
//         this.background.draw()
        

//         //this.mousePressed()
        



//         textSize(35)
//         translate(width / 2, height / 2)
//         rotate(radians(-30))
//         fill("yellow")
//         stroke("black")
//         textFont(spongeFont) 
//         text("Click on my friends, arrr", -25, 100)


// /*         let hover = mouseX >= width-440 && mouseX <= width
//                     && mouseY >= height-330 && mouseY <= height
        
//         if (hover) {
//             console.log("mouse is over spongebob")
// /*             let startButton = createButton("Let's go jellyfishing!")
//                 startButton.position(width/2 , height/2)
//                 startButton.size(640, 500)
//                 startButton.mousePressed( ()=> {
//                     stage = 1;
//                 }) */
//                 /*textSize(35)
//                 translate(width / 2, height / 2)
//                 //rotate(radians(-30))
//                 fill("yellow")
//                 stroke("black")
//                 textFont(spongeFont) 
//                 text("Let's go jellyfishing!", -25, 100)
//             }
//         else {
//             console.log("mouse is somewhere else")
//             //startButton.hide()
//         }  */

//         //this.startButton()

// /*         if (this.startButton === true) {
//             stage == 1
//         } 

//     }
// */
