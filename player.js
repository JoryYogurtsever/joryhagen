function createPlayer() {
  standingPlayer.onload = function() {
    switch (activeScene){
      case "home":
        ctx.drawImage(standingPlayer, 300, home.height - player.height *2 - 460);
        break
      case "about":
        player.positionY = about.height - player.height *2 - 400
        ctx.drawImage(standingPlayer, 100, about.height - player.height *2 - 400);
        break
      case "projects":
        player.positionY = about.height - player.height *2 - 400
        ctx.drawImage(standingPlayer, 100, about.height - player.height *2 - 400);
        break
      case "contact":
        player.positionY = about.height - player.height *2 - 400
        ctx.drawImage(standingPlayer, 100, about.height - player.height *2 - 400);
        break
      default:
        return
    }
  };
  if (window.innerWidth >= 600) {
    projects1.src = 'tamcom1.png';
    projects2.src = 'tamco1.png';
    projects3.src = 'pixopixa1.png';
    standingPlayer.src = 'jory.png';
    walkingPlayer1.src = 'walking1-new.png';
    walkingPlayer2.src = 'walking2.png';
    walkingPlayer1Left.src = 'player-walking1-left.png';
    walkingPlayer2Left.src = 'player-walking2-left.png';
    jumpingPlayer.src = 'jory-jumping.png';
    jumpingPlayerLeft.src = 'jory-jumping-left.png';
    homePipe.src = 'pipe.png';
    aboutMePipe.src = 'about-me.png';
    contactMePipe.src = 'contact-me.png';
    projectsPipe.src = 'projects.png';
    groundTile.src = 'ground.png';
  } else {
    projects1.src = 'tamcom2.png';
    projects2.src = 'tamco2.png';
    projects3.src = 'pixopixa2.png';
    standingPlayer.src = 'jory-small.png';
    walkingPlayer1.src = 'walking1-new-small.png';
    walkingPlayer2.src = 'walking2-small.png';
    walkingPlayer1Left.src = 'player-walking1-left-small.png';
    walkingPlayer2Left.src = 'player-walking2-left-small.png';
    jumpingPlayer.src = 'jory-jumping-small.png';
    jumpingPlayerLeft.src = 'jory-jumping-left-small.png';
    homePipe.src = 'pipe-small.png';
    aboutMePipe.src = 'about-me-small.png';
    contactMePipe.src = 'contact-me-small.png';
    projectsPipe.src = 'projects-small.png';
    groundTile.src = 'ground-small.png';
    player.height = 48;
    player.width = 48;
    player.speed = 3;
    // player.jumpSpeed = -10;
    home.pipeOffset = 91;
    home.tileSize = 48;
    for (pipe of pipes) {
      pipe.left = window.innerWidth - 116
    }
    homePipeStats.left = window.innerWidth - 116;
    homePipeStats.top = about.height - 142;
    home.pipeTopCheck = 22;
    home.pipeLeftCheck = 111;
    about.signStart = 4.5;
    about.signSpacing = 50;
  }
  // standingPlayer.src = 'jory.png';
  // walkingPlayer1.src = 'walking1-new.png';
  // walkingPlayer2.src = 'walking2.png';
  // walkingPlayer1Left.src = 'player-walking1-left.png';
  // walkingPlayer2Left.src = 'player-walking2-left.png';
  // jumpingPlayer.src = 'jory-jumping.png';
  // jumpingPlayerLeft.src = 'jory-jumping-left.png';
  // aboutMePipe.src = 'about-me.png';
  // projectsPipe.src = 'projects.png';
  // contactMePipe.src = 'contact-me.png';
  // homePipe.src = 'pipe.png';
  // groundTile.src = 'ground.png';
  about1.src = 'about1-medium.jpg';
  about2.src = 'about2-medium.jpg';
  about3.src = 'about3-medium.jpg';
  signImage.src = 'sign.png';
  player.created = true;
  linkBrick.src = 'link-brick.png';
}

