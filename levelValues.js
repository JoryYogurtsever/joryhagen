const FONT_NAME = 'Press Start 2P';
let activeScene = "home"

let canvas
let ctx
var standingPlayer = new Image();   // Create new img element
var walkingPlayer1 = new Image();
var walkingPlayer2 = new Image();
var walkingPlayer1Left = new Image();
var walkingPlayer2Left = new Image();
var jumpingPlayer = new Image();
var jumpingPlayerLeft = new Image();
var cloud = new Image();
var aboutMePipe = new Image();
var contactMePipe = new Image();
var projectsPipe = new Image();
var homePipe = new Image();
var groundTile = new Image();
var about1 = new Image();
var about2 = new Image();
var about3 = new Image();
var signImage = new Image();

let clouds = []
let signs = []

let about = {
  height: 800,
  modalOpen: false,
  activeSign: 0,
  image: {
    source: about1,
  },
  modalLines: 10,
  modal: {},
  lines: ["I'm Jory, a 30 year old Front-End Developer from Edmonton",
          "Canada. I have a bachelor's degree from the University of",
          "Alberta with a double major in Physics and Mathematics. I",
          "have a love of puzzles and problem solving, I like to write",
          "fiction in my free time. I've been working as a Front-End",
          "Developer for 2 years. I have been a digital nomad for the",
          "past 4 years. In 2015 I went to Ankara, Turkey on a university",
          "exchange program. That's where I met my girlfriend, since",
          "then we've lived in many place. First we moved to Taiwan, and",
          "taught ESL, then we moved to Cambodia. I taught myself web",
          "development in 2017 using a Vue.js stack. Shortly after I",
          "found a job as a React Developer. I have been working since",
          "then coding React and working with many different technologies.",
          "For my job I have had to adapt to a lot of different tasks",
          "including working with google analytics, google tag manager,",
          "amazon web services and our own dashboard software. I fill",
          "the role of both web development and IT support. Working in",
          "this role helped me develop skills to quickly and effectively",
          "search problems even in software I am not familiar with and",
          "provide my team with technical assistance. I learn quickly and",
          "on the fly while using precautions to prevent mis-steps."
  ],
}

let contact = {
  height: 800,
}

let projects = {
  height: 800,
}

let home = {
  height: 1700,
  fontWidth: 20,
  isAnimating: true,
  walkingFrameDelay: 0,
  gravity: 1,
  platforms: [
    {
      text: "JORY HAGEN:",
      left: 100,
      top: 100,
    },
    {
      text: "I AM A FRONT END DEVELOPER",
      left: 500,
      top: 200,
    },
    {
      text: "WITH 2 YEARS EXPERIENCE",
      left: 80,
      top: 300,
    },
    {
      text: "I WORK FULL TIME",
      left: 620,
      top: 400,
    },
    {
      text: "WRITING REACT CODE",
      left: 300,
      top: 500,
    },
    {
      text: "AND PROVIDING TECHNICAL",
      left: 600,
      top: 600,
    },
    {
      text: "ASSISTANCE WITH TRACKING,",
      left: 40,
      top: 700,
    },
    {
      text: "AUTORESPONDERS,",
      left: 400,
      top: 800,
    },
    {
      text: "WORDPRESS,",
      left: 800,
      top: 900,
    },
    {
      text: "ECOMMERCE AND ANALYTIC",
      left: 100,
      top: 1000,
    },
    {
      text: "DATA COLLECTION.",
      left: 500,
      top: 1100,
    },
    // {
    //   text: "I AM ALSO THE",
    //   left: 600,
    //   top: 1200,
    // },
    // {
    //   text: "OWNER/CREATOR OF PIXOPIXA GAMES!",
    //   left: 500,
    //   top: 1300,
    // },
    {
      text: "USE THIS CHARACTER TO",
      left: 100,
      top: 1200,
    },
    {
      text: "NAVIGATE THE PAGE!",
      left: 500,
      top: 1300,
    },
    {
      text: "IF YOU'D LIKE A MORE",
      left: 80,
      top: 1400,
    },
    {
      text: "TRADITIONAL EXPERIENCE",
      left: 560,
      top: 1500,
    },
    {
      text: "VISIT THE DROPDOWN IN THE TOP RIGHT CORNER.",
      left: 100,
      top: 1600,
    },
  ]
}

let pipes = [
  {
    name: "about",
    pipe: aboutMePipe,
    top: 150,
    left: window.innerWidth - 163,
  },
  {
    name: "projects",
    pipe: projectsPipe,
    top: home.height/2,
    left: window.innerWidth - 163,
  },
  {
    name: "contact",
    pipe: contactMePipe,
    top: home.height - 192,
    left: window.innerWidth - 163,
  },
]

let homePipeStats = {
  name: "home",
  pipe: homePipe,
  top: about.height - 192,
  left: window.innerWidth - 163,
}

let player = {
  created: false,
  isMovingLeft: true,
  walkingFrame1: walkingPlayer1,
  walkingFrame2: walkingPlayer2,
  walkingFrame1Left: walkingPlayer1Left,
  walkingFrame2Left: walkingPlayer2Left,
  isWalkingframe1: true,
  walking: false,
  jumping: false,
  grounded: true,
  height: 64,
  positionX: 300,
  positionY: (home.height - 100 *2 - 400),
  velocityY: 0,
  speed: 6,
  jumpSpeed: -20,
  width: 64,
}
