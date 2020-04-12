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
  let br = new Bubble(20, 50, 255, 0, 0);
  let sr = new Shakey(20, 50, 255, 0, 0);
  let bb = new Bubble(20, 50, 0, 0, 255);
  let sb = new Shakey(20, 50, 0, 0, 255)

  fill(255, 255, 255);
  rect(0, 0, 480, 640);
  text("Final Score", 30, 30);
  fill(170, 56, 78);

  for (var i = 0; i <= NUM_LEVELS; i++) {

    switch (i) {
      case 1:
        bb.xpos = 80;
        bb.ypos = 80;
        sb.xpos = 430;
        sb.ypos = 80;
        text("Level " + i + ":", 200, 80);
        bb.Display();
        sb.Display();
        break;
      case 2:
        br.xpos = 80;
        br.ypos = 160
        sr.xpos = 430;
        sr.ypos = 160
        br.Display();
        sr.Display();
        text("Level " + i + ":", 200, 160);
        break;
      case 3:
        br.xpos = 80;
        br.ypos = 240;
        sb.xpos = 430;
        sb.ypos = 240;
        br.Display();
        sb.Display();
        text("Level " + i + ":", 200, 240);
        break;
      case 4:
        bb.xpos = 80;
        bb.ypos = 320;
        sr.xpos = 430;
        sr.ypos = 320;
        bb.Display();
        sr.Display();
        text("Level " + i + ":", 200, 320);
        break;
      case 5:
        bb.xpos = 80;
        bb.ypos = 400;
        br.xpos = 430;
        br.ypos = 400;

        bb.Display();
        br.Display();
        text("Level " + i + ":", 200, 400);
        break;
      case 6:
        sb.xpos = 80;
        sb.ypos = 480;
        sr.xpos = 430;
        sr.ypos = 480;
        sb.Display();
        sr.Display();
        text("Level " + i + ":", 200, 480);
        break;
      default:

    }
  }
}
