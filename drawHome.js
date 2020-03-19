let home = {
  height: 1900,
  fontWidth: 20,
  text1: "JORY HAGEN:",
  text2: "I AM A FRONT END DEVELOPER",
  text3: "WITH 2 YEARS EXPERIENCE",
  text4: "I WORK FULL TIME",
  text5: "WRITING REACT CODE",
  text6: "AND PROVIDING TECHNICAL",
  text7: "ASSISTANCE WITH TRACKING,",
  text8: "AUTORESPONDERS,",
  text9: "WORDPRESS,",
  text10: "ECOMMERCE AND ANALYTIC",
  text11: "DATA COLLECTION.",
  text12: "I AM ALSO THE",
  text13: "OWNER/CREATOR OF PIXOPIXA GAMES!",
  text14: "USE THIS CHARACTER TO",
  text15: "NAVIGATE THE PAGE!",
  text16: "IF YOU'D LIKE A MORE",
  text17: "TRADITIONAL EXPERIENCE",
  text18: "VISIT THE DROPDOWN IN THE TOP RIGHT CORNER.",
}

const FONT_NAME = 'Press Start 2P';

function drawHomeInitial() {
  async function renderText() {
  	  let canvas = document.querySelector('canvas')
      canvas.height = home.height;
      canvas.width = window.innerWidth;
      let ctx = canvas.getContext('2d');
      ctx.font = `20px "${FONT_NAME}"`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      writeText(ctx, home.text1, 100, 100);
      await sleep(home.text1.length * 60);
      writeText(ctx, home.text2, 500, 200);
      await sleep(home.text2.length * 60);
      writeText(ctx, home.text3, 80, 300);
      await sleep(home.text3.length * 60);
      window.scrollTo(0, 100);
      writeText(ctx, home.text4, 620, 400);
      await sleep(home.text4.length * 60);
      window.scrollTo(0, 200);
      writeText(ctx, home.text5, 300, 500);
      await sleep(home.text5.length * 60);
      window.scrollTo(0, 300);
      writeText(ctx, home.text6, 600, 600);
      await sleep(home.text6.length * 60);
      window.scrollTo(0, 400);
      writeText(ctx, home.text7, 40, 700);
      await sleep(home.text7.length * 60);
      window.scrollTo(0, 500);
      writeText(ctx, home.text8, 400, 800);
      await sleep(home.text8.length * 60);
      window.scrollTo(0, 600);
      writeText(ctx, home.text9, 800, 900);
      await sleep(home.text9.length * 60);
      window.scrollTo(0, 700);
      writeText(ctx, home.text10, 100, 1000);
      await sleep(home.text10.length * 60);
      window.scrollTo(0, 800);
      writeText(ctx, home.text11, 500, 1100);
      await sleep(home.text11.length * 60);
      window.scrollTo(0, 900);
      writeText(ctx, home.text12, 600, 1200);
      await sleep(home.text12.length * 60);
      window.scrollTo(0, 1000);
      writeText(ctx, home.text13, 500, 1300);
      await sleep(home.text13.length * 60);
      window.scrollTo(0, 1100);
      writeText(ctx, home.text14, 100, 1400);
      await sleep(home.text14.length * 60);
      window.scrollTo(0, 1200);
      writeText(ctx, home.text15, 500, 1500);
      await sleep(home.text15.length * 60);
      window.scrollTo(0, 1300);
      writeText(ctx, home.text16, 80, 1600);
      await sleep(home.text16.length * 60);
      window.scrollTo(0, 1400);
      writeText(ctx, home.text17, 550, 1700);
      await sleep(home.text17.length * 60);
      window.scrollTo(0, 1500);
      writeText(ctx, home.text18, 100, 1800);
      await sleep(home.text18.length * 60);
      createPlayer(ctx)

      animateHome()
  }

  document.fonts.load('10pt "Press Start 2P"').then(renderText);

  // var canvas = document.getElementById('myCanvas');
  // canvas.height = home.height;
  // canvas.width = window.innerWidth;
  // if (canvas.getContext) {
  //   var ctx = canvas.getContext('2d');
  //   ctx.font = 'Press Start 2P';
  //   ctx.fillStyle = 'Black';
  //   ctx.fillText("hello", 30, 30);
  //   writeText(ctx, "ben Ozge")
  //   createPlayer(ctx)
  //
  //   animateHome()
  //
  // } else {
  //   canvas-unsupported code here

}
function animateHome() {
  let canvas = document.querySelector('canvas')
  canvas.height = home.height;
  canvas.width = window.innerWidth;
  let ctx = canvas.getContext('2d');
  ctx.font = `20px "${FONT_NAME}"`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(home.text1, 100, 100);
  ctx.fillText(home.text2, 500, 200);
  ctx.fillText(home.text3, 80, 300);
  ctx.fillText(home.text4, 620, 400);
  ctx.fillText(home.text5, 300, 500);
  ctx.fillText(home.text6, 600, 600);
  ctx.fillText(home.text7, 40, 700);
  ctx.fillText(home.text8, 400, 800);
  ctx.fillText(home.text9, 800, 900);
  ctx.fillText(home.text10, 100, 1000);
  ctx.fillText(home.text11, 500, 1100);
  ctx.fillText(home.text12, 600, 1200);
  ctx.fillText(home.text13, 500, 1300);
  ctx.fillText(home.text14, 100, 1400);
  ctx.fillText(home.text15, 500, 1500);
  ctx.fillText(home.text16, 80, 1600);
  ctx.fillText(home.text17, 550, 1700);
  ctx.fillText(home.text18, 100, 1800);
  animatePlayer()
  window.requestAnimationFrame(animateHome)
}

async function sleep(time) {
  // let time = timeSteps * 200;
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

async function writeText(ctx, string, left, height) {
  var i = 0
  let __left = left
  async function myLoop () {
    await sleep(60).then(()=> {//(() => {
    // text = text.concat('', string[i])
    ctx.fillText(string[i], __left, height)
    i++;
    __left += home.fontWidth
    if (i < string.length){
      myLoop()
    }
  })
  //}, 200)
  }
  await myLoop();
}
