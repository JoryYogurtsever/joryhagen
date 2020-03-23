window.addEventListener('keydown', (e) => {
    switch (e.code){
      case 'Space':
        if (groundCheck()) {
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
})

window.addEventListener('keyup', (e) => {
  switch (e.code){
    case 'ArrowLeft':
      player.walking =  false;
      break;
    case 'ArrowRight':
      player.walking = false;
    default:
      return;
    }
})

window.addEventListener('resize', () => {
  console.log(player)
  canvas.height = home.height - 20;
  canvas.width = document.body.clientWidth - 20;
  if (!player.created) {
    createPlayer(ctx);
  }
  if (home.isAnimating) {
    animateHome();
    home.isAnimating = false;
  }
})
