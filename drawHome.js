function drawHomeInitial() {
  async function renderText() {
      canvas = document.querySelector('canvas')
      canvas.height = home.height - 20;
      canvas.width = document.body.clientWidth - 20;
      if (canvas !== null && canvas.width <= 600) {
        addTouchListeners()
      }
      ctx = canvas.getContext('2d');
      resizeHomeText()
      drawClouds(20)
      // ctx.font = `20px "${FONT_NAME}"`;
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
      animateHome()
      home.isAnimating = false;
  }
  document.fonts.load('10pt "Press Start 2P"').then(renderText);
}

function drawClouds(num) {
  for (i = 0; i < num; i++) {
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
  cloud.src = 'cloud.png'
}

function animateClouds() {
    for (myCloud of clouds) {
      ctx.drawImage(cloud, myCloud.left, myCloud.top);
    }
  cloud.src = 'cloud.png';
}


function animateHome() {
  ctx.clearRect(0, 0, window.innerWidth, home.height)
  animateClouds()
  for (platform of home.platforms) {
    ctx.fillText(platform.text, platform.left + (platform.text.length * home.fontWidth / 2), platform.top);
  }
    animatePlayer()
  if (activeScene === 'home') {
    window.requestAnimationFrame(animateHome)
  }
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

function changeScene() {
  console.log(activeScene)
  switch (activeScene) {
    case 'home':
      drawHomeInitial()
      break
    case 'about':
      drawAboutInitial()
      break
    case 'projects':
      drawProjectsInitial()
      break
    case 'contact':
      drawContactInitial()
      break
    default:
      drawHomeInitial()
      return
  }
}

function resizeHomeText() {
  if (document.body.clientWidth - 20 > 1000) {
    console.log("x-large")
    ctx.font = `20px "${FONT_NAME}"`;
    home.platforms[3].left = 680;
    home.platforms[8].left = 800;
    home.platforms[10].left = 600;
  } else if (1000 > document.body.clientWidth - 20 && document.body.clientWidth - 20 > 800) {
    console.log("large")
      ctx.font = `16px "${FONT_NAME}"`;
      home.fontWidth = 16;
      home.platforms[1].left = 320;
      home.platforms[3].left = 520;
      home.platforms[5].left = 400;
      home.platforms[8].left = 100;
      home.platforms[10].left = 500;
      home.platforms[14].left = 450;
      home.platforms[15].left = 10;
  } else if (800 > document.body.clientWidth - 20 && document.body.clientWidth - 20 > 600) {
    console.log("medium")
      ctx.font = `14px "${FONT_NAME}"`;
      home.fontWidth = 14;
      home.platforms[1].left = 120;
      home.platforms[2].top = 360;
      home.platforms[3].left = 20;
      home.platforms[5].left = 200;
      home.platforms[9].top = 1050;
      home.platforms[10].left = 300;
      home.platforms[12].left = 20;
      home.platforms[14].left = 10;
      home.platforms[15].left = 10;
    } else if (document.body.clientWidth - 20 < 600) {
      console.log("small")
      ctx.font = `12px "${FONT_NAME}"`;
      home.fontWidth = 12;
      home.platforms[0].left = 10;
      home.platforms[1].left = 10;
      home.platforms[2].left = 10;
      home.platforms[3].left = 50;
      home.platforms[4].left = 10;
      home.platforms[5].left = 10;
      home.platforms[6].left = 10;
      home.platforms[7].left = 50;
      home.platforms[8].left = 10;
      home.platforms[9].left = 10;
      home.platforms[10].left = 50;
      home.platforms[11].left = 10;
      home.platforms[12].left = 30;
      home.platforms[13].left = 10;
      home.platforms[13].top = 1450;
      home.platforms[14].left = 10;
      home.platforms[15].left = 10;
      home.platforms[15].text = "VISIT THE TOP RIGHT CORNER.";
      if (document.body.clientWidth - 20 < 350) {
        home.platforms[1].text = "FRONT END DEVELOPER";
        home.platforms[1].text = "ASSISTANCE WITH";
        home.platforms[15].text = "VISIT THE TOP RIGHT.";
      }
    }
}
