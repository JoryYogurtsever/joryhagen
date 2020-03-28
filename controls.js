window.addEventListener('keydown', keydownFunction)
function keydownFunction(e) {
    switch (e.code){
      case 'Space':
        if (activeScene !== 'contact') {
          e.preventDefault()
        }
        if (about.modalOpen && activeScene === 'contact') {
          return
        } else if (groundCheck()) {
          player.jumping = true;
          player.grounded = false;
        }
        break;
      case 'ArrowLeft':
        player.isMovingLeft = true;
        player.walking =  true;
        break;
      case 'ArrowRight':
        player.isMovingLeft = false;
        player.walking = true;
      case 'Enter':
        home.isAnimating = false;
      default:
        return;
    }
}

window.addEventListener('keyup', keyupFunction)
function keyupFunction(e) {
  switch (e.code){
    case 'ArrowLeft':
      player.walking =  false;
      break;
    case 'ArrowRight':
      player.walking = false;
    default:
      return;
    }
}

window.addEventListener('resize', resizeFunction)
function resizeFunction() {
  let activeHeight = (activeScene === 'home') ? home.height : about.height
  canvas.height = activeHeight - 20;
  canvas.width = document.body.clientWidth - 20;
  resizeHomeText();
  if (!player.created) {
    createPlayer(ctx);
  }
  if (home.isAnimating) {
    animateHome();
    home.isAnimating = false;
  }
  for (pipe of pipes) {
    pipe.left = window.innerWidth - 163;
  }
  homePipeStats.left = window.innerWidth - 163;
}

// Controls for mobile devices
var touchInitialX = null
var touchInitialY = null

window.addEventListener("touchstart", touchstartFunction)
function touchstartFunction(e) {
  if(e.touches) {
    touchInitialX = e.touches[0].pageX - canvas.offsetLeft - player.width / 2;
    touchInitialY = e.touches[0].pageY - canvas.offsetTop - player.height / 2;
    if (touchInitialX <= player.positionX - 5) {
      player.walking = true;
      player.isMovingLeft = true;
    } else if (touchInitialX >= player.positionX + player.width + 5) {
      player.walking = true;
      player.isMovingLeft = false;
    }
  }
  if (home.isAnimating) {
    animateHome();
    home.isAnimating = false;
  }
};

window.addEventListener("touchmove", touchmoveFunction);
function touchmoveFunction(e) {
  if(e.touches) {
    touchInitialX = e.touches[0].pageX - canvas.offsetLeft - player.width / 2;
    touchInitialY = e.touches[0].pageY - canvas.offsetTop - player.height / 2;
    if (touchInitialX <= player.positionX - 5) {
      player.walking = true;
      player.isMovingLeft = true;
    } else if (touchInitialX >= player.positionX + player.width + 5) {
      player.walking = true;
      player.isMovingLeft = false;
    }
    if (touchInitialY <= player.positionY - player.height * 2.5) {
      player.jumping = true;
    }
  }
};

window.addEventListener("touchend", touchendFunction)
function touchendFunction(e) {
  console.log(e)
  touchInitialX = null;
  touchInitialY = null;
  player.walking = false;
  // if(e.changedTouches) {
  //   touchInitialX = e.changedTouches[0].pageX - canvas.offsetLeft - player.width / 2;
  //   touchInitialY = e.changedTouches[0].pageY - canvas.offsetTop - player.height / 2;
  //   if (touchInitialX <= player.positionX - 5) {
  //     player.walking = true;
  //     player.isMovingLeft = true;
  //   } else if (touchInitialX >= player.positionX + player.width + 5) {
  //     player.walking = true;
  //     player.isMovingLeft = false;
  //   }
  // }
};
// window.addEventListener("touchmove", handleMove);
// window.addEventListener("touchend", handleEnd);
// window.addEventListener("touchcancel", handleCancel);
