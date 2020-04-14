function fLevelOne() {
  if (gameLevel == 1 && repeatLevel <= MAX_REPEAT_LEVEL) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles[i].Display();
      shakeys[i].Display();
      if (objectsCaptured >= OBJECTS_CHOSEN) {
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
      if (objectsCaptured >= OBJECTS_CHOSEN) {
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
      if (objectsCaptured >= OBJECTS_CHOSEN) {
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
      if (objectsCaptured >= OBJECTS_CHOSEN) {
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
      if (objectsCaptured >= OBJECTS_CHOSEN) {
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
      if (objectsCaptured >= OBJECTS_CHOSEN) {
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
  mouseClicked ();
  }
}

//
//
//

function displayScores() {
  let br = [];
  let sr = [];
  let bb = [];
  let sb = [];

  fill(255, 255, 255);
  rect(0, 0, 480, 640);
  fill(170, 56, 78);
  //stroke("red");
  for (var i = 0; i <= NUM_LEVELS; i++) {

    bb.push(new Bubble(20, i * 50 + 50, 0, 0, 255));
    br.push(new Bubble(20, i * 50 + 50, 255, 0, 0));
    sb.push(new Shakey(300, i * 50 + 50, 0, 0, 255));
    sr.push(new Shakey(300, i * 50 + 50, 255, 0, 0));

    switch (i) {
      case 1:
        text("Level " + i + ":", 130, i * 50 + 55);
        bb[i].Display();
        sb[i].Display();
        break;
      case 2:
        br[i].Display();
        sr[i].Display();
        text("Level " + i + ":", 130, i * 50 + 55);
        break;
      case 3:
        br[i].Display();
        sb[i].Display();
        text("Level " + i + ":", 130, i * 50 + 55);
        break;
      case 4:
        bb[i].Display();
        sr[i].Display();
        text("Level " + i + ":", 130, i * 50 + 55);
        break;
      case 5:
        bb[i].Display();
        br[i].Display();
        text("Level " + i + ":", 130, i * 50 + 55);
        break;
      case 6:
        sb[i].Display();
        sr[i].Display();
        text("Level " + i + ":", 130, i * 50 + 55);
        break;
      default:

    }




  }
}
