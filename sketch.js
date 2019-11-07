var myFont;
var logoX = 2;
var decagon;
var eye;
var textCheckbox;
var textInput;
var voiceInput;
var speech = new p5.SpeechRec();
var textFromVoice;

function preload() {
  myFont = loadFont('assets/Neoneon.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont(myFont);
  textSize(100);
  fill(245, 173, 66);
  textAlign(CENTER);
  text("Pyth-IA", width / 2, height / 3);

  // fill('red');
  // rect(0, 0, 200, 200);
  push();

  //rotate(frameCount / -100.0);
  decagon = new polygon(0, 0, 37 * 2, 10);
  pop();

  push();
  //translate(decagon.x, decagon.y);

  //eye = new rhombus(decagon.x + 5, decagon.y - 19.5);
  eye = new rhombus(0, 0);
  pop();


  // choosing between text or voice
  textCheckbox = select('#writeCheckbox');
  textCheckbox.mouseClicked(clickTextCheckbox);
  console.log(textCheckbox.value());

  textInput = select('#myInput');

  var voiceCheckbox = select('#voiceCheckbox');
  voiceCheckbox.mouseClicked(clickVoiceCheckbox);

  voiceInput = select('#myVoiceInput');

  // speech recognition
  speech.onResult = showResult;
  speech.start();
}

function draw() {
  background(0);

  push();
  decagon.display();
  pop();
  //rotate(frameCount / -100.0);

  var remapX = map(mouseX, 0, width, decagon.x + 5, 200);
  var remapY = map(mouseY, 0, height, decagon.y - 19.5, 200);
  //translate(remapX, remapY);
  eye.display();

}

function clickTextCheckbox() {
  voiceInput.hide();
  textInput.show();
  console.log(textCheckbox.value());
}
function clickVoiceCheckbox() {
  textInput.hide();
  voiceInput.show();
}

function showResult() {
  if (speech.resultValue == true) {

    var textFromVoice = select('#myVoiceInput');
    textFromVoice.html(speech.resultString + "?");
    //textFromVoice.style('color: white; font-size: 20px; font-family: Verdana; position: absolute; top: 50%; left: 50%; width: 500px; transform: translate(-50%,-165%)');
    console.log(speech.resultString);
    console.log(textFromVoice.html());
  }
}

function polygon(x, y, radius, npoints) {
  this.x = x;
  this.y = y;
  var angle = TWO_PI / npoints;
  this.display = function() {
    translate(width / 2, height / 3);
    noFill();
    stroke(255);
    strokeWeight(3);
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}

function rhombus(x, y) {
  this.x = x;
  this.y = y;

  var angle = TWO_PI / 6;

  this.display = function() {
    //translate(mouseX, mouseY);

    noFill();
    stroke(255);
    strokeWeight(3);
    beginShape();
    var mX = 2 * 2;
    vertex(this.x + 0 * mX, this.y + 5 * mX);
    vertex(this.x + 6 * mX, this.y + 0 * mX);
    vertex(this.x + 11 * mX, this.y + 0 * mX);
    vertex(this.x + 17 * mX, this.y + 5 * mX);
    vertex(this.x + 11 * mX, this.y + 10 * mX);
    vertex(this.x + 6 * mX, this.y + 10 * mX);
    endShape(CLOSE);
    beginShape();
    // pupilla
    fill(255);
    var radius = 3 * 4;
    var add = 5 * 4;
    for (var a = 0; a < TWO_PI; a += angle) {
      let sx = this.x + add + 14 + cos(a) * radius;
      var sy = this.y + add + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}
