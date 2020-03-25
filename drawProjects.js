function drawProjectsInitial() {
      canvas.height = about.height - 20;
      canvas.width = document.body.clientWidth - 20;
      console.log("projects loop")
      ctx.clearRect(0, 0, window.innerWidth, about.height)
      clouds = []
      drawClouds(10)
      window.scrollTo(0, 10);
      createPlayer()
      animateProjects()
}

function animateProjects() {
  ctx.font = `20px "${FONT_NAME}"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  console.log('looping projects')
  ctx.clearRect(0, 0, window.innerWidth, about.height)
  animateClouds()
  for (myCloud in clouds) {
    ctx.drawImage(cloud, myCloud.left, myCloud.top);
  }
  animatePlayer()
    if (activeScene === 'projects') {
      window.requestAnimationFrame(animateProjects)
  }
}
