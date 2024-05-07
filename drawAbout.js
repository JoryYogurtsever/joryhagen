function drawAboutInitial() {
      canvas.height = about.height - 20;
      canvas.width = document.body.clientWidth - 20;
      ctx.clearRect(0, 0, window.innerWidth, about.height)
      clouds = []
      signs = []
      drawClouds(10)
      about.image = {
        source: about1,
        left: window.innerWidth/2 - about1.width + 0.5*window.innerWidth/8,
        top: 2.8 * window.innerHeight/8,
      }
      about.modal = {
        textmiddle: window.innerWidth/2 - 0.5 * window.innerWidth/8,
        left: 0.5 * window.innerWidth/8,
        top: 2.5 * window.innerHeight/8,
        height: 6 * window.innerHeight/8,
        width: 6 * window.innerWidth/8,
      }
      resizeAboutText()
      drawSigns(3, [about1, about2, about3])
      window.scrollTo(0, 10);
      createPlayer()
      animateAbout()
}

function animateAbout() {
  // ctx.font = `16px "${FONT_NAME}"`;
  if (player.jumping || player.walking || !player.grounded) {
    console.log(player.jumping, player.walking, !player.grounded)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, window.innerWidth, about.height)
    animateSigns()
    drawModal()
    animatePlayer()
    about.finalAnimationDone = false;
  } else if (!about.finalAnimationDone) {
    console.log(player.jumping, player.walking, !player.grounded)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.clearRect(0, 0, window.innerWidth, about.height)
    animateSigns()
    drawModal()
    animatePlayer()
    about.finalAnimationDone = true;
  }
  if (activeScene === 'about') {
    setTimeout(() => {
      window.requestAnimationFrame(animateAbout)
    }, 1000 / 60 )
  }
}
let line1 = 0
let line2 = 1
let line3 = 2
let line4 = 3
let line5 = 4
let line6 = 5
let line7 = 6

function drawModal() {
  if (about.modalOpen) {
    ctx.fillStyle = "#f3f3f3";
    ctx.rect(about.modal.left, about.modal.top, about.modal.width, about.modal.height);
    ctx.fill();
    ctx.fillStyle = "#000000";
    // ctx.font = `16px "${FONT_NAME}"`;
    ctx.fillText(about.lines[line1], about.modal.textmiddle, about.modal.top + 220)
    ctx.fillText(about.lines[line2], about.modal.textmiddle, about.modal.top + 250)
    ctx.fillText(about.lines[line3], about.modal.textmiddle, about.modal.top + 280)
    ctx.fillText(about.lines[line4], about.modal.textmiddle, about.modal.top + 310)
    ctx.fillText(about.lines[line5], about.modal.textmiddle, about.modal.top + 340)
    ctx.fillText(about.lines[line6], about.modal.textmiddle, about.modal.top + 370)
    ctx.fillText(about.lines[line7], about.modal.textmiddle, about.modal.top + 400)
    ctx.drawImage(about.image.source, about.image.left, about.image.top);
  }
}

function drawSigns(num, images) {
  for (let i=0; i < num; i++) {
    signs[i] = {
      left: (num/2 * about.signSpacing*i) + (window.innerWidth/about.signStart - num/2 * about.signSpacing),
      top: about.height - 84,
      image: images[i]
    }
    ctx.drawImage(signImage, (i+1)*window.innerWidth/num, window.innerHeight - 84);
  }
}

function animateSigns() {
  for (sign of signs) {
    ctx.drawImage(signImage, sign.left, sign.top);
  }
}

function resizeAboutText() {
  if (document.body.clientWidth - 20 > 1000) {
    console.log("x-large")
    ctx.font = `12px "${FONT_NAME}"`;
  } else if (1000 >= document.body.clientWidth - 20 && document.body.clientWidth - 20 > 800) {
    console.log("large")
    ctx.font = `10px "${FONT_NAME}"`;
  } else if (800 > document.body.clientWidth - 20 && document.body.clientWidth - 20 > 600) {
    console.log("medium")
    ctx.font = `7px "${FONT_NAME}"`;
    about.image.left = window.innerWidth/2 - about1.width + 1.5 * window.innerWidth/8;
  } else if (document.body.clientWidth - 20 < 600 && document.body.clientWidth - 20 > 350) {
    console.log("small")
    ctx.font = `10px "${FONT_NAME}"`;
    about.image.left = window.innerWidth/32;
    about.image.top = window.innerHeight/8 + 30;
    about.modal.top = window.innerHeight/8;
    about.modal.width = window.innerWidth;
    about.modal.height = 4.5 * window.innerHeight/8;
    about.modal.left = 0;
    about.modal.textmiddle = window.innerWidth/2 - 10;
    about.lines = [
        "I'm Jory, a 34 year old Full-Stack",
        "Developer from Edmonton Canada.",
        "I have a bachelor's degree from",
        "the University of Alberta with",
        "a double major in Physics and",
        "Mathematics. I have a love of",
        "puzzles and problem solving, I",
        "like to write in my free time.",
        "I've been working as a Front-End",
        "Developer for 6 years. I've been a",
        "digital nomad for the past 9 years.",
        "In 2015 I went to Ankara, Turkey",
        "on a university exchange program.",
        "That's where I met my wife,",
        "since then we've lived in many",
        "places. First we moved to Taiwan,",
        "and taught ESL, then we moved to",
        "Cambodia. I taught myself web",
        "development in 2017 using a",
        "Vue.js stack. Shortly after I",
        "found a job as a React Developer.",
    ]
  } else if (document.body.clientWidth - 20 < 350) {
    console.log("x-small")
    ctx.font = `8px "${FONT_NAME}"`;
    about.image.left = window.innerWidth/32;
    about.image.top = 3.6*window.innerHeight/8;
    about.modal.top = 3.5 * window.innerHeight/8;
    about.modal.width = window.innerWidth;
    about.modal.height = 6 * window.innerHeight/8;
    about.modal.left = 0;
    about.modal.textmiddle = window.innerWidth/2 - 10;
    about.lines = [
        "I'm Jory, a 34 year old Front-End",
        "Developer from Edmonton Canada.",
        "I have a bachelor's degree from",
        "the University of Alberta with",
        "a double major in Physics and",
        "Mathematics. I have a love of",
        "puzzles and problem solving, I",
        "like to write in my free time.",
        "I've been working as a Full-Stack",
        "Developer for 6 years. I've been a",
        "digital nomad for the past 9 years.",
        "In 2015 I went to Ankara, Turkey",
        "on a university exchange program.",
        "That's where I met my wife,",
        "since then we've lived in many",
        "places. First we moved to Taiwan,",
        "and taught ESL, then we moved to",
        "Cambodia. I taught myself web",
        "development in 2017 using a",
        "Vue.js stack. Shortly after I",
        "found a job as a React Developer.",
    ]
  }
}
