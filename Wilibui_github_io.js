let pongButton;
let theGameOfLifeButton;
let theGameOfLifeGif;
let pongGif;


function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(50);
  rectMode(CENTER, CENTER);
  w = width / 100;
  h = height / 100; 
   
  //Pong Knop
  pongButton = createButton('Pong');
  pongButton.position(10 * w, 10 * h); 
  pongButton.size(15 * w, 10 * h);  
  pongButton.style('font-size', 40);
  pongButton.style("background-color", color(200));
  pongButton.style("color", color(0));  
  pongButton.mousePressed(Pong);
  
  pongGif = createImg("Pong.gif");
  pongGif.position(10 * w, 15 * w);
  pongGif.size(15 * w, 20 * w);

  //The Game Of Life
  //Button
  theGameOfLifeButton = createButton('Conoway');
  theGameOfLifeButton.position(32 * w, 10 * h);
  theGameOfLifeButton.size(30 * w,100);  
  theGameOfLifeButton.style('font-size', 40);
  theGameOfLifeButton.style("background-color", color(200));
  theGameOfLifeButton.style("color", color(0)); 
  theGameOfLifeButton.mousePressed(TheGameOfLife);
  //Gif
  theGameOfLifeGif = createImg("Conoway.gif");
  theGameOfLifeGif.position(32 * w, 15 * w);
  theGameOfLifeGif.size(30 * w, 20 * w);
}


function draw() {
  pongButton.show();
  theGameOfLifeButton.show();  
}

function Pong(){
  window.open("https://wilibui.github.io/Pong/", "_self");
}
function TheGameOfLife(){
  window.open("https://wilibui.github.io/The-Game-Of-LIfe/", "_self");
}
