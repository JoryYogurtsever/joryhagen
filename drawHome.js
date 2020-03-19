let home = {
  height: 3000
}

function drawHome() {
  var canvas = document.getElementById('myCanvas');
  canvas.height = home.height;
  canvas.width = window.innerWidth;
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.font = '20px Times New Roman';
    ctx.fillStyle = 'Black';
    ctx.fillText("hello", 30, 30);
    writeText(ctx, "ben Ozge")
    createPlayer(ctx)
    // drawing code here
    animateHome()
    // function animate(){
    //   animatePlayer()
    //   window.requestAnimationFrame(animate())
    // })
    // window.requestAnimationFrame(animate())
  } else {
    // canvas-unsupported code here
  }
}

function animateHome(){
  animatePlayer()
  window.requestAnimationFrame(animateHome)
}

function writeText(ctx, string) {
  var i = 0
  var left = 100
  let text = ''
  function myLoop () {
    setTimeout(() => {
    text = text.concat('', string[i])
    ctx.fillText(text, left, 100)
    i++;
    if (i < string.length) {
        myLoop()
    }
  }, 200)
  }
  myLoop();
}
