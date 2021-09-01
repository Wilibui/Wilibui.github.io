let pongButton;
let pongGif;
let theGameOfLifeButton;
let theGameOfLifeGif;
let rainButton;
let rainGif;
let mineButton;
let minePng;

function setup() {
  createCanvas(windowWidth, 3*windowHeight); 
  background(50);
  rectMode(CENTER, CENTER);
  w = width / 100;
  h = width / 150; 
   
  //Pong
  //Button
  pongButton = createButton('Pong');
  pongButton.position(10*w, 10*h); 
  pongButton.size(10*w, 10*h);  
  pongButton.style('font-size', 3*w);
  pongButton.style("background-color", color(200));
  pongButton.style("color", color(0));  
  pongButton.mousePressed(Pong);
  //GIF
  pongGif = createImg("Pong.gif");
  pongGif.position(10*w, 21*h);
  pongGif.size(10*w, 15*w);

  //The Game Of Life
  //Button
  theGameOfLifeButton = createButton('Conoway');
  theGameOfLifeButton.position(25*w, 10*h);
  theGameOfLifeButton.size(20*w, 10*h);  
  theGameOfLifeButton.style('font-size', 3*w);
  theGameOfLifeButton.style("background-color", color(200));
  theGameOfLifeButton.style("color", color(0)); 
  theGameOfLifeButton.mousePressed(TheGameOfLife);
  //GIF
  theGameOfLifeGif = createImg("Conoway.gif");
  theGameOfLifeGif.position(25*w, 21*h);
  theGameOfLifeGif.size(20*w, 15*w);
   
  //Rain
  //Button
  rainButton = createButton('Rain');
  rainButton.position(50*w, 10*h);
  rainButton.size(25*w, 10*h);  
  rainButton.style('font-size', 3*w);
  rainButton.style("background-color", color(200));
  rainButton.style("color", color(0)); 
  rainButton.mousePressed(Rain);
  //GIF
  rainGif = createImg("Rain.gif");
  rainGif.position(50*w, 21*h);
  rainGif.size(25*w, 15*w);
  
  //Mine
  //Button
  mineButton = createButton('Minesweeper');
  mineButton.position(10*w, 45*h);
  mineButton.size(20*w, 10*h);  
  mineButton.style('font-size', 3*w);
  mineButton.style("background-color", color(200));
  mineButton.style("color", color(0)); 
  mineButton.mousePressed(Mine);
  
  //PNG
  minePng = createImg("Minesweeper.PNG");
  minePng.position(10*w, 56*h);
  minePng.size(20*w, 20*w);
}


function draw() { 
}

function Pong(){
  window.open("https://wilibui.github.io/Pong/", "_self");
}

function TheGameOfLife(){
  window.open("https://wilibui.github.io/The-Game-Of-LIfe/", "_self");
}

function Rain(){
  window.open("https://wilibui.github.io/Rain/", "_self");
}

function Mine(){
  window.open("https://wilibui.github.io/Minesweeper/", "_self");
}
