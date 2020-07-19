// Open the console (Ctrl + Shift + I) (Alt + Cmd + I on MacOS)
// run atom.config.set('core.editor.multiCursorOnClick', true);
///////////////////////////////////////// Pyth-IA PC

/////////////////////////////// DISCO
var logo;
var disco;
var frase_avvio_container;
var keywords_container;
var volume_read = 0;
var last_volume_read = 0;


///////////////////////////// ARDUINO
var serial; // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
var inData; // for incoming serial data
var outByte = 0; // for outgoing data
var outVolume = 0;
var outColor = 0;
var stringToRead = 0;
//var options = { baudRate: 9600}; // change the data rate to whatever you wish
///////////// AUDIO
var fft;
var spectrum;
var envelope;

var timer = 1;
var s = 0;

var errorCounter = 0;

///// variables to trigger sections

var lavoro_var = false;
var amicizia_relInter_var = false;
var amore_var = false;
var ispirazione_var = false;
var vita_morte_var = false;
var etica_morale_var = false;

var stopArduinoLEDS = true;

var loadEffect = false

var redColor = false;
var orangeColor = false;
var greenColor = false;
var blueColor = false;
var violetColor = false;
var pinkColor = false;

var k = 0;
var allSpeech = new p5.SpeechRec('it-IT');
allSpeech.continuous = false;
allSpeech.interimResults = false;

var stopRecord = false;

var sentence;

var step_1 = false;

var step_2 = false;

var step_3 = false;

const FOLDER = 'assets/audio/',
  EXT = '.mp3',
  INDEX_START = 0,
  INDEX_END = 585,
  INDEX_TOTAL = 1 + INDEX_END - INDEX_START,
  audios = Array(INDEX_TOTAL);

function preload() {
  myFont = loadFont('assets/Maax.otf');
  myFont = loadFont('assets/Maax_italic.otf');

  for (var i = 0; i < INDEX_TOTAL; ++i) {
    audios[i] = loadSound(FOLDER + (i + INDEX_START) + EXT);
  }

}

// function mouseClicked() {
//   var colorHex = Math.round(random(0, 6));
//   outColor = colorHex;
//   console.log(outColor);
// }
// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     var colorHex = Math.round(random(0, 6));
//     outColor = colorHex;
//   }
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);

  // createAllSpeech();

  /// AUDIO

  analyzer = new p5.Amplitude();
  for (var i = 0; i < INDEX_TOTAL; ++i) {
    analyzer.setInput(audios[i]);
  }

  ////////////////////////////// ARDUINO

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event

  serial.list(); // list the serial ports

  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.open(portName);
  //serial.open(portName, options);

  /////////FRASE D'AVVIO

  frase_avvio_container = createDiv()
    .class('opacity_0')
    .style("position: absolute; top: 10%; left: 50%; transform: translate(-50%,-50%)");
  var titolo_frase_avvio = createP("PRONUNCIA LA FRASE DI AVVIO")
    .style("font-size: 0.7vw; padding-bottom: 0.7vw; text-align: center")
    .parent(frase_avvio_container);
  var frase_avvio = createP("\"pyth-IA donami la sapienza dei tuoi dati\"")
    .style("font-size: 0.7; width: 20vw; text-align: center")
    .parent(frase_avvio_container);

  ///////// KEYWORDS
  keywords_container = createDiv()
    .class('opacity_0')
    .style("position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 75vw; height: 25vw");

  var keywords_left = createDiv()
    .style("position: absolute; width: 20vw; height: 25vw")
    .parent(keywords_container);

  var morale_keyword = createP("MORALE")
    .class('keywords')
    .style("position: absolute; top: 0%; left: 0%")
    .parent(keywords_left);
  var vita_morte_keyword = createP("VITA E MORTE")
    .class('keywords')
    .style("position: absolute; top: 50%; left: 0%; transform: translateY(-50%)")
    .parent(keywords_left);
  var ispirazione_keyword = createP("ISPIRAZIONE")
    .class('keywords')
    .style("position: absolute; top: 100%; left: 0%; transform: translateY(-100%)")
    .parent(keywords_left);


  var keywords_right = createDiv()
    .style("position: absolute; width: 20vw; right: 0%; height: 25vw")
    .parent(keywords_container);

  var successo_keyword = createP("SUCCESSO")
    .class('keywords')
    .style("position: absolute; top: 0%; right: 0%")
    .parent(keywords_right);
  var amore_keyword = createP("AMORE")
    .class('keywords')
    .style("position: absolute; top: 50%; right: 0%; transform: translateY(-50%)")
    .parent(keywords_right);
  var amicizia_keyword = createP("AMICIZIA")
    .class('keywords')
    .style("position: absolute; top: 100%; right: 0%; transform: translateY(-100%)")
    .parent(keywords_right);

  /////////DISCO
  disco = createDiv();
  disco.id('disco');
  disco.class('opacity_0');
  // disco.hide();

  ////////// Access_button
  access_button = createButton('ACCEDI ALL\'ORACOLO');
  access_button.id('access_button');
  access_button.mousePressed(activate_pythIA);

  ////////// LOGO
  logo = createImg('assets/logo.png')
    .style('position: absolute; top: 2.5%; left: 2.5%; width: 10vw')


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

function serialError(err) {}

function draw() {
  background(255);

  //   if (audios[0].isPlaying() == true || audios[1].isPlaying() == true || audios[2].isPlaying() == true || audios[3].isPlaying() == true || audios[4].isPlaying() == true || audios[5].isPlaying() == true || audios[6].isPlaying() == true) {
  //   stopRecord = true;
  // } else {
  //   stopRecord = false;
  //   allSpeech.onEnd = restartAllSpeech;
  // }


  volume = analyzer.getLevel();
  volumeRemap = map(volume, 0, 1, 0, 255);
  volume_read = map(volume, 0, 1.4, width / 5.5, width/3);

  var inner = color(255,255,255);
  const outer = color(255);

  if (stopArduinoLEDS == true) {
    //outByte = 25500 / 100;
    //outVolume = 25500 / 100;
    //outVolume = 0;
    outColor = 7;
  } else if (step_1 == false || step_2 == false || step_3 == false) {
    if (redColor == true) {
      outColor = 1;
      // fill(255, 0, 0, 200);
      inner = color(255, 0, 0);
    } else if (orangeColor == true) {
      outColor = 2;
      // fill(190, 25, 0, 200);
      inner = color(190, 25, 0);
    } else if (greenColor == true) {
      outColor = 3;
      // fill(0, 200, 0, 200);
      inner = color(0, 200, 0);
    } else if (blueColor == true) {
      outColor = 4;
      // fill(0, 35, 200, 200);
      inner = color(0, 35, 200);
    } else if (violetColor == true) {
      outColor = 5;
      // fill(160, 0, 200, 200);
      inner = color(160, 0, 200);
    } else if (pinkColor == true) {
      outColor = 6;
      // fill(230, 51, 112, 200);
      inner = color(230, 51, 112);
    } else if (loadEffect == true) {
      outColor = 8;
      // fill(245, 237, 181, 200);
      inner = color(179, 132, 34);
    } else {
      outColor = 0;

      // fill(245, 237, 181, 200);
      inner = color(179, 132, 34);
    }
    //outByte = int(map(volume * 10, 0, 1, 0, 255));
    outVolume = int(map(volume * 10, 0, 1, 0, 255));
  }

  stringToRead = "<" + outColor + "," + outVolume + ">";
  serial.write(stringToRead);


  //console.log('step_1: ' + step_1 + ',', 'step_2: ' + step_2 + ',', 'step_3: ' + step_3, 'outByte: ' + outByte);

  // fill(0);
  // // display the incoming serial data as a string:
  // text("incoming value: " + inData, 30, 30);
  // text("stringToRead: " + stringToRead, 30, 60);
  // text("outByte: " + outByte, 30, 90);
  push();
  // fill(212, 175, 55);
  // stroke(255, 248, 184);
  // strokeWeight(5);
  // ellipse(width / 2, height / 2, width / 6);
  ellipseMode(RADIUS);
  // ellipse(width / 2, height / 2, width / 6);

  noStroke();
  if (volume_read > last_volume_read) {
    for (var i = last_volume_read; i <= volume_read; i += 1) { // i += 6
      for (let j = i; j > 100; j-= 6) {
        const step = j / i;
        const colour = lerpColor(inner, outer, step);
        fill(colour);
        ellipse(width / 2, height / 2, step * i);
      }
      // ellipse(width / 2, height / 2, i);
    }
  } else {
    for (var i = last_volume_read; i >= volume_read; i -= 1) { // i -= 6
      for (let j = i; j > 100; j-= 6) {
        const step = j / i;
        const colour = lerpColor(inner, outer, step);
        fill(colour);
        ellipse(width / 2, height / 2, step * i);
      }
      // ellipse(width / 2, height / 2, i);
    }
  }
  last_volume_read = volume_read;

  pop();

  console.log('step_1: ' + step_1 + ',', 'step_2: ' + step_2 + ',', 'step_3: ' + step_3, 'loadEffect: ' + loadEffect);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === 49) {
    step_1 = true;
    step_2 = false;
    step_3 = false;
    lavoro_var = false;
    amicizia_relInter_var = false;
    amore_var = false;
    ispirazione_var = false;
    vita_morte_var = false;
    etica_morale_var = false;
    redColor = false;
    orangeColor = false;
    greenColor = false;
    blueColor = false;
    violetColor = false;
    pinkColor = false;
    loadEffect = false;
  } else if (keyCode === 50) {
    step_1 = false;
    step_2 = true;
    step_3 = false;
    lavoro_var = false;
    amicizia_relInter_var = false;
    amore_var = false;
    ispirazione_var = false;
    vita_morte_var = false;
    etica_morale_var = false;
    redColor = false;
    orangeColor = false;
    greenColor = false;
    blueColor = false;
    violetColor = false;
    pinkColor = false;
    loadEffect = false;
  }
}

function activate_pythIA() {
  access_button.hide();
  disco.addClass('transition');
  disco.addClass('opacity_1');
    // disco.show();

  frase_avvio_container.addClass('transition');
  setTimeout(function() {
    frase_avvio_container.addClass('opacity_1');
  }, 600);

  createAllSpeech();
  step_1 = true;
}

function createAllSpeech() {

  allSpeech.onResult = startPythia;
  allSpeech.start();

  allSpeech.onEnd = restartAllSpeech;

}

function restartAllSpeech() {
  if (step_1 == true || step_2 == true || step_3 == true) {
    allSpeech.start();
    //console.log('start');
  }
}

function askYourQuestion() {
  step_2 = false;
  keywords_container.removeClass('opacity_1');
  keywords_container.addClass('opacity_0');
  audios[1].play();
  audios[1].onended(createSpeechRec_3);
}

function createSpeechRec_3() {
  setTimeout(function() {
    step_3 = true;
  }, 0);
  createAllSpeech();
}

function reset() {
  setTimeout(function() {
    step_1 = true;
  }, 0);
  createAllSpeech();
  setTimeout(function() {
    frase_avvio_container.addClass('opacity_1');
  }, 600);
  // disco.removeClass('opacity_1');
  // disco.addClass('opacity_0');
  // setTimeout(function() {
  //   access_button.show();
  // }, 600);
  stopArduinoLEDS = true;
  errorCounter = 0;
}

function errorCase() {
  step_3 = false;
  errorCounter++;
  if (errorCounter == 1) {
    audios[6].play();
    audios[6].onended(function() {
      setTimeout(function() {
        step_3 = true;
      }, 0);
      createAllSpeech();
    })
  } else if (errorCounter == 2) {
    lavoro_var = false;
    amicizia_relInter_var = false;
    amore_var = false;
    ispirazione_var = false;
    vita_morte_var = false;
    etica_morale_var = false;
    step_3 = false;
    audios[5].play();
    audios[5].onended(farewell2);
  }
}

function farewell() {
  setTimeout(function() {
    audios[3].play();
    audios[3].onended(reset);
  }, 0);

  redColor = false;
  orangeColor = false;
  greenColor = false;
  blueColor = false;
  violetColor = false;
  pinkColor = false;
}

function farewell2() {
  setTimeout(function() {
    audios[4].play();
    audios[4].onended(reset);
  }, 0);

  redColor = false;
  orangeColor = false;
  greenColor = false;
  blueColor = false;
  violetColor = false;
  pinkColor = false;
}

function loading() {
  loadEffect = true;
}

function Red() {
  redColor = true;
}

function Orange() {
  orangeColor = true;
}

function Green() {
  greenColor = true;
}

function Blue() {
  blueColor = true;
}

function Violet() {
  violetColor = true;
}

