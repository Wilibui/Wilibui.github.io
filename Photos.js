let MinePNG;
let CGoLPNG;
let GolfPNG;
let PongPNG;
let ClokPNG;
let RainPNG;
let NonoPNG;
let PNG;

function loadPNG() {
  MinePNG = loadImage("Mine.png");
  PongPNG = loadImage("Pong.gif");
  CGoLPNG = loadImage("CGoL.png");
  ClokPNG = loadImage("Clok.png");
  GolfPNG = loadImage("Golf.png");
  RainPNG = loadImage("Rain.png");
  GevaPNG = loadImage("Geva.png");
  NonoPNG = loadImage("Nono.png");
}

function showPNG(x, y, i) {
  PNG = GevaPNG;
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
  case 6:
    PNG = NonoPNG;
    break;
  }
  image(PNG, x-0.9*w, y-0.9*w, 1.8*w, 1.8*w);
}
