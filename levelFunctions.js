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
      shakeys.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 5) {
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
      shakeys.push(new Bubble(random(20, 400), random(60, 600), 255, 0, 0));
    }
  } else if (gameLevel == 5) {
    for (let i = 0; i < NUM_OBJECTS / 2; i++) {
      bubbles.push(new Shakey(random(20, 400), random(60, 600), 0, 0, 255));
      shakeys.push(new Shakey(random(20, 400), random(60, 600), 255, 0, 0));
    }
  }
}
