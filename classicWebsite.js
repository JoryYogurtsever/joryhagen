// console.log('wtf?')
// window.getElementById('change-version-button').addEventListener('onclick', () => {
//   document.getElementById('myP').innerHTML = '<button>Hello Dolly.</button>';
// })
async function changeToClassic() {
  window.removeEventListener('keydown', keydownFunction)
  window.removeEventListener('keyup', keyupFunction)
  window.removeEventListener('resize', resizeFunction)
  window.removeEventListener("touchstart", touchstartFunction)
  window.removeEventListener("touchmove", touchmoveFunction);
  window.removeEventListener("touchend", touchendFunction)
  activeScene = null;
  home.isAnimating = false;
  await sleep(700)
  const clearCanvas = () => {
    var container = document.getElementById("convas-container");
    var myCanvas = document.getElementById("myCanvas");
    var myButton = document.getElementById("change-version-button");
    var myForm = document.getElementById("contact-form");
    container.removeChild(myCanvas);
    container.removeChild(myButton);
    container.removeChild(myForm);
  }
  clearCanvas()
  window.scrollTo(0, 10);
  document.getElementById('myP').innerHTML = `
  <div class="classic-body">
    <br>
    <br>
    <div class="row-6-sm">
      <h1 class="h1 center">Jory Hagen: Front End Developer</h1>
      <div class="body-text">
        <p class="paragraph">
        I'm Jory, a 30 year old Front-End Developer from Edmonton
        Canada. I have a bachelor's degree from the University of
        Alberta with a double major in Physics and Mathematics. I
        have a love of puzzles and problem solving, I like to write
        fiction in my free time. I've been working as a Front-End
        Developer for 2 years. I have been a digital nomad for the
        past 4 years. In 2015 I went to Ankara, Turkey on a university
        exchange program. That's where I met my girlfriend, since
        then we've lived in many place. First we moved to Taiwan, and
        taught ESL, then we moved to Cambodia. I taught myself web
        development in 2017 using a Vue.js stack. Shortly after I
        found a job as a React Developer. I have been working since
        then coding React and working with many different technologies.
        For my job I have had to adapt to a lot of different tasks
        including working with google analytics, google tag manager,
        amazon web services and our own dashboard software. I fill
        the role of both web development and IT support. Working in
        this role helped me develop skills to quickly and effectively
        search problems even in software I am not familiar with and
        provide my team with technical assistance. I learn quickly and
        on the fly while using precautions to prevent mis-steps.
        </p>
      </div>
      <h2 class="h2 center">About Me:</h2>
      <div class="body-text">
        <p class="paragraph">
          I'm Jory, a 30 year old Front-End Developer from Edmonton
          Canada. I have a bachelor's degree from the University of
          Alberta with a double major in Physics and Mathematics. I
          have a love of puzzles and problem solving, I like to write
          fiction in my free time. I've been working as a Front-End
          Developer for 2 years. I have been a digital nomad for the
          past 4 years. In 2015 I went to Ankara, Turkey on a university
        </p>
        <img class="center-image" src="about1-medium.jpg">
        <p class="paragraph">
          exchange program. That's where I met my girlfriend, since
          then we've lived in many places. First we moved to Taiwan, and
          taught ESL, then we moved to Cambodia. I taught myself web
          development in 2017 using a Vue.js stack. Shortly after I
          found a job as a React Developer. I have been working since
          then coding React and working with many different technologies.
          For my job I have had to adapt to a lot of different tasks
        </p>
        <img class="center-image" src="about2-medium.jpg">
        <p class="paragraph">
          including working with google analytics, google tag manager,
          amazon web services and our own dashboard software. I fill
          the role of both web development and IT support. Working in
          this role helped me develop skills to quickly and effectively
          search problems even in software I am not familiar with and
          provide my team with technical assistance. I learn quickly and
          on the fly while using precautions to prevent mis-steps."
        </p>
        <img class="center-image" src="classic-about3.jpeg">
      </div>
      <h2 class="h2 center">Projects</h2>
      <div class="body-text">
        <p class="paragraph">
          This is the main website of the company I work for currently
          The Attractiveman.com. We recently did a style revamp of the
          site, and I am currently working on a second revamp. The main
          site uses a hybrid of React and some Wordpress pages. An important
          part of my job is setting up autoresponders and tracking information
          This site also has a membership area as well as our sales pages
          and electronic product funnels.
          Our Company also runs several other websites, primary amoung them
          are theattractiveman.co and daygametraining.com. I've included a
          link to the former. theattractiveman.co is has the most complex coding
          there are many sales funnels and lots of considerations when building
          pages on this site. daygametraining is a wordpress site that we still
          use because of its SEO value. There were as many as 12 sites at one
          point, though we have since to reduce that number noticably
          Pixopixa.com is my own personal website.
          The site was running for a while, previously, but my
          buisness model was not very profitable
          I am now working on a complete revamp of the website
          This site is built with gatsby, currently I've only put up
          some pages for SEO. I am working on a revamp of the
          product at the moment.
        </p>
      </div>
      <h2 class="h2 center">Contact Me:</h2>
      <div id="contact-form">
        <div class="form-div">
          <input class="contact-form-input" type="text" id="form-name" placeholder="name"></input>
          <p class="hidden error" id="name-error">Please include your name</p>
        </div>
        <div class="form-div">
          <input class="contact-form-input" type="email" id="form-email" placeholder="email"></input>
          <p class="hidden error" id="email-error">Please provide a valid email</p>
        </div>
        <div class="form-div">
          <textarea class="contact-form-input" type="text" id="form-message" placeholder="message" rows="7" cols="20"></textarea>
          <p class="hidden error" id="message-error">Message cannot be blank</p>
        </div>
        <div class="form-div">
          <button class="contact-form-button" onclick="handleSubmit();">SUBMIT</button>
        </div>
      </div>
      <p class="hidden success" id="contact-form-success">Thanks for your message!</p>
    </div>
    <br>
    <br>
  </div>
  `;
  await sleep(700)
  window.scrollTo(0, 10);
}
