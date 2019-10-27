var myFont;
function preload(){
  myFont = loadFont('assets/Neoneon.otf');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textFont(myFont);
  textSize(100);
  fill(245, 173, 66);
  textAlign(CENTER);
  text("Pyth-IA", width/2, height/3);

  // fill('red');
  // rect(0, 0, 200, 200);
}

function draw() {
  //background(255);

}
