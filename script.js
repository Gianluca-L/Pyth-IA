// var x = document.getElementById("myInput");
const keywords = ["terra", "piatta", "tonda", "sfer"];

// function getInputValue() {
//   // Selecting the input element and get its value
//   var textFromInput = document.getElementById("myInput").value;
//   var text_From_Voice = document.getElementById("myVoiceInput").innerHTML;
//   var inputVal = text_From_Voice.toLowerCase();
//   //var inputVal = textFromInput.toLowerCase();
//   console.log(inputVal);
//   var check = document.getElementById("writeCheckbox").value;
//   console.log(check);
//   if (keywords.some(keyword => inputVal.includes('terra') && !inputVal.includes('non') && inputVal.includes('piatta'))) {
//     console.log("Found")
//     // audio.src = a_music;
//     // audio.play();
//     alert('Citazione famosa');
//   } else if (keywords.some(keyword => (inputVal.includes('terra') && inputVal.includes('non') && inputVal.includes('piatta')) || (inputVal.includes('terra') && inputVal.includes('tonda') || inputVal.includes('sfer')) && !inputVal.includes('non'))) {
//     alert('è vero');
//   } else {
//     alert('Poni un\'altra domanda');
//   }
//
// }


////////////////////////////////////////////// LEGAMI

/// 01  RELAZIONI SOCIALI

const odio_keywords = ['onest', 'leal', 'rettitudine', 'corrett', 'retto', 'retta', 'rette', 'retti', 'degn', 'giust', 'serio', 'seri',
  'amor', 'bene', 'voler bene', 'voglio bene', 'vuoi bene', 'vuole bene', 'vogliamo bene', 'volete bene', 'vogliono bene', 'solidarietà', 'solidale', 'cur', 'interess', 'tolleran', 'affetto', 'affetti',
  'odio', 'odi', 'avversione', 'ostilità', 'ostil', 'disprezz', 'mal volere', 'malevol', 'risent', 'rancor', 'astio', 'intolleran', 'antipati', 'rifiut',
  'fingere', 'fing', 'finzione', 'far credere', 'ingann', 'mentire', 'mentito', 'ment', 'menzogn', 'alle spalle', 'di nascosto',
  'simile', 'simili', 'prossimo', 'prossim',
  'gli altri', 'l\'altro', 'altrui',
  'razzis', 'antisemit', 'discrimin', 'fanat', 'pregiudiz', 'xenofob', 'sessis', 'diversità', 'divers', 'paur',
  'pace', 'pacifi', 'equità', 'equ', 'libertà', 'liber'
];

var odio_cits = ['Ciò che è importante è che un uomo dovrebbe vivere nell\'onestà, nell\'amore naturale per l\'umanità. (Bob Marley)',
  'Qualcuno ti odierà, fingerà di amarti e poi cercherà di eliminarti alle tue spalle. (Bob MArley)',
  'Ci vuole sempre qualcuno da odiare per sentirsi giustificati nella propria miseria. (Umberto Eco)',
  'Nessuno nasce odiando i propri simili a causa della razza, della religione o della classe alla quale appartengono. Gli uomini imparano ad odiare, e se possono imparare a odiare, possono anche imparare ad amare, perchè l\'amore, per il cuore umano, è più naturale dell\'odio. (Nelson Mandela)',
  'Sii educato con tutti; socievole con molti; intimo con pochi; amico con uno soltanto; nemico con nessuno. (Benjamin Franklin)',
  'Sono lieto di vedere che siamo diversi. Che insieme si possa diventare più grandi della somma di entrambi. (Leonard Nimoy)',
  'La pace richiede quattro condizioni essenziali: verità, giustizia, amore e libertà. (Papa Giovanni Paolo I)'
];


/// 02 ESSERE BRAVE PERSONE

const bravo_keywords = ['miglior', 'brav', 'più brav', 'ottim',
  'educazione', 'educ', 'cortes', 'scortes',
  'buone maniere', 'gentilezza', 'gentile', 'gentili', 'per bene', 'cattiv',
  'parlare bene', 'sparl', 'parl male'
];

var bravo_cits = ['Ciò che è importante è che un uomo dovrebbe vivere nell\'onestà, nell\'amore naturale per l\'umanità. (Bob Marley)',
  'Sii educato con tutti; socievole con molti; intimo con pochi; amico con uno soltanto; nemico con nessuno. (Benjamin Franklin)',
  'Sono lieto di vedere che siamo diversi. Che insieme si possa diventare più grandi della somma di entrambi. (Leonard Nimoy)',
  'La pace richiede quattro condizioni essenziali: verità, giustizia, amore e libertà. (Papa Giovanni Paolo I)',
  'Puoi capire molto di più di una persona da ciò che dice sugli altri che da ciò che gli altri dicono su di lei. (Audrey Hepburn)'
];

function getInputValue() {
  // Selecting the input element and get its value
  var textFromInput = document.getElementById("myInput").value;
  var text_From_Voice = document.getElementById("myVoiceInput").innerHTML;
  var inputVal = text_From_Voice.toLowerCase();
  //var inputVal = textFromInput.toLowerCase();
  console.log(inputVal);
  var check = document.getElementById("writeCheckbox").value;
  console.log(check);


  if (odio_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var odio_cit = odio_cits[Math.floor(Math.random() * odio_cits.length)];
    alert(odio_cit);
  }
  if (bravo_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var bravo_cit = bravo_cits[Math.floor(Math.random() * bravo_cits.length)];
    alert(bravo_cit);
  }
}
