const game = new Game()
const menu = new Menu()

let spongeFont
let spongeMusicMenu 
let spongeMusicGame
let soundButton

// menu screen:
let stage = 0

// Load game assets
function preload() {
	menu.preload()
	game.preload()
}

// Setup game
function setup() {
	createCanvas(1400, 800)

	//create a sound button
	soundButton = createImg("../images/png-Squidward-music.png", "")
	soundButton.class("sound-button")
	soundButton.mousePressed(playTheMusic)
}

function playTheMusic() {

	if(!spongeMusicMenu.isPlaying()) {
		spongeMusicMenu.play()
		loop()}
	else if(spongeMusicMenu.isPlaying()) {
		spongeMusicMenu.stop()
	}
	// else if(stage == 1 && !spongeMusicGame.isPlaying()) {
	// 	spongeMusicMenu.stop()
	// 	spongeMusicGame.play()
	// }
	// else if(stage == 1 && spongeMusicMenu.isPlaying()) {
	// 	console.log("else")
	// 	spongeMusicMenu.stop()
	// 	spongeMusicGame.play()
	// }
		
	}

function playMusicGame() {

}

function draw() {
	keyPressed()

	//menu screen:
	if (menu.stage == 0) {
		menu.draw()
	}

	// game screen:
	if (menu.stage == 1) {
		game.draw()
	}	
}


function keyPressed() {
    if ( keyCode === 39 && keyIsPressed) game.player.moveRight()
	if ( keyCode === 37 && keyIsPressed) game.player.moveLeft()
    if ( keyCode === 38 && keyIsPressed) game.player.moveUp()
    if ( keyCode === 40 && keyIsPressed) game.player.moveDown() 
}


//trash can:
/* 	if (stage == 0) {
		let startButton = createButton("Let's go jellyfishing!")
		startButton.position(width/2 , height/2)
		startButton.size(640, 500)
		startButton.mousePressed( ()=> {
			stage = 1;
			startButton.hide()
		})
	} 
	if (stage == 0) {
		let startbuttonReal;
		let startButton = createImg("../images/png-Sandy-highscore.png", "")  warum auch immer "muss" ich hier 2ten string angeben? Funzt aber auch alles ohne  
		//image(menu.squidwardMusicImage, 200, 300)
 		startButton.position(width/2, height/2)
		startButton.size(100, 200)
		startButton.mousePressed( ()=> {
			console.log("sandy")
			let startbuttonReal = createButton("Start game")
			startbuttonReal.position(400, 500)
			startbuttonReal.mousePressed( () => {
				console.log("this is a nested button test")
				startButton.hide()
				startbuttonReal.hide()
				stage = 1 
				
				//startbuttonReal.text("Let's go jellyfishing", -100, -200)
				//startbuttonReal.textSize(50)
			//})
		//startbuttonReal.hide()



			
			
			//stage = 1;
			//startButton.hide()
		}) 
	} 
} */

/* 	if (testcount = 1) {
		let startButton = createButton("Let's go jellyfishing!")
                startButton.position(width/2 , height/2)
                startButton.size(200, 200)
                startButton.mousePressed( ()=> {
                    stage = 1;
                }) 
	} */
/* 	let startButton = createImg("../images/png-Sandy-highscore.png", "")
	startButton.size(200, 300)
	startButton.position(width/2, height/2)
 	startButton.mousePressed( () => {
		stage = 1
	})  */
	//let startbuttonReal
	//let startButton */

	/*
	if (stage == 0 && buttonCheck == false) {
		console.log(buttonCheck)
		startButton = createImg("../images/png-Sandy-highscore.png", "")
		//image(menu.squidwardMusicImage, 200, 300)
 		startButton.position(width/2, height/2)
		startButton.size(100, 200)
		startButton.mousePressed( ()=> {
			//console.log("sandy")
			startbuttonReal = createButton("Start game")
			startbuttonReal.position(400, 500)
		
			startbuttonReal.mousePressed( () => {
			//console.log("this is a nested button test")
			stage = 1 
			
			//startButton.hide()
			
			})
			buttonCheck = 1
			console.log(buttonCheck)
			})
			
		}
		console.log(buttonCheck)
		if (buttonCheck == true) {
			console.log("else if test")
			startbuttonReal.mousePressed( () => {
				//console.log("this is a nested button test")
				//stage = 1 
				startButton.hide()
				startbuttonReal.hide()
				})
		}
/* 	if (stage == 1) {
		startButton.hide()
		startbuttonReal.hide()
	} */

		//menu.draw()
	//game.draw()
    //game.player.draw()
	//console.log("test draw main")
	//let startButton
/* 	if (currentButton == 1) {
		let startbuttonReal = createButton("Start game")
		startbuttonReal.position(400, 500)
		startbuttonReal.mousePressed( () => {
		console.log("this is a nested button test")
		startButton.hide()
		startbuttonReal.hide()
		stage = 1 
		})
	} */

/* 	if (stage == 0) {
		let startbuttonReal;
		let startButton = createImg("../images/png-Sandy-highscore.png", "")
		//image(menu.squidwardMusicImage, 200, 300)
 		startButton.position(width/2, height/2)
		startButton.size(100, 200)
		startButton.mousePressed( ()=> {
			console.log("sandy")
			stage = 1
			startButton.hide()}) */
			
		/* 	startbuttonReal = createButton("Start game")
			startbuttonReal.position(400, 500)
			startbuttonReal.mousePressed( () => {
				console.log("this is a nested button test")
				stage = 1 
				startButton.hide()
				startbuttonReal.hide()
			})}) */
