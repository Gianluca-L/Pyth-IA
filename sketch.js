///////////////////////////////////////// Pyth-IA PC

///////////////////////////// ARDUINO
var serial; // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
var inData; // for incoming serial data
var outByte = 0; // for outgoing data
///////////// AUDIO
var fft;
var spectrum;
var envelope;
var step_1 = true;

var timer = 1;
var s = 0;

// var benvenuto;
// var categoria;
// var una_sola_domanda;
// var frase_finale;

///// variables to trigger sections

var relazioni_sociali_var = false;
var amicizia_var = false;
var amore_var = false;

var final_sentence = false;


// var myFont;
// var logoX = 2;
// var decagon;
// var eye;
// var textCheckbox;
// var textInput;
// var voiceInput;
var k = 0;
var allSpeech = new p5.SpeechRec('it-IT');
allSpeech.continuous = false;
allSpeech.interimResults = false;

var sentence;

var step_2 = false;

var step_3 = false;

////////// SINTESI VOCALE (PROVVISORIO)

var speech;

// var textFromVoice;

const FOLDER = 'assets/audio/', EXT = '.mp3',
      INDEX_START = 1, INDEX_END = 4,
      INDEX_TOTAL = 1 + INDEX_END - INDEX_START,
      audios = Array(INDEX_TOTAL);

function preload() {
  myFont = loadFont('assets/Neoneon.otf');

  // benvenuto = loadSound("./assets/audio/benvenuto.mp3");
  // categoria = loadSound("./assets/audio/categoria.mp3");
  // una_sola_domanda = loadSound("./assets/audio/una_sola_domanda.mp3");
  // frase_finale = loadSound("./assets/audio/frase_finale.mp3");

  for (var i = 0; i < INDEX_TOTAL; ++i)
  audios[i] = loadSound(FOLDER + (i + INDEX_START) + EXT);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  // textFont(myFont);
  // textSize(100);
  // fill(245, 173, 66);
  // textAlign(CENTER);
  // text("Pyth-IA", width / 2, height / 3);

  // choosing between text or voice
  // textCheckbox = select('#writeCheckbox');
  // textCheckbox.mouseClicked(clickTextCheckbox);
  // console.log(textCheckbox.value());
  //
  // textInput = select('#myInput');
  //
  // var voiceCheckbox = select('#voiceCheckbox');
  // voiceCheckbox.mouseClicked(clickVoiceCheckbox);
  //
  // voiceInput = select('#myVoiceInput');

  // speech recognition to start pyth-IA
  //startSentence.start();
  createAllSpeech();
  //createSpeechRec_1();

  /// AUDIO

  analyzer = new p5.Amplitude();
  for (var i = 0; i < INDEX_TOTAL; ++i) {
  analyzer.setInput(audios[i]);
}


  //envelope = new p5.Env();

  fft = new p5.FFT();

  speech = new p5.Speech();

  ////////////////////////////// ARDUINO

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event

  serial.list(); // list the serial ports

  //serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.open(portName);

}
// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

function serialEvent() {
  // read a byte from the serial port:
  var inByte = serial.read();
  // store it in a global variable:
  inData = inByte;
}

function serialError(err) {
  println('Something went wrong with the serial port. ' + err);
}

function draw() {
  background(255);

  volume = analyzer.getLevel();
  volumeRemap = map(volume, 0, 1, 0, 255);
  outByte = int(map(volume*80, 0, 1, 0, 255));
  serial.write(outByte);
  spectrum = fft.analyze();


  console.log('step_1: ' + step_1 + ',', 'step_2: ' + step_2 + ',', 'step_3: ' + step_3, 'outByte: ' + outByte);
  fill(0);
  // display the incoming serial data as a string:
  text("incoming value: " + inData, 30, 30);
  push();
  fill(212, 175, 55);
  stroke(255, 248, 184);
  strokeWeight(5);
  ellipseMode(RADIUS);
  ellipse(width/2, height/2, width/6);
  fill(212, 175, 55, 50);
  noStroke();
  ellipse(width/2, height/2, width/5*volumeRemap*0.3);

  pop();
}

function mouseDragged() {
  // map the mouseY to a range from 0 to 255:
  outByte = int(map(mouseY, 0, height, 0, 255));
  // send it out the serial port:
  serial.write(outByte);
}

