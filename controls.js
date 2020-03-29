window.addEventListener('keydown', keydownFunction)
function keydownFunction(e) {
    switch (e.code){
      case 'ArrowLeft':
        player.isMovingLeft = true;
        player.walking =  true;
        break;
      case 'ArrowRight':
        player.isMovingLeft = false;
        player.walking = true;
        break;
      case 'Enter':
        home.isAnimating = false;
        break;
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
      default:
        return;
    }
}

window.addEventListener('keyup', keyupFunction)
async function keyupFunction(e) {
  switch (e.code){
    case 'ArrowLeft':
      await sleep(50)
      player.walking =  false;
      break;
    case 'ArrowRight':
      await sleep(50)
      player.walking = false;
      break;
    default:
      return;
    }
}

window.addEventListener('resize', resizeFunction)
function resizeFunction() {
  if (window.innerWidth >= 600) {
    location.reload();
  }
}

// Controls for mobile devices
var touchInitialX = null
var touchInitialY = null

function addTouchListeners() {
  canvas.addEventListener("touchstart", touchstartFunction, { passive: false })
  function touchstartFunction(e) {
    e.preventDefault();
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

  canvas.addEventListener("touchmove", touchmoveFunction, { passive: false });
  function touchmoveFunction(e) {
    e.preventDefault();
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
      if (touchInitialY <= player.positionY - player.height * 2.5 && groundCheck()) {
        player.jumping = true;
      }
    }
  };

  canvas.addEventListener("touchend", touchendFunction)
  function touchendFunction(e) {
    console.log(e)
    touchInitialX = null;
    touchInitialY = null;
    player.walking = false;
  };
}
