

//variabili

var check = false;
var tilt = false;
var sea;


function preload() {



  seaOUT = loadImage("./assets/surface.png");
  seaIN = loadImage("./assets/underwater.png");
}

function setup() {

  createCanvas(windowWidth, windowHeight);
  sea = image(seaOUT, 0, 0, image.width, image.height);
}

function draw() {
  fill('white');
  noStroke();
  textSize(30);
  textAlign(CENTER);
  text('Shake the device to dive into the sea', width/3, height / 4);

  if (check == true) {
    sea = image(seaIN, 0, 0, image.width, image.height);
    text('Turn the device to breath over surface', width/3, height / 4);
  } else if (tilt == true) {
    sea = image(seaOUT, 0, 0, image.width, image.height);
    text('Shake to go back underwater',width/3, height / 4);
  }

}
//functions

function deviceShaken() {
  check = true;
  tilt = false;
}
function deviceTurned() {

  if (turnAxis === 'X') {
    tilt = true;
    check = false;
  }
  }
