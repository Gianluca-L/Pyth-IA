///////////// AUDIO
var step_1 = true;
var benvenuto;
var timer = 1;
var s = 0;

var categoria;
var una_sola_domanda;

///// variables to trigger sections

var relazioni_sociali_var = false;
var amicizia_var = false;
var amore_var = false;

var final_sentence = false;


var myFont;
var logoX = 2;
var decagon;
var eye;
var textCheckbox;
var textInput;
var voiceInput;
var k = 0;
var startSentence = new p5.SpeechRec('it-IT', startPythia);
startSentence.continuous = true;
startSentence.interimResults = false;

var step_2 = false;
var tag_speech = new p5.SpeechRec('it-IT');
tag_speech.continuous = true;
tag_speech.interimResults = false;

var step_3 = false;
var question_speech = new p5.SpeechRec('it-IT');
question_speech.continuous = true;
question_speech.interimResults = false;

////////// SINTESI VOCALE (PROVVISORIO)

var speech;

var textFromVoice;

function preload() {
  myFont = loadFont('assets/Neoneon.otf');

  benvenuto = loadSound("./assets/audio/benvenuto.mp3");
  categoria = loadSound("./assets/audio/categoria.mp3");
  una_sola_domanda = loadSound("./assets/audio/una_sola_domanda.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(60);
  textFont(myFont);
  textSize(100);
  fill(245, 173, 66);
  textAlign(CENTER);
  text("Pyth-IA", width / 2, height / 3);

  // choosing between text or voice
  textCheckbox = select('#writeCheckbox');
  textCheckbox.mouseClicked(clickTextCheckbox);
  console.log(textCheckbox.value());

  textInput = select('#myInput');

  var voiceCheckbox = select('#voiceCheckbox');
  voiceCheckbox.mouseClicked(clickVoiceCheckbox);

  voiceInput = select('#myVoiceInput');

  // speech recognition to start pyth-IA
  startSentence.start();

  /// AUDIO

  // analyzer = new p5.Amplitude();
  // analyzer.setInput(benvenuto);

  speech = new p5.Speech();

}

function draw() {
  background(0);
  // if (mouseIsPressed == true) {
  //   speech.onResult = showResult;
  //   speech.start();
  // }
}

function startPythia() {
  if (startSentence.resultValue == true && step_1 == true) {
    console.log('time: ' + timer);
    var start_Sentence = startSentence.resultString;
    console.log(startSentence);
    console.log(start_Sentence.toLowerCase());

    first_keyword_got = false;
    second_keyword_got = false;
    third_keyword_got = false;

    const first_keyword = ['donami', 'dona', 'don', 'do'];

    const second_keyword = ['sapienz', 'sapien', 'sapie', 'sapi', 'sap'];

    const third_keyword = ['dati', 'dat', 'da'];

    if (first_keyword.some(keyword => start_Sentence.includes(keyword))) {
      first_keyword_got = true;
      console.log('1 = ok');
    }
    if (second_keyword.some(keyword => start_Sentence.includes(keyword))) {
      second_keyword_got = true;
      console.log('2 = ok');
    }
    if (third_keyword.some(keyword => start_Sentence.includes(keyword))) {
      third_keyword_got = true;
      console.log('3 = ok');
    }

    if (first_keyword_got == true || second_keyword_got == true || third_keyword_got == true) {
      step_1 = false;
      benvenuto.play();
      benvenuto.onended(startStep_2);

      function startStep_2() {
        categoria.play();
        //alert('finito');
        categoria.onended(createSpeechRec_2)
        step_2 = true;

        function createSpeechRec_2() {
          tag_speech.onResult = pythiaAsksTag;
          tag_speech.start();
        }

      }

    }
  }
  console.log('time: ' + timer);
  console.log(step_1);
}

function pythiaAsksTag() {

  const tag_keyword = ['relazioni sociali', 'amicizia', 'amore'];

  if (tag_speech.resultValue == true && step_2 == true) {

    console.log(tag_speech.resultString);
    tag_Sentence = tag_speech.resultString;

    if (tag_keyword.some(keyword => tag_Sentence.includes('relazioni sociali'))) {
      relazioni_sociali_var = true;
      console.log('ok relazioni sociali');
      // step_2 = false;
      // una_sola_domanda.play();
      // una_sola_domanda.onended(relazioni_sociali_Section);
    } else if (tag_keyword.some(keyword => tag_Sentence.includes('amicizia'))) {
      amicizia_var = true;
      console.log('ok amicizia');
      // step_2 = false;
      // una_sola_domanda.play();
    } else if (tag_keyword.some(keyword => tag_Sentence.includes('amore'))) {
      amore_var = true;
      console.log('ok amore');
      // step_2 = false;
      // una_sola_domanda.play();
    }

    if (relazioni_sociali_var == true || amicizia_var == true || amore_var == true) {
      step_2 = false;
      una_sola_domanda.play();
      una_sola_domanda.onended(createSpeechRec_3)
      step_3 = true;

      function createSpeechRec_3() {
        question_speech.onResult = userAskQuestion;
        question_speech.start();
      }
    }
  }
}

function userAskQuestion() {
   if (question_speech.resultValue == true && step_3 == true) {

     console.log(question_speech.resultString);
     question_Sentence = question_speech.resultString;

     speech.setVoice("Google italiano");

     if (relazioni_sociali_var == true) {
       if (odio_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var odio_cit = odio_cits[Math.floor(Math.random() * odio_cits.length)];
         alert(odio_cit);
         speech.speak(odio_cit);
         final_sentence = true;
       }
       else if (bravo_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var bravo_cit = bravo_cits[Math.floor(Math.random() * bravo_cits.length)];
         alert(bravo_cit);
         speech.speak(bravo_cit);
         final_sentence = true;
       }
       else if (aiuto_supp_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var aiuto_supp_cit = aiuto_supp_cits[Math.floor(Math.random() * aiuto_supp_cits.length)];
         alert(aiuto_supp_cit);
         speech.speak(aiuto_supp_cit);
         final_sentence = true;
       }
       else if (solitudine_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var solitudine_cit = solitudine_cits[Math.floor(Math.random() * solitudine_cits.length)];
         alert(solitudine_cit);
         speech.speak(solitudine_cit);
         final_sentence = true;
       }
       else if (emp_emoz_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var emp_emoz_cit = emp_emoz_cits[Math.floor(Math.random() * emp_emoz_cits.length)];
         alert(emp_emoz_cit);
         speech.speak(emp_emoz_cit);
         final_sentence = true;
       }
       else if (separazione_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var separazione_cit = separazione_cits[Math.floor(Math.random() * separazione_cits.length)];
         alert(separazione_cit);
         speech.speak(separazione_cit);
         final_sentence = true;
       }
       else if (se_stessi_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var se_stessi_cit = se_stessi_cits[Math.floor(Math.random() * se_stessi_cits.length)];
         alert(se_stessi_cit);
         speech.speak(se_stessi_cit);
         final_sentence = true;
       }
     }
     else if (amicizia_var == true) {
       if (vera_amicizia_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var vera_amicizia_cit = vera_amicizia_cits[Math.floor(Math.random() * vera_amicizia_cits.length)];
         alert(vera_amicizia_cit);
         speech.speak(vera_amicizia_cit);
         final_sentence = true;
       }
       else if (sep_feriti_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var sep_feriti_cit = sep_feriti_cits[Math.floor(Math.random() * sep_feriti_cits.length)];
         alert(sep_feriti_cit);
         speech.speak(sep_feriti_cit);
         final_sentence = true;
       }
       else if (falsa_amicizia_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var falsa_amicizia_cit = falsa_amicizia_cits[Math.floor(Math.random() * falsa_amicizia_cits.length)];
         alert(falsa_amicizia_cit);
         speech.speak(falsa_amicizia_cit);
         final_sentence = true;
       }
     }
     else if (amore_var == true) {
       if (lasciare_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var lasciare_cit = lasciare_cits[Math.floor(Math.random() *lasciare_cits.length)];
         alert(lasciare_cit);
         speech.speak(lasciare_cit);
         final_sentence = true;
       }
       else if (falso_amore_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var falso_amore_cit = falso_amore_cits[Math.floor(Math.random() * falso_amore_cits.length)];
         alert(falso_amore_cit);
         speech.speak(falso_amore_cit);
         final_sentence = true;
       }
       else if (amore_vero_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var amore_vero_cit = amore_vero_cits[Math.floor(Math.random() * amore_vero_cits.length)];
         alert(amore_vero_cit);
         speech.speak(amore_vero_cit);
         final_sentence = true;
       }
       else if (non_corrisposto_keywords.some(keyword => question_Sentence.includes(keyword))) {
         step_3 = false;
         console.log("Found")
         // audio.src = a_music;
         // audio.play();
         var non_corrisposto_cit = non_corrisposto_cits[Math.floor(Math.random() * non_corrisposto_cits.length)];
         alert(non_corrisposto_cit);
         speech.speak(non_corrisposto_cit);
         final_sentence = true;
       }
     }
   }
}


function keyReleased() {
  k++;
  if (key === 'Enter') {
    if (k == 1) {
      console.log('ok');
      tag_speech.onResult = showResult;
      tag_speech.start();
      console.log(tag_speech);
    } else if (k == 2) {
      speech_2.onResult = showResult;
      speech_2.start();
    }
  }
  s++;
  if (key === 's') {
    if (s == 1) {
      // console.log('s1');
      // step_1 = true;
      startSentence.start();
    } else if (s == 2) {
      // console.log('s2');
      // step_1 = false;
      // s = 0;
    }
  }
  return false;
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
  if (tag_speech.resultValue == true) {

    var textFromVoice = select('#myVoiceInput');
    textFromVoice.html(tag_speech.resultString + "?");
    //textFromVoice.style('color: white; font-size: 20px; font-family: Verdana; position: absolute; top: 50%; left: 50%; width: 500px; transform: translate(-50%,-165%)');
    // console.log(tag_speech.resultString);
    // console.log(textFromVoice.html());
  }
}