function groundCheck() {
  let height = (activeScene === 'home') ? home.height : about.height
  if ((player.positionY >= (height - player.height - 20)) && !player.jumping)  {
    player.positionY = height - player.height - 20;
    player.velocityY = 0;
    player.grounded = true;
    return true
  } else if (player.jumping) {
    player.positionY += player.jumpSpeed;
    player.velocityY = player.jumpSpeed;
    if (activeScene === "projects" && about.modalOpen) {
      projects.jumpingAnimation = true;
    }
    player.jumping = false;
    player.grounded = false;
    return false
  } else if ((player.velocityY >= 0)) {
      for (platform of home.platforms) {
        if (((player.positionY + player.velocityY + player.height > (platform.top - home.fontWidth/2)) && (player.positionY + player.height < (platform.top - home.fontWidth/2))) || player.positionY === (platform.top - home.fontWidth/2) - player.height) {
            if ((player.positionX + player.width/2 >= platform.left) && (player.positionX + player.width/2) <= (platform.left + platform.text.length * home.fontWidth) ) {
                if (activeScene === "home") {
                  player.velocityY = 0;
                  player.positionY = (platform.top - home.fontWidth/2) - player.height;
                  player.grounded = true;
                  return true
            }
          }
        }
      }
      for (pipe of pipes) {
        if (((player.positionY + player.velocityY + player.height > (pipe.top + home.pipeTopCheck)) && (player.positionY + player.height < (pipe.top + home.pipeTopCheck))) || player.positionY === (pipe.top + home.pipeTopCheck) - player.height) {
            if ((player.positionX + player.width/2 >= pipe.left) && (player.positionX + player.width/2) <= (pipe.left + home.pipeLeftCheck) ) {
                if (activeScene === "home") {
                  player.velocityY = 0;
                  player.positionY = (pipe.top + home.pipeTopCheck) - player.height;
                  player.grounded = true;
                  return true
            }
          }
        } else if (((player.positionY + player.velocityY + player.height > (pipe.top + home.pipeOffset)) && (player.positionY + player.height < (pipe.top + home.pipeOffset))) || player.positionY === (pipe.top + home.pipeOffset) - player.height) {
            if ((player.positionX + player.width/2 >= pipe.left - home.pipeLeftCheck + 2) && (player.positionX + player.width/2) <= (pipe.left + home.pipeLeftCheck) ) {
                if (activeScene === "home") {
                  player.velocityY = 0;
                  player.positionY = (pipe.top + home.pipeOffset) - player.height;
                  if ((player.positionX + player.width) > pipe.left + 80) {
                    player.positionX = 50;
                    player.positionY = 300;
                    activeScene = pipe.name;
                    changeScene()
                  }
                  player.grounded = true;
                  return true
                }
          }
        }
      }
      if (((player.positionY + player.velocityY + player.height > (homePipeStats.top + home.pipeTopCheck)) && (player.positionY + player.height < (homePipeStats.top + home.pipeTopCheck))) || player.positionY === (homePipeStats.top + home.pipeTopCheck) - player.height) {
          if ((player.positionX + player.width/2 >= homePipeStats.left) && (player.positionX + player.width/2) <= (homePipeStats.left + home.pipeLeftCheck) ) {
            if (activeScene !== 'home') {
            player.velocityY = 0;
            player.positionY = (homePipeStats.top + home.pipeTopCheck) - player.height;
            player.grounded = true;
            return true
          }
        }
      } else if (((player.positionY + player.velocityY + player.height > (homePipeStats.top + home.pipeOffset)) && (player.positionY + player.height < (homePipeStats.top + home.pipeOffset))) || player.positionY === (homePipeStats.top + home.pipeOffset) - player.height) {
          if ((player.positionX + player.width/2 >= homePipeStats.left - home.pipeLeftCheck + 2) && (player.positionX + player.width/2) <= (homePipeStats.left + home.pipeLeftCheck) ) {
                if (activeScene !== "home") {
                  player.velocityY = 0;
                  player.positionY = (homePipeStats.top + home.pipeOffset) - player.height;
                  if ((player.positionX + player.width) > homePipeStats.left + 80) {
                    player.positionX = 50;
                    activeScene = homePipeStats.name;
                    changeScene()
          }
          player.grounded = true;
          return true
        }
      }
    }
  }
  player.grounded = false;
  return false
}

