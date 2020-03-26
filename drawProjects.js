function drawProjectsInitial() {
      canvas.height = about.height - 20;
      canvas.width = document.body.clientWidth - 20;
      ctx.clearRect(0, 0, window.innerWidth, about.height)
      clouds = []
      signs = []
      about.modal = {
        textmiddle: window.innerWidth/2 - 0.5 * window.innerWidth/8,
        left: 0.5 * window.innerWidth/8,
        top: 2.5 * window.innerHeight/8,
        height: 5.5 * window.innerHeight/8,
        width: 6 * window.innerWidth/8,
      }
      drawSigns(3, [null, null, null])
      animateSigns()
      drawModal()
      drawClouds(10)
      window.scrollTo(0, 10);
      createPlayer()
      animateProjects()
}

function animateProjects() {
  ctx.font = `20px "${FONT_NAME}"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.clearRect(0, 0, window.innerWidth, about.height)
  animateClouds()
  for (myCloud in clouds) {
    ctx.drawImage(cloud, myCloud.left, myCloud.top);
  }
  animateSigns()
  drawProjectsModal()
  animatePlayer()
    if (activeScene === 'projects') {
      window.requestAnimationFrame(animateProjects)
  }
}

function drawProjectsModal() {
  if (about.modalOpen) {
    ctx.fillStyle = "#f3f3f3";
    ctx.rect(about.modal.left, about.modal.top, about.modal.width, about.modal.height);
    ctx.fill();
    ctx.fillStyle = "#000000";
    ctx.font = `16px "${FONT_NAME}"`;
    ctx.fillText(projects.lines[line1], about.modal.textmiddle, about.modal.top + 220)
    ctx.fillText(projects.lines[line2], about.modal.textmiddle, about.modal.top + 250)
    ctx.fillText(projects.lines[line3], about.modal.textmiddle, about.modal.top + 280)
    ctx.fillText(projects.lines[line4], about.modal.textmiddle, about.modal.top + 310)
    ctx.fillText(projects.lines[line5], about.modal.textmiddle, about.modal.top + 340)
    ctx.fillText(projects.lines[line6], about.modal.textmiddle, about.modal.top + 370)
    ctx.fillText(projects.lines[line7], about.modal.textmiddle, about.modal.top + 400)
    // ctx.drawImage(about.image.source, about.image.left, about.image.top);
  }
}
