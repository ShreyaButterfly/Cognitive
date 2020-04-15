//cShakey.js is written by Shreya Balaji
//Contact details : sbalaji2021@berkeleycarroll.org or shreyabutterfly@gmail.com
class Shakey {

  constructor(x, y, R, G, B) {
    this.xpos = x; //random(20,width -20);
    this.ypos = y; //random(20,height -20);
    this.R = R;
    this.G = G;
    this.B = B;
  }

  Display() {
    let randX = random(2, 5);
    let randY = random(2, 3);


    noStroke();

    fill(this.R, this.G, this.B, 100);
    ellipse(this.xpos + randX, this.ypos + randY, 10, 10);
    fill(this.R, this.G, this.B, 50);
    ellipse(this.xpos + randX, this.ypos + randY, 20, 20);
    fill(this.R, this.G, this.B, 20);
    ellipse(this.xpos + randX, this.ypos + randY, 25, 25);
    strokeWeight(1);
    stroke(this.R, this.G, this.B);
    bezier(this.xpos, this.ypos, this.xpos + randX, this.ypos + randY, this.xpos + randX + 10, this.ypos + randY + 10, this.xpos + cos(random(0, 360)) * 15, this.ypos - sin(random(0, 360)) * 15);
    bezier(this.xpos, this.ypos, this.xpos + randX, this.ypos + randY, this.xpos + randX + 10, this.ypos + randY + 10, this.xpos + cos(random(0, 360)) * 15, this.ypos - sin(random(0, 360)) * 15);
    bezier(this.xpos, this.ypos, this.xpos + randX, this.ypos + randY, this.xpos + randX + 10, this.ypos + randY + 10, this.xpos + cos(random(0, 360)) * 15, this.ypos - sin(random(0, 360)) * 15);
  }


  //Resetting the Bubbles (used when they are captured)
  Reset() {
    this.ypos = random(50, 550);
    this.xpos = random(50, 550);
  }
}