function Pink() {
  pinkColor = true;
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
        stopArduinoLEDS = false;
        step_1 = false;
        frase_avvio_container.removeClass('opacity_1');
        frase_avvio_container.addClass('opacity_0');
        //var benvenuto = Math.round(random(0,3));
        audios[0].play();
        // if (audios[0].isPlaying() == true) {
        //   preventRec();
        // }
        first_keyword_got = false;
        second_keyword_got = false;
        third_keyword_got = false;
        audios[0].onended(createSpeechRec_2);


        function createSpeechRec_2() {
          step_2 = true;
          keywords_container.addClass('transition');
          keywords_container.addClass('opacity_1');
          createAllSpeech();

        }
      }
    }
  }
  if (step_2 == true) {
    if (allSpeech.resultValue == true) {

      console.log(allSpeech.resultString + "222");
      sentence = allSpeech.resultString.toLowerCase();
      console.log(sentence);

      const tag_keyword = ['successo', 'amicizia', 'amore', 'ispirazione', 'vita', 'morte', 'morale'];

      if (tag_keyword.some(keyword => sentence.includes('successo') && !sentence.includes('amicizia') && !sentence.includes('amore') && !sentence.includes('ispirazione') && !sentence.includes('vita') && !sentence.includes('morte') && !sentence.includes('morale'))) {
        lavoro_var = true;
        console.log('ok lavoro');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('amicizia') && !sentence.includes('successo') && !sentence.includes('amore') && !sentence.includes('ispirazione') && !sentence.includes('vita') && !sentence.includes('morte') && !sentence.includes('morale'))) {
        amicizia_relInter_var = true;
        console.log('ok amicizia_relInter');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('amore') && !sentence.includes('successo') && !sentence.includes('amicizia') && !sentence.includes('ispirazione') && !sentence.includes('vita') && !sentence.includes('morte') && !sentence.includes('morale'))) {
        amore_var = true;
        console.log('ok amore');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('ispirazione') && !sentence.includes('successo') && !sentence.includes('amicizia') && !sentence.includes('amore') && !sentence.includes('vita') && !sentence.includes('morte') && !sentence.includes('morale'))) {
        ispirazione_var = true;
        console.log('ok ispirazione');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('vita') && sentence.includes('morte') && !sentence.includes('successo') && !sentence.includes('amicizia') && !sentence.includes('amore') && !sentence.includes('ispirazione') && !sentence.includes('morale'))) {
        vita_morte_var = true;
        console.log('ok vita_morte');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('morale') && !sentence.includes('successo') && !sentence.includes('amicizia') && !sentence.includes('amore') && !sentence.includes('ispirazione') && !sentence.includes('vita') && !sentence.includes('morte'))) {
        etica_morale_var = true;
        console.log('ok etica_morale');
        askYourQuestion();
      }
    }
    // if (lavoro_var == true || amicizia_relInter_var == true || amore_var == true || ispirazione_var == true || vita_morte_var == true || etica_morale_var == true) {
    //   step_2 = false;
    //   console.log('che katz');
    //   audios[1].play();
    //   audios[1].onended(createSpeechRec_3);
    // }
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// RISPOSTE
  if (step_3 == true) {
    if (allSpeech.resultValue == true) {
      //console.log('step 3 ok');
      sentence = allSpeech.resultString.toLowerCase();
      sentenceDio = allSpeech.resultString;
      console.log(allSpeech.resultString.toLowerCase());
      console.log(sentenceDio);

      //////////////////////////////////////////////////////////////////////////////////////// LAVORO
      if (lavoro_var == true) {
        if (lavoro_generico_keywords.some(keyword => sentence.includes(keyword))) {
          if (lavoro_bene_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_bene_cit = lavoro_bene_cits[Math.round(Math.random() * (lavoro_bene_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_bene_audio = Math.round(random([347, 360, 373, 375]));
                audios[lavoro_bene_audio].play();
                lavoro_var = false;
                audios[lavoro_bene_audio].onended(farewell);
                // alert(lavoro_bene_cit);
                // farewell();
                if (audios[347].isPlaying() == true) {
                  Green();
                }
                // else if (audios[348].isPlaying() == true) {
                //   Green();
                // }
                else if (audios[360].isPlaying() == true) {
                  Blue();
                }
                // else if (audios[362].isPlaying() == true) {
                //   Red();
                // }
                else if (audios[373].isPlaying() == true) {
                  Violet();
                } else if (audios[375].isPlaying() == true) {
                  Orange();
                }
              }
            });
          } else if (cosa_serveLav_2_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var cosa_serveLav_2_cit = cosa_serveLav_2_cits[Math.round(Math.random() * (cosa_serveLav_2_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);
              ////////////////////////////////// alcool
              function playCit() {
                loadEffect = false;
                var cosa_serveLav_2_audio = Math.round(random([350]));
                audios[cosa_serveLav_2_audio].play();
                lavoro_var = false;
                audios[cosa_serveLav_2_audio].onended(farewell);
                // alert(cosa_serveLav_2_cit);
                // farewell();
                if (audios[350].isPlaying() == true) {
                  Violet();
                }
              }
            });
          } else if (cosa_serveLav_generico_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var cosa_serveLav_generico_cit = cosa_serveLav_generico_cits[Math.round(Math.random() * (cosa_serveLav_generico_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var cosa_serveLav_generico_audio = Math.round(random([349, 350, 351, 352, 353, 354, 355, 356, 357, 391]));
                audios[cosa_serveLav_generico_audio].play();
                lavoro_var = false;
                audios[cosa_serveLav_generico_audio].onended(farewell);
                // alert(cosa_serveLav_generico_cit);
                // farewell();
                if (audios[349].isPlaying() == true) {
                  Orange();
                } else if (audios[350].isPlaying() == true) {
                  Violet();
                } else if (audios[351].isPlaying() == true) {
                  Pink();
                } else if (audios[352].isPlaying() == true) {
                  Orange();
                } else if (audios[353].isPlaying() == true) {
                  Green();
                } else if (audios[354].isPlaying() == true) {
                  Orange();
                } else if (audios[355].isPlaying() == true) {
                  Blue();
                } else if (audios[356].isPlaying() == true) {
                  Green();
                } else if (audios[357].isPlaying() == true) {
                  Green();
                } else if (audios[391].isPlaying() == true) {
                  Red();
                }
              }
            });
          } else if (soldi_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var soldi_cit = soldi_cits[Math.round(Math.random() * (soldi_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var soldi_audio = Math.round(random([358, 387, 393]));
                audios[soldi_audio].play();
                lavoro_var = false;
                audios[soldi_audio].onended(farewell);
                // alert(soldi_cit);
                // farewell();
                if (audios[358].isPlaying() == true) {
                  Green();
                } else if (audios[387].isPlaying() == true) {
                  Red();
                } else if (audios[393].isPlaying() == true) {
                  Green();
                }
              }
            });
          } else if (lavoro_vita_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_vita_cit = lavoro_vita_cits[Math.round(Math.random() * (lavoro_vita_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_vita_audio = Math.round(random([361, 362, 351, 355, 363, 364, 365, 366, 354, 367, 368]));
                audios[lavoro_vita_audio].play();
                lavoro_var = false;
                audios[lavoro_vita_audio].onended(farewell);
                // alert(lavoro_vita_cit);
                // farewell();
                if (audios[361].isPlaying() == true) {
                  Violet();
                } else if (audios[362].isPlaying() == true) {
                  Red();
                } else if (audios[351].isPlaying() == true) {
                  Pink();
                } else if (audios[355].isPlaying() == true) {
                  Blue();
                } else if (audios[363].isPlaying() == true) {
                  Blue();
                } else if (audios[364].isPlaying() == true) {
                  Orange();
                } else if (audios[365].isPlaying() == true) {
                  Green();
                } else if (audios[366].isPlaying() == true) {
                  Pink();
                } else if (audios[354].isPlaying() == true) {
                  Orange();
                } else if (audios[367].isPlaying() == true) {
                  Green();
                }
                // else if (audios[356].isPlaying() == true) {
                //   Green();
                // }
                else if (audios[368].isPlaying() == true) {
                  Violet();
                }
              }
            });
          } else if (lavoro_giusto_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_giusto_cit = lavoro_giusto_cits[Math.round(Math.random() * (lavoro_giusto_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_giusto_audio = Math.round(random([371, 372, 359]));
                audios[lavoro_giusto_audio].play();
                lavoro_var = false;
                audios[lavoro_giusto_audio].onended(farewell);
                // alert(lavoro_giusto_cit);
                // farewell();
                // if (audios[369].isPlaying() == true) {
                //   Blue();
                // }
                // if (audios[370].isPlaying() == true) {
                //   Red();
                // }
                if (audios[371].isPlaying() == true) {
                  Green();
                } else if (audios[372].isPlaying() == true) {
                  Red();
                } else if (audios[359].isPlaying() == true) {
                  Orange();
                }
              }
            });
          } else if (lavoro_vergogna_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_vergogna_cit = lavoro_vergogna_cits[Math.round(Math.random() * (lavoro_vergogna_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_vergogna_audio = Math.round(random([370]));
                audios[lavoro_vergogna_audio].play();
                lavoro_var = false;
                audios[lavoro_vergogna_audio].onended(farewell);
                // alert(lavoro_vergogna_cit);
                // farewell();
                if (audios[370].isPlaying() == true) {
                  Red();
                }
              }
            });
          } else if (motiv_1_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var motiv_1_cit = motiv_1_cits[Math.round(Math.random() * (motiv_1_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var motiv_1_audio = Math.round(random([373, 374, 375]));
                audios[motiv_1_audio].play();
                lavoro_var = false;
                audios[motiv_1_audio].onended(farewell);
                // alert(motiv_1_cit);
                // farewell();
                if (audios[373].isPlaying() == true) {
                  Violet();
                } else if (audios[374].isPlaying() == true) {
                  Orange();
                } else if (audios[375].isPlaying() == true) {
                  Orange();
                }
                // else if (audios[376].isPlaying() == true) {
                //   Green();
                // }
              }
            });
          } else if (motiv_2_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var motiv_2_cit = motiv_2_cits[Math.round(Math.random() * (motiv_2_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var motiv_2_audio = Math.round(random([377]));
                audios[motiv_2_audio].play();
                lavoro_var = false;
                audios[motiv_2_audio].onended(farewell);
                // alert(motiv_2_cit);
                // farewell();
                if (audios[377].isPlaying() == true) {
                  Red();
                }
                // else if (audios[354].isPlaying() == true) {
                //   Violet();
                // } else if (audios[378].isPlaying() == true) {
                //   Blue();
                // }
              }
            });
          } else if (lavoro_energia_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_energia_cit = lavoro_energia_cits[Math.round(Math.random() * (lavoro_energia_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_energia_audio = Math.round(random([378]));
                audios[lavoro_energia_audio].play();
                lavoro_var = false;
                audios[lavoro_energia_audio].onended(farewell);
                // alert(lavoro_energia_cit);
                // farewell();
                if (audios[378].isPlaying() == true) {
                  Blue();
                }
                // else if (audios[354].isPlaying() == true) {
                //   Violet();
                // } else if (audios[378].isPlaying() == true) {
                //   Blue();
                // }
              }
            });
          } else if (lavoro_amore_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_amore_cit = lavoro_amore_cits[Math.round(Math.random() * (lavoro_amore_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_amore_audio = Math.round(random([379]));
                audios[lavoro_amore_audio].play();
                lavoro_var = false;
                audios[lavoro_amore_audio].onended(farewell);
                // alert(lavoro_amore_cit);
                // farewell();
                if (audios[379].isPlaying() == true) {
                  Green();
                }
                // else if (audios[380].isPlaying() == true) {
                //   Pink();
                // } else if (audios[381].isPlaying() == true) {
                //   Pink();
                // }
              }
            });
          } else if (amore_proprio_lav_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var amore_proprio_lav_cit = amore_proprio_lav_cits[Math.round(Math.random() * (amore_proprio_lav_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var amore_proprio_lav_audio = Math.round(random([359, 351]));
                audios[amore_proprio_lav_audio].play();
                lavoro_var = false;
                audios[amore_proprio_lav_audio].onended(farewell);
                // alert(amore_proprio_lav_cit);
                // farewell();
                // if (audios[382].isPlaying() == true) {
                //   Red();
                // } else if (audios[383].isPlaying() == true) {
                //   Pink();
                // }
                if (audios[359].isPlaying() == true) {
                  Orange();
                } else if (audios[351].isPlaying() == true) {
                  Pink();
                }
              }
            });
          } else if (frasi_posneg_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var frasi_posneg_cit = frasi_posneg_cits[Math.round(Math.random() * (frasi_posneg_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var frasi_posneg_audio = Math.round(random([385, 386]));
                audios[frasi_posneg_audio].play();
                lavoro_var = false;
                audios[frasi_posneg_audio].onended(farewell);
                // alert(frasi_posneg_cit);
                // farewell();
                // if (audios[384].isPlaying() == true) {
                //   Red();
                // }
                if (audios[385].isPlaying() == true) {
                  Orange();
                } else if (audios[386].isPlaying() == true) {
                  Blue();
                }
                //else if (audios[387].isPlaying() == true) {
                //   Red();
                // } else if (audios[388].isPlaying() == true) {
                //   Red();
                // } else if (audios[389].isPlaying() == true) {
                //   Pink();
                // } else if (audios[390].isPlaying() == true) {
                //   Violet();
                // } else if (audios[359].isPlaying() == true) {
                //   Orange();
                // } else if (audios[391].isPlaying() == true) {
                //   Red();
                // } else if (audios[392].isPlaying() == true) {
                //   Red();
                // }
              }
            });
          } else if (lavoro_diffida_keywords.some(keyword => sentence.includes(keyword))) {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_diffida_cit = lavoro_diffida_cits[Math.round(Math.random() * (lavoro_diffida_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_diffida_audio = Math.round(random([388, 367]));
                audios[lavoro_diffida_audio].play();
                lavoro_var = false;
                audios[lavoro_diffida_audio].onended(farewell);
                // alert(lavoro_diffida_cit);
                // farewell();
                // if (audios[384].isPlaying() == true) {
                //   Red();
                // }
                if (audios[388].isPlaying() == true) {
                  Red();
                } else if (audios[367].isPlaying() == true) {
                  Green();
                }
              }
            });
          } else {
            step_3 = false;
            audios[2].play();
            console.log("Found");
            //var lavoro_generico_cit = lavoro_generico_cits[Math.round(Math.random() * (lavoro_generico_cits.length - 1))];
            audios[2].onended(function() {
              loading();
              setTimeout(playCit, 8200);

              function playCit() {
                loadEffect = false;
                var lavoro_generico_audio = Math.round(random([373, 374, 375]));
                audios[lavoro_generico_audio].play();
                lavoro_var = false;
                audios[lavoro_generico_audio].onended(farewell);
                // alert(lavoro_generico_cit);
                // farewell();
                if (audios[373].isPlaying() == true) {
                  Violet();
                } else if (audios[374].isPlaying() == true) {
                  Orange();
                } else if (audios[375].isPlaying() == true) {
                  Orange();
                }
                // else if (audios[376].isPlaying() == true) {
                //   Green();
                // } else if (audios[377].isPlaying() == true) {
                //   Red();
                // } else if (audios[354].isPlaying() == true) {
                //   Violet();
                // } else if (audios[378].isPlaying() == true) {
                //   Blue();
                // }
              }
            });
          }
        }
        //////////////////// SUCCESSO
        else if (lavoro_vita_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var lavoro_vita_cit = lavoro_vita_cits[Math.round(Math.random() * (lavoro_vita_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var lavoro_vita2_audio = Math.round(random([361, 362, 351, 355, 363, 364, 365, 366, 354, 367, 368]));
              audios[lavoro_vita2_audio].play();
              lavoro_var = false;
              audios[lavoro_vita2_audio].onended(farewell);
              // alert(lavoro_vita2_cit);
              // farewell();
              if (audios[361].isPlaying() == true) {
                Violet();
              } else if (audios[362].isPlaying() == true) {
                Red();
              } else if (audios[351].isPlaying() == true) {
                Pink();
              } else if (audios[355].isPlaying() == true) {
                Blue();
              } else if (audios[363].isPlaying() == true) {
                Blue();
              } else if (audios[364].isPlaying() == true) {
                Orange();
              } else if (audios[365].isPlaying() == true) {
                Green();
              } else if (audios[366].isPlaying() == true) {
                Pink();
              } else if (audios[354].isPlaying() == true) {
                Orange();
              } else if (audios[367].isPlaying() == true) {
                Green();
              }
              // else if (audios[356].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[368].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (sport_succ_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var sport_succ_cit = sport_succ_cits[Math.round(Math.random() * (sport_succ_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var sport_succ_audio = Math.round(random([431, 435, 436]));
              audios[sport_succ_audio].play();
              lavoro_var = false;
              audios[sport_succ_audio].onended(farewell);
              // alert(sport_succ_cit);
              // farewell();
              if (audios[431].isPlaying() == true) {
                Blue();
              }
              // else if (audios[432].isPlaying() == true) {
              //   Orange();
              // } else if (audios[433].isPlaying() == true) {
              //   Blue();
              // } else if (audios[434].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[435].isPlaying() == true) {
                Green();
              } else if (audios[436].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (felicità_succ_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var felicità_succ_cit = felicità_succ_cits[Math.round(Math.random() * (felicità_succ_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var felicità_succ_audio = Math.round(random([444, 461, 462, 463, 464, 465, 466, 467, 468, 469]));
              audios[felicità_succ_audio].play();
              lavoro_var = false;
              audios[felicità_succ_audio].onended(farewell);
              // alert(felicità_succ_cit);
              // farewell();
              if (audios[444].isPlaying() == true) {
                Pink();
              } else if (audios[461].isPlaying() == true) {
                Pink();
              } else if (audios[462].isPlaying() == true) {
                Pink();
              } else if (audios[463].isPlaying() == true) {
                Pink();
              } else if (audios[464].isPlaying() == true) {
                Orange();
              } else if (audios[465].isPlaying() == true) {
                Blue();
              } else if (audios[466].isPlaying() == true) {
                Orange();
              } else if (audios[467].isPlaying() == true) {
                Blue();
              } else if (audios[468].isPlaying() == true) {
                Violet();
              } else if (audios[469].isPlaying() == true) {
                Blue();
              }
              // else if (audios[470].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (camb_audacia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var camb_audacia_cit = camb_audacia_cits[Math.round(Math.random() * (camb_audacia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var camb_audacia_audio = Math.round(random([446, 447, 448, 449, 452, 453, 454, 457, 458, 459, 460, 418, 419]));
              audios[camb_audacia_audio].play();
              lavoro_var = false;
              audios[camb_audacia_audio].onended(farewell);
              // alert(camb_audacia_cit);
              // farewell();
              if (audios[446].isPlaying() == true) {
                Blue();
              } else if (audios[447].isPlaying() == true) {
                Orange();
              } else if (audios[448].isPlaying() == true) {
                Orange();
              } else if (audios[449].isPlaying() == true) {
                Blue();
              }
              // else if (audios[450].isPlaying() == true) {
              //   Green();
              // } else if (audios[451].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[452].isPlaying() == true) {
                Pink();
              } else if (audios[453].isPlaying() == true) {
                Blue();
              } else if (audios[454].isPlaying() == true) {
                Orange();
              }
              // else if (audios[455].isPlaying() == true) {
              //   Blue();
              // } else if (audios[456].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[457].isPlaying() == true) {
                Orange();
              } else if (audios[458].isPlaying() == true) {
                Blue();
              } else if (audios[459].isPlaying() == true) {
                Pink();
              }
              // else if (audios[460].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[418].isPlaying() == true) {
                Green();
              } else if (audios[419].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (cosa_ambire_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var cosa_ambire_cit = cosa_ambire_cits[Math.round(Math.random() * (cosa_ambire_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var cosa_ambire_audio = Math.round(random([437, 439, 440, 441, 442]));
              audios[cosa_ambire_audio].play();
              lavoro_var = false;
              audios[cosa_ambire_audio].onended(farewell);
              // alert(cosa_ambire_cit);
              // farewell();
              if (audios[437].isPlaying() == true) {
                Blue();
              }
              // else if (audios[438].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[439].isPlaying() == true) {
                Orange();
              } else if (audios[440].isPlaying() == true) {
                Pink();
              } else if (audios[441].isPlaying() == true) {
                Blue();
              } else if (audios[442].isPlaying() == true) {
                Blue();
              }
              // else if (audios[443].isPlaying() == true) {
              //   Pink();
              // } else if (audios[444].isPlaying() == true) {
              //   Pink();
              // } else if (audios[445].isPlaying() == true) {
              //   Orange();
              // }
            }
          });
        } else if (occasioni_succ_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var occasioni_succ_cit = occasioni_succ_cits[Math.round(Math.random() * (occasioni_succ_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var occasioni_succ_audio = Math.round(random([471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 482, 483]));
              audios[occasioni_succ_audio].play();
              lavoro_var = false;
              audios[occasioni_succ_audio].onended(farewell);
              // alert(occasioni_succ_cit);
              // farewell();
              if (audios[471].isPlaying() == true) {
                Orange();
              } else if (audios[472].isPlaying() == true) {
                Green();
              } else if (audios[473].isPlaying() == true) {
                Violet();
              } else if (audios[474].isPlaying() == true) {
                Violet();
              } else if (audios[475].isPlaying() == true) {
                Green();
              } else if (audios[476].isPlaying() == true) {
                Blue();
              } else if (audios[477].isPlaying() == true) {
                Blue();
              } else if (audios[478].isPlaying() == true) {
                Blue();
              } else if (audios[479].isPlaying() == true) {
                Blue();
              } else if (audios[480].isPlaying() == true) {
                Orange();
              }
              // else if (audios[481].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[482].isPlaying() == true) {
                Blue();
              } else if (audios[483].isPlaying() == true) {
                Violet();
              }
              // else if (audios[484].isPlaying() == true) {
              //   Orange();
              // }
            }
          });
        } else if (motivazione_succ_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var motivazione_succ_cit = motivazione_succ_cits[Math.round(Math.random() * (motivazione_succ_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var motivazione_succ_audio = Math.round(random([421, 422, 423, 425, 426, 427, 428, 430, 283]));
              audios[motivazione_succ_audio].play();
              lavoro_var = false;
              audios[motivazione_succ_audio].onended(farewell);
              // alert(motivazione_succ_cit);
              // farewell();
              // if (audios[417].isPlaying() == true) {
              //   Pink();
              // } else if (audios[420].isPlaying() == true) {
              //   Orange();
              // }
              if (audios[421].isPlaying() == true) {
                Pink();
              } else if (audios[422].isPlaying() == true) {
                Green();
              } else if (audios[423].isPlaying() == true) {
                Green();
              }
              // else if (audios[424].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[425].isPlaying() == true) {
                Orange();
              } else if (audios[426].isPlaying() == true) {
                Blue();
              } else if (audios[427].isPlaying() == true) {
                Blue();
              } else if (audios[428].isPlaying() == true) {
                Blue();
              }
              // else if (audios[429].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[430].isPlaying() == true) {
                Orange();
              } else if (audios[283].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (autostima_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var autostima_cit = autostima_cits[Math.round(Math.random() * (autostima_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var autostima_audio = Math.round(random([496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 511]));
              audios[autostima_audio].play();
              lavoro_var = false;
              audios[autostima_audio].onended(farewell);
              // alert(autostima_cit);
              // farewell();
              // if (audios[444].isPlaying() == true) {
              //   Pink();
              // }
              if (audios[496].isPlaying() == true) {
                Red();
              } else if (audios[497].isPlaying() == true) {
                Pink();
              } else if (audios[498].isPlaying() == true) {
                Violet();
              } else if (audios[499].isPlaying() == true) {
                Blue();
              } else if (audios[500].isPlaying() == true) {
                Orange();
              } else if (audios[501].isPlaying() == true) {
                Orange();
              } else if (audios[502].isPlaying() == true) {
                Orange();
              } else if (audios[503].isPlaying() == true) {
                Violet();
              } else if (audios[504].isPlaying() == true) {
                Pink();
              } else if (audios[505].isPlaying() == true) {
                Violet();
              } else if (audios[506].isPlaying() == true) {
                Pink();
              } else if (audios[507].isPlaying() == true) {
                Pink();
              } else if (audios[508].isPlaying() == true) {
                Orange();
              }
              // else if (audios[509].isPlaying() == true) {
              //   Orange();
              // } else if (audios[510].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[511].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (problemi_succ_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var problemi_succ_cit = problemi_succ_cits[Math.round(Math.random() * (problemi_succ_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var problemi_succ_audio = Math.round(random([482, 483, 494]));
              audios[problemi_succ_audio].play();
              lavoro_var = false;
              audios[problemi_succ_audio].onended(farewell);
              // alert(problemi_succ_cit);
              // farewell();
              if (audios[482].isPlaying() == true) {
                Blue();
              } else if (audios[483].isPlaying() == true) {
                Violet();
              } else if (audios[494].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (come_fare_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var come_fare_cit = come_fare_cits[Math.round(Math.random() * (come_fare_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var come_fare_audio = Math.round(random([485, 486, 487, 488, 489, 490, 492, 493, 494]));
              audios[come_fare_audio].play();
              lavoro_var = false;
              audios[come_fare_audio].onended(farewell);
              // alert(come_fare_cit);
              // farewell();
              if (audios[485].isPlaying() == true) {
                Pink();
              } else if (audios[486].isPlaying() == true) {
                Blue();
              } else if (audios[487].isPlaying() == true) {
                Blue();
              } else if (audios[488].isPlaying() == true) {
                Blue();
              } else if (audios[489].isPlaying() == true) {
                Blue();
              } else if (audios[490].isPlaying() == true) {
                Blue();
              } else if (audios[492].isPlaying() == true) {
                Blue();
              } else if (audios[493].isPlaying() == true) {
                Blue();
              } else if (audios[494].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (ecologia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var ecologia_cit = ecologia_cits[Math.round(Math.random() * (ecologia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var ecologia_audio = Math.round(random([516, 517, 518, 519, 520, 521, 522]));
              audios[ecologia_audio].play();
              lavoro_var = false;
              audios[ecologia_audio].onended(farewell);
              // alert(ecologia_cit);
              // farewell();
              if (audios[516].isPlaying() == true) {
                Red();
              } else if (audios[517].isPlaying() == true) {
                Red();
              } else if (audios[518].isPlaying() == true) {
                Pink();
              } else if (audios[519].isPlaying() == true) {
                Violet();
              } else if (audios[520].isPlaying() == true) {
                Pink();
              } else if (audios[521].isPlaying() == true) {
                Green();
              } else if (audios[522].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (fut_tecnologia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var fut_tecnologia_cit = fut_tecnologia_cits[Math.round(Math.random() * (fut_tecnologia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var fut_tecnologia_audio = Math.round(random([512, 513, 514, 515]));
              audios[fut_tecnologia_audio].play();
              lavoro_var = false;
              audios[fut_tecnologia_audio].onended(farewell);
              // alert(fut_tecnologia_cit);
              // farewell();
              if (audios[512].isPlaying() == true) {
                Green();
              } else if (audios[513].isPlaying() == true) {
                Red();
              } else if (audios[514].isPlaying() == true) {
                Blue();
              } else if (audios[515].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (forza_animo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var forza_animo_cit = forza_animo_cits[Math.round(Math.random() * (forza_animo_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var forza_animo_audio = Math.round(random([394, 395, 396, 397, 398, 399, 400, 402, 404, 405, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416]));
              audios[forza_animo_audio].play();
              lavoro_var = false;
              audios[forza_animo_audio].onended(farewell);
              // alert(forza_animo_cit);
              // farewell();
              if (audios[394].isPlaying() == true) {
                Green();
              } else if (audios[395].isPlaying() == true) {
                Pink();
              } else if (audios[396].isPlaying() == true) {
                Green();
              } else if (audios[397].isPlaying() == true) {
                Blue();
              } else if (audios[398].isPlaying() == true) {
                Orange();
              } else if (audios[399].isPlaying() == true) {
                Orange();
              } else if (audios[400].isPlaying() == true) {
                Blue();
              }
              // else if (audios[401].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[402].isPlaying() == true) {
                Green();
              }
              // else if (audios[403].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[404].isPlaying() == true) {
                Blue();
              } else if (audios[405].isPlaying() == true) {
                Blue();
              }
              // else if (audios[406].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[407].isPlaying() == true) {
                Orange();
              } else if (audios[408].isPlaying() == true) {
                Blue();
              } else if (audios[409].isPlaying() == true) {
                Blue();
              } else if (audios[410].isPlaying() == true) {
                Orange();
              } else if (audios[411].isPlaying() == true) {
                Orange();
              } else if (audios[412].isPlaying() == true) {
                Orange0();
              } else if (audios[413].isPlaying() == true) {
                Orange();
              } else if (audios[414].isPlaying() == true) {
                Blue();
              } else if (audios[415].isPlaying() == true) {
                Blue();
              } else if (audios[416].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (futuro_succ_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var futuro_succ_cit = futuro_cits[Math.round(Math.random() * (futuro_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var futuro_succ_audio = Math.round(random([165, 166, 167, 169, 170, 171, 172, 173, 175, 176, 177, 180, 182, 184, 185, 186, 187, 188]));
              audios[futuro_succ_audio].play();
              lavoro_var = false;
              audios[futuro_succ_audio].onended(farewell);
              // alert(futuro_amicizia_rel_cit);
              // farewell();
              if (audios[165].isPlaying() == true) {
                Green();
              } else if (audios[166].isPlaying() == true) {
                Blue();
              } else if (audios[167].isPlaying() == true) {
                Orange();
              }
              // else if (audios[168].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[169].isPlaying() == true) {
                Green();
              } else if (audios[170].isPlaying() == true) {
                Violet();
              } else if (audios[171].isPlaying() == true) {
                Blue();
              } else if (audios[172].isPlaying() == true) {
                Orange();
              } else if (audios[173].isPlaying() == true) {
                Green();
              }
              // else if (audios[174].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[175].isPlaying() == true) {
                Blue();
              } else if (audios[176].isPlaying() == true) {
                Green();
              } else if (audios[177].isPlaying() == true) {
                Green();
              }
              // else if (audios[178].isPlaying() == true) {
              //   Orange();
              // } else if (audios[179].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[180].isPlaying() == true) {
                Violet();
              }
              // else if (audios[181].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[182].isPlaying() == true) {
                Orange();
              }
              // else if (audios[183].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[184].isPlaying() == true) {
                Blue();
              } else if (audios[185].isPlaying() == true) {
                Pink();
              } else if (audios[186].isPlaying() == true) {
                Blue();
              } else if (audios[187].isPlaying() == true) {
                Blue();
              } else if (audios[188].isPlaying() == true) {
                Blue();
              }
              // else if (audios[189].isPlaying() == true) {
              //   Violet();
              // } else if (audios[190].isPlaying() == true) {
              //   Violet();
              // } else if (audios[191].isPlaying() == true) {
              //   Violet();
              // }
            }
          });
        } else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// AMICIZIA E RELAZIONI INTERPERSONALI
      else if (amicizia_relInter_var == true) {
        if (amicizia_generico_keywords.some(keyword => sentence.includes(keyword)) && sep_feriti_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var sep_feriti_amicizia_cit = sep_feriti_amicizia_cits[Math.round(Math.random() * (sep_feriti_amicizia_cits.length -1))];  // Math.random() *
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var sep_feriti_amicizia_audio = Math.round(random([84, 85, 86]));
              audios[sep_feriti_amicizia_audio].play();
              amicizia_relInter_var = false;
              audios[sep_feriti_amicizia_audio].onended(farewell);
              // alert(sep_feriti_amicizia_cit);
              // farewell();
              if (audios[84].isPlaying() == true) {
                Violet();
              } else if (audios[85].isPlaying() == true) {
                Pink();
              } else if (audios[86].isPlaying() == true) {
                Violet();
              }
              // else if (audios[87].isPlaying() == true) {
              //   Blue();
              // } else if (audios[88].isPlaying() == true) {
              //   Violet();
              // }
            }
          });
        } else if (vera_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var vera_amicizia_cit = vera_amicizia_cits[Math.round(Math.random() * (vera_amicizia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var vera_amicizia_audio = Math.round(random([62, 63, 65, 68, 70, 71, 72, 74, 76, 79, 80, 82, 83]));
              audios[vera_amicizia_audio].play();
              amicizia_relInter_var = false;
              audios[vera_amicizia_audio].onended(farewell);
              // alert(vera_amicizia_cit);
              // farewell();
              if (audios[62].isPlaying() == true) {
                Red();
              } else if (audios[63].isPlaying() == true) {
                Violet();
              }
              // else if (audios[64].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[65].isPlaying() == true) {
                Pink();
              }
              // else if (audios[66].isPlaying() == true) {
              //   Green();
              // } else if (audios[67].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[68].isPlaying() == true) {
                Blue();
              }
              // else if (audios[69].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[70].isPlaying() == true) {
                Blue();
              } else if (audios[71].isPlaying() == true) {
                Pink();
              } else if (audios[72].isPlaying() == true) {
                Blue();
              }
              // else if (audios[73].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[74].isPlaying() == true) {
                Blue();
              }
              // else if (audios[75].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[76].isPlaying() == true) {
                Violet();
              }
              // else if (audios[77].isPlaying() == true) {
              //   Blue();
              // } else if (audios[78].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[79].isPlaying() == true) {
                Pink();
              } else if (audios[80].isPlaying() == true) {
                Pink();
              }
              // else if (audios[81].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[82].isPlaying() == true) {
                Red();
              } else if (audios[83].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (falsa_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var falsa_amicizia_cit = falsa_amicizia_cits[Math.round(Math.random() * (falsa_amicizia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var falsa_amicizia_audio = Math.round(random([91, 92, 25])); // 82
              audios[falsa_amicizia_audio].play();
              amicizia_relInter_var = false;
              audios[falsa_amicizia_audio].onended(farewell);
              // alert(falsa_amicizia_cit);
              // farewell();
              // if (audios[89].isPlaying() == true) {
              //   Red();
              // } else if (audios[21].isPlaying() == true) {
              //   Violet();
              // } else if (audios[90].isPlaying() == true) {
              //   Blue();
              // } else if (audios[78].isPlaying() == true) {
              //   Red();
              // }
              if (audios[91].isPlaying() == true) {
                Red();
              } else if (audios[82].isPlaying() == true) {
                Red();
              } else if (audios[92].isPlaying() == true) {
                Red();
              } else if (audios[25].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (odio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var odio_cit = odio_cits[Math.round(Math.random() * (odio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var odio_audio = Math.round(random([7, 8, 9, 11, 13]));
              audios[odio_audio].play();
              amicizia_relInter_var = false;
              audios[odio_audio].onended(farewell);
              //alert(paura_cit);
              //farewell();
              if (audios[7].isPlaying() == true) {
                Green();
              } else if (audios[8].isPlaying() == true) {
                Red();
              } else if (audios[9].isPlaying() == true) {
                Red();
              }
              // else if (audios[10].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[11].isPlaying() == true) {
                Blue();
              }
              // else if (audios[12].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[13].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (bravo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var bravo_cit = bravo_cits[Math.round(Math.random() * (bravo_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var bravo_audio = Math.round(random([7, 11, 15]));
              audios[bravo_audio].play();
              amicizia_relInter_var = false;
              audios[bravo_audio].onended(farewell);
              // alert(bravo_cit);
              // farewell();
              if (audios[7].isPlaying() == true) {
                Green();
              } else if (audios[11].isPlaying() == true) {
                Blue();
              }
              // else if (audios[12].isPlaying() == true) {
              //   Orange();
              // } else if (audios[13].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[15].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (aiuto_supp_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var aiuto_supp_cit = aiuto_supp_cits[Math.round(Math.random() * (aiuto_supp_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var aiuto_supp_audio = Math.round(random([16, 18]));
              audios[aiuto_supp_audio].play();
              amicizia_relInter_var = false;
              audios[aiuto_supp_audio].onended(farewell);
              // alert(aiuto_supp_cit);
              // farewell();
              if (audios[16].isPlaying() == true) {
                Pink();
              }
              // else if (audios[17].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[18].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (solitudine_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          // var solitudine_cit = solitudine_cits[Math.round(Math.random() * (solitudine_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var solitudine_audio = Math.round(random([19, 21]));
              audios[solitudine_audio].play();
              amicizia_relInter_var = false;
              audios[solitudine_audio].onended(farewell);
              // alert(solitudine_cit);
              // farewell();
              if (audios[19].isPlaying() == true) {
                Violet();
              }
              // else if (audios[20].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[21].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (emp_emoz_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var emp_emoz_cit = emp_emoz_cits[Math.round(Math.random() * (emp_emoz_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var emp_emoz_audio = Math.round(random([22]));
              audios[emp_emoz_audio].play();
              amicizia_relInter_var = false;
              audios[emp_emoz_audio].onended(farewell);
              // alert(emp_emoz_cit);
              // farewell();
              if (audios[22].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (separazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var separazione_cit = separazione_cits[Math.round(Math.random() * (separazione_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var separazione_audio = Math.round(random([23, 24, 25]));
              audios[separazione_audio].play();
              amicizia_relInter_var = false;
              audios[separazione_audio].onended(farewell);
              // alert(separazione_cit);
              // farewell();
              if (audios[23].isPlaying() == true) {
                Violet();
              } else if (audios[24].isPlaying() == true) {
                Violet();
              } else if (audios[25].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (perdono_rel_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var perdono_rel_cit = perdono_rel_cits[Math.round(Math.random() * (perdono_rel_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var perdono_rel_audio = Math.round(random([27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39])); // 29
              audios[perdono_rel_audio].play();
              amicizia_relInter_var = false;
              audios[perdono_rel_audio].onended(farewell);
              // alert(perdono_rel_cit);
              // farewell();
              // if (audios[26].isPlaying() == true) {
              //   Blue();
              // }
              if (audios[27].isPlaying() == true) {
                Green();
              } else if (audios[28].isPlaying() == true) {
                Pink();
              } else if (audios[29].isPlaying() == true) {
                Blue();
              } else if (audios[30].isPlaying() == true) {
                Blue();
              } else if (audios[31].isPlaying() == true) {
                Blue();
              } else if (audios[32].isPlaying() == true) {
                Pink();
              } else if (audios[33].isPlaying() == true) {
                Blue();
              } else if (audios[34].isPlaying() == true) {
                Pink();
              } else if (audios[35].isPlaying() == true) {
                Blue();
              } else if (audios[36].isPlaying() == true) {
                Blue();
              } else if (audios[37].isPlaying() == true) {
                Blue();
              } else if (audios[38].isPlaying() == true) {
                Blue();
              } else if (audios[39].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (gelosia_rel_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var gelosia_rel_cit = gelosia_rel_cits[Math.round(Math.random() * (gelosia_rel_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var gelosia_rel_audio = Math.round(random([40, 41, 42, 43, 44, 46, 47, 48, 49]));
              audios[gelosia_rel_audio].play();
              amicizia_relInter_var = false;
              audios[gelosia_rel_audio].onended(farewell);
              // alert(gelosia_rel_cit);
              // farewell();
              if (audios[40].isPlaying() == true) {
                Red();
              } else if (audios[41].isPlaying() == true) {
                Blue();
              } else if (audios[42].isPlaying() == true) {
                Blue();
              } else if (audios[43].isPlaying() == true) {
                Violet();
              } else if (audios[44].isPlaying() == true) {
                Blue();
              }
              // else if (audios[45].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[46].isPlaying() == true) {
                Blue();
              } else if (audios[47].isPlaying() == true) {
                Red();
              } else if (audios[48].isPlaying() == true) {
                Blue();
              } else if (audios[49].isPlaying() == true) {
                Red();
              }
              // else if (audios[50].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (tradimento_rel_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var tradimento_rel_cit = tradimento_rel_cits[Math.round(Math.random() * (tradimento_rel_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var tradimento_rel_audio = Math.round(random([51, 53, 55, 56, 57, 60, 61]));
              audios[tradimento_rel_audio].play();
              amicizia_relInter_var = false;
              audios[tradimento_rel_audio].onended(farewell);
              // alert(tradimento_rel_cit);
              // farewell();
              if (audios[51].isPlaying() == true) {
                Red();
              }
              // else if (audios[52].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[53].isPlaying() == true) {
                Red();
              }
              // else if (audios[54].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[55].isPlaying() == true) {
                Red();
              } else if (audios[56].isPlaying() == true) {
                Blue();
              } else if (audios[57].isPlaying() == true) {
                Blue();
              }
              // else if (audios[58].isPlaying() == true) {
              //   Red();
              // } else if (audios[59].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[60].isPlaying() == true) {
                Red();
              } else if (audios[61].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (famiglia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var famiglia_amicizia_rel_cit = famiglia_cits[Math.round(Math.random() * (famiglia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var famiglia_amicizia_rel_audio = Math.round(random([156, 157, 161, 162]));
              audios[famiglia_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              audios[famiglia_amicizia_rel_audio].onended(farewell);
              // alert(famiglia_amicizia_rel_cit);
              // farewell();
              if (audios[156].isPlaying() == true) {
                Red();
              } else if (audios[157].isPlaying() == true) {
                Orange();
              }
              // else if (audios[158].isPlaying() == true) {
              //   Blue();
              // } else if (audios[160].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[161].isPlaying() == true) {
                Blue();
              } else if (audios[162].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (fratello_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var fratello_amicizia_rel_cit = fratello_cits[Math.round(Math.random() * (fratello_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var fratello_amicizia_rel_audio = Math.round(random([163]));
              audios[fratello_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              audios[fratello_amicizia_rel_audio].onended(farewell);
              // alert(fratello_amicizia_rel_cit);
              // farewell();
              if (audios[163].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (sorella_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var sorella_amicizia_rel_cit = sorella_cits[Math.round(Math.random() * (sorella_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var sorella_amicizia_rel_audio = Math.round(random([159]));
              audios[sorella_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              audios[sorella_amicizia_rel_audio].onended(farewell);
              // alert(sorella_amicizia_rel_cit);
              // farewell();
              if (audios[159].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (futuro_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var futuro_amicizia_rel_cit = futuro_cits[Math.round(Math.random() * (futuro_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var futuro_amicizia_rel_audio = Math.round(random([167, 170, 171, 172, 173, 176, 180, 182, 187]));
              audios[futuro_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              audios[futuro_amicizia_rel_audio].onended(farewell);
              // alert(futuro_amicizia_rel_cit);
              // farewell();
              // if (audios[165].isPlaying() == true) {
              //   Green();
              // } else if (audios[166].isPlaying() == true) {
              //   Blue();
              // }
              if (audios[167].isPlaying() == true) {
                Orange();
              }
              // else if (audios[168].isPlaying() == true) {
              //   Blue();
              // } else if (audios[169].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[170].isPlaying() == true) {
                Violet();
              } else if (audios[171].isPlaying() == true) {
                Blue();
              } else if (audios[172].isPlaying() == true) {
                Orange();
              } else if (audios[173].isPlaying() == true) {
                Green();
              }
              // else if (audios[174].isPlaying() == true) {
              //   Orange();
              // } else if (audios[175].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[176].isPlaying() == true) {
                Green();
              }
              // else if (audios[177].isPlaying() == true) {
              //   Green();
              // } else if (audios[178].isPlaying() == true) {
              //   Orange();
              // } else if (audios[179].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[180].isPlaying() == true) {
                Violet();
              }
              // else if (audios[181].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[182].isPlaying() == true) {
                Orange();
              }
              // else if (audios[183].isPlaying() == true) {
              //   Violet();
              // } else if (audios[184].isPlaying() == true) {
              //   Blue();
              // } else if (audios[185].isPlaying() == true) {
              //   Pink();
              // } else if (audios[186].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[187].isPlaying() == true) {
                Blue();
              }
              // else if (audios[188].isPlaying() == true) {
              //   Blue();
              // } else if (audios[189].isPlaying() == true) {
              //   Violet();
              // } else if (audios[190].isPlaying() == true) {
              //   Violet();
              // } else if (audios[191].isPlaying() == true) {
              //   Violet();
              // }
            }
          });
        } else if (amicizia_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var amicizia_generico_cit = vera_amicizia_cits[Math.round(Math.random() * (vera_amicizia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var amicizia_generico_audio = Math.round(random([62, 63, 65, 68, 70, 71, 72, 74, 76, 79, 80, 82, 83]));
              audios[amicizia_generico_audio].play();
              amicizia_relInter_var = false;
              audios[amicizia_generico_audio].onended(farewell);
              // alert(amicizia_generico_cit);
              // farewell();
              if (audios[62].isPlaying() == true) {
                Red();
              } else if (audios[63].isPlaying() == true) {
                Violet();
              }
              // else if (audios[64].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[65].isPlaying() == true) {
                Pink();
              }
              // else if (audios[66].isPlaying() == true) {
              //   Green();
              // } else if (audios[67].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[68].isPlaying() == true) {
                Blue();
              }
              // else if (audios[69].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[70].isPlaying() == true) {
                Blue();
              } else if (audios[71].isPlaying() == true) {
                Pink();
              } else if (audios[72].isPlaying() == true) {
                Blue();
              }
              // else if (audios[73].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[74].isPlaying() == true) {
                Blue();
              }
              // else if (audios[75].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[76].isPlaying() == true) {
                Violet();
              }
              // else if (audios[77].isPlaying() == true) {
              //   Blue();
              // } else if (audios[78].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[79].isPlaying() == true) {
                Pink();
              } else if (audios[80].isPlaying() == true) {
                Pink();
              }
              // else if (audios[81].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[82].isPlaying() == true) {
                Red();
              } else if (audios[83].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// AMORE
      else if (amore_var == true) {
        if (moglie_marito_keywords.some(keyword => sentence.includes(keyword)) && divorzio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var matrimonio_divorzio_cit = matrimonio_divorzio_cits[Math.round(Math.random() * (matrimonio_divorzio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var matrimonio_divorzio2_audio = Math.round(random([128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144]));
              audios[matrimonio_divorzio2_audio].play();
              amore_var = false;
              audios[matrimonio_divorzio2_audio].onended(farewell);
              // alert(matrimonio_divorzio2_cit);
              // farewell();
              if (audios[128].isPlaying() == true) {
                Blue();
              } else if (audios[129].isPlaying() == true) {
                Blue();
              } else if (audios[130].isPlaying() == true) {
                Blue();
              } else if (audios[131].isPlaying() == true) {
                Blue();
              } else if (audios[132].isPlaying() == true) {
                Blue();
              } else if (audios[133].isPlaying() == true) {
                Blue();
              } else if (audios[134].isPlaying() == true) {
                Blue();
              } else if (audios[135].isPlaying() == true) {
                Red();
              } else if (audios[136].isPlaying() == true) {
                Violet();
              } else if (audios[137].isPlaying() == true) {
                Blue();
              } else if (audios[138].isPlaying() == true) {
                Pink();
              } else if (audios[139].isPlaying() == true) {
                Blue();
              } else if (audios[140].isPlaying() == true) {
                Blue();
              } else if (audios[141].isPlaying() == true) {
                Blue();
              } else if (audios[142].isPlaying() == true) {
                Blue();
              } else if (audios[143].isPlaying() == true) {
                Red();
              } else if (audios[144].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (lasciare_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var lasciare_cit = lasciare_cits[Math.round(Math.random() * (lasciare_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var lasciare_audio = Math.round(random([93, 94, 96, 97, 87, 98, 88, 25, 99]));
              audios[lasciare_audio].play();
              amore_var = false;
              audios[lasciare_audio].onended(farewell);
              // alert(lasciare_cit);
              // farewell();
              if (audios[93].isPlaying() == true) {
                Orange();
              } else if (audios[94].isPlaying() == true) {
                Blue();
              }
              // else if (audios[95].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[96].isPlaying() == true) {
                Green();
              } else if (audios[97].isPlaying() == true) {
                Violet();
              } else if (audios[87].isPlaying() == true) {
                Blue();
              } else if (audios[98].isPlaying() == true) {
                Blue();
              } else if (audios[88].isPlaying() == true) {
                Violet();
              } else if (audios[25].isPlaying() == true) {
                Red();
              } else if (audios[99].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (falso_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var falso_amore_cit = falso_amore_cits[Math.round(Math.random() * (falso_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var falso_amore_audio = Math.round(random([101, 97]));
              audios[falso_amore_audio].play();
              amore_var = false;
              audios[falso_amore_audio].onended(farewell);
              // alert(falso_amore_cit);
              // farewell();
              // if (audios[100].isPlaying() == true) {
              //   Red();
              // }
              if (audios[101].isPlaying() == true) {
                Green();
              }
              // else if (audios[102].isPlaying() == true) {
              //   Orange();
              // } else if (audios[103].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[97].isPlaying() == true) {
                Violet();
              }
              // else if (audios[25].isPlaying() == true) {
              //   Red();
              // }
            }
          });
        } else if (amore_vero_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var amore_vero_cit = amore_vero_cits[Math.round(Math.random() * (amore_vero_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var amore_vero_audio = Math.round(random([104, 106, 107, 109, 110, 111, 83, 113, 114, 115, 103]));
              audios[amore_vero_audio].play();
              amore_var = false;
              audios[amore_vero_audio].onended(farewell);
              // alert(amore_vero_cit);
              // farewell();
              if (audios[104].isPlaying() == true) {
                Pink();
              }
              // else if (audios[105].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[106].isPlaying() == true) {
                Blue();
              } else if (audios[107].isPlaying() == true) {
                Blue();
              }
              // else if (audios[108].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[109].isPlaying() == true) {
                Pink();
              } else if (audios[110].isPlaying() == true) {
                Blue();
              } else if (audios[111].isPlaying() == true) {
                Orange();
              } else if (audios[83].isPlaying() == true) {
                Pink();
              }
              // else if (audios[112].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[113].isPlaying() == true) {
                Blue();
              } else if (audios[114].isPlaying() == true) {
                Pink();
              } else if (audios[115].isPlaying() == true) {
                Blue();
              } else if (audios[103].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (non_corrisposto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var non_corrisposto_cit = non_corrisposto_cits[Math.round(Math.random() * (non_corrisposto_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var non_corrisposto_audio = Math.round(random([116, 118, 119, 99, 121, 122, 123]));
              audios[non_corrisposto_audio].play();
              amore_var = false;
              audios[non_corrisposto_audio].onended(farewell);
              // alert(non_corrisposto_cit);
              // farewell();
              // if (audios[102].isPlaying() == true) {
              //   Red();
              // }
              if (audios[116].isPlaying() == true) {
                Blue();
              }
              // else if (audios[117].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[118].isPlaying() == true) {
                Blue();
              } else if (audios[119].isPlaying() == true) {
                Blue();
              }
              // else if (audios[120].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[99].isPlaying() == true) {
                Blue();
              } else if (audios[121].isPlaying() == true) {
                Blue();
              } else if (audios[122].isPlaying() == true) {
                Blue();
              } else if (audios[123].isPlaying() == true) {
                Blue();
              }
              // else if (audios[124].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (gelosia_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var gelosia_amore_cit = gelosia_amore_cits[Math.round(Math.random() * (gelosia_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var gelosia_amore_audio = Math.round(random([125, 126, 127, 44]));
              audios[gelosia_amore_audio].play();
              amore_var = false;
              audios[gelosia_amore_audio].onended(farewell);
              // alert(gelosia_amore_cit);
              // farewell();
              if (audios[125].isPlaying() == true) {
                Blue();
              } else if (audios[126].isPlaying() == true) {
                Blue();
              } else if (audios[127].isPlaying() == true) {
                Blue();
              } else if (audios[44].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (matrimonio_divorzio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var matrimonio_divorzio_cit = matrimonio_divorzio_cits[Math.round(Math.random() * (matrimonio_divorzio_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var matrimonio_divorzio_audio = Math.round(random([128, 129, 133, 135, 136, 137, 138, 139, 140, 144]));
              audios[matrimonio_divorzio_audio].play();
              amore_var = false;
              audios[matrimonio_divorzio_audio].onended(farewell);
              // alert(matrimonio_divorzio_cit);
              // farewell();
              if (audios[128].isPlaying() == true) {
                Blue();
              } else if (audios[129].isPlaying() == true) {
                Blue();
              }
              // else if (audios[130].isPlaying() == true) {
              //   Blue();
              // } else if (audios[131].isPlaying() == true) {
              //   Blue();
              // } else if (audios[132].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[133].isPlaying() == true) {
                Blue();
              }
              // else if (audios[134].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[135].isPlaying() == true) {
                Red();
              } else if (audios[136].isPlaying() == true) {
                Violet();
              } else if (audios[137].isPlaying() == true) {
                Blue();
              } else if (audios[138].isPlaying() == true) {
                Pink();
              } else if (audios[139].isPlaying() == true) {
                Blue();
              } else if (audios[140].isPlaying() == true) {
                Blue();
              }
              // else if (audios[141].isPlaying() == true) {
              //   Blue();
              // } else if (audios[142].isPlaying() == true) {
              //   Blue();
              // } else if (audios[143].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[144].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (perdono_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var perdono_amore_cit = perdono_amore_cits[Math.round(Math.random() * (perdono_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var perdono_amore_audio = Math.round(random([27, 28, 30, 31, 32, 34, 35, 36, 37, 38, 39]));
              audios[perdono_amore_audio].play();
              amore_var = false;
              audios[perdono_amore_audio].onended(farewell);
              // alert(perdono_amore_cit);
              // farewell();
              // if (audios[26].isPlaying() == true) {
              //   Blue();
              // }
              if (audios[27].isPlaying() == true) {
                Green();
              } else if (audios[28].isPlaying() == true) {
                Pink();
              } else if (audios[29].isPlaying() == true) {
                Blue();
              } else if (audios[30].isPlaying() == true) {
                Blue();
              } else if (audios[31].isPlaying() == true) {
                Blue();
              } else if (audios[32].isPlaying() == true) {
                Pink();
              } else if (audios[34].isPlaying() == true) {
                Pink();
              } else if (audios[35].isPlaying() == true) {
                Blue();
              } else if (audios[36].isPlaying() == true) {
                Blue();
              } else if (audios[37].isPlaying() == true) {
                Blue();
              } else if (audios[38].isPlaying() == true) {
                Blue();
              } else if (audios[39].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (tradimento_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var tradimento_amore_cit = tradimento_amore_cits[Math.round(Math.random() * (tradimento_amore_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var tradimento_amore_audio = Math.round(random([51, 53, 55, 56, 57, 60, 61, 145, 146, 147, 149]));
              audios[tradimento_amore_audio].play();
              amore_var = false;
              audios[tradimento_amore_audio].onended(farewell);
              // alert(tradimento_amore_cit);
              // farewell();
              if (audios[51].isPlaying() == true) {
                Red();
              }
              // else if (audios[52].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[53].isPlaying() == true) {
                Red();
              }
              // else if (audios[54].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[55].isPlaying() == true) {
                Red();
              } else if (audios[56].isPlaying() == true) {
                Blue();
              } else if (audios[57].isPlaying() == true) {
                Blue();
              }
              // else if (audios[58].isPlaying() == true) {
              //   Red();
              // } else if (audios[59].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[60].isPlaying() == true) {
                Red();
              } else if (audios[61].isPlaying() == true) {
                Blue();
              } else if (audios[145].isPlaying() == true) {
                Violet();
              } else if (audios[146].isPlaying() == true) {
                Red();
              } else if (audios[147].isPlaying() == true) {
                Blue();
              }
              // else if (audios[148].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[149].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (successo_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var successo_amore_cit = successo_amore_cits[Math.round(Math.random() * (successo_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var successo_amore_audio = Math.round(random([150, 151, 152, 153, 154, 155]));
              audios[successo_amore_audio].play();
              amore_var = false;
              audios[successo_amore_audio].onended(farewell);
              // alert(successo_amore_cit);
              // farewell();
              if (audios[150].isPlaying() == true) {
                Blue();
              } else if (audios[151].isPlaying() == true) {
                Blue();
              } else if (audios[152].isPlaying() == true) {
                Blue();
              } else if (audios[153].isPlaying() == true) {
                Blue();
              } else if (audios[154].isPlaying() == true) {
                Blue();
              } else if (audios[155].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (single_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var single_cit = single_cits[Math.round(Math.random() * (single_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var single_audio = Math.round(random([122]));
              audios[single_audio].play();
              amore_var = false;
              audios[single_audio].onended(farewell);
              // alert(single_cit);
              // farewell();
              if (audios[122].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (cuore_testa_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var cuore_testa_cit = cuore_testa_cits[Math.round(Math.random() * (cuore_testa_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var cuore_testa_audio = Math.round(random([164]));
              audios[cuore_testa_audio].play();
              amore_var = false;
              audios[cuore_testa_audio].onended(farewell);
              // alert(cuore_testa_cit);
              // farewell();
              if (audios[164].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (famiglia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var famiglia_amore_cit = famiglia_cits[Math.round(Math.random() * (famiglia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var famiglia_amore_audio = Math.round(random([156, 157, 161, 162]));
              audios[famiglia_amore_audio].play();
              amore_var = false;
              audios[famiglia_amore_audio].onended(farewell);
              // alert(famiglia_amore_cit);
              // farewell();
              if (audios[156].isPlaying() == true) {
                Red();
              } else if (audios[157].isPlaying() == true) {
                Orange();
              }
              // else if (audios[158].isPlaying() == true) {
              //   Blue();
              // } else if (audios[160].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[161].isPlaying() == true) {
                Blue();
              } else if (audios[162].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (fratello_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var fratello_amore_cit = fratello_cits[Math.round(Math.random() * (fratello_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var fratello_amore_audio = Math.round(random([163]));
              audios[fratello_amore_audio].play();
              amore_var = false;
              audios[fratello_amore_audio].onended(farewell);
              // alert(fratello_amore_cit);
              // farewell();
              if (audios[163].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (sorella_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var sorella_amore_cit = sorella_cits[Math.round(Math.random() * (sorella_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var sorella_amore_audio = Math.round(random([159]));
              audios[sorella_amore_audio].play();
              amore_var = false;
              audios[sorella_amore_audio].onended(farewell);
              // alert(sorella_amore_cit);
              // farewell();
              if (audios[159].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (futuro_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var futuro_amore_cit = futuro_cits[Math.round(Math.random() * (futuro_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var futuro_amore_audio = Math.round(random([167, 170, 171, 172, 173, 176, 180, 182, 187]));
              audios[futuro_amore_audio].play();
              amore_var = false;
              audios[futuro_amore_audio].onended(farewell);
              // alert(futuro_amore_cit);
              // farewell();
              // if (audios[165].isPlaying() == true) {
              //   Green();
              // } else if (audios[166].isPlaying() == true) {
              //   Blue();
              // }
              if (audios[167].isPlaying() == true) {
                Orange();
              }
              // else if (audios[168].isPlaying() == true) {
              //   Blue();
              // } else if (audios[169].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[170].isPlaying() == true) {
                Violet();
              } else if (audios[171].isPlaying() == true) {
                Blue();
              } else if (audios[172].isPlaying() == true) {
                Orange();
              } else if (audios[173].isPlaying() == true) {
                Green();
              }
              // else if (audios[174].isPlaying() == true) {
              //   Orange();
              // } else if (audios[175].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[176].isPlaying() == true) {
                Green();
              }
              // else if (audios[177].isPlaying() == true) {
              //   Green();
              // } else if (audios[178].isPlaying() == true) {
              //   Orange();
              // } else if (audios[179].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[180].isPlaying() == true) {
                Violet();
              }
              // else if (audios[181].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[182].isPlaying() == true) {
                Orange();
              }
              // else if (audios[183].isPlaying() == true) {
              //   Violet();
              // } else if (audios[184].isPlaying() == true) {
              //   Blue();
              // } else if (audios[185].isPlaying() == true) {
              //   Pink();
              // } else if (audios[186].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[187].isPlaying() == true) {
                Blue();
              }
              // else if (audios[188].isPlaying() == true) {
              //   Blue();
              // } else if (audios[189].isPlaying() == true) {
              //   Violet();
              // } else if (audios[190].isPlaying() == true) {
              //   Violet();
              // } else if (audios[191].isPlaying() == true) {
              //   Violet();
              // }
            }
          });
        } else if (amore_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var amore_generico_cit = amore_vero_cits[Math.round(Math.random() * (amore_vero_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var amore_generico_audio = Math.round(random([104, 106, 107, 109, 110, 111, 83, 113, 114, 115, 103]));
              audios[amore_generico_audio].play();
              amore_var = false;
              audios[amore_generico_audio].onended(farewell);
              // alert(amore_generico_cit);
              // farewell();
              if (audios[104].isPlaying() == true) {
                Pink();
              }
              // else if (audios[105].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[106].isPlaying() == true) {
                Blue();
              } else if (audios[107].isPlaying() == true) {
                Blue();
              }
              // else if (audios[108].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[109].isPlaying() == true) {
                Pink();
              } else if (audios[110].isPlaying() == true) {
                Blue();
              } else if (audios[111].isPlaying() == true) {
                Orange();
              } else if (audios[83].isPlaying() == true) {
                Pink();
              }
              // else if (audios[112].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[113].isPlaying() == true) {
                Blue();
              } else if (audios[114].isPlaying() == true) {
                Pink();
              } else if (audios[115].isPlaying() == true) {
                Blue();
              } else if (audios[103].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else {
          errorCase();
        }
      }
      /////////////////////////////////////////////////////////////////////////////////////// ISPIRAZIONE
      else if (ispirazione_var == true) {
        if (libro_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var libro_cit = libro_cits[Math.round(Math.random() * (libro_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var libro_audio = Math.round(random([532, 534]));
              audios[libro_audio].play();
              ispirazione_var = false;
              audios[libro_audio].onended(farewell);
              // alert(libro_cit);
              // farewell();
              if (audios[532].isPlaying() == true) {
                Violet();
              } else if (audios[534].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (scienza_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var scienza_ispirazione_cit = scienza_ispirazione_cits[Math.round(Math.random() * (scienza_ispirazione_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var scienza_ispirazione_audio = Math.round(random([578]));
              audios[scienza_ispirazione_audio].play();
              ispirazione_var = false;
              audios[scienza_ispirazione_audio].onended(farewell);
              // alert(scienza_ispirazione_cit);
              // farewell();
              if (audios[578].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (lavoro_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var lavoro_ispirazione_cit = lavoro_ispirazione_cits[Math.round(Math.random() * (lavoro_ispirazione_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var lavoro_ispirazione_audio = Math.round(random([584, 582, 575, 556]));
              audios[lavoro_ispirazione_audio].play();
              ispirazione_var = false;
              audios[lavoro_ispirazione_audio].onended(farewell);
              // alert(lavoro_ispirazione_cit);
              // farewell();
              if (audios[584].isPlaying() == true) {
                Blue();
              } else if (audios[582].isPlaying() == true) {
                Blue();
              }
              // else if (audios[558].isPlaying() == true) {
              //   Blue();
              // } else if (audios[548].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[575].isPlaying() == true) {
                Blue();
              } else if (audios[556].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (poesia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var poesia_cit = poesia_cits[Math.round(Math.random() * (poesia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var poesia_audio = Math.round(random([535, 536, 537, 539, 559]));
              audios[poesia_audio].play();
              ispirazione_var = false;
              audios[poesia_audio].onended(farewell);
              // alert(poesia_cit);
              // farewell();
              if (audios[535].isPlaying() == true) {
                Red();
              } else if (audios[536].isPlaying() == true) {
                Orange();
              } else if (audios[537].isPlaying() == true) {
                Orange();
              } else if (audios[539].isPlaying() == true) {
                Violet();
              } else if (audios[559].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (isolamento_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var isolamento_cit = isolamento_cits[Math.round(Math.random() * (isolamento_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var isolamento_audio = Math.round(random([532, 528]));
              audios[isolamento_audio].play();
              ispirazione_var = false;
              audios[isolamento_audio].onended(farewell);
              // alert(isolamento_cit);
              // farewell();
              if (audios[532].isPlaying() == true) {
                Violet();
              } else if (audios[528].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (amore_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var amore_ispirazione_cit = amore_ispirazione_cits[Math.round(Math.random() * (amore_ispirazione_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var amore_ispirazione_audio = Math.round(random([567, 568]));
              audios[amore_ispirazione_audio].play();
              ispirazione_var = false;
              audios[amore_ispirazione_audio].onended(farewell);
              // alert(amore_ispirazione_cit);
              // farewell();
              if (audios[567].isPlaying() == true) {
                Red();
              } else if (audios[568].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (canzone_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var canzone_cit = canzone_cits[Math.round(Math.random() * (canzone_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var canzone_audio = Math.round(random([540, 541]));
              audios[canzone_audio].play();
              ispirazione_var = false;
              audios[canzone_audio].onended(farewell);
              // alert(canzone_cit);
              // farewell();
              if (audios[540].isPlaying() == true) {
                Blue();
              } else if (audios[541].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (regista_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var regista_cit = regista_cits[Math.round(Math.random() * (regista_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var regista_audio = Math.round(random([555]));
              audios[regista_audio].play();
              ispirazione_var = false;
              audios[regista_audio].onended(farewell);
              // alert(regista_cit);
              // farewell();
              if (audios[555].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (artista_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var artista_cit = artista_cits[Math.round(Math.random() * (artista_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var artista_audio = Math.round(random([525, 529, 531, 585, 559, 542, 565]));
              audios[artista_audio].play();
              ispirazione_var = false;
              audios[artista_audio].onended(farewell);
              // alert(artista_cit);
              // farewell();
              if (audios[525].isPlaying() == true) {
                Green();
              } else if (audios[529].isPlaying() == true) {
                Red();
              } else if (audios[531].isPlaying() == true) {
                Pink();
              } else if (audios[585].isPlaying() == true) {
                Green();
              } else if (audios[559].isPlaying() == true) {
                Blue();
              } else if (audios[542].isPlaying() == true) {
                Red();
              } else if (audios[565].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (pittore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var pittore_cit = pittore_cits[Math.round(Math.random() * (pittore_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var pittore_audio = Math.round(random([529, 538]));
              audios[pittore_audio].play();
              ispirazione_var = false;
              audios[pittore_audio].onended(farewell);
              // alert(pittore_cit);
              // farewell();
              if (audios[529].isPlaying() == true) {
                Red();
              } else if (audios[538].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (disegnatore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var disegnatore_cit = disegnatore_cits[Math.round(Math.random() * (disegnatore_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var disegnatore_audio = Math.round(random([563]));
              audios[disegnatore_audio].play();
              ispirazione_var = false;
              audios[disegnatore_audio].onended(farewell);
              // alert(disegnatore_cit);
              // farewell();
              if (audios[563].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (raziocinio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var raziocinio_cit = raziocinio_cits[Math.round(Math.random() * (raziocinio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var raziocinio_audio = Math.round(random([523, 585, 529, 557, 542, 546, 561, 558, 548, 568]));
              audios[raziocinio_audio].play();
              ispirazione_var = false;
              audios[raziocinio_audio].onended(farewell);
              // alert(raziocinio_cit);
              // farewell();
              if (audios[523].isPlaying() == true) {
                Pink();
              } else if (audios[585].isPlaying() == true) {
                Green();
              } else if (audios[529].isPlaying() == true) {
                Red();
              } else if (audios[557].isPlaying() == true) {
                Blue();
              } else if (audios[542].isPlaying() == true) {
                Red();
              } else if (audios[546].isPlaying() == true) {
                Orange();
              } else if (audios[561].isPlaying() == true) {
                Blue();
              } else if (audios[558].isPlaying() == true) {
                Blue();
              } else if (audios[548].isPlaying() == true) {
                Blue();
              } else if (audios[568].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (architettura_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var architettura_cit = architettura_cits[Math.round(Math.random() * (architettura_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var architettura_audio = Math.round(random([530, 533]));
              audios[architettura_audio].play();
              ispirazione_var = false;
              audios[architetturae_audio].onended(farewell);
              // alert(architettura_cit);
              // farewell();
              if (audios[530].isPlaying() == true) {
                Orange();
              } else if (audios[533].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (sofferenza_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var sofferenza_ispirazione_cit = sofferenza_ispirazione_cits[Math.round(Math.random() * (sofferenza_ispirazione_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var sofferenza_ispirazione_audio = Math.round(random([564, 573, 581]));
              audios[sofferenza_ispirazione_audio].play();
              ispirazione_var = false;
              audios[sofferenza_ispirazione_audio].onended(farewell);
              // alert(sofferenza_ispirazione_cit);
              // farewell();
              if (audios[564].isPlaying() == true) {
                Red();
              } else if (audios[573].isPlaying() == true) {
                Violet();
              } else if (audios[581].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (cambiare_mondo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var cambiare_mondo_cit = cambiare_mondo_cits[Math.round(Math.random() * (cambiare_mondo_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var cambiare_mondo_audio = Math.round(random([551]));
              audios[cambiare_mondo_audio].play();
              ispirazione_var = false;
              audios[cambiare_mondo_audio].onended(farewell);
              // alert(cambiare_mondo_cit);
              // farewell();
              if (audios[551].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (idee_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var idee_cit = idee_cits[Math.round(Math.random() * (idee_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var idee_audio = Math.round(random([550, 554, 547, 579, 571, 562]));
              audios[idee_audio].play();
              ispirazione_var = false;
              audios[idee_audio].onended(farewell);
              // alert(idee_cit);
              // farewell();
              if (audios[550].isPlaying() == true) {
                Red();
              }
              // else if (audios[583].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[554].isPlaying() == true) {
                Orange();
              } else if (audios[547].isPlaying() == true) {
                Pink();
              } else if (audios[579].isPlaying() == true) {
                Orange();
              } else if (audios[571].isPlaying() == true) {
                Violet();
              } else if (audios[562].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (follia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var follia_cit = follia_cits[Math.round(Math.random() * (follia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var follia_audio = Math.round(random([543, 544, 585]));
              audios[follia_audio].play();
              ispirazione_var = false;
              audios[follia_audio].onended(farewell);
              // alert(follia_cit);
              // farewell();
              if (audios[543].isPlaying() == true) {
                Pink();
              } else if (audios[544].isPlaying() == true) {
                Red();
              } else if (audios[585].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (cultura_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var cultura_ispirazione_cit = cultura_ispirazione_cits[Math.round(Math.random() * (cultura_ispirazione_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var cultura_ispirazione_audio = Math.round(random([553, 552, 569, 576]));
              audios[cultura_ispirazione_audio].play();
              ispirazione_var = false;
              audios[cultura_ispirazione_audio].onended(farewell);
              // alert(cultura_ispirazione_cit);
              // farewell();
              if (audios[553].isPlaying() == true) {
                Blue();
              } else if (audios[552].isPlaying() == true) {
                Blue();
              } else if (audios[569].isPlaying() == true) {
                Green();
              } else if (audios[576].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (genio_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var genio_ispirazione_cit = genio_ispirazione_cits[Math.round(Math.random() * (genio_ispirazione_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var genio_ispirazione_audio = Math.round(random([549, 552]));
              audios[genio_ispirazione_audio].play();
              ispirazione_var = false;
              audios[genio_ispirazione_audio].onended(farewell);
              // alert(genio_ispirazione_cit);
              // farewell();
              if (audios[549].isPlaying() == true) {
                Green();
              } else if (audios[552].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (originalità_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var originalità_cit = originalità_cits[Math.round(Math.random() * (originalità_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var originalità_audio = Math.round(random([560, 562, 570, 565]));
              audios[originalità_audio].play();
              ispirazione_var = false;
              audios[originalità_audio].onended(farewell);
              // alert(originalità_cit);
              // farewell();
              // if (audios[549].isPlaying() == true) {
              //   Green();
              // }
              if (audios[560].isPlaying() == true) {
                Pink();
              } else if (audios[562].isPlaying() == true) {
                Green();
              } else if (audios[570].isPlaying() == true) {
                Orange();
              } else if (audios[565].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (verità_realtà_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var verità_realtà_cit = verità_realtà_cits[Math.round(Math.random() * (verità_realtà_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var verità_realtà_audio = Math.round(random([577]));
              audios[verità_realtà_audio].play();
              ispirazione_var = false;
              audios[verità_realtà_audio].onended(farewell);
              // alert(verità_realtà_cit);
              // farewell();
              if (audios[577].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (paura_fallire_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var paura_fallire_cit = paura_fallire_cits[Math.round(Math.random() * (paura_fallire_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var paura_fallire_audio = Math.round(random([574]));
              audios[paura_fallire_audio].play();
              ispirazione_var = false;
              audios[paura_fallire_audio].onended(farewell);
              // alert(paura_fallire_cit);
              // farewell();
              if (audios[574].isPlaying() == true) {
                Blue();
              }
              // else if (audios[572].isPlaying() == true) {
              //   Violet();
              // }
            }
          });
        } else if (ispirazione_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var ispirazione_generico_cit = ispirazione_generico_cits[Math.round(Math.random() * (ispirazione_generico_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var ispirazione_generico_audio = Math.round(random([523, 524, 525, 526, 527, 531, 535, 580, 582, 564, 559, 584, 545, 544, 561, 579]));
              audios[ispirazione_generico_audio].play();
              ispirazione_var = false;
              audios[ispirazione_generico_audio].onended(farewell);
              // alert(ispirazione_generico_cit);
              // farewell();
              if (audios[523].isPlaying() == true) {
                Pink();
              } else if (audios[524].isPlaying() == true) {
                Pink();
              } else if (audios[525].isPlaying() == true) {
                Green();
              } else if (audios[526].isPlaying() == true) {
                Pink();
              } else if (audios[527].isPlaying() == true) {
                Orange();
              }
              // else if (audios[566].isPlaying() == true) {
              //   Violet();
              // } else if (audios[529].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[531].isPlaying() == true) {
                Pink();
              } else if (audios[535].isPlaying() == true) {
                Red();
              } else if (audios[580].isPlaying() == true) {
                Orange();
              } else if (audios[582].isPlaying() == true) {
                Blue();
              } else if (audios[564].isPlaying() == true) {
                Red();
              } else if (audios[559].isPlaying() == true) {
                Blue();
              } else if (audios[584].isPlaying() == true) {
                Blue();
              }
              // else if (audios[583].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[545].isPlaying() == true) {
                Blue();
              } else if (audios[544].isPlaying() == true) {
                Red();
              } else if (audios[561].isPlaying() == true) {
                Blue();
              } else if (audios[579].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// VITA E MORTE
      else if (vita_morte_var == true) {
        if (esisti_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var esisti_cit = esisti_cits[Math.round(Math.random() * (esisti_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var esisti_morte_audio = Math.round(random([205]));
              audios[esisti_morte_audio].play();
              lavoro_var = false;
              audios[esisti_morte_audio].onended(farewell);
              // alert(esisti_cit);
              // farewell();
              if (audios[205].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (ecologia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var ecologia_cit = ecologia_cits[Math.round(Math.random() * (ecologia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var ecologia_morte_audio = Math.round(random([516, 517, 518, 519, 520, 521, 522]));
              audios[ecologia_morte_audio].play();
              lavoro_var = false;
              audios[ecologia_morte_audio].onended(farewell);
              // alert(ecologia_cit);
              // farewell();
              if (audios[516].isPlaying() == true) {
                Red();
              } else if (audios[517].isPlaying() == true) {
                Red();
              } else if (audios[518].isPlaying() == true) {
                Pink();
              } else if (audios[519].isPlaying() == true) {
                Violet();
              } else if (audios[520].isPlaying() == true) {
                Pink();
              } else if (audios[521].isPlaying() == true) {
                Green();
              } else if (audios[522].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (vita_e_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var vita_e_morte_cit = vita_e_morte_cits[Math.round(Math.random() * (vita_e_morte_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var vita_e_morte_audio = Math.round(random([205, 253, 221, 198, 211, 206, 205, 231, 254]));
              audios[vita_e_morte_audio].play();
              vita_morte_var = false;
              audios[vita_e_morte_audio].onended(farewell);
              // alert(vita_e_morte_cit);
              // farewell();
              if (audios[205].isPlaying() == true) {
                Violet();
              } else if (audios[253].isPlaying() == true) {
                Red();
              } else if (audios[221].isPlaying() == true) {
                Violet();
              } else if (audios[198].isPlaying() == true) {
                Orange();
              } else if (audios[211].isPlaying() == true) {
                Pink();
              } else if (audios[206].isPlaying() == true) {
                Orange();
              } else if (audios[205].isPlaying() == true) {
                Violet();
              } else if (audios[231].isPlaying() == true) {
                Violet();
              } else if (audios[254].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (paura_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var paura_cit = paura_cits[Math.round(Math.random() * (paura_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var paura_audio = Math.round(random([200, 202, 204, 218, 219, 217, 215, 212, 229, 232, 225, 194, 260, 259, 249, 248, 234, 243]));
              audios[paura_audio].play();
              vita_morte_var = false;
              audios[paura_audio].onended(farewell);
              //alert(paura_cit);
              //farewell();
              if (audios[200].isPlaying() == true) {
                Blue();
              } else if (audios[202].isPlaying() == true) {
                Orange();
              } else if (audios[204].isPlaying() == true) {
                Green();
              } else if (audios[218].isPlaying() == true) {
                Red();
              }
              // else if (audios[224].isPlaying() == true) {
              //   Orange();
              // } else if (audios[251].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[219].isPlaying() == true) {
                Green();
              } else if (audios[217].isPlaying() == true) {
                Blue();
              } else if (audios[215].isPlaying() == true) {
                Red();
              } else if (audios[212].isPlaying() == true) {
                Blue();
              } else if (audios[229].isPlaying() == true) {
                Red();
              }
              // else if (audios[231].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[232].isPlaying() == true) {
                Green();
              } else if (audios[225].isPlaying() == true) {
                Violet();
              }
              // else if (audios[213].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[194].isPlaying() == true) {
                Orange();
              } else if (audios[260].isPlaying() == true) {
                Orange();
              }
              // else if (audios[226].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[259].isPlaying() == true) {
                Red();
              } else if (audios[249].isPlaying() == true) {
                Orange();
              } else if (audios[248].isPlaying() == true) {
                Blue();
              } else if (audios[234].isPlaying() == true) {
                Violet();
              } else if (audios[243].isPlaying() == true) {
                Pink();
              }
              // else if (audios[207].isPlaying() == true) {
              //   Red();
              // }
            }
          });
        } else if (dobbiamo_morire_keywords.some(keyword => sentence.includes(keyword)) || (scopo_generico_keywords.some(keyword => sentence.includes(keyword)) && scopo_morte_keywords.some(keyword => sentence.includes(keyword)))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var dobbiamo_morire_cit = dobbiamo_morire_cits[Math.round(Math.random() * (dobbiamo_morire_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var dobbiamo_morire_audio = Math.round(random([205, 259, 240, 198]));
              audios[dobbiamo_morire_audio].play();
              vita_morte_var = false;
              audios[dobbiamo_morire_audio].onended(farewell);
              // alert(dobbiamo_morire_cit);
              // farewell();
              if (audios[205].isPlaying() == true) {
                Violet();
              } else if (audios[259].isPlaying() == true) {
                Red();
              } else if (audios[240].isPlaying() == true) {
                Blue();
              } else if (audios[198].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (scopo_vita_specifico_keywords.some(keyword => sentence.includes(keyword)) || (scopo_generico_keywords.some(keyword => sentence.includes(keyword)) && scopo_vita_keywords.some(keyword => sentence.includes(keyword)))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var dobbiamo_morire_cit = dobbiamo_morire_cits[Math.round(Math.random() * (dobbiamo_morire_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var dobbiamo_morire_audio = Math.round(random([271, 272, 275, 278, 284, 282, 288, 236]));
              audios[dobbiamo_morire_audio].play();
              vita_morte_var = false;
              audios[dobbiamo_morire_audio].onended(farewell);
              // alert(dobbiamo_morire_cit);
              // farewell();
              if (audios[271].isPlaying() == true) {
                Pink();
              } else if (audios[272].isPlaying() == true) {
                Pink();
              } else if (audios[275].isPlaying() == true) {
                Orange();
              } else if (audios[278].isPlaying() == true) {
                Green();
              } else if (audios[284].isPlaying() == true) {
                Green();
              } else if (audios[282].isPlaying() == true) {
                Red();
              } else if (audios[288].isPlaying() == true) {
                Violet();
              } else if (audios[236].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (dio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var dio_cit = dio_cits[Math.round(Math.random() * (dio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var dio_audio = Math.round(random([219, 222]));
              audios[dio_audio].play();
              vita_morte_var = false;
              audios[dio_audio].onended(farewell);
              // alert(dio_cit);
              // farewell();
              if (audios[219].isPlaying() == true) {
                Green();
              } else if (audios[222].isPlaying() == true) {
                Orange();
              }
              // else if (audios[250].isPlaying() == true) {
              //   Red();
              // }
            }
          });
        } else if (dio_keywords.some(keyword => sentenceDio.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var ddio_cit = dio_cits[Math.round(Math.random() * (dio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var ddio_audio = Math.round(random([219, 222]));
              audios[ddio_audio].play();
              vita_morte_var = false;
              audios[ddio_audio].onended(farewell);
              // alert(ddio_cit);
              // farewell();
              if (audios[219].isPlaying() == true) {
                Green();
              } else if (audios[222].isPlaying() == true) {
                Orange();
              }
              // else if (audios[250].isPlaying() == true) {
              //   Red();
              // }
            }
          });
        }
        // else if (senso_vita_keywords.some(keyword => sentence.includes(keyword))) {
        //   step_3 = false;
        //   audios[2].play();
        //   console.log("Found");
        //   //var senso_vita_cit = senso_vita_cits[Math.round(Math.random() * (senso_vita_cits.length - 1))];
        //   audios[2].onended(function() {
        //     setTimeout(playCit, 8200);
        //
        //     function playCit() {
        //       var senso_vita_audio = Math.round(random([195, 205, 253, 221, 198, 211, 206, 205, 231, 254]));
        //       audios[senso_vita_audio].play();
        //       vita_morte_var = false;
        //       audios[senso_vita_audio].onended(farewell);
        //       // alert(senso_vita_cit);
        //       // farewell();
        //       if (audios[195].isPlaying() == true) {
        //         Violet();
        //       } else if (audios[205].isPlaying() == true) {
        //         Violet();
        //       } else if (audios[253].isPlaying() == true) {
        //         Red();
        //       } else if (audios[221].isPlaying() == true) {
        //         Violet();
        //       } else if (audios[198].isPlaying() == true) {
        //         Orange();
        //       } else if (audios[211].isPlaying() == true) {
        //         Pink();
        //       } else if (audios[206].isPlaying() == true) {
        //         Orange();
        //       } else if (audios[205].isPlaying() == true) {
        //         Violet();
        //       } else if (audios[231].isPlaying() == true) {
        //         Violet();
        //       } else if (audios[254].isPlaying() == true) {
        //         Violet();
        //       }
        //     }
        //   });
        // }
        else if (morte_interiore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var morte_interiore_cit = morte_interiore_cits[Math.round(Math.random() * (morte_interiore_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var morte_interiore_audio = Math.round(random([196]));
              audios[morte_interiore_audio].play();
              vita_morte_var = false;
              audios[morte_interiore_audio].onended(farewell);
              // alert(morte_interiore_cit);
              // farewell();
              if (audios[196].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (ricordo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var ricordo_cit = ricordo_cits[Math.round(Math.random() * (ricordo_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var ricordo_audio = Math.round(random([261, 213]));
              audios[ricordo_audio].play();
              vita_morte_var = false;
              audios[ricordo_audio].onended(farewell);
              // alert(ricordo_cit);
              // farewell();
              if (audios[261].isPlaying() == true) {
                Red();
              } else if (audios[213].isPlaying() == true) {
                Red();
              }
              // else if (audios[239].isPlaying() == true) {
              //   Pink();
              // } else if (audios[220].isPlaying() == true) {
              //   Pink();
              // }
            }
          });
        } else if (lutto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var lutto_cit = lutto_cits[Math.round(Math.random() * (lutto_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var lutto_audio = Math.round(random([219, 215, 212, 194])); // 210 troppo lunga
              audios[lutto_audio].play();
              vita_morte_var = false;
              audios[lutto_audio].onended(farewell);
              // alert(lutto_cit);
              // farewell();
              // if (audios[226].isPlaying() == true) {
              //   Violet();
              // }
              // else if (audios[210].isPlaying() == true) {
              //   Violet();
              // }
              // else if (audios[244].isPlaying() == true) {
              //   Violet();
              // }
              if (audios[219].isPlaying() == true) {
                Green();
              } else if (audios[215].isPlaying() == true) {
                Red();
              } else if (audios[212].isPlaying() == true) {
                Blue();
              } else if (audios[194].isPlaying() == true) {
                Orange();
              }
              // else if (audios[220].isPlaying() == true) {
              //   Pink();
              // }
            }
          });
        } else if (quando_morirò_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var quando_morirò_cit = quando_morirò_cits[Math.round(Math.random() * (quando_morirò_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var quando_morirò_audio = Math.round(random([234, 240, 263]));
              audios[quando_morirò_audio].play();
              vita_morte_var = false;
              audios[quando_morirò_audio].onended(farewell);
              // alert(quando_morirò_cit);
              // farewell();
              // if (audios[252].isPlaying() == true) {
              //   Pink();
              // }
              if (audios[234].isPlaying() == true) {
                Violet();
              } else if (audios[240].isPlaying() == true) {
                Blue();
              } else if (audios[263].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (immortalità_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var immortalità_cit = immortalità_cits[Math.round(Math.random() * (immortalità_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var immortalità_audio = Math.round(random([223, 235, 230, 258, 245, 249, 220])); // 233 mancante
              audios[immortalità_audio].play();
              vita_morte_var = false;
              audios[immortalità_audio].onended(farewell);
              // alert(immortalità_cit);
              // farewell();
              if (audios[223].isPlaying() == true) {
                Pink();
              } else if (audios[235].isPlaying() == true) {
                Pink();
              }
              // else if (audios[239].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[230].isPlaying() == true) {
                Blue();
              } else if (audios[258].isPlaying() == true) {
                Orange();
              } else if (audios[245].isPlaying() == true) {
                Orange();
              } else if (audios[249].isPlaying() == true) {
                Orange();
              } else if (audios[220].isPlaying() == true) {
                Pink();
              }
              // else if (audios[255].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[233].isPlaying() == true) {
              //   Blue();
              // }
              // else if (audios[247].isPlaying() == true) {
              //   Orange();
              // } else if (audios[199].isPlaying() == true) {
              //   Red();
              // } else if (audios[262].isPlaying() == true) {
              //   Pink();
              // }
            }
          });
        } else if (aldilà_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var aldilà_cit = aldilà_cits[Math.round(Math.random() * (aldilà_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var aldilà_audio = Math.round(random([213, 233, 247, 199, 262])); // 233 mancante
              audios[aldilà_audio].play();
              vita_morte_var = false;
              audios[aldilà_audio].onended(farewell);
              // alert(aldilà_cit);
              // farewell();
              if (audios[213].isPlaying() == true) {
                Red();
              } else if (audios[233].isPlaying() == true) {
                Blue();
              } else if (audios[247].isPlaying() == true) {
                Orange();
              } else if (audios[199].isPlaying() == true) {
                Red();
              } else if (audios[262].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (aldilà_keywords.some(keyword => sentenceDio.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var aldilà_cit = aldilà_cits[Math.round(Math.random() * (aldilà_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var aaldilà_audio = Math.round(random([213, 233, 247, 199, 262])); // 233 mancante
              audios[aaldilà_audio].play();
              vita_morte_var = false;
              audios[aaldilà_audio].onended(farewell);
              // alert(aldilà_cit);
              // farewell();
              if (audios[213].isPlaying() == true) {
                Red();
              } else if (audios[233].isPlaying() == true) {
                Blue();
              } else if (audios[247].isPlaying() == true) {
                Orange();
              } else if (audios[199].isPlaying() == true) {
                Red();
              } else if (audios[262].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (morte_oggetti_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var morte_oggetti_cit = morte_oggetti_cits[Math.round(Math.random() * (morte_oggetti_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var morte_oggetti_audio = Math.round(random([195]));
              audios[morte_oggetti_audio].play();
              vita_morte_var = false;
              audios[morte_oggetti_audio].onended(farewell);
              // alert(morte_oggetti_cit);
              // farewell();
              if (audios[195].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (morte_noia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var morte_noia_cit = morte_noia_cits[Math.round(Math.random() * (morte_noia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var morte_noia_audio = Math.round(random([209]));
              audios[morte_noia_audio].play();
              vita_morte_var = false;
              audios[morte_noia_audio].onended(farewell);
              // alert(morte_noia_cit);
              // farewell();
              if (audios[209].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (eutanasia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var eutanasia_cit = eutanasia_cits[Math.round(Math.random() * (eutanasia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var eutanasia_audio = Math.round(random([259, 215, 313, 314, 315, 316]));
              audios[eutanasia_audio].play();
              vita_morte_var = false;
              audios[eutanasia_audio].onended(farewell);
              // alert(eutanasia_cit);
              // farewell();
              // if (audios[208].isPlaying() == true) {
              //   Red();
              // } else if (audios[243].isPlaying() == true) {
              //   Pink();
              // } else if (audios[250].isPlaying() == true) {
              //   Red();
              // } else if (audios[196].isPlaying() == true) {
              //   Violet();
              // }
              if (audios[259].isPlaying() == true) {
                Red();
              } else if (audios[215].isPlaying() == true) {
                Red();
              }
              // else if (audios[197].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[313].isPlaying() == true) {
                Violet();
              } else if (audios[314].isPlaying() == true) {
                Pink();
              } else if (audios[315].isPlaying() == true) {
                Green();
              } else if (audios[316].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (aborto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var aborto_cit = aborto_cits[Math.round(Math.random() * (aborto_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var aborto_audio = Math.round(random([312, 311, 310, 309, 308, 307]));
              audios[aborto_audio].play();
              vita_morte_var = false;
              audios[aborto_audio].onended(farewell);
              // alert(aborto_cit);
              // farewell();
              if (audios[312].isPlaying() == true) {
                Blue();
              } else if (audios[311].isPlaying() == true) {
                Violet();
              } else if (audios[310].isPlaying() == true) {
                Blue();
              } else if (audios[309].isPlaying() == true) {
                Pink();
              } else if (audios[308].isPlaying() == true) {
                Pink();
              } else if (audios[307].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (suicidio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var suicidio_cit = suicidio_cits[Math.round(Math.random() * (suicidio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var suicidio_audio = Math.round(random([197, 243, 240, 215, 313, 314, 315, 316, 241, 263]));
              audios[suicidio_audio].play();
              vita_morte_var = false;
              audios[suicidio_audio].onended(farewell);
              // alert(suicidio_cit);
              // farewell();
              if (audios[197].isPlaying() == true) {
                Violet();
              }
              // else if (audios[208].isPlaying() == true) {
              //   Red();
              // }
              else if (audios[243].isPlaying() == true) {
                Pink();
              } else if (audios[240].isPlaying() == true) {
                Blue();
              }
              // else if (audios[196].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[215].isPlaying() == true) {
                Red();
              } else if (audios[313].isPlaying() == true) {
                Violet();
              } else if (audios[314].isPlaying() == true) {
                Pink();
              } else if (audios[315].isPlaying() == true) {
                Green();
              } else if (audios[316].isPlaying() == true) {
                Violet();
              } else if (audios[241].isPlaying() == true) {
                Red();
              } else if (audios[263].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (fallimento_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var fallimento_morte_cit = fallimento_morte_cits[Math.round(Math.random() * (fallimento_morte_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var fallimento_morte_audio = Math.round(random([265, 266, 267, 271, 274, 273, 277, 279, 287, 288, 289, 292, 236]));
              audios[fallimento_morte_audio].play();
              vita_morte_var = false;
              audios[fallimento_morte_audio].onended(farewell);
              // alert(fallimento_morte_cit);
              // farewell();
              if (audios[265].isPlaying() == true) {
                Red();
              } else if (audios[266].isPlaying() == true) {
                Red();
              } else if (audios[267].isPlaying() == true) {
                Pink();
              } else if (audios[271].isPlaying() == true) {
                Pink();
              } else if (audios[274].isPlaying() == true) {
                Violet();
              } else if (audios[273].isPlaying() == true) {
                Pink();
              } else if (audios[277].isPlaying() == true) {
                Orange();
              } else if (audios[279].isPlaying() == true) {
                Green();
              } else if (audios[287].isPlaying() == true) {
                Violet();
              } else if (audios[288].isPlaying() == true) {
                Violet();
              } else if (audios[289].isPlaying() == true) {
                Red();
              } else if (audios[292].isPlaying() == true) {
                Red();
              } else if (audios[236].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (sogni_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var sogni_morte_cit = sogni_morte_cits[Math.round(Math.random() * (sogni_morte_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var sogni_morte_audio = Math.round(random([290, 246, 270, 291, 242, 228, 268, 283, 286, 246]));
              audios[sogni_morte_audio].play();
              vita_morte_var = false;
              audios[sogni_morte_audio].onended(farewell);
              // alert(sogni_morte_cit);
              // farewell();
              if (audios[290].isPlaying() == true) {
                Pink();
              } else if (audios[246].isPlaying() == true) {
                Violet();
              } else if (audios[270].isPlaying() == true) {
                Pink();
              } else if (audios[291].isPlaying() == true) {
                Blue();
              } else if (audios[242].isPlaying() == true) {
                Orange();
              }
              // else if (audios[216].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[228].isPlaying() == true) {
                Red();
              } else if (audios[268].isPlaying() == true) {
                Violet();
              } else if (audios[283].isPlaying() == true) {
                Pink();
              } else if (audios[286].isPlaying() == true) {
                Blue();
              } else if (audios[246].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (felicità_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var felicità_morte_cit = felicità_morte_cits[Math.round(Math.random() * (felicità_morte_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var felicità_morte_audio = Math.round(random([270, 280, 291, 256])); // 285, 257 mancante
              audios[felicità_morte_audio].play();
              vita_morte_var = false;
              audios[felicità_morte_audio].onended(farewell);
              // alert(felicità_morte_cit);
              // farewell();
              if (audios[270].isPlaying() == true) {
                Pink();
              }
              // else if (audios[281].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[280].isPlaying() == true) {
                Pink();
              }
              // else if (audios[285].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[291].isPlaying() == true) {
                Blue();
              }
              // else if (audios[257].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[256].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (morte_tecnologia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var morte_tecnologia_cit = morte_tecnologia_cits[Math.round(Math.random() * (morte_tecnologia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var morte_tecnologia_audio = Math.round(random([269]));
              audios[morte_tecnologia_audio].play();
              vita_morte_var = false;
              audios[morte_tecnologia_audio].onended(farewell);
              // alert(morte_tecnologia_cit);
              // farewell();
              if (audios[269].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (povero_ricco_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var povero_ricco_cit = povero_ricco_cits[Math.round(Math.random() * (povero_ricco_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var povero_ricco_audio = Math.round(random([461, 175, 182, 186]));
              audios[povero_ricco_audio].play();
              vita_morte_var = false;
              audios[povero_ricco_audio].onended(farewell);
              // alert(povero_ricco_cit);
              // farewell();
              // if (audios[229].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[268].isPlaying() == true) {
              //   Violet();
              // }
              if (audios[461].isPlaying() == true) {
                Pink();
              }
              // else if (audios[166].isPlaying() == true) {
              //   Blue();
              // }
              // else if (audios[171].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[175].isPlaying() == true) {
                Blue();
              } else if (audios[182].isPlaying() == true) {
                Orange();
              } else if (audios[186].isPlaying() == true) {
                Blue();
              }
              // else if (audios[227].isPlaying() == true) {
              //   Red();
              // }
            }
          });
        } else if (morirò_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var quando_morirò_cit = quando_morirò_cits[Math.round(Math.random() * (quando_morirò_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var morirò_audio = Math.round(random([229, 461]));
              audios[morirò_audio].play();
              vita_morte_var = false;
              audios[morirò_audio].onended(farewell);
              // alert(quando_morirò_cit);
              // farewell();
              if (audios[229].isPlaying() == true) {
                Red();
              } else if (audios[461].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (morte_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var morte_generico_cit = morte_generico_cits[Math.round(Math.random() * (morte_generico_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var morte_generico_audio = Math.round(random([193, 237, 192, 214, 208, 240, 206, 205]));
              audios[morte_generico_audio].play();
              vita_morte_var = false;
              audios[morte_generico_audio].onended(farewell);
              // alert(morte_generico_cit);
              // farewell();
              if (audios[193].isPlaying() == true) {
                Blue();
              }
              // else if (audios[197].isPlaying() == true) {
              //   Violet();
              // } else if (audios[201].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[237].isPlaying() == true) {
                Blue();
              }
              // else if (audios[259].isPlaying() == true) {
              //   Red();
              // } else if (audios[254].isPlaying() == true) {
              //   Violet();
              // }
              else if (audios[192].isPlaying() == true) {
                Orange();
              } else if (audios[214].isPlaying() == true) {
                Pink();
              }
              // else if (audios[238].isPlaying() == true) {
              //   Pink();
              // }
              else if (audios[208].isPlaying() == true) {
                Red();
              } else if (audios[240].isPlaying() == true) {
                Blue();
              }
              // else if (audios[221].isPlaying() == true) {
              //   Violet();
              // } else if (audios[198].isPlaying() == true) {
              //   Orange();
              // }
              else if (audios[206].isPlaying() == true) {
                Orange();
              } else if (audios[205].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// ETICA E MORALE
      else if (etica_morale_var == true) {

        if (etica_religio_keywords.some(keyword => sentenceDio.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_religio_Dio_cit = etica_religio_cits[Math.round(Math.random() * (etica_religio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_religio_Dio_audio = Math.round(random([295, 296, 297]));
              audios[etica_religio_Dio_audio].play();
              etica_morale_var = false;
              audios[etica_religio_Dio_audio].onended(farewell);
              // alert(etica_religio_Dio_cit);
              // farewell();
              if (audios[295].isPlaying() == true) {
                Violet();
              } else if (audios[296].isPlaying() == true) {
                Blue();
              } else if (audios[297].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (etica_religio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_religio_cit = etica_religio_cits[Math.round(Math.random() * (etica_religio_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_religio_audio = Math.round(random([295, 296, 297]));
              audios[etica_religio_audio].play();
              etica_morale_var = false;
              audios[etica_religio_audio].onended(farewell);
              // alert(etica_religio_cit);
              // farewell();
              if (audios[295].isPlaying() == true) {
                Violet();
              } else if (audios[296].isPlaying() == true) {
                Blue();
              } else if (audios[297].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (quanto_valgo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var quanto_valgo_cit = quanto_valgo_cits[Math.round(Math.random() * (quanto_valgo_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var quanto_valgo_audio = Math.round(random([298, 299]));
              audios[quanto_valgo_audio].play();
              etica_morale_var = false;
              audios[quanto_valgo_audio].onended(farewell);
              // alert(quanto_valgo_cit);
              // farewell();
              if (audios[298].isPlaying() == true) {
                Blue();
              } else if (audios[299].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (etica_economia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_economia_cit = etica_economia_cits[Math.round(Math.random() * (etica_economia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_economia_audio = Math.round(random([303]));
              audios[etica_economia_audio].play();
              etica_morale_var = false;
              audios[etica_economia_audio].onended(farewell);
              // alert(etica_economia_cit);
              // farewell();
              if (audios[303].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (etica_politica_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_politica_cit = etica_politica_cits[Math.round(Math.random() * (etica_politica_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_politica_audio = Math.round(random([304]));
              audios[etica_politica_audio].play();
              etica_morale_var = false;
              audios[etica_politica_audio].onended(farewell);
              // alert(etica_politica_cit);
              // farewell();

              if (audios[304].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (etica_cultura_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_cultura_cit = etica_cultura_cits[Math.round(Math.random() * (etica_cultura_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_cultura_audio = Math.round(random([305, 306]));
              audios[etica_cultura_audio].play();
              etica_morale_var = false;
              audios[etica_cultura_audio].onended(farewell);
              // alert(etica_cultura_cit);
              // farewell();

              if (audios[305].isPlaying() == true) {
                Green();
              } else if (audios[306].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (etica_morale_aborto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_morale_aborto_cit = etica_morale_aborto_cits[Math.round(Math.random() * (etica_morale_aborto_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_morale_aborto_audio = Math.round(random([307, 308, 309, 311, 312]));
              audios[etica_morale_aborto_audio].play();
              etica_morale_var = false;
              audios[etica_morale_aborto_audio].onended(farewell);
              // alert(etica_morale_aborto_cit);
              // farewell();

              if (audios[307].isPlaying() == true) {
                Red();
              } else if (audios[308].isPlaying() == true) {
                Pink();
              } else if (audios[309].isPlaying() == true) {
                Pink();
              }
              // else if (audios[310].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[311].isPlaying() == true) {
                Violet();
              } else if (audios[312].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (etica_morale_eutanasia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_morale_eutanasia_cit = etica_morale_eutanasia_cits[Math.round(Math.random() * (etica_morale_eutanasia_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_morale_eutanasia_audio = Math.round(random([313, 314, 315, 316]));
              audios[etica_morale_eutanasia_audio].play();
              etica_morale_var = false;
              audios[etica_morale_eutanasia_audio].onended(farewell);
              // alert(etica_morale_eutanasia_cit);
              // farewell();
              if (audios[313].isPlaying() == true) {
                Violet();
              } else if (audios[314].isPlaying() == true) {
                Pink();
              } else if (audios[315].isPlaying() == true) {
                Green();
              } else if (audios[316].isPlaying() == true) {
                Violet();
              }
              // else if (audios[317].isPlaying() == true) {
              //   Pink();
              // }
            }
          });
        } else if (etica_omosessuale_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var etica_omosessuale_cit = etica_omosessuale_cits[Math.round(Math.random() * (etica_omosessuale_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var etica_omosessuale_audio = Math.round(random([321]));
              audios[etica_omosessuale_audio].play();
              etica_morale_var = false;
              audios[etica_omosessuale_audio].onended(farewell);
              // alert(etica_omosessuale_cit);
              // farewell();
              // if (audios[318].isPlaying() == true) {
              //   Blue();
              // } else if (audios[319].isPlaying() == true) {
              //   Blue();
              // } else if (audios[320].isPlaying() == true) {
              //   Blue();
              // }
              if (audios[321].isPlaying() == true) {
                Pink();
              }
              // else if (audios[322].isPlaying() == true) {
              //   Violet();
              // } else if (audios[323].isPlaying() == true) {
              //   Pink();
              // }
            }
          });
        } else if (violenza_fisica_keywords.some(keyword => sentence.includes(keyword)) || (violenza_fisica_gen_keywords.some(keyword => sentence.includes(keyword)) && donna_gen_keywords.some(keyword => sentence.includes(keyword)))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var violenza_fisica_cit = violenza_fisica_cits[Math.round(Math.random() * (violenza_fisica_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var violenza_fisica_audio = Math.round(random([324]));
              audios[violenza_fisica_audio].play();
              etica_morale_var = false;
              audios[violenza_fisica_audio].onended(farewell);
              // alert(violenza_fisica_cit);
              // farewell();
              if (audios[324].isPlaying() == true) {
                Red();
              }
              // else if (audios[329].isPlaying() == true) {
              //   Violet();
              // }
            }
          });
        } else if (violenza_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var violenza_cit = violenza_cits[Math.round(Math.random() * (violenza_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var violenza_audio = Math.round(random([325, 326, 327, 328]));
              audios[violenza_audio].play();
              etica_morale_var = false;
              audios[violenza_audio].onended(farewell);
              // alert(violenza_cit);
              // farewell();
              if (audios[325].isPlaying() == true) {
                Green();
              } else if (audios[326].isPlaying() == true) {
                Blue();
              } else if (audios[327].isPlaying() == true) {
                Red();
              } else if (audios[328].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (abuso_droga_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var abuso_droga_cit = abuso_droga_cits[Math.round(Math.random() * (abuso_droga_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var abuso_droga_audio = Math.round(random([333])); // 345 mancante
              audios[abuso_droga_audio].play();
              etica_morale_var = false;
              audios[abuso_droga_audio].onended(farewell);
              // alert(abuso_droga_cit);
              // farewell();
              if (audios[333].isPlaying() == true) {
                Violet();
              }
              // else if (audios[345].isPlaying() == true) {
              //   Green();
              // }
              // else if (audios[346].isPlaying() == true) {
              //   Pink();
              // }
            }
          });
        } else if (abuso_alcool_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var abuso_droga_cit = abuso_droga_cits[Math.round(Math.random() * (abuso_droga_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var abuso_alcool_audio = Math.round(random([330, 346])); // 345 mancante
              audios[abuso_alcool_audio].play();
              etica_morale_var = false;
              audios[abuso_alcool_audio].onended(farewell);
              // alert(abuso_droga_cit);
              // farewell();
              if (audios[330].isPlaying() == true) {
                Green();
              }
              // else if (audios[345].isPlaying() == true) {
              //   Green();
              // }
              else if (audios[346].isPlaying() == true) {
                Pink();
              }
            }
          });
        } else if (abuso_fumo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var abuso_droga_cit = abuso_droga_cits[Math.round(Math.random() * (abuso_droga_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var abuso_fumo_audio = Math.round(random([330])); // 345 mancante
              audios[abuso_fumo_audio].play();
              etica_morale_var = false;
              audios[abuso_fumo_audio].onended(farewell);
              // alert(abuso_droga_cit);
              // farewell();
              if (audios[330].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (abuso_potere_keywords.some(keyword => sentence.includes(keyword)) && stato_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var abuso_potere_cit = abuso_potere_cits[Math.round(Math.random() * (abuso_potere_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var abuso_potere_audio = Math.round(random([331]));
              audios[abuso_potere_audio].play();
              etica_morale_var = false;
              audios[abuso_potere_audio].onended(farewell);
              // alert(abuso_potere_cit);
              // farewell();
              // if (audios[330].isPlaying() == true) {
              //   Green();
              // }
              if (audios[331].isPlaying() == true) {
                Red();
              }
              // else if (audios[332].isPlaying() == true) {
              //   Red();
              // }
            }
          });
        } else if (abuso_normale_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var abuso_potere_cit = abuso_potere_cits[Math.round(Math.random() * (abuso_potere_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var abuso_normale_audio = Math.round(random([330, 331, 332]));
              audios[abuso_normale_audio].play();
              etica_morale_var = false;
              audios[abuso_normale_audio].onended(farewell);
              // alert(abuso_potere_cit);
              // farewell();
              if (audios[330].isPlaying() == true) {
                Green();
              } else if (audios[331].isPlaying() == true) {
                Red();
              } else if (audios[332].isPlaying() == true) {
                Red();
              }
            }
          });
        } else if (razzismo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var razzismo_cit = razzismo_cits[Math.round(Math.random() * (razzismo_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var razzismo_audio = Math.round(random([336, 12, 73]));
              audios[razzismo_audio].play();
              etica_morale_var = false;
              audios[razzismo_audio].onended(farewell);
              // alert(razzismo_cit);
              // farewell();
              // if (audios[334].isPlaying() == true) {
              //   Blue();
              // } else if (audios[335].isPlaying() == true) {
              //   Violet();
              // }
              if (audios[336].isPlaying() == true) {
                Pink();
              }
              // else if (audios[337].isPlaying() == true) {
              //   Orange();
              // } else if (audios[338].isPlaying() == true) {
              //   Red();
              // } else if (audios[339].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[12].isPlaying() == true) {
                Orange();
              } else if (audios[73].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (bellezza_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var bellezza_cit = bellezza_cits[Math.round(Math.random() * (bellezza_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var bellezza_audio = Math.round(random([340]));
              audios[bellezza_audio].play();
              etica_morale_var = false;
              audios[bellezza_audio].onended(farewell);
              // alert(bellezza_cit);
              // farewell();
              if (audios[340].isPlaying() == true) {
                Green();
              }
            }
          });
        } else if (vegetariani_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var vegetariani_cit = vegetariani_cits[Math.round(Math.random() * (vegetariani_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var vegetariani_audio = Math.round(random([341]));
              audios[vegetariani_audio].play();
              etica_morale_var = false;
              audios[vegetariani_audio].onended(farewell);
              // alert(vegetariani_cit);
              // farewell();
              if (audios[341].isPlaying() == true) {
                Orange();
              }
            }
          });
        } else if (privacy_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var privacy_cit = privacy_cits[Math.round(Math.random() * (privacy_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var privacy_audio = Math.round(random([344])); // 343 mancante
              audios[privacy_audio].play();
              etica_morale_var = false;
              audios[privacy_audio].onended(farewell);
              // alert(privacy_cit);
              // farewell();
              // if (audios[342].isPlaying() == true) {
              //   Pink();
              // }
              // else if (audios[343].isPlaying() == true) {
              //   Green();
              // }
              if (audios[344].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else if (cambiamento_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          //var cambiamento_cit = cambiamento_cits[Math.round(Math.random() * (cambiamento_cits.length - 1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 8200);

            function playCit() {
              loadEffect = false;
              var cambiamento_audio = Math.round(random([293, 294, 300, 302]));
              audios[cambiamento_audio].play();
              etica_morale_var = false;
              audios[cambiamento_audio].onended(farewell);
              // alert(cambiamento_cit);
              // farewell();
              if (audios[293].isPlaying() == true) {
                Violet();
              } else if (audios[294].isPlaying() == true) {
                Orange();
              } else if (audios[300].isPlaying() == true) {
                Pink();
              }
              // else if (audios[301].isPlaying() == true) {
              //   Blue();
              // }
              else if (audios[302].isPlaying() == true) {
                Violet();
              }
            }
          });
        } else {
          errorCase();
        }
      }
      // if (final_sentence == true) {
      //   audios[3].play();
      //   audios[3].onended(reset);
      //   }
      //////////////////////////////////////// PER AUDIO

      ////////////////////////////////////////////////
    }
  }
}
