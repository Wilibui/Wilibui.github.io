let pongButton;
let pongGif;
let theGameOfLifeButton;
let theGameOfLifeGif;
let rainButton;
let rainGif;



function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(50);
  rectMode(CENTER, CENTER);
  w = width / 100;
  h = height / 100; 
   
  //Pong Knop
  pongButton = createButton('Pong');
  pongButton.position(10 * w, 10 * h); 
  pongButton.size(10 * w, 10 * h);  
  pongButton.style('font-size', 40);
  pongButton.style("background-color", color(200));
  pongButton.style("color", color(0));  
  pongButton.mousePressed(Pong);
  //GIF
  pongGif = createImg("Pong.gif");
  pongGif.position(10 * w, 15 * w);
  pongGif.size(10 * w, 15 * w);

  //The Game Of Life
  //Button
  theGameOfLifeButton = createButton('Conoway');
  theGameOfLifeButton.position(25 * w, 10 * h);
  theGameOfLifeButton.size(20 * w, 10 * h);  
  theGameOfLifeButton.style('font-size', 40);
  theGameOfLifeButton.style("background-color", color(200));
  theGameOfLifeButton.style("color", color(0)); 
  theGameOfLifeButton.mousePressed(TheGameOfLife);
  //GIF
  theGameOfLifeGif = createImg("Conoway.gif");
  theGameOfLifeGif.position(25 * w, 15 * w);
  theGameOfLifeGif.size(20 * w, 15 * w);
   
  //Rain
  //Button
  rainButton = createButton('Rain');
  rainButton.position(50 * w, 10 * h);
  rainButton.size(25 * w, 10 * h);  
  rainButton.style('font-size', 40);
  rainButton.style("background-color", color(200));
  rainButton.style("color", color(0)); 
  rainButton.mousePressed(Rain);
  //GIF
  rainGif = createImg("Rain.gif");
  rainGif.position(50 * w, 15 * w);
  rainGif.size(25 * w, 15 * w);
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
