let logos = [];
let I;

function setup() {
  createCanvas(windowWidth, 2*windowHeight); 
  rectMode(CENTER, CENTER);
  loadPNG();
  logo = new Logo();
  for(let i = 0; i < 12; i++){
    buttons[i]= new Button(i);
  }
}


function draw() { 
  resizeCanvas(windowWidth, 2*windowHeight);
  w = width / 12;
  background(170, 0, 0);
  
  //Photo
  I = 0;
  noStroke();
  fill(0);
  for(let j = 2.5; j <= 8.5; j += 3){
    for(let i = 3; i <= 9; i += 3){
      square(i*w, j*w, 1.9*w);
      showPNG(i*w, j*w, I);
      I++;
    }
  }
  
  
  //Button
  I = 0;
  for(let j = 1; j <= 9; j += 3){
    for(let i = 3; i <= 9; i += 3){   
      buttons[I].update(i*w, j*w);
      buttons[I].show();
      I++;
    }
  }
  
  
}

function mousePressed(){
  for(let button of buttons){
    button.checkClick();
  }
}

function Pong(){
  window.open("https://wilibui.github.io/Pong/");
}

function CGoL(){
  window.open("https://wilibui.github.io/The-Game-Of-LIfe/");
}

function Rain(){
  window.open("https://wilibui.github.io/Rain/");
}

function Mine(){
  window.open("https://wilibui.github.io/Minesweeper/");
}

function Clok(){
  window.open("https://wilibui.github.io/Clock/");
}

function Golf(){
  window.open("https://wilibui.github.io/Golf/");
}

function Nono(){
  window.open("https://wilibui.github.io/Nonogram/");
}

class Logo {
  constructor() {    
  }
  
  update(X, Y, U){
    this.x = [
      X - 2*U, 
      X - 1*U, 
      X + 2*U, 
      X + 1*U, 
      X + 0*U, 
      X - 1*U, 
      X + 0*U, 
      X + 1*U,
      X,
      X + 0.5*U,
      X - 0.5*U,
      X - 0.7*U,
      X + 0.7*U
    ];

    this.y = [
      Y - 1.5*U, 
      Y + 1.5*U, 
      Y - 1.5*U, 
      Y + 1.5*U, 
      Y + 1.5*U, 
      Y + 0.5*U, 
      Y - 1.5*U, 
      Y + 0.5*U,
      Y + 0.5*U,
      Y + 1.0*U,
      Y - 0.2*U,
    ];
    this.u = U;
  }

  show() {
    noStroke();
    fill(0, 0, 170);
    triangle(this.x[0], this.y[0], this.x[1], this.y[1], this.x[8], this.y[8]);
    triangle(this.x[2], this.y[2], this.x[3], this.y[3], this.x[8], this.y[8]);
    fill(0);
    quad(this.x[4], this.y[4], this.x[5], this.y[5], this.x[6], this.y[6], this.x[7], this.y[7]);
    fill(170, 0, 0);
    quad(this.x[5], this.y[5], this.x[11], this.y[10], this.x[8], this.y[5], this.x[10], this.y[9]);
    quad(this.x[7], this.y[5], this.x[12], this.y[10], this.x[8], this.y[5], this.x[9], this.y[9]);  
    stroke(0);
    strokeWeight(this.u/10);
    line(this.x[0], this.y[0], this.x[1], this.y[1]);
    line(this.x[1], this.y[1], this.x[2], this.y[2]);
    line(this.x[2], this.y[2], this.x[3], this.y[3]);
    line(this.x[3], this.y[3], this.x[0], this.y[0]);    
    line(this.x[4], this.y[4], this.x[5], this.y[5]);
    line(this.x[5], this.y[5], this.x[6], this.y[6]);
    line(this.x[6], this.y[6], this.x[7], this.y[7]);
    line(this.x[7], this.y[7], this.x[4], this.y[4]);
  }
}
