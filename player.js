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
  player.created = true;
}

function groundCheck() {
  if ((player.positionY >= (home.height - player.height)) && !player.jumping)  {
    player.positionY = home.height - player.height;
    player.velocityY = 0;
    return true
  } else if (player.jumping) {
    player.positionY += player.jumpSpeed;
    player.velocityY = player.jumpSpeed;
    player.jumping = false;
    return false
  } else if (player.velocityY > 0) {
    for (platform of home.platforms) {
      if ((player.positionY + player.velocityY + player.height > platform.top) && (player.positionY + player.height < platform.top)) {
        console.log(player.positionY + player.velocityY + player.height, platform.top)
        // player.velocityY = 0;
        // player.positionY = platform.top - player.height;
        // return true
      }
    }
    return false
  } else {
    return false
  }
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
  ctx.arc(home.platforms[15].left, home.platforms[15].top - home.fontWidth/2, 5, 0, 2 * Math.PI);
  ctx.stroke();
}
