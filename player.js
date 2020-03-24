function createPlayer() {
  standingPlayer.onload = function() {
    ctx.drawImage(standingPlayer, 300, home.height - player.height *2 - 400);
  };
  standingPlayer.src = 'jory.png';
  walkingPlayer1.src = 'walking1-new.png';
  walkingPlayer2.src = 'walking2.png';
  walkingPlayer1Left.src = 'player-walking1-left.png';
  walkingPlayer2Left.src = 'player-walking2-left.png';
  jumpingPlayer.src = 'jory-jumping.png';
  jumpingPlayerLeft.src = 'jory-jumping-left.png';
  aboutMePipe.src = 'about-me.png';
  projectsPipe.src = 'projects.png';
  contactMePipe.src = 'contact-me.png';
  groundTile.src = 'ground.png';
  player.created = true;
}

function groundCheck() {
  if ((player.positionY >= (home.height - player.height - 20)) && !player.jumping)  {
    player.positionY = home.height - player.height - 20;
    player.velocityY = 0;
    return true
  } else if (player.jumping) {
    player.positionY += player.jumpSpeed;
    player.velocityY = player.jumpSpeed;
    player.jumping = false;
    return false
  } else if (player.velocityY >= 0) {
    for (platform of home.platforms) {
      if (((player.positionY + player.velocityY + player.height > (platform.top - home.fontWidth/2)) && (player.positionY + player.height < (platform.top - home.fontWidth/2))) || player.positionY === (platform.top - home.fontWidth/2) - player.height) {
          if ((player.positionX + player.width/2 >= platform.left) && (player.positionX + player.width/2) <= (platform.left + platform.text.length * home.fontWidth) ) {
          player.velocityY = 0;
          player.positionY = (platform.top - home.fontWidth/2) - player.height;
          return true
        }
      }
    }
    for (pipe of pipes) {
      if (((player.positionY + player.velocityY + player.height > (pipe.top + 30)) && (player.positionY + player.height < (pipe.top + 30))) || player.positionY === (pipe.top + 30) - player.height) {
          if ((player.positionX + player.width/2 >= pipe.left) && (player.positionX + player.width/2) <= (pipe.left + 158) ) {
          player.velocityY = 0;
          player.positionY = (pipe.top + 30) - player.height;
          return true
        }
      } else if (((player.positionY + player.velocityY + player.height > (pipe.top + 121)) && (player.positionY + player.height < (pipe.top + 121))) || player.positionY === (pipe.top + 121) - player.height) {
          if ((player.positionX + player.width/2 >= pipe.left - 160) && (player.positionX + player.width/2) <= (pipe.left + 158) ) {
          player.velocityY = 0;
          player.positionY = (pipe.top + 121) - player.height;
          if ((player.positionX + player.width) > pipe.left + 80) {
            // CHANGE THE ACTIVE SCENE
          }
          return true
        }
      }
    }
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
  if (groundCheck() === false) {
    player.positionY += player.velocityY
    player.velocityY += home.gravity
  }

  // Make one call to draw player after position is determined
  ctx.drawImage(playerSprite, player.positionX, player.positionY);
  ctx.beginPath();
  ctx.arc(player.positionX, player.positionY, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(player.positionX, player.positionY + player.height, 5, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(player.positionX + player.width, player.positionY, 5, 0, 2 * Math.PI);
  ctx.stroke();

  // IMPORTANT
  for (pipe of pipes) {
    ctx.drawImage(groundTile, pipe.left - 64 * 2, pipe.top + 121);
    ctx.drawImage(groundTile, pipe.left - 64, pipe.top + 121);
    ctx.drawImage(groundTile, pipe.left, pipe.top + 121);
    ctx.drawImage(groundTile, pipe.left + 64, pipe.top + 121);
    ctx.drawImage(pipe.pipe, pipe.left, pipe.top);
  }
}
