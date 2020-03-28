function drawProjectsInitial() {
      canvas.height = about.height - 20;
      canvas.width = document.body.clientWidth - 20;
      ctx.clearRect(0, 0, window.innerWidth, about.height)
      clouds = []
      signs = []
      linkBricks = []
      about.image = {
        source: projects1,
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
      resizeProjectsText()
      drawSigns(3, [projects1, projects2, projects3])
      drawLinkBoxes()
      drawModal()
      drawClouds(10)
      window.scrollTo(0, 10);
      createPlayer()
      animateProjects()
}

function animateProjects() {
  // ctx.font = `20px "${FONT_NAME}"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (!projects.jumpingAnimationDone) {
    ctx.clearRect(0, 0, window.innerWidth, about.height)
    animateClouds()
    for (myCloud in clouds) {
      ctx.drawImage(cloud, myCloud.left, myCloud.top);
    }
    animateSigns()
    drawProjectsModal()
    animatePlayer()
    if (activeScene === 'projects' && (player.jumping || player.walking || !player.grounded || projects.jumpingAnimationDone)) {
      window.requestAnimationFrame(animateProjects)
    }
  } else if (projects.jumpingAnimationDone) {
    projects.jumpingAnimationDone = false;
    window.location = linkBricks[about.activeSign].url
  }
}

function drawProjectsModal() {
  if (about.modalOpen) {
    ctx.fillStyle = "#f3f3f3";
    ctx.rect(about.modal.left, about.modal.top, about.modal.width, about.modal.height);
    ctx.fill();
    ctx.fillStyle = "#000000";
    // ctx.font = `16px "${FONT_NAME}"`;
    ctx.fillText(projects.lines[line1], about.modal.textmiddle, about.modal.top + 220)
    ctx.fillText(projects.lines[line2], about.modal.textmiddle, about.modal.top + 250)
    ctx.fillText(projects.lines[line3], about.modal.textmiddle, about.modal.top + 280)
    ctx.fillText(projects.lines[line4], about.modal.textmiddle, about.modal.top + 310)
    ctx.fillText(projects.lines[line5], about.modal.textmiddle, about.modal.top + 340)
    ctx.fillText(projects.lines[line6], about.modal.textmiddle, about.modal.top + 370)
    ctx.fillText(projects.lines[line7], about.modal.textmiddle, about.modal.top + 400)
    ctx.drawImage(about.image.source, about.image.left, about.image.top);
    ctx.drawImage(linkBricks[about.activeSign].image, linkBricks[about.activeSign].left, linkBricks[about.activeSign].top);
  }
}

function drawLinkBoxes() {
  linkBricks = [
    {
      image: linkBrick,
      left: signs[0].left,
      top: about.height - 3 * player.height,
      url: 'https://www.theattractiveman.com'
    },
    {
      image: linkBrick,
      left: signs[1].left,
      top: about.height - 3 * player.height,
      url: 'https://www.theattractiveman.co'
    },
    {
      image: linkBrick,
      left: signs[2].left,
      top: about.height - 3 * player.height,
      url: 'https://www.pixopixa.com'
    },
  ]
}

function resizeProjectsText() {
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
  }
}
