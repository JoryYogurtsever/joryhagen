let player = {
  isMovingLeft: true,
  walking: false,
  jumping: false,
  grounded: true,
  height: 100,
}

function createPlayer(ctx) {
  var img = new Image();   // Create new img element
  img.onload = function() {
    ctx.drawImage(img, 150, home.height - player.height *2);
  };
  img.src = 'jory.png'; // Set source path
}

function animatePlayer() {

}
