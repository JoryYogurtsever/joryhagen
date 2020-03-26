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
        height: 5.5 * window.innerHeight/8,
        width: 6 * window.innerWidth/8,
      }
      drawSigns(3, [about1, about2, about3])
      window.scrollTo(0, 10);
      createPlayer()
      animateAbout()
}

function animateAbout() {
  ctx.font = `20px "${FONT_NAME}"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.clearRect(0, 0, window.innerWidth, about.height)
  animateClouds()
  for (myCloud in clouds) {
    ctx.drawImage(cloud, myCloud.left, myCloud.top);
  }
  animateSigns()
  drawModal()
  animatePlayer()
    if (activeScene === 'about') {
      window.requestAnimationFrame(animateAbout)
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
    ctx.font = `16px "${FONT_NAME}"`;
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
      left: (num/2 * 90*i) + (window.innerWidth/3 - num/2 * 90),
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
