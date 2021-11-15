let MinePNG;
let CGoLPNG;
let GolfPNG;
let PongPNG;
let ClokPNG;
let RainPNG;
let PNG;

function loadPNG() {
  MinePNG = loadImage("Mine.png");
  PongPNG = loadImage("Pong.gif");
  CGoLPNG = loadImage("CGoL.gif");
  ClokPNG = loadImage("Clok.png");
  GolfPNG = loadImage("Golf.png");
  RainPNG = loadImage("Rain.png");
}

function showPNG(x, y, i) {
  switch(i) {
  case 0:
    PNG = MinePNG;
    break;
  case 1:
    PNG = PongPNG;
    break;
  case 2:
    PNG = CGoLPNG;
    break;
  case 3:
    PNG = ClokPNG;
    break;
  case 4:
    PNG = GolfPNG;
    break;
  case 5:
    PNG = RainPNG;
    break;
  }
  image(PNG, x-0.9*w, y-0.9*w, 1.8*w, 1.8*w);
}
