window.addEventListener('keydown', (e) => {
    switch (e.code){
      case 'Space':
        player.jumping = true;
        player.grounded = false;
        break;
      case 'ArrowLeft':
        player.isMovingLeft = true;
        player.walking =  true;
        break;
      case 'ArrowRight':
        player.isMovingLeft = false;
        player.walking = true;
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
  drawHome();
})
