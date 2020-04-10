function fLevelOne() {
  if (gameLevel == 1 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= 4) {
        repeatLevel = repeatLevel + 1;
        resetObjects();
        if (repeatLevel > MAX_REPEAT_LEVEL) {
          gameLevel = gameLevel + 1;
          resetLevel();
          return;
        }
      }
    }
  }
}


function fLevelTwo() {
  if (gameLevel == 2 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= 4) {
        repeatLevel = repeatLevel + 1;
        resetObjects();
        if (repeatLevel > MAX_REPEAT_LEVEL) {
          gameLevel = gameLevel + 1;
          resetLevel();
          return;
        }
      }
    }
  }
}


function fLevelThree() {
  if (gameLevel == 3 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= 4) {
        repeatLevel = repeatLevel + 1;
        resetObjects();
        if (repeatLevel > MAX_REPEAT_LEVEL) {
          gameLevel = gameLevel + 1;
          resetLevel();
          return;
        }
      }
    }
  }
}

function fLevelFour() {
  if (gameLevel == 4 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= 4) {
        repeatLevel = repeatLevel + 1;
        resetObjects();
        if (repeatLevel > MAX_REPEAT_LEVEL) {
          gameLevel = gameLevel + 1;
          resetLevel();
          return;
        }
      }
    }
  }
}

function fLevelFive() {
  if (gameLevel == 5 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= 4) {
        repeatLevel = repeatLevel + 1;
        resetObjects();
        if (repeatLevel > MAX_REPEAT_LEVEL) {
          gameLevel = gameLevel + 1;
          resetLevel();
          return;
        }
      }
    }
  }
}

function fLevelSix() {
  if (gameLevel == 6 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= 4) {
        repeatLevel = repeatLevel + 1;
        resetObjects();
        if (repeatLevel > MAX_REPEAT_LEVEL) {
          gameLevel = gameLevel + 1;
          resetLevel();
          return;
        }
      }
    }
  }
}


function resetObjects() {

  bubbles = [];
  shakeys = [];
  objectsCaptured = 0;
  //repeatLevel=0;

  if (gameLevel == 1) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
    }
  } else if (gameLevel == 2) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 3) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
    }
  } else if (gameLevel == 4) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 5) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 6) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  }

}


function resetLevel() {

  bubbles = [];
  shakeys = [];
  objectsCaptured = 0;
  repeatLevel = 1;

  if (gameLevel == 1) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
    }
  } else if (gameLevel == 2) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 3) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
    }
  } else if (gameLevel == 4) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 5) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Bubble(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 6) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  }
}

//
// Mouse Clicked Functions
//

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

//
// for IOS mouseClicked does not seem to work
//
function touchStarted() {
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

//
//
//

function displayScores() {
  let b = [];
  let s = [];
  fill(255, 255, 255);
  rect(0, 0, 480, 640);
  fill("red");
  //scoreDisplayed1 = "Bubbles " + (bubbleCaptured / (NUM_OBJECTS / 2 * 5));
  //scoreDisplayed2 = "Shakeys " + (shakeyCaptured / (NUM_OBJECTS / 2 * 5));
  stroke("red");
  //text(scoreDisplayed1, 20, 40);
  //text(scoreDisplayed2, 240, 40);

  for (var i = 1; i < NUM_LEVELS; i++) {
    text("Level " + i + ":", 20, i * 40);
  }
}
