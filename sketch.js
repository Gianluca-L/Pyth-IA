///////////////////////////////////////// Pyth-IA PC

///////////////////////////// ARDUINO
var serial; // variable to hold an instance of the serialport library
var portName = 'COM5'; // fill in your serial port name here
var inData; // for incoming serial data
var outByte = 0; // for outgoing data
var outVolume = 0;
var outColor = 0;
var stringToRead = 0;
///////////// AUDIO
var fft;
var spectrum;
var envelope;
var step_1 = true;

var timer = 1;
var s = 0;

var errorCounter = 0;

// var benvenuto;
// var categoria;
// var una_sola_domanda;
// var frase_finale;

///// variables to trigger sections

var lavoro_var = false;
var amicizia_relInter_var = false;
var amore_var = false;
var ispirazione_var = false;
var vita_morte_var = false;
var etica_morale_var = false;

var final_sentence = false;

var stopArduinoLEDS = true;

var loadEffect = false

var redColor = false;
var orangeColor = false;
var greenColor = false;
var blueColor = false;
var violetColor = false;
var pinkColor = false;


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

const FOLDER = 'assets/audio/',
  EXT = '.wav',
  INDEX_START = 0,
  INDEX_END = 5,
  INDEX_TOTAL = 1 + INDEX_END - INDEX_START,
  audios = Array(INDEX_TOTAL);

function preload() {
  myFont = loadFont('assets/Neoneon.otf');

  // benvenuto = loadSound("./assets/audio/benvenuto.mp3");
  // categoria = loadSound("./assets/audio/categoria.mp3");
  // una_sola_domanda = loadSound("./assets/audio/una_sola_domanda.mp3");
  // frase_finale = loadSound("./assets/audio/frase_finale.mp3");

  for (var i = 0; i < INDEX_TOTAL; ++i) {
    audios[i] = loadSound(FOLDER + (i + INDEX_START) + EXT);
  }

}

// function mouseClicked() {
//   var colorHex = Math.round(random(0, 6));
//   outColor = colorHex;
//   console.log(outColor);
// }
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    var colorHex = Math.round(random(0, 6));
    outColor = colorHex;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);

  createAllSpeech();
  //createSpeechRec_1();

  /// AUDIO

  analyzer = new p5.Amplitude();
  for (var i = 0; i < INDEX_TOTAL; ++i) {
    analyzer.setInput(audios[i]);
  }


  //envelope = new p5.Env();

  //fft = new p5.FFT();
  //
  // speech = new p5.Speech();

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

  if (stopArduinoLEDS == true) {
    //outByte = 25500 / 100;
    //outVolume = 25500 / 100;
    //outVolume = 0;
    outColor = 7;
  } else if (step_1 == false || step_2 == false || step_3 == false) {
    if (redColor == true) {
      outColor = 1;
    } else if (orangeColor == true) {
      outColor = 2;
    } else if (greenColor == true) {
      outColor = 3;
    } else if (blueColor == true) {
      outColor = 4;
    } else if (violetColor == true) {
      outColor = 5;
    } else if (pinkColor == true) {
      outColor = 6;
    } else if (loadEffect == true) {
      outColor = 8;
    } else {
      outColor = 0;
    }
    //outByte = int(map(volume * 10, 0, 1, 0, 255));
    outVolume = int(map(volume * 10, 0, 1, 0, 255));
  }



  stringToRead = "<" + outColor + "," + outVolume + ">";
  //stringToRead = "<" + 'hello' + "," + outVolume + "," + outColor + ">";
  //stringToRead = "V" + outVolume.toString() + "," + "C" + outColor.toString() + ",";
  //stringToRead = outVolume.toString() + "," + outColor.toString() + "*";
  serial.write(stringToRead);
  //serial.write(outByte);
  //serial.write(140, 200, 100);
  //spectrum = fft.analyze();



  //console.log('step_1: ' + step_1 + ',', 'step_2: ' + step_2 + ',', 'step_3: ' + step_3, 'outByte: ' + outByte);
  console.log('step_1: ' + step_1 + ',', 'step_2: ' + step_2 + ',', 'step_3: ' + step_3);
  fill(0);
  // display the incoming serial data as a string:
  text("incoming value: " + inData, 30, 30);
  text("stringToRead: " + stringToRead, 30, 60);
  text("outByte: " + outByte, 30, 90);
  push();
  fill(212, 175, 55);
  stroke(255, 248, 184);
  strokeWeight(5);
  ellipseMode(RADIUS);
  ellipse(width / 2, height / 2, width / 6);
  fill(212, 175, 55, 50);
  noStroke();
  ellipse(width / 2, height / 2, width / 5 * volume);

  pop();
}

function createAllSpeech() {
  if (audios[0].isPlaying() == false || audios[1].isPlaying() == false || audios[2].isPlaying() == false || audios[3].isPlaying() == false) {
    allSpeech.onResult = startPythia;
  }
  allSpeech.start();
  allSpeech.onEnd = restartAllSpeech;
}

function restartAllSpeech() {
  allSpeech.start();
}

function askYourQuestion() {
  step_2 = false;
  audios[1].play();
  audios[1].onended(createSpeechRec_3);
}

function createSpeechRec_3() {
  setTimeout(function() {
    step_3 = true;
  }, 1500);
}

function reset() {
  //frase_finale.stop();
  setTimeout(function() {
    step_1 = true;
  }, 2000);
  final_sentence = false;
  stopArduinoLEDS = true;
  errorCounter = 0;
  //createSpeechRec_1();
}

function errorCase() {
  step_3 = false;
  errorCounter++;
  if (errorCounter == 1) {
    audios[5].play();
    audios[5].onended(function() {
      setTimeout(function() {
        step_3 = true;
      }, 1500);
    })
  } else if (errorCounter == 2) {
    lavoro_var = false;
    amicizia_relInter_var = false;
    amore_var = false;
    ispirazione_var = false;
    vita_morte_var = false;
    etica_morale_var = false;
    step_3 = false;
    audios[4].play();
    audios[4].onended(farewell);
  }
}

