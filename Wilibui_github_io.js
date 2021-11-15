


function setup() {
  createCanvas(windowWidth, 3*windowHeight); 
  rectMode(CENTER, CENTER);
  loadPNG();
  for(let i = 0; i < 6; i++){
    buttons[i]= new Button(i);
  }
}


function draw() { 
  resizeCanvas(windowWidth, 3*windowHeight);
  w = width / 12;
  background(170, 0, 0);
  
  //Button
  let I = 0;
  for(let i = 3; i <= 9; i += 3){
    for(let j = 1; j <= 6; j += 3){
      buttons[I].update(i*w, j*w);
      buttons[I].show();
      I++;
    }
  }
  
  //Photo
  I = 0;
  noStroke();
  fill(0);
  for(let i = 3; i <= 9; i += 3){
    for(let j = 2.5; j <= 5.5; j += 3){
      square(i*w, j*w, 1.9*w);
      showPNG(i*w, j*w, I);
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