function signCheck() {
  for (let i = 0; i < signs.length; i++) {
    if (player.positionX > signs[i].left - 32  && player.positionX < signs[i].left + 32) {
      if (player.velocityY <= 0 && player.jumping && activeScene === "projects") {
        projects.jumpingAnimation = true
      }
      if (activeScene === "contact" && !contact.formAdded) {
        document.getElementById('contact-form').classList.add('contact-form-display');
        document.getElementById('contact-form').classList.remove('contact-form-hidden');
        contact.formAdded = true
        return true
      }
      about.activeSign = i;
      about.image.source = signs[i].image
      line1 = 0 + 7*i
      line2 = 1 + 7*i
      line3 = 2 + 7*i
      line4 = 3 + 7*i
      line5 = 4 + 7*i
      line6 = 5 + 7*i
      line7 = 6 + 7*i
      return true
    }
  }
  if (activeScene === "contact" && contact.formAdded) {
    document.getElementById('contact-form').classList.add('contact-form-hidden');
    document.getElementById('contact-form').classList.remove('contact-form-display');
    contact.formAdded = false;
  }
  return false
}

function switchWalkingFrame() {
  if (home.walkingFrameDelay === 7){
    player.isWalkingframe1 = !player.isWalkingframe1;
    home.walkingFrameDelay = 0;
  }
  if (!player.isMovingLeft) {
    return player.isWalkingframe1 ? player.walkingFrame1 : player.walkingFrame2;
  } else {
    return player.isWalkingframe1 ? player.walkingFrame1Left : player.walkingFrame2Left;
  }
}

function animatePlayer() {
  window.scrollTo(0, player.positionY - window.innerHeight/2)
  // Move Player Horizontally within the screen
  let playerSprite = standingPlayer;
  if (!player.walking || (player.walking && player.isMovingLeft && (player.positionX <= 0)) || (player.walking && !player.isMovingLeft && (player.positionX >= window.innerWidth - player.width))) {
    // ctx.drawImage(standingPlayer, player.positionX, player.positionY);
  } else if (player.walking && player.isMovingLeft && (player.positionX > 0)) {
    player.positionX -= player.speed;
    home.walkingFrameDelay += 1;
    playerSprite = switchWalkingFrame()
    // ctx.drawImage(player.walkingFrame, player.positionX, player.positionY);
    // console.log(player.walkingFrame)
    // switchWalkingFrame();
  } else if (player.walking && !player.isMovingLeft && (player.positionX < window.innerWidth - player.width)) {
    player.positionX += player.speed;
    home.walkingFrameDelay += 1;
    playerSprite = switchWalkingFrame()
    // ctx.drawImage(player.walkingFrame, player.positionX, player.positionY);
    // switchWalkingFrame();
  }
  // Move Player Vertically //
  // Falling if ungrounded //
  if (projects.jumpingAnimation) {
    if (player.positionY + player.velocityY <= (linkBricks[0].top + 64)) {
      player.velocityY = 0;
      linkBricks[about.activeSign].top -= 8;
      projects.jumpingAnimation = false;
      setTimeout(() => {
        linkBricks[about.activeSign].top += 8;
      }, 300)
      setTimeout(() => {
        projects.jumpingAnimationDone = true
      }, 500)
      return
    }
    player.positionY += player.jumpSpeed;
    player.velocityY = player.jumpSpeed;
    return
  } else if (groundCheck() === false) {
    player.positionY += player.velocityY
    player.velocityY += home.gravity
  }

  // Make one call to draw player after position is determined
  ctx.drawImage(playerSprite, player.positionX, player.positionY);

  // IMPORTANT
  if (activeScene === 'home') {
    for (pipe of pipes) {
      ctx.drawImage(groundTile, pipe.left - home.tileSize * 2, pipe.top + home.pipeOffset);
      ctx.drawImage(groundTile, pipe.left - home.tileSize, pipe.top + home.pipeOffset);
      ctx.drawImage(groundTile, pipe.left, pipe.top + home.pipeOffset);
      ctx.drawImage(groundTile, pipe.left + home.tileSize, pipe.top + home.pipeOffset);
      ctx.drawImage(pipe.pipe, pipe.left, pipe.top);
    }
  } else {
    about.modalOpen = signCheck();
    ctx.drawImage(groundTile, homePipeStats.left - home.tileSize * 2, homePipeStats.top + home.pipeOffset);
    ctx.drawImage(groundTile, homePipeStats.left - home.tileSize, homePipeStats.top + home.pipeOffset);
    ctx.drawImage(groundTile, homePipeStats.left, homePipeStats.top + home.pipeOffset);
    ctx.drawImage(groundTile, homePipeStats.left + home.tileSize, homePipeStats.top + home.pipeOffset);
    ctx.drawImage(homePipe, homePipeStats.left, homePipeStats.top);
  }
}