function keyPressed() {
  if (key >= 0 && key <= 9) { // if the user presses 0 through 9
    outByte = byte(key * 25); // map the key to a range from 0 to 225
  }
  serial.write(outByte); // send it out the serial port
}

function createAllSpeech() {
  allSpeech.onResult = startPythia;
  allSpeech.start();
  allSpeech.onEnd = restartAllSpeech;
}

function restartAllSpeech() {
  allSpeech.start();
}

function startPythia() {
  if (step_1 == true) {
    if (allSpeech.resultValue == true) {
      //console.log('step 1 ok');
      //console.log('time: ' + timer);
      sentence = allSpeech.resultString.toLowerCase();
      // console.log(startSentence);
      console.log(sentence.toLowerCase());

      first_keyword_got = false;
      second_keyword_got = false;
      third_keyword_got = false;

      const first_keyword = ['donami'];

      const second_keyword = ['sapienza'];

      const third_keyword = ['dati'];

      if (first_keyword.some(keyword => sentence.includes(keyword))) {
        first_keyword_got = true;
        console.log('1 = ok');
      }
      if (second_keyword.some(keyword => sentence.includes(keyword))) {
        second_keyword_got = true;
        console.log('2 = ok');
      }
      if (third_keyword.some(keyword => sentence.includes(keyword))) {
        third_keyword_got = true;
        console.log('3 = ok');
      }
      if (first_keyword_got == true && second_keyword_got == true && third_keyword_got == true) {
        step_1 = false;
        //var benvenuto = Math.round(random(0,3));
        audios[0].play();
        first_keyword_got = false;
        second_keyword_got = false;
        third_keyword_got = false;
        audios[0].onended(startStep_2);

        function startStep_2() {
          audios[1].play();
          audios[1].onended(createSpeechRec_2);
        }
        if (audios[1].isPlaying() == false) {
          function createSpeechRec_2() {
            step_2 = true;
          }
        }
      }
    }
  }
  if (step_2 == true) {
    if (allSpeech.resultValue == true) {

      console.log(allSpeech.resultString + "222");
      sentence = allSpeech.resultString.toLowerCase();
      console.log(sentence);

      const tag_keyword = ['relazioni sociali', 'amicizia', 'amore'];

      if (tag_keyword.some(keyword => sentence.includes('relazioni sociali'))) {
        relazioni_sociali_var = true;
        console.log('ok relazioni sociali');
        // step_2 = false;
        // una_sola_domanda.play();
        // una_sola_domanda.onended(relazioni_sociali_Section);
      } else if (tag_keyword.some(keyword => sentence.includes('amicizia'))) {
        amicizia_var = true;
        console.log('ok amicizia');
        // step_2 = false;
        // una_sola_domanda.play();
      } else if (tag_keyword.some(keyword => sentence.includes('amore'))) {
        amore_var = true;
        console.log('ok amore');
        // step_2 = false;
        // una_sola_domanda.play();
      }
    }
    if (relazioni_sociali_var == true || amicizia_var == true || amore_var == true) {
      step_2 = false;
      audios[2].play();
      audios[2].onended(createSpeechRec_3);

      function createSpeechRec_3() {
        step_3 = true;
      }
    }
  }
  if (step_3 == true) {
    if (allSpeech.resultValue == true) {
      //console.log('step 3 ok');
      sentence = allSpeech.resultString.toLowerCase();
      console.log(allSpeech.resultString.toLowerCase());

      speech.setVoice("Google italiano");

      if (relazioni_sociali_var == true) {
        if (odio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found");
          // audio.src = a_music;
          // audio.play();
          var odio_cit = odio_cits[Math.floor(Math.random() * odio_cits.length)];
          alert(odio_cit);
          //speech.speak(odio_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        } else if (bravo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var bravo_cit = bravo_cits[Math.floor(Math.random() * bravo_cits.length)];
          alert(bravo_cit);
          //speech.speak(bravo_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        } else if (aiuto_supp_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var aiuto_supp_cit = aiuto_supp_cits[Math.floor(Math.random() * aiuto_supp_cits.length)];
          alert(aiuto_supp_cit);
          //speech.speak(aiuto_supp_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        } else if (solitudine_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var solitudine_cit = solitudine_cits[Math.floor(Math.random() * solitudine_cits.length)];
          alert(solitudine_cit);
          //speech.speak(solitudine_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        } else if (emp_emoz_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var emp_emoz_cit = emp_emoz_cits[Math.floor(Math.random() * emp_emoz_cits.length)];
          alert(emp_emoz_cit);
          //speech.speak(emp_emoz_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        } else if (separazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var separazione_cit = separazione_cits[Math.floor(Math.random() * separazione_cits.length)];
          alert(separazione_cit);
          //speech.speak(separazione_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        } else if (se_stessi_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var se_stessi_cit = se_stessi_cits[Math.floor(Math.random() * se_stessi_cits.length)];
          alert(se_stessi_cit);
          //speech.speak(se_stessi_cit)
          relazioni_sociali_var = false;
          final_sentence = true;
        }
      } else if (amicizia_var == true) {
        if (vera_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          var vera_amicizia_cit = vera_amicizia_cits[Math.floor(Math.random() * vera_amicizia_cits.length)];
          alert(vera_amicizia_cit);
          //speech.speak(vera_amicizia_cit);
          amicizia_var = false;
          final_sentence = true;
        } else if (sep_feriti_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          var sep_feriti_cit = sep_feriti_cits[Math.floor(Math.random() * sep_feriti_cits.length)];
          alert(sep_feriti_cit);
          //speech.speak(sep_feriti_cit);
          amicizia_var = false;
          final_sentence = true;
        } else if (falsa_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          var falsa_amicizia_cit = falsa_amicizia_cits[Math.floor(Math.random() * falsa_amicizia_cits.length)];
          alert(falsa_amicizia_cit);
          //speech.speak(falsa_amicizia_cit);
          amicizia_var = false;
          final_sentence = true;
        }
      } else if (amore_var == true) {
        if (lasciare_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var lasciare_cit = lasciare_cits[Math.floor(Math.random() * lasciare_cits.length)];
          alert(lasciare_cit);
          //speech.speak(lasciare_cit);
          amore_var = false;
          final_sentence = true;
        } else if (falso_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var falso_amore_cit = falso_amore_cits[Math.floor(Math.random() * falso_amore_cits.length)];
          alert(falso_amore_cit);
          //speech.speak(falso_amore_cit);
          amore_var = false;
          final_sentence = true;
        } else if (amore_vero_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var amore_vero_cit = amore_vero_cits[Math.floor(Math.random() * amore_vero_cits.length)];
          alert(amore_vero_cit);
          //speech.speak(amore_vero_cit);
          amore_var = false;
          final_sentence = true;
        } else if (non_corrisposto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          console.log("Found")
          // audio.src = a_music;
          // audio.play();
          var non_corrisposto_cit = non_corrisposto_cits[Math.floor(Math.random() * non_corrisposto_cits.length)];
          alert(non_corrisposto_cit);
          //speech.speak(non_corrisposto_cit);
          amore_var = false;
          final_sentence = true;
        }
      }
      if (final_sentence == true) {
        audios[3].play();
        audios[3].onended(reset);

        function reset() {
          //frase_finale.stop();
          step_1 = true;
          final_sentence = false;
          //createSpeechRec_1();
        }
      }
    }
  }
  // console.log('time: ' + timer);
  // console.log(step_1);
}

