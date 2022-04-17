let buttons = [];

class Button {
  constructor(I) {   
    this.i = I;
    this.name = "Button";
  }
  update(X, Y) {
    this.x = X;
    this.y = Y;
  }
  show() {
    stroke(0);
    strokeWeight(w/10);
    fill(50);
    rect(this.x, this.y, 2.8*w, 0.9*w);
    fill(255);
    noStroke();
    textSize(0.5*w);
    textAlign(CENTER, CENTER);
    switch(this.i) {
    case 0:
      this.name = "Mine";
      break;
    case 1:
      this.name = "Pong";
      break;
    case 2:
      this.name = "CGoL";
      break;
    case 3:
      this.name = "Clock";
      break;
    case 4:
      this.name = "Golf";
      break;
    case 5:
      this.name = "Rain";
      break;
    case 6:
      this.name = "Nonogram";
      break;
    }
    text(this.name, this.x, this.y);
  }
  checkClick() {
    if (this.x - 1.4*w < mouseX && mouseX < this.x + 1.4*w) {
      if (this.y - 0.45*w < mouseY && mouseY < this.y + 0.45*w) {
        switch(this.i) {
        case 0:
          Mine();
          break;
        case 1:
          Pong();
          break;
        case 2:
          CGoL();
          break;
        case 3:
          Clok();
          break;
        case 4:
          Golf();
          break;
        case 5:
          Rain();
          break;
        case 6:
          Nono();
          break;
        }
      }
    }
  }
}
