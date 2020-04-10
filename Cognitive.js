//
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
let MAX_REPEAT_LEVEL = 2;
let OBJECTS_CHOSEN = 4;
let bubbleCaptured = 0;
let shakeyCaptured = 0;

let levelDisplayed = "";
let instructionDisplayed = "Choose any " + OBJECTS_CHOSEN + " items";
let scoreDisplayedL1 = "";
let scoreDisplayedL2 = "";


{


}


function setup() {
  colorMode(RGB, 200);
  resetObjects();
  createCanvas(480, 640);
}


function draw() {
  fill("white");
  rect(0, 0, 480, 640);
  fill("red");
  textSize(16);
  levelDisplayed = "Playing Level " + gameLevel;
  text(levelDisplayed, 20, 20);
  text(instructionDisplayed, 20, 35);



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

  if (gameLevel > 6) {
    fill(255, 255, 255);
    rect(0, 0, 480, 640);
    fill("red");
    scoreDisplayed1 = "Bubbles " + (bubbleCaptured / (NUM_OBJECTS / 2 * 5));
    scoreDisplayed2 = "Shakeys " + (shakeyCaptured / (NUM_OBJECTS / 2 * 5));
    stroke("red");
    text(scoreDisplayed1, 20, 40);
    text(scoreDisplayed2, 240, 40);
  }

}


function mouseClicked() {
  for (var i = 0; i < NUM_OBJECTS; i++) {
    if (mouseX >= bubbles[i].xpos - 15 && mouseX <= bubbles[i].xpos + 15 &&
      mouseY >= bubbles[i].ypos - 15 && mouseY <= bubbles[i].ypos + 15) {
      objectsCaptured++;
      bubbleCaptured++;
      bubbles[i].xpos = -100;
      bubbles[i].ypos = -100;
    }
    if (mouseX >= shakeys[i].xpos - 15 && mouseX <= shakeys[i].xpos + 15 &&
      mouseY >= shakeys[i].ypos - 15 && mouseY <= shakeys[i].ypos + 15) {
      objectsCaptured++;
      shakeyCaptured++;
      shakeys[i].xpos = -100;
      shakeys[i].ypos = -100;
    }
  }
}