// function keyReleased() {
//   k++;
//   if (key === 'Enter') {
//     if (k == 1) {
//       console.log('ok');
//       tag_speech.onResult = showResult;
//       tag_speech.start();
//       console.log(tag_speech);
//     } else if (k == 2) {
//       speech_2.onResult = showResult;
//       speech_2.start();
//     }
//   }
//   s++;
//   if (key === 's') {
//     if (s == 1) {
//       // console.log('s1');
//       // step_1 = true;
//       startSentence.start();
//     } else if (s == 2) {
//       // console.log('s2');
//       // step_1 = false;
//       // s = 0;
//     }
//   }
//   return false;
// }
//
// function clickTextCheckbox() {
//   voiceInput.hide();
//   textInput.show();
//   console.log(textCheckbox.value());
// }
//
// function clickVoiceCheckbox() {
//   textInput.hide();
//   voiceInput.show();
// }
//
// function showResult() {
//   if (tag_speech.resultValue == true) {
//
//     var textFromVoice = select('#myVoiceInput');
//     textFromVoice.html(tag_speech.resultString + "?");
//     //textFromVoice.style('color: white; font-size: 20px; font-family: Verdana; position: absolute; top: 50%; left: 50%; width: 500px; transform: translate(-50%,-165%)');
//     // console.log(tag_speech.resultString);
//     // console.log(textFromVoice.html());
//   }
// }
