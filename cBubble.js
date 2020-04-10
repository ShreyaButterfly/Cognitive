class Bubble {

  constructor(x, y, R, G, B) {
    this.xpos = x; //random(20,width -20);
    this.ypos = y; //random(20,height-20);
    this.R = R;
    this.G = G;
    this.B = B;
    this.nLaunch = 0;
    this.nCapture = 0;
    this.direction = random(-1, 1);
    this.speed = random(-1.5, 1.5);
    if (this.speed <= 0) {
      this.speed = -2.0;
    } else {
      this.speed = 2.0;
    }
  }

  Display() {
    noStroke();
    fill(this.R, this.G, this.B, 100);
    ellipse(this.xpos, this.ypos, 10, 10);
    fill(this.R, this.G, this.B, 50);
    ellipse(this.xpos, this.ypos, 20, 20);
    fill(this.R, this.G, this.B, 20);
    ellipse(this.xpos, this.ypos, 25, 25);
  }

  //Display(c1)
  //{

  //    let r1 = red(c2);
  //    let g1 = green(c2);
  //    let b1 = blue(c2);

  //      noStroke();
  //      fill(r,g,b,100);
  //      ellipse(this.xpos, this.ypos, 10,10);
  //      fill(r,g,b,50);
  //      ellipse(this.xpos, this.ypos, 20,20);
  //      fill(r,g,b,20);
  //      ellipse(this.xpos, this.ypos, 25,25);
  //}


  // Move function by incrementing xpos /ypos by speed

  //Move()
  //{
  //  if (this.direction <=0)
  //  {
  //    this.ypos = this.ypos+this.speed;
  //    if(this.ypos >=600 && this.speed >=0)
  //    {
  //      this.nLaunch = this.nLaunch+1;
  //      this.ypos =0;
  //      this.xpos = random(50,550);
  //    }
  //    else if(this.ypos <=0 && this.speed <0)
  //    {
  //      this.nLaunch = this.nLaunch+1;
  //      this.ypos =600;
  //      this.xpos = random(50,550);
  //    }
  //  }

  //  if (this.direction >0)
  //  {
  //    this.xpos = this.xpos+this.speed;
  //    if(this.xpos >=600 && this.speed >=0)
  //    {
  //      this.nLaunch = this.nLaunch+1;
  //      this.xpos =0;
  //      this.ypos = random(50,500);
  //    }
  //    else if(this.xpos <=0 && this.speed <0)
  //    {
  //      this.nLaunch = this.nLaunch+1;
  //      this.xpos = 600;
  //      this.ypos = random(50,500);
  //    }
  //  }
  //}

  ////Resetting the Bubbles (used when they are captured)
  //Reset() {
  //  this.ypos = random(50,550);
  //  this.xpos = random(50,550);
  //}
}
