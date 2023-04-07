class Background {
  draw() {
    // menu screen:
    if (menu.stage == 0) {
      menu.backgroundImage
      image(menu.backgroundImage, 0, 0, 1400, height)
      }

    // game screen: 
    if (menu.stage == 1) {
      game.backgroundImage
      image(game.backgroundImage, 0, 0, 1400, height)
      }
    }
  }

// trash can:
    //menu.backgroundImage
    //game.backgroundImage
    //image(game.backgroundImage, 0, 0, 1400, height)
    //tint(255, 126)
    //background(image, [150])
    
    //console.log("test background")
/*     game.backgroundImage.forEach(function(img) {
      img.x -= img.speed
      image(img.src, img.x, 0, width, height)
      image(img.src, img.x + width, 0, width, height)
      if (img.x <= -width) img.x = 0
    }) */