function farewell() {
  audios[3].play();
  audios[3].onended(reset);
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
  stopArduinoLEDS = false;
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
        // if (audios[0].isPlaying() == true) {
        //   preventRec();
        // }
        first_keyword_got = false;
        second_keyword_got = false;
        third_keyword_got = false;
        audios[0].onended(createSpeechRec_2);


        function createSpeechRec_2() {
          step_2 = true;
        }
      }
    }
  }
  if (step_2 == true) {
    if (allSpeech.resultValue == true) {

      console.log(allSpeech.resultString + "222");
      sentence = allSpeech.resultString.toLowerCase();
      console.log(sentence);

      const tag_keyword = ['lavoro', 'amicizia', 'relazioni interpersonali', 'amore', 'ispirazione', 'vita', 'morte', 'etica', 'morale'];

      if (tag_keyword.some(keyword => sentence.includes('lavoro'))) {
        lavoro_var = true;
        console.log('ok lavoro');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('amicizia') && sentence.includes('relazioni interpersonali'))) {
        amicizia_relInter_var = true;
        console.log('ok amicizia_relInter');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('amore'))) {
        amore_var = true;
        console.log('ok amore');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('ispirazione'))) {
        ispirazione_var = true;
        console.log('ok ispirazione');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('vita') && sentence.includes('morte'))) {
        vita_morte_var = true;
        console.log('ok vita_morte');
        askYourQuestion();
      } else if (tag_keyword.some(keyword => sentence.includes('etica') && sentence.includes('morale'))) {
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
      if (lavoro_bene_keywords.some(keyword => sentence.includes(keyword))) {
        step_3 = false;
        audios[2].play();
        console.log("Found");
        var lavoro_bene_cit = lavoro_bene_cits[Math.round(Math.random() * (lavoro_bene_cits.length -1))];
        audios[2].onended(function() {
          loading();
          setTimeout(playCit, 3000);

          function playCit() {
            loadEffect = false;
            var lavoro_bene_audio = Math.round(random([4, 5]));
            //audios[lavoro_bene_audio].play();
            lavoro_var = false;
            //audios[lavoro_bene_audio].onended(farewell);
            alert(lavoro_bene_cit);
            farewell();
            // if (audios[4].isPlaying() == true) {
            //   Red();
            // }
            // else if (audios[5].isPlaying() == true) {
            //   Blue();
            // }
          }
        });
      }
      else if (cosa_serveLav_1_keywords.some(keyword => sentence.includes(keyword))) {
        step_3 = false;
        audios[2].play();
        console.log("Found");
        var cosa_serveLav_1_cit = cosa_serveLav_1_cits[Math.round(Math.random() * (cosa_serveLav_1_cits.length -1))];
        audios[2].onended(function() {
          loading();
          setTimeout(playCit, 3000);

          function playCit() {
            loadEffect = false;
            var cosa_serveLav_1_audio = Math.round(random([4, 5]));
            //audios[cosa_serveLav_1_audio].play();
            lavoro_var = false;
            //audios[cosa_serveLav_1_audio].onended(farewell);
            alert(cosa_serveLav_1_cit);
            farewell();
            // if (audios[4].isPlaying() == true) {
            //   Red();
            // }
            // else if (audios[5].isPlaying() == true) {
            //   Blue();
            // }
          }
        });
      }
      else if (cosa_serveLav_2_keywords.some(keyword => sentence.includes(keyword))) {
        step_3 = false;
        audios[2].play();
        console.log("Found");
        var cosa_serveLav_2_cit = cosa_serveLav_2_cits[Math.round(Math.random() * (cosa_serveLav_2_cits.length -1))];
        audios[2].onended(function() {
          loading();
          setTimeout(playCit, 3000);

          function playCit() {
            loadEffect = false;
            var cosa_serveLav_2_audio = Math.round(random([4, 5]));
            //audios[cosa_serveLav_2_audio].play();
            lavoro_var = false;
            //audios[cosa_serveLav_2_audio].onended(farewell);
            alert(cosa_serveLav_2_cit);
            farewell();
            // if (audios[4].isPlaying() == true) {
            //   Red();
            // }
            // else if (audios[5].isPlaying() == true) {
            //   Blue();
            // }
          }
        });
      }
      else if (cosa_serveLav_generico_keywords.some(keyword => sentence.includes(keyword))) {
        step_3 = false;
        audios[2].play();
        console.log("Found");
        var cosa_serveLav_generico_cit = cosa_serveLav_generico_cits[Math.round(Math.random() * (cosa_serveLav_generico_cits.length -1))];
        audios[2].onended(function() {
          loading();
          setTimeout(playCit, 3000);

          function playCit() {
            loadEffect = false;
            var cosa_serveLav_generico_audio = Math.round(random([4, 5]));
            //audios[cosa_serveLav_generico_audio].play();
            lavoro_var = false;
            //audios[cosa_serveLav_generico_audio].onended(farewell);
            alert(cosa_serveLav_generico_cit);
            farewell();
            // if (audios[4].isPlaying() == true) {
            //   Red();
            // }
            // else if (audios[5].isPlaying() == true) {
            //   Blue();
            // }
          }
        });
      }
      else if (soldi_keywords.some(keyword => sentence.includes(keyword))) {
        step_3 = false;
        audios[2].play();
        console.log("Found");
        var soldi_cit = soldi_cits[Math.round(Math.random() * (soldi_cits.length -1))];
        audios[2].onended(function() {
          loading();
          setTimeout(playCit, 3000);

          function playCit() {
            loadEffect = false;
            var soldi_audio = Math.round(random([4, 5]));
            //audios[soldi_audio].play();
            lavoro_var = false;
            //audios[soldi_audio].onended(farewell);
            alert(soldi_cit);
            farewell();
            // if (audios[4].isPlaying() == true) {
            //   Red();
            // }
            // else if (audios[5].isPlaying() == true) {
            //   Blue();
            // }
          }
        });
      }
      else {
        errorCase();
      }
      }
      ////////////////////////////////////////////////////////////////////////////////////// AMICIZIA E RELAZIONI INTERPERSONALI
      else if (amicizia_relInter_var == true) {
        if (amicizia_generico_keywords.some(keyword => sentence.includes(keyword)) && sep_feriti_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var sep_feriti_amicizia_cit = sep_feriti_amicizia_cits[Math.round(Math.random() * (sep_feriti_amicizia_cits.length -1))];  // Math.random() *
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var sep_feriti_amicizia_audio = Math.round(random([4, 5]));
              //audios[sep_feriti_amicizia_audio].play();
              amicizia_relInter_var = false;
              //audios[sep_feriti_amicizia_audio].onended(farewell);
              alert(sep_feriti_amicizia_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (vera_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var vera_amicizia_cit = vera_amicizia_cits[Math.round(Math.random() * (vera_amicizia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var vera_amicizia_audio = Math.round(random([4, 5]));
              //audios[vera_amicizia_audio].play();
              amicizia_relInter_var = false;
              //audios[vera_amicizia_audio].onended(farewell);
              alert(vera_amicizia_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (falsa_amicizia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var falsa_amicizia_cit = falsa_amicizia_cits[Math.round(Math.random() * (falsa_amicizia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var falsa_amicizia_audio = Math.round(random([4, 5]));
              //audios[falsa_amicizia_audio].play();
              amicizia_relInter_var = false;
              //audios[falsa_amicizia_audio].onended(farewell);
              alert(falsa_amicizia_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }

        else if (odio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var odio_cit = odio_cits[Math.round(Math.random() * (odio_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var odio_audio = Math.round(random([4, 5]));
              audios[odio_audio].play();
              amicizia_relInter_var = false;
              audios[odio_audio].onended(farewell);
              //alert(paura_cit);
              //farewell();
              final_sentence = true;
              if (audios[4].isPlaying() == true) {
                Red();
              } else if (audios[5].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (bravo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var bravo_cit = bravo_cits[Math.round(Math.random() * (bravo_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var bravo_audio = Math.round(random([4, 5]));
              //audios[bravo_audio].play();
              amicizia_relInter_var = false;
              //audios[bravo_audio].onended(farewell);
              alert(bravo_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (aiuto_supp_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var aiuto_supp_cit = aiuto_supp_cits[Math.round(Math.random() * (aiuto_supp_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var aiuto_supp_audio = Math.round(random([4, 5]));
              //audios[aiuto_supp_audio].play();
              amicizia_relInter_var = false;
              //audios[aiuto_supp_audio].onended(farewell);
              alert(aiuto_supp_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (solitudine_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var solitudine_cit = solitudine_cits[Math.round(Math.random() * (solitudine_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var solitudine_audio = Math.round(random([4, 5]));
              //audios[solitudine_audio].play();
              amicizia_relInter_var = false;
              //audios[solitudine_audio].onended(farewell);
              alert(solitudine_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (emp_emoz_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var emp_emoz_cit = emp_emoz_cits[Math.round(Math.random() * (emp_emoz_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var emp_emoz_audio = Math.round(random([4, 5]));
              //audios[emp_emoz_audio].play();
              amicizia_relInter_var = false;
              //audios[emp_emoz_audio].onended(farewell);
              alert(emp_emoz_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (separazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var separazione_cit = separazione_cits[Math.round(Math.random() * (separazione_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var separazione_audio = Math.round(random([4, 5]));
              //audios[separazione_audio].play();
              amicizia_relInter_var = false;
              //audios[separazione_audio].onended(farewell);
              alert(separazione_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (perdono_rel_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var perdono_rel_cit = perdono_rel_cits[Math.round(Math.random() * (perdono_rel_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var perdono_rel_audio = Math.round(random([4, 5]));
              //audios[perdono_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[perdono_rel_audio].onended(farewell);
              alert(perdono_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (gelosia_rel_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var gelosia_rel_cit = gelosia_rel_cits[Math.round(Math.random() * (gelosia_rel_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var gelosia_rel_audio = Math.round(random([4, 5]));
              //audios[gelosia_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[gelosia_rel_audio].onended(farewell);
              alert(gelosia_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (tradimento_rel_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var tradimento_rel_cit = tradimento_rel_cits[Math.round(Math.random() * (tradimento_rel_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var tradimento_rel_audio = Math.round(random([4, 5]));
              //audios[tradimento_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[tradimento_rel_audio].onended(farewell);
              alert(tradimento_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (famiglia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var famiglia_amicizia_rel_cit = famiglia_cits[Math.round(Math.random() * (famiglia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var famiglia_amicizia_rel_audio = Math.round(random([4, 5]));
              //audios[famiglia_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[famiglia_amicizia_rel_audio].onended(farewell);
              alert(famiglia_amicizia_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (fratello_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var fratello_amicizia_rel_cit = fratello_cits[Math.round(Math.random() * (fratello_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var fratello_amicizia_rel_audio = Math.round(random([4, 5]));
              //audios[fratello_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[fratello_amicizia_rel_audio].onended(farewell);
              alert(fratello_amicizia_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (sorella_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var sorella_amicizia_rel_cit = sorella_cits[Math.round(Math.random() * (sorella_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var sorella_amicizia_rel_audio = Math.round(random([4, 5]));
              //audios[sorella_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[sorella_amicizia_rel_audio].onended(farewell);
              alert(sorella_amicizia_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (futuro_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var futuro_amicizia_rel_cit = futuro_cits[Math.round(Math.random() * (futuro_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var futuro_amicizia_rel_audio = Math.round(random([4, 5]));
              //audios[futuro_amicizia_rel_audio].play();
              amicizia_relInter_var = false;
              //audios[futuro_amicizia_rel_audio].onended(farewell);
              alert(futuro_amicizia_rel_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (amicizia_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var amicizia_generico_cit = vera_amicizia_cits[Math.round(Math.random() * (vera_amicizia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var amicizia_generico_audio = Math.round(random([4, 5]));
              //audios[amicizia_generico_audio].play();
              amicizia_relInter_var = false;
              //audios[amicizia_generico_audio].onended(farewell);
              alert(amicizia_generico_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// AMORE
      else if (amore_var == true) {
        if (moglie_marito_keywords.some(keyword => sentence.includes(keyword)) && divorzio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var matrimonio_divorzio_cit = matrimonio_divorzio_cits[Math.round(Math.random() * (matrimonio_divorzio_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var matrimonio_divorzio_audio = Math.round(random([4, 5]));
              //audios[matrimonio_divorzio_audio].play();
              amore_var = false;
              //audios[matrimonio_divorzio_audio].onended(farewell);
              alert(matrimonio_divorzio_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (lasciare_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var lasciare_cit = lasciare_cits[Math.round(Math.random() * (lasciare_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var lasciare_audio = Math.round(random([4, 5]));
              //audios[lasciare_audio].play();
              amore_var = false;
              //audios[lasciare_audio].onended(farewell);
              alert(lasciare_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (falso_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var falso_amore_cit = falso_amore_cits[Math.round(Math.random() * (falso_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var falso_amore_audio = Math.round(random([4, 5]));
              //audios[falso_amore_audio].play();
              amore_var = false;
              //audios[falso_amore_audio].onended(farewell);
              alert(falso_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (amore_vero_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var amore_vero_cit = amore_vero_cits[Math.round(Math.random() * (amore_vero_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var amore_vero_audio = Math.round(random([4, 5]));
              //audios[amore_vero_audio].play();
              amore_var = false;
              //audios[amore_vero_audio].onended(farewell);
              alert(amore_vero_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (non_corrisposto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var non_corrisposto_cit = non_corrisposto_cits[Math.round(Math.random() * (non_corrisposto_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var non_corrisposto_audio = Math.round(random([4, 5]));
              //audios[non_corrisposto_audio].play();
              amore_var = false;
              //audios[non_corrisposto_audio].onended(farewell);
              alert(non_corrisposto_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (gelosia_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var gelosia_amore_cit = gelosia_amore_cits[Math.round(Math.random() * (gelosia_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var gelosia_amore_audio = Math.round(random([4, 5]));
              //audios[gelosia_amore_audio].play();
              amore_var = false;
              //audios[gelosia_amore_audio].onended(farewell);
              alert(gelosia_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (matrimonio_divorzio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var matrimonio_divorzio_cit = matrimonio_divorzio_cits[Math.round(Math.random() * (matrimonio_divorzio_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var matrimonio_divorzio_audio = Math.round(random([4, 5]));
              //audios[matrimonio_divorzio_audio].play();
              amore_var = false;
              //audios[matrimonio_divorzio_audio].onended(farewell);
              alert(matrimonio_divorzio_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (perdono_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var perdono_amore_cit = perdono_amore_cits[Math.round(Math.random() * (perdono_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var perdono_amore_audio = Math.round(random([4, 5]));
              //audios[perdono_amore_audio].play();
              amore_var = false;
              //audios[perdono_amore_audio].onended(farewell);
              alert(perdono_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (tradimento_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var tradimento_amore_cit = tradimento_amore_cits[Math.round(Math.random() * (tradimento_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var tradimento_amore_audio = Math.round(random([4, 5]));
              //audios[tradimento_amore_audio].play();
              amore_var = false;
              //audios[tradimento_amore_audio].onended(farewell);
              alert(tradimento_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (successo_amore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var successo_amore_cit = successo_amore_cits[Math.round(Math.random() * (successo_amore_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var successo_amore_audio = Math.round(random([4, 5]));
              //audios[successo_amore_audio].play();
              amore_var = false;
              //audios[successo_amore_audio].onended(farewell);
              alert(successo_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (single_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var single_cit = single_cits[Math.round(Math.random() * (single_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var single_audio = Math.round(random([4, 5]));
              //audios[single_audio].play();
              amore_var = false;
              //audios[single_audio].onended(farewell);
              alert(single_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (cuore_testa_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var cuore_testa_cit = cuore_testa_cits[Math.round(Math.random() * (cuore_testa_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var cuore_testa_audio = Math.round(random([4, 5]));
              //audios[cuore_testa_audio].play();
              amore_var = false;
              //audios[cuore_testa_audio].onended(farewell);
              alert(cuore_testa_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (famiglia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var famiglia_amore_cit = famiglia_cits[Math.round(Math.random() * (famiglia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var famiglia_amore_audio = Math.round(random([4, 5]));
              //audios[famiglia_amore_audio].play();
              amore_var = false;
              //audios[famiglia_amore_audio].onended(farewell);
              alert(famiglia_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (fratello_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var fratello_amore_cit = fratello_cits[Math.round(Math.random() * (fratello_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var fratello_amore_audio = Math.round(random([4, 5]));
              //audios[fratello_amore_audio].play();
              amore_var = false;
              //audios[fratello_amore_audio].onended(farewell);
              alert(fratello_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (sorella_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var sorella_amore_cit = sorella_cits[Math.round(Math.random() * (sorella_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var sorella_amore_audio = Math.round(random([4, 5]));
              //audios[sorella_amore_audio].play();
              amore_var = false;
              //audios[sorella_amore_audio].onended(farewell);
              alert(sorella_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (futuro_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var futuro_amore_cit = futuro_cits[Math.round(Math.random() * (futuro_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var futuro_amore_audio = Math.round(random([4, 5]));
              //audios[futuro_amore_audio].play();
              amore_var = false;
              //audios[futuro_amore_audio].onended(farewell);
              alert(futuro_amore_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        } else if (amore_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var amore_generico_cit = amore_vero_cits[Math.round(Math.random() * (amore_vero_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var amore_generico_audio = Math.round(random([4, 5]));
              //audios[amore_generico_audio].play();
              amore_var = false;
              //audios[amore_generico_audio].onended(farewell);
              alert(amore_generico_cit);
              farewell();
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // }
              // else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else {
          errorCase();
        }
      }
      /////////////////////////////////////////////////////////////////////////////////////// ISPIRAZIONE
      else if (ispirazione_var == true) {
        if (libro_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var libro_cit = libro_cits[Math.round(Math.random() * (libro_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var libro_audio = Math.round(random([4, 5]));
              //audios[libro_audio].play();
              ispirazione_var = false;
              //audios[libro_audio].onended(farewell);
              alert(libro_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (scienza_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var scienza_ispirazione_cit = scienza_ispirazione_cits[Math.round(Math.random() * (scienza_ispirazione_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var scienza_ispirazione_audio = Math.round(random([4, 5]));
              //audios[scienza_ispirazione_audio].play();
              ispirazione_var = false;
              //audios[scienza_ispirazione_audio].onended(farewell);
              alert(scienza_ispirazione_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (lavoro_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var lavoro_ispirazione_cit = lavoro_ispirazione_cits[Math.round(Math.random() * (lavoro_ispirazione_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var lavoro_ispirazione_audio = Math.round(random([4, 5]));
              //audios[lavoro_ispirazione_audio].play();
              ispirazione_var = false;
              //audios[lavoro_ispirazione_audio].onended(farewell);
              alert(lavoro_ispirazione_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (poesia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var poesia_cit = poesia_cits[Math.round(Math.random() * (poesia_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var poesia_audio = Math.round(random([4, 5]));
              //audios[poesia_audio].play();
              ispirazione_var = false;
              //audios[poesia_audio].onended(farewell);
              alert(poesia_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (isolamento_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var isolamento_cit = isolamento_cits[Math.round(Math.random() * (isolamento_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var isolamento_audio = Math.round(random([4, 5]));
              //audios[isolamento_audio].play();
              ispirazione_var = false;
              //audios[isolamento_audio].onended(farewell);
              alert(isolamento_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (amore_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var amore_ispirazione_cit = amore_ispirazione_cits[Math.round(Math.random() * (amore_ispirazione_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var amore_ispirazione_audio = Math.round(random([4, 5]));
              //audios[amore_ispirazione_audio].play();
              ispirazione_var = false;
              //audios[amore_ispirazione_audio].onended(farewell);
              alert(amore_ispirazione_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (regista_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var regista_cit = regista_cits[Math.round(Math.random() * (regista_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var regista_audio = Math.round(random([4, 5]));
              //audios[regista_audio].play();
              ispirazione_var = false;
              //audios[regista_audio].onended(farewell);
              alert(regista_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (artista_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var artista_cit = artista_cits[Math.round(Math.random() * (artista_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var artista_audio = Math.round(random([4, 5]));
              //audios[artista_audio].play();
              ispirazione_var = false;
              //audios[artista_audio].onended(farewell);
              alert(artista_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (pittore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var pittore_cit = pittore_cits[Math.round(Math.random() * (pittore_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var pittore_audio = Math.round(random([4, 5]));
              //audios[pittore_audio].play();
              ispirazione_var = false;
              //audios[pittore_audio].onended(farewell);
              alert(pittore_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (disegnatore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var disegnatore_cit = disegnatore_cits[Math.round(Math.random() * (disegnatore_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var disegnatore_audio = Math.round(random([4, 5]));
              //audios[disegnatore_audio].play();
              ispirazione_var = false;
              //audios[disegnatore_audio].onended(farewell);
              alert(disegnatore_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (raziocinio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var raziocinio_cit = raziocinio_cits[Math.round(Math.random() * (raziocinio_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var raziocinio_audio = Math.round(random([4, 5]));
              //audios[raziocinio_audio].play();
              ispirazione_var = false;
              //audios[raziocinio_audio].onended(farewell);
              alert(raziocinio_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (sofferenza_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var sofferenza_ispirazione_cit = sofferenza_ispirazione_cits[Math.round(Math.random() * (sofferenza_ispirazione_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var sofferenza_ispirazione_audio = Math.round(random([4, 5]));
              //audios[sofferenza_ispirazione_audio].play();
              ispirazione_var = false;
              //audios[sofferenza_ispirazione_audio].onended(farewell);
              alert(sofferenza_ispirazione_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (cambiare_mondo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var cambiare_mondo_cit = cambiare_mondo_cits[Math.round(Math.random() * (cambiare_mondo_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var cambiare_mondo_audio = Math.round(random([4, 5]));
              //audios[cambiare_mondo_audio].play();
              ispirazione_var = false;
              //audios[cambiare_mondo_audio].onended(farewell);
              alert(cambiare_mondo_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (idee_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var idee_cit = idee_cits[Math.round(Math.random() * (idee_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var idee_audio = Math.round(random([4, 5]));
              //audios[idee_audio].play();
              ispirazione_var = false;
              //audios[idee_audio].onended(farewell);
              alert(idee_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (follia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var follia_cit = follia_cits[Math.round(Math.random() * (follia_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var follia_audio = Math.round(random([4, 5]));
              //audios[follia_audio].play();
              ispirazione_var = false;
              //audios[follia_audio].onended(farewell);
              alert(follia_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (cultura_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var cultura_ispirazione_cit = cultura_ispirazione_cits[Math.round(Math.random() * (cultura_ispirazione_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var cultura_ispirazione_audio = Math.round(random([4, 5]));
              //audios[cultura_ispirazione_audio].play();
              ispirazione_var = false;
              //audios[cultura_ispirazione_audio].onended(farewell);
              alert(cultura_ispirazione_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (genio_ispirazione_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var genio_ispirazione_cit = genio_ispirazione_cits[Math.round(Math.random() * (genio_ispirazione_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var genio_ispirazione_audio = Math.round(random([4, 5]));
              //audios[genio_ispirazione_audio].play();
              ispirazione_var = false;
              //audios[genio_ispirazione_audio].onended(farewell);
              alert(genio_ispirazione_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (originalità_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var originalità_cit = originalità_cits[Math.round(Math.random() * (originalità_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var originalità_audio = Math.round(random([4, 5]));
              //audios[originalità_audio].play();
              ispirazione_var = false;
              //audios[originalità_audio].onended(farewell);
              alert(originalità_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (verità_realtà_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var verità_realtà_cit = verità_realtà_cits[Math.round(Math.random() * (verità_realtà_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var verità_realtà_audio = Math.round(random([4, 5]));
              //audios[verità_realtà_audio].play();
              ispirazione_var = false;
              //audios[verità_realtà_audio].onended(farewell);
              alert(verità_realtà_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (paura_fallire_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var paura_fallire_cit = paura_fallire_cits[Math.round(Math.random() * (paura_fallire_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var paura_fallire_audio = Math.round(random([4, 5]));
              //audios[paura_fallire_audio].play();
              ispirazione_var = false;
              //audios[paura_fallire_audio].onended(farewell);
              alert(paura_fallire_cit);
              farewell();
              final_sentence = true;
            }
          });
        }

        else if (ispirazione_generico_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var ispirazione_generico_cit = ispirazione_generico_cits[Math.round(Math.random() * (ispirazione_generico_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var ispirazione_generico_audio = Math.round(random([4, 5]));
              //audios[ispirazione_generico_audio].play();
              ispirazione_var = false;
              //audios[ispirazione_generico_audio].onended(farewell);
              alert(ispirazione_generico_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// VITA E MORTE
      else if (vita_morte_var == true) {
        if (paura_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var paura_cit = paura_cits[Math.round(Math.random() * (paura_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              var paura_audio = Math.round(random([4, 5]));
              audios[paura_audio].play();
              vita_morte_var = false;
              audios[paura_audio].onended(farewell);
              //alert(paura_cit);
              //farewell();
              final_sentence = true;
              if (audios[4].isPlaying() == true) {
                Red();
              } else if (audios[5].isPlaying() == true) {
                Blue();
              }
            }
          });
        } else if (dio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var dio_cit = dio_cits[Math.round(Math.random() * (dio_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var dio_audio = Math.round(random([4, 5]));
              //audios[dio_audio].play();
              vita_morte_var = false;
              //audios[dio_audio].onended(farewell);
              alert(dio_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (dio_keywords.some(keyword => sentenceDio.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var Dio_cit = dio_cits[Math.round(Math.random() * (dio_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var Dio_audio = Math.round(random([4, 5]));
              //audios[Dio_audio].play();
              vita_morte_var = false;
              //audios[Dio_audio].onended(farewell);
              alert(Dio_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (immortalità_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var immortalità_cit = immortalità_cits[Math.round(Math.random() * (immortalità_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var immortalità_audio = Math.round(random([4, 5]));
              //audios[immortalità_audio].play();
              vita_morte_var = false;
              //audios[immortalità_audio].onended(farewell);
              alert(immortalità_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (senso_vita_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var senso_vita_cit = senso_vita_cits[Math.round(Math.random() * (senso_vita_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var senso_vita_audio = Math.round(random([4, 5]));
              //audios[senso_vita_audio].play();
              vita_morte_var = false;
              //audios[senso_vita_audio].onended(farewell);
              alert(senso_vita_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (morte_interiore_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var morte_interiore_cit = morte_interiore_cits[Math.round(Math.random() * (morte_interiore_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var morte_interiore_audio = Math.round(random([4, 5]));
              //audios[morte_interiore_audio].play();
              vita_morte_var = false;
              //audios[morte_interiore_audio].onended(farewell);
              alert(morte_interiore_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (ricordo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var ricordo_cit = ricordo_cits[Math.round(Math.random() * (ricordo_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var ricordo_audio = Math.round(random([4, 5]));
              //audios[ricordo_audio].play();
              vita_morte_var = false;
              //audios[ricordo_audio].onended(farewell);
              alert(ricordo_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (lutto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var lutto_cit = lutto_cits[Math.round(Math.random() * (lutto_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var lutto_audio = Math.round(random([4, 5]));
              //audios[lutto_audio].play();
              vita_morte_var = false;
              //audios[lutto_audio].onended(farewell);
              alert(lutto_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (quando_morirò_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var quando_morirò_cit = quando_morirò_cits[Math.round(Math.random() * (quando_morirò_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var quando_morirò_audio = Math.round(random([4, 5]));
              //audios[quando_morirò_audio].play();
              vita_morte_var = false;
              //audios[quando_morirò_audio].onended(farewell);
              alert(quando_morirò_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (morte_oggetti_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var morte_oggetti_cit = morte_oggetti_cits[Math.round(Math.random() * (morte_oggetti_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var morte_oggetti_audio = Math.round(random([4, 5]));
              //audios[morte_oggetti_audio].play();
              vita_morte_var = false;
              //audios[morte_oggetti_audio].onended(farewell);
              alert(morte_oggetti_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (morte_noia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var morte_noia_cit = morte_noia_cits[Math.round(Math.random() * (morte_noia_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var morte_noia_audio = Math.round(random([4, 5]));
              //audios[morte_noia_audio].play();
              vita_morte_var = false;
              //audios[morte_noia_audio].onended(farewell);
              alert(morte_noia_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (eutanasia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var eutanasia_cit = eutanasia_cits[Math.round(Math.random() * (eutanasia_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var eutanasia_audio = Math.round(random([4, 5]));
              //audios[eutanasia_audio].play();
              vita_morte_var = false;
              //audios[eutanasia_audio].onended(farewell);
              alert(eutanasia_cit);
              farewell();
              final_sentence = true;
            }
          });
        } else if (aborto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var aborto_cit = aborto_cits[Math.round(Math.random() * (aborto_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var aborto_audio = Math.round(random([4, 5]));
              //audios[aborto_audio].play();
              vita_morte_var = false;
              //audios[aborto_audio].onended(farewell);
              alert(aborto_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (suicidio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var suicidio_cit = suicidio_cits[Math.round(Math.random() * (suicidio_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var suicidio_audio = Math.round(random([4, 5]));
              //audios[suicidio_audio].play();
              vita_morte_var = false;
              //audios[suicidio_audio].onended(farewell);
              alert(suicidio_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (scopo_vita_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var scopo_vita_cit = scopo_vita_cits[Math.round(Math.random() * (scopo_vita_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var scopo_vita_audio = Math.round(random([4, 5]));
              //audios[scopo_vita_audio].play();
              vita_morte_var = false;
              //audios[scopo_vita_audio].onended(farewell);
              alert(scopo_vita_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (fallimento_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var fallimento_morte_cit = fallimento_morte_cits[Math.round(Math.random() * (fallimento_morte_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var fallimento_morte_audio = Math.round(random([4, 5]));
              //audios[fallimento_morte_audio].play();
              vita_morte_var = false;
              //audios[fallimento_morte_audio].onended(farewell);
              alert(fallimento_morte_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (sogni_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var sogni_morte_cit = sogni_morte_cits[Math.round(Math.random() * (sogni_morte_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var sogni_morte_audio = Math.round(random([4, 5]));
              //audios[sogni_morte_audio].play();
              vita_morte_var = false;
              //audios[sogni_morte_audio].onended(farewell);
              alert(sogni_morte_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (felicità_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var felicità_morte_cit = felicità_morte_cits[Math.round(Math.random() * (felicità_morte_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var felicità_morte_audio = Math.round(random([4, 5]));
              //audios[felicità_morte_audio].play();
              vita_morte_var = false;
              //audios[felicità_morte_audio].onended(farewell);
              alert(felicità_morte_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (casi_limite_morte_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var casi_limite_morte_cit = casi_limite_morte_cits[Math.round(Math.random() * (casi_limite_morte_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var casi_limite_morte_audio = Math.round(random([4, 5]));
              //audios[casi_limite_morte_audio].play();
              vita_morte_var = false;
              //audios[casi_limite_morte_audio].onended(farewell);
              alert(casi_limite_morte_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (povero_ricco_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var povero_ricco_cit = povero_ricco_cits[Math.round(Math.random() * (povero_ricco_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var povero_ricco_audio = Math.round(random([4, 5]));
              //audios[povero_ricco_audio].play();
              vita_morte_var = false;
              //audios[povero_ricco_audio].onended(farewell);
              alert(povero_ricco_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (morte_tecnologia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var morte_tecnologia_cit = morte_tecnologia_cits[Math.round(Math.random() * (morte_tecnologia_cits.length -1))];
          audios[2].onended(function() {
            setTimeout(playCit, 3000);

            function playCit() {
              //var morte_tecnologia_audio = Math.round(random([4, 5]));
              //audios[morte_tecnologia_audio].play();
              vita_morte_var = false;
              //audios[morte_tecnologia_audio].onended(farewell);
              alert(morte_tecnologia_cit);
              farewell();
              final_sentence = true;
            }
          });
        }
        else if (morte_generico_keywords.some(keyword => sentence.includes(keyword))) {
         step_3 = false;
         audios[2].play();
         console.log("Found");
         var morte_generico_cit = morte_generico_cits[Math.round(Math.random() * (morte_generico_cits.length -1))];
         audios[2].onended(function() {
           setTimeout(playCit, 3000);

           function playCit() {
             //var morte_generico_audio = Math.round(random([4, 5]));
             //audios[morte_generico_audio].play();
             vita_morte_var = false;
             //audios[morte_generico_audio].onended(farewell);
             alert(morte_generico_cit);
             farewell();
             final_sentence = true;
           }
         });
       }

        else {
          errorCase();
        }
      }
      ////////////////////////////////////////////////////////////////////////////////////// ETICA E MORALE
      else if (etica_morale_var == true) {

        if (etica_religio_keywords.some(keyword => sentenceDio.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_religio_Dio_cit = etica_religio_cits[Math.round(Math.random() * (etica_religio_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_religio_Dio_audio = Math.round(random([4, 5]));
              //audios[etica_religio_Dio_audio].play();
              etica_morale_var = false;
              //audios[etica_religio_Dio_audio].onended(farewell);
              alert(etica_religio_Dio_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_religio_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_religio_cit = etica_religio_cits[Math.round(Math.random() * (etica_religio_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_religio_audio = Math.round(random([4, 5]));
              //audios[etica_religio_audio].play();
              etica_morale_var = false;
              //audios[etica_religio_audio].onended(farewell);
              alert(etica_religio_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (quanto_valgo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var quanto_valgo_cit = quanto_valgo_cits[Math.round(Math.random() * (quanto_valgo_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var quanto_valgo_audio = Math.round(random([4, 5]));
              //audios[quanto_valgo_audio].play();
              etica_morale_var = false;
              //audios[quanto_valgo_audio].onended(farewell);
              alert(quanto_valgo_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_economia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_economia_cit = etica_economia_cits[Math.round(Math.random() * (etica_economia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_economia_audio = Math.round(random([4, 5]));
              //audios[etica_economia_audio].play();
              etica_morale_var = false;
              //audios[etica_economia_audio].onended(farewell);
              alert(etica_economia_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_politica_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_politica_cit = etica_politica_cits[Math.round(Math.random() * (etica_politica_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_politica_audio = Math.round(random([4, 5]));
              //audios[etica_politica_audio].play();
              etica_morale_var = false;
              //audios[etica_politica_audio].onended(farewell);
              alert(etica_politica_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_cultura_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_cultura_cit = etica_cultura_cits[Math.round(Math.random() * (etica_cultura_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_cultura_audio = Math.round(random([4, 5]));
              //audios[etica_cultura_audio].play();
              etica_morale_var = false;
              //audios[etica_cultura_audio].onended(farewell);
              alert(etica_cultura_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_morale_aborto_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_morale_aborto_cit = etica_morale_aborto_cits[Math.round(Math.random() * (etica_morale_aborto_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_morale_aborto_audio = Math.round(random([4, 5]));
              //audios[etica_morale_aborto_audio].play();
              etica_morale_var = false;
              //audios[etica_morale_aborto_audio].onended(farewell);
              alert(etica_morale_aborto_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_morale_eutanasia_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_morale_eutanasia_cit = etica_morale_eutanasia_cits[Math.round(Math.random() * (etica_morale_eutanasia_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_morale_eutanasia_audio = Math.round(random([4, 5]));
              //audios[etica_morale_eutanasia_audio].play();
              etica_morale_var = false;
              //audios[etica_morale_eutanasia_audio].onended(farewell);
              alert(etica_morale_eutanasia_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (etica_omosessuale_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var etica_omosessuale_cit = etica_omosessuale_cits[Math.round(Math.random() * (etica_omosessuale_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var etica_omosessuale_audio = Math.round(random([4, 5]));
              //audios[etica_omosessuale_audio].play();
              etica_morale_var = false;
              //audios[etica_omosessuale_audio].onended(farewell);
              alert(etica_omosessuale_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (abuso_potere_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var abuso_potere_cit = abuso_potere_cits[Math.round(Math.random() * (abuso_potere_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var abuso_potere_audio = Math.round(random([4, 5]));
              //audios[abuso_potere_audio].play();
              etica_morale_var = false;
              //audios[abuso_potere_audio].onended(farewell);
              alert(abuso_potere_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (abuso_droga_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var abuso_droga_cit = abuso_droga_cits[Math.round(Math.random() * (abuso_droga_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var abuso_droga_audio = Math.round(random([4, 5]));
              //audios[abuso_droga_audio].play();
              etica_morale_var = false;
              //audios[abuso_droga_audio].onended(farewell);
              alert(abuso_droga_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (violenza_fisica_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var violenza_fisica_cit = violenza_fisica_cits[Math.round(Math.random() * (violenza_fisica_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var violenza_fisica_audio = Math.round(random([4, 5]));
              //audios[violenza_fisica_audio].play();
              etica_morale_var = false;
              //audios[violenza_fisica_audio].onended(farewell);
              alert(violenza_fisica_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }

        else if (violenza_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var violenza_cit = violenza_cits[Math.round(Math.random() * (violenza_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var violenza_audio = Math.round(random([4, 5]));
              //audios[violenza_audio].play();
              etica_morale_var = false;
              //audios[violenza_audio].onended(farewell);
              alert(violenza_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }

        else if (razzismo_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var razzismo_cit = razzismo_cits[Math.round(Math.random() * (razzismo_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var razzismo_audio = Math.round(random([4, 5]));
              //audios[razzismo_audio].play();
              etica_morale_var = false;
              //audios[razzismo_audio].onended(farewell);
              alert(razzismo_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (bellezza_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var bellezza_cit = bellezza_cits[Math.round(Math.random() * (bellezza_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var bellezza_audio = Math.round(random([4, 5]));
              //audios[bellezza_audio].play();
              etica_morale_var = false;
              //audios[bellezza_audio].onended(farewell);
              alert(bellezza_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (vegetariani_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var vegetariani_cit = vegetariani_cits[Math.round(Math.random() * (vegetariani_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var vegetariani_audio = Math.round(random([4, 5]));
              //audios[vegetariani_audio].play();
              etica_morale_var = false;
              //audios[vegetariani_audio].onended(farewell);
              alert(vegetariani_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (privacy_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var privacy_cit = privacy_cits[Math.round(Math.random() * (privacy_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var privacy_audio = Math.round(random([4, 5]));
              //audios[privacy_audio].play();
              etica_morale_var = false;
              //audios[privacy_audio].onended(farewell);
              alert(privacy_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
        else if (cambiamento_keywords.some(keyword => sentence.includes(keyword))) {
          step_3 = false;
          audios[2].play();
          console.log("Found");
          var cambiamento_cit = cambiamento_cits[Math.round(Math.random() * (cambiamento_cits.length -1))];
          audios[2].onended(function() {
            loading();
            setTimeout(playCit, 3000);

            function playCit() {
              loadEffect = false;
              //var cambiamento_audio = Math.round(random([4, 5]));
              //audios[cambiamento_audio].play();
              etica_morale_var = false;
              //audios[cambiamento_audio].onended(farewell);
              alert(cambiamento_cit);
              farewell();
              final_sentence = true;
              // if (audios[4].isPlaying() == true) {
              //   Red();
              // } else if (audios[5].isPlaying() == true) {
              //   Blue();
              // }
            }
          });
        }
          else {
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
// console.log('time: ' + timer);
// console.log(step_1);


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
