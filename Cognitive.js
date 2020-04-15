// Cognitive.js is written by Shreya Balaji
//Contact details : sbalaji2021@berkeleycarroll.org or shreyabutterfly@gmail.com

// This program displays a series of shaking
// and static bubbles of different colors to
// evaluate user preferences.
//
let bubbles = [];
let shakeys = [];
let gameLevel = 1;
let repeatLevel = 1;
let levelScore;
let NUM_OBJECTS = 40;
let MAX_REPEAT_LEVEL = 3;
let OBJECTS_CHOSEN = 5;
let NUM_LEVELS = 6;
let bubbleCaptured = 0;
let shakeyCaptured = 0;

let levelDisplayed = "";
let instructionDisplayed = "Choose any " + OBJECTS_CHOSEN + " items";
let scoreDisplayedL1 = "";
let scoreDisplayedL2 = "";

let l11, l12, l21, l22, l31, l32, l41, l42, l51, l52, l61, l62;
l11 = l12 = l21 = l22 = l31 = l32 = 0;
l41 = l42 = l51 = l52 = l61 = l62 = 0;

function setup() {
  colorMode(RGB, 200);
  resetObjects();
  createCanvas(480, 640);
}


function draw() {
  fill("white");
  strokeWeight(3);
  rect(0, 0, 480, 640);
  fill("red");
  textSize(16);
  levelDisplayed = "Playing Level " + gameLevel;
  text(levelDisplayed, 20, 20);
  text(instructionDisplayed, 20, 35);

  if (gameLevel > NUM_LEVELS) {
    displayScores();
    return;
  }

  if (gameLevel == 1) {
    fLevelOne();
  } else if (gameLevel == 2) {
    fLevelTwo();
  } else if (gameLevel == 3) {
    fLevelThree();
  } else if (gameLevel == 4) {
    fLevelFour();
  } else if (gameLevel == 5) {
    fLevelFive();
  } else if (gameLevel == 6) {
    fLevelSix();
  }
}
