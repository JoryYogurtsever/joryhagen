function drawHomeInitial() {
  async function renderText() {
      canvas = document.querySelector('canvas')
      canvas.height = home.height - 20;
      canvas.width = document.body.clientWidth - 20;
      ctx = canvas.getContext('2d');
      drawClouds()
      ctx.font = `20px "${FONT_NAME}"`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      window.scrollTo(0, 10);
      for (platform of home.platforms) {
          if (home.isAnimating) {
          window.scrollTo(0, platform.top - window.innerHeight/2);
          writeText(platform.text, platform.left, platform.top);
          await sleep(platform.text.length * 60);
          if (platform.text === "USE THIS CHARACTER TO") {
            createPlayer()
          }
        }
      }
      if (home.isAnimating) {
        await sleep(1000);
      } else {
        createPlayer()
      }
      // window.scrollTo(0, home.height - player.height *2 + 200);
      animateHome()
      home.isAnimating = false;
  }
  document.fonts.load('10pt "Press Start 2P"').then(renderText);
}

function drawClouds() {
  for (i = 0; i < 20; i++) {
    clouds.push({
      left: Math.floor(Math.random() * document.body.clientWidth - 200) + 80,
      top: Math.floor(Math.random() * home.height - 200) + 80,
    })
  }
  cloud.onload = function() {
    for (myCloud of clouds) {
      ctx.drawImage(cloud, myCloud.left, myCloud.top);
    }
  }
  cloud.src = 'cloud.png';
  console.log(clouds)
}

function animateClouds() {
    for (myCloud of clouds) {
      ctx.drawImage(cloud, myCloud.left, myCloud.top);
    }
  cloud.src = 'cloud.png';
}

// element.clientHeight is the pixels you see in your Browsers
// IMPORTANT ^^^^^^^

function animateHome() {
  ctx.font = `20px "${FONT_NAME}"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.clearRect(0, 0, window.innerWidth, home.height)
  animateClouds()
  for (platform of home.platforms) {
    ctx.fillText(platform.text, platform.left + (platform.text.length * home.fontWidth / 2), platform.top);
  }
  for (myCloud in clouds) {
    ctx.drawImage(cloud, myCloud.left, myCloud.top);
  }
  animatePlayer()
  window.requestAnimationFrame(animateHome)
}

async function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function writeText(string, left, height) {
  var i = 0
  let __left = left
    async function myLoop () {
      if (home.isAnimating) {
      await sleep(60).then(()=> {
        ctx.fillText(string[i], __left, height)
        i++;
        __left += home.fontWidth
        if (i < string.length){
          myLoop()
        }
      })
    }
  }
  await myLoop();
}
