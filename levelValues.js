const FONT_NAME = 'Press Start 2P';

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

let clouds = []

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
  height: 86,
  positionX: 300,
  positionY: (home.height - 100 *2 - 400),
  velocityY: 0,
  speed: 6,
  jumpSpeed: -20,
  width: 100,
}
