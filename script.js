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

////////// RELAZIONI SOCIALI

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


/// 01 ESSERE BRAVE PERSONE

const bravo_keywords = ['miglior', 'più brav', 'brav', 'ottim',
  'educazione', 'educ', 'cortes', 'scortes',
  'buone maniere', 'gentilezza', 'gentile', 'gentili', 'per bene', 'cattiv',
  'parlare bene', 'parlo bene', 'parli bene', 'parla bene', 'parliamo bene', 'parlate bene', 'parlano bene', 'parlino bene', 'sparl', 'parlo male', 'parli male', 'parla male', 'parliamo male', 'parlate male', 'parlano male', 'parlino male',
];

var bravo_cits = ['Ciò che è importante è che un uomo dovrebbe vivere nell\'onestà, nell\'amore naturale per l\'umanità. (Bob Marley)',
  'Sii educato con tutti; socievole con molti; intimo con pochi; amico con uno soltanto; nemico con nessuno. (Benjamin Franklin)',
  'Sono lieto di vedere che siamo diversi. Che insieme si possa diventare più grandi della somma di entrambi. (Leonard Nimoy)',
  'La pace richiede quattro condizioni essenziali: verità, giustizia, amore e libertà. (Papa Giovanni Paolo I)',
  'Puoi capire molto di più di una persona da ciò che dice sugli altri che da ciò che gli altri dicono su di lei. (Audrey Hepburn)'
];


/// 02 AIUTO/SUPPORTO

const aiuto_supp_keywords = ['aiuto', 'aiut', 'chiedere aiuto', 'soccor', 'dare una mano', 'darmi una mano', 'dai una mano', 'da una mano', 'danno una mano', 'chiedere una mano', 'chiedo una mano', 'chiedi una mano', 'chiede una mano', 'chiedono una mano', 'mano', 'appogg', 'assist', 'support',
  'bisogno', 'bisogn', 'necessità', 'necess', 'esigenza', 'esig', 'abbisogn', 'serv'
];

var aiuto_supp_cits = ['Ricorda: se mai avessi bisogno di una mano, è alla fine del tuo braccio. Invecchiando, ricorda di avere un’altra mano: la prima serve ad aiutare te stesso, la seconda ad aiutare gli altri. (Audrey Hepburn)',
  'Essere nella stessa stanza con delle persone e creare qualcosa insieme è una bella cosa. (Robin Williams)',
  'Se ti dovesse mai servire qualcosa, per favore non esitare a chiedere prima a qualcun altro. (Kurt Cobain)'
];

/// 03 SOLITUDINE

const solitudine_keywords = ['solitudine', 'sol', 'isolamento', 'isolat', 'rimanere solo', 'rimanere sola', 'rimanere soli', 'restare solo', 'restare sola', 'sento solo', 'sento sola', 'sentirmi solo', 'sentirmi sola', 'sentirsi soli', 'senza compagnia', 'senza nessuno', 'senza persone'];

var solitudine_cits = ['“Pensavo che la cosa peggiore nella vita fosse rimanere da solo. Non lo è. La cosa peggiore nella vita è di finire con persone che ti fanno sentire solo. (Robin Williams)',
  'Non c\'importa tanto di non arrivare da nessuna parte quanto di non avere compagnia durante il tragitto. (Anna Frank)',
  'La peggiore solitudine è essere privi di sincera amicizia. (Francis Bacon)'
];

/// 04 EMPATIA/ESPRIMERE EMOZIONI

const emp_emoz_keywords = ['empatia', 'empatic', 'emozion', 'emotiv', 'sensibil', 'sentiment', 'cuor',
  'piangere', 'piang', 'pianto', 'pianti', 'lacrim'
];

var emp_emoz_cits = ['A me ha sempre fatto pena la gente che ha paura dei sentimenti, delle emozioni, e nasconde quello che prova e non sa piangere con tutto il cuore. Perché chi non sa piangere con tutto il cuore non sa nemmeno ridere a gola spiegata. (Golda Meir)'];


/// 05 SEPARAZIONE/ESSERE FERITI/NEGATIVITA'

const separazione_keywords = ['ferire', 'ferit', 'soffrire', 'soffr', 'soffer', 'dolore', 'dolor', 'perdere', 'perdit', 'perd', 'lasciare', 'lasciat', 'lasci', 'separazione', 'separarsi', 'separ'];

var separazione_cits = ['La verità è che tutto il mondo ti ferirà. L\'idea è circondarsi di persone per cui valga la pena soffrire. (Bob Marley)',
  'Le persone capitano per caso nella nostra vita, ma non a caso. Spesso ci riempiono di insegnamenti. A volte ci fanno volare alto, altre ci schiantano a terra insegnandoci il dolore… donandoci tutto, portandosi via tutto, lasciandoci niente. (Alda Merini)',
  'Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)'
];


// 06 ESSERE SE STESSI
const amicizia_Cat_keywords = ['amicizia', 'amic', 'compagn'];
const se_stessi_keywords = ['essere se stessi', 'essere me stesso', 'essere me stessa', 'piacersi', 'piacermi', 'piacere a se stessi', 'piacere a me stesso', 'piacere a me stessa', 'piacere se stesso', 'piacere se stessa', 'piacere agli altri', 'piacere alla gente', 'piacere alle persone', 'piacere a'];

var se_stessi_cits = ['Ero stanco di far finta di essere qualcun’altro solo per andare d’accordo con le persone, solo per avere degli amici. (Kurt Cobain)'];


////////// AMICIZIA

/// ESSERE AMICI/VERA amicizia

const vera_amicizia_keywords = ['vero', 'vera', 'vere', 'veri', 'verit', 'veramente', 'genuin', 'sincer', 'autentic', 'schiett', 'dissimul', 'miglior', 'puro', 'pura', 'pure', 'puri', 'purezza', 'saldo', 'salda', 'salde', 'saldi', 'degn', 'solid', 'spontan',
  'signific', 'senso', 'sensi', 'valore', 'valori', 'import',
  'capire', 'capir', 'capirsi', 'capisc', 'capito', 'comprendere', 'comprend', 'nasc',
  'fid', 'affid', 'rispett',
  'volersi bene', 'voler bene', 'voglio bene', 'vuoi bene', 'vuole bene', 'vogliamo bene', 'volete bene', 'vogliono bene', 'bene', 'aver caro', 'ho caro', 'caro', 'cara', 'care', 'cari', 'affezion', 'affett', 'legam', 'legat'
];

var vera_amicizia_cits = ['L\'amicizia è la cosa più difficile al mondo da spiegare. Non è qualcosa che si impara a scuola. Ma se non hai imparato il significato dell\'amicizia, non hai davvero imparato niente. (Muhammad Ali)',
  'Ricordati di chi c\'era quando stavi male, perché saranno quelli che vorrai accanto quando tutto andrà bene. (Marilyn Monroe)',
  'Tra siciliani, un vero amico non deve chiedere all’altro una qualche cosa, perché non c’è bisogno, in quanto sarà preceduto dall’offerta dell’amico, che ha intuito la domanda che sarebbe arrivata. (Andrea Camilleri)',
  'A volte essere un amico significa padroneggiare l\'arte del tempismo. C\'è un momento per il silenzio. Un momento per lasciarsi andare e consentire alla gente di lanciarsi nel loro proprio destino. E un tempo per prepararsi a raccogliere i pezzi quando tutto è finito. (Octavia Estelle Butler)',
  'Non possiamo dire in quale preciso momento nasca l\'amicizia. Come nel riempire una caraffa a goccia a goccia, c\'è finalmente una stilla che la fa traboccare, così in una sequela di atti gentili ce n\'è infine uno che fa traboccare il cuore. (Ray Bradbury)',
  'Non camminare dietro a me, potrei non condurti. Non camminarmi davanti, potrei non seguirti. Cammina soltanto accanto a me e sii mio amico. (Albert Camus)',
  'Nessun bene senza un compagno ci dà gioia. (Lucio Anneo Seneca)',
  'Coloro che eliminano dalla vita l\'amicizia, eliminano il sole dal mondo. (Cicerone)',
  'L\'amicizia è sempre una dolce responsabilità ma non è mai un\'opportunità. (Khalil Gibran)',
  'Non c\'è amicizia salda senza fiducia: e non c\'è fiducia senza far passare un certo tempo. (Aristotele)',
  'Amico mio accanto a te non ho nulla di cui scusarmi, nulla da cui difendermi, nulla da dimostrare: trovo la pace... Al di là delle mie parole maldestre tu riesci a vedere in me semplicemente l\'uomo. (Antoine de Saint-Exupéry)',
  'Degno di amicizia è chi ha dentro di sé la ragione di essere amato. (Cicerone)',
  'Conoscere qualcuno, ovunque egli sia, con cui comprendersi nonostante le distanze e le differenze, può trasformare la terra in un giardino. (Goethe)',
  'L\'amicizia, come l\'amore, richiede quasi altrettanta arte di una figura di danza ben riuscita. Ci vuole molto slancio e molto controllo, molti scambi di parole e moltissimi silenzi. Soprattutto molto rispetto. (Rudolf Nureyev)',
  'Ancora oggi non conosco nulla di più prezioso al mondo di una solida e sincera amicizia. (Herman Hesse)',
  'La vera amicizia è una pianta che cresce lentamente e deve passare attraverso i traumi delle avversità perché la si possa chiamare tale. (George Washington)',
  'L\'amicizia verso sé stessi è di fondamentale importanza, perché senza di essa non si può essere amici di nessun altro. (Eleanor Roosevelt)',
  'Troppo spesso togliamo tempo ai nostri amici per dedicarlo ai nostri nemici. (Hermann Hesse)',
  'Chi ti vuole bene non ferisce mai i tuoi sentimenti o non ti fa sentire all’altezza, ma piuttosto ti rimette in piedi e ti mostra ciò che ti rende speciale e ancora più bello. (Bob Marley)',
  'Non c’è mai tensione, gelosia o competizione, ma solo una calma silenziosa quando sei con loro. Puoi essere te stesso e non preoccuparti di ciò che potrebbero pensare di te perché ti amano per ciò che sei. (Bob Marley)',
  'Un amico non è mai un’imposizione. (Frank Sinatra)',
  'Un amico è solo un nemico che conosci. (Kurt Cobain)',
  'Trova qualcuno che ti faccia dimenticare il tuo passato, la tristezza. Trova qualcuno che ti cambi la vita, che la renda migliore, che sostituisca e riempia il vuoto di chi se n\'è andato. Trova qualcuno per cui valga la pena sorridere. (Marilyn Monroe)'
];


/// LASCIARE AMICI/SEPARAZIONE/ FERITI

const sep_feriti_keywords = ['separazione', 'separarsi', 'separ', 'lasciare', 'ha lasciato', 'ha lasciato', 'lasciat', 'abbandonare', 'abbandon', 'finire', 'finita', 'finit', 'fin',
   'perdere', 'perdit', 'perso', 'persa', 'perse','persi',
   'dimenticare', 'dimenticat', 'dimentic', 'scordare', 'scordarsi', 'scord', 'mettere una pietra sopra', 'metterci una pietra sopra',
   'ferit', 'ferire', 'feri', 'fare male', 'far male', 'fa male', 'farà male', 'offendere', 'offend', 'offes',
   'tradire', 'tradiment', 'tradit', 'deludere', 'delud', 'delusion'];

var sep_feriti_cits = ['A volte essere un amico significa padroneggiare l\'arte del tempismo. C\'è un momento per il silenzio. Un momento per lasciarsi andare e consentire alla gente di lanciarsi nel loro proprio destino. E un tempo per prepararsi a raccogliere i pezzi quando tutto è finito. (Octavia Estelle Butler)',
    'Non piangere se un amico ti ha lasciato: solo quando ti avrà dimenticato potrai dire di averlo perso per sempre. (Jim Morrison)',
    'Ci vuole un minuto per notare una persona speciale, un\'ora per apprezzarla, un giorno per volerle bene, tutta una vita per dimenticarla. (Charlie Chaplin)',
    'La stretta di mano è per l’amicizia l’ultima lettera dell’alfabeto, per l’amore è la prima. (Rita Levi-Montalcini)',
    'Non si ama qualcuno per tutta la vita; da questa speranza impossibile nascono adulterio, matricidio, tradimento dell\'amico. (Umberto Eco)',
    'Non ti rimpiangerò mai o non dirò che avrei voluto non averti mai conosciuto, perché tanto tempo fa eri esattamente ciò di cui avevo bisogno. (Bob Marley)'];

/// FALSA AMICIZIA/RELAZIONE NEGATIVA

const falsa_amicizia_keywords = ['peggior nemico', 'peggior nemica', 'peggiore nemico', 'peggiore nemica', 'peggiori nemici', 'peggiori nemiche','nemic',
     'fals', 'menzogn', 'illusione', 'illusor', 'illus', 'sbaglia', 'fint', 'scorrett', 'fasull', 'ipocri', 'bugiard', 'sleal', 'doppiogiochista', 'doppiogioco', 'doppi', 'ingann', 'negat'];

var falsa_amicizia_cits = ['Alla fine, ci ricorderemo non le parole dei nostri nemici, ma il silenzio dei nostri amici. (Martin Luther King)',
      'La peggiore solitudine è essere privi di sincera amicizia. (Francis Bacon)',
      'È difficile sapere cosa sia la verità, ma a volte è molto facile riconoscere una falsità. (Albert Einstein)',
      'È più vergognoso non fidarsi dei propri amici che esserne ingannati. (François de la Rochefoucauld)',
      'Troppo spesso togliamo tempo ai nostri amici per dedicarlo ai nostri nemici. (Hermann Hesse)',
      'Il tuo peggior nemico potrebbe essere il tuo migliore amico e il tuo migliore amico potrebbe essere il tuo peggior nemico. (Bob Marley)',
      'Un amico è solo un nemico che conosci. (Kurt Cobain)',
      'O l’amicizia preziosa o l’ostilità durissima. (Benito Mussolini)',
      'Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)',
      'Non siamo mai così indifesi verso la sofferenza, come nel momento in cui amiamo. (Sigmund Freud)'];


////////// AMORE

const amore_Cat_keywords = ['amore', 'amor', 'amare', 'amo', 'ami','ama','amiamo','amate','amano','innamorarsi', 'innamor',
      'mi piace', 'ti piace', 'gli piace', 'piacciono', 'gli piaccio', 'le piaccio', 'piace', 'compagno', 'compagna', 'compagne', 'compagni',
      'fidanz', 'marit', 'mogli', 'moros', 'mio tipo', 'mia tipa', 'tip'];


/// LASCIARE/ABBANDONO/ESSERE FERITI

const lasciare_keywords = ['lasciare', 'lasciat', 'abband', 'finire', 'fine', 'finit', 'separ', 'perd', 'perso', 'persa', 'perse', 'persi', 'romp', 'rott', 'moll', 'smett', 'smess',
       'dimenticare', 'dimentic', 'scordare', 'scordarsi', 'scord', 'mettere una pietra sopra', 'metterci una pietra sopra', 'scomp',
       'ferit', 'ferir', 'fare male', 'far male', 'fa male', 'male', 'offend', 'offes', 'delus', 'soffr', 'soffer', 'dolor'];

var lasciare_cits = ['I venti che a volte portano via qualcosa che amiamo sono gli stessi che ci portano qualcosa da imparare ad amare. Quindi non dovremmo piangere per qualcosa che ci è stato portato via ma, sì, amare ciò che ci è stato offerto. Perché ciò che è veramente nostro ci appartiene per sempre. (Bob Marley)',
       'Non ci può essere profonda delusione dove non c\'è un amore profondo. (Martin Luther King)',
       'Tu e io non siamo che una cosa sola. Non posso farti del male senza ferirmi. (Mahatma Gandhi)',
       'L’amore è una promessa, l’amore è un ricordo, una volta donato non può essere dimenticato, non può mai scomparire. (John Lennon)',
       'Quando un amore finisce, uno dei due soffre. Se non soffre nessuno, non è mai iniziato. Se soffrono entrambi, non è mai finito. (Marilyn Monroe)',
       'Non si ama qualcuno per tutta la vita; da questa speranza impossibile nascono adulterio, matricidio, tradimento dell\'amico. (Umberto Eco)',
       'Smettere di amare è come perdere peso. è molto più semplice metterne su che perderlo. (Aretha Franklin)',
       'Non ti rimpiangerò mai o non dirò che avrei voluto non averti mai conosciuto, perché tanto tempo fa eri esattamente ciò di cui avevo bisogno. (Bob Marley)',
       'Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)',
     ]

/// INNAMORARSI/AMORE VERO

const amore_vero_keywords = ['vero', 'veramente','ver', 'genuin', 'sincer', 'autenticamente', 'autent', 'schiett', 'dissimul', 'miglior', 'puro', 'pura', 'pure', 'puri', 'purezza', 'saldo', 'salda', 'salde', 'saldi', 'degn', 'solid', 'spontan', 'incondiz',
      'significat', 'senso', 'sensi', 'valor', 'import',
      'capir', 'capito', 'capita', 'capite', 'capiti', 'comprend', 'nasc',
      'fid', 'affid', 'rispett',
      'complet', 'passione', 'emoz', 'slancio', 'ard', 'trasporto'];

var amore_vero_cits = ['L\'amore è reale, la realtà è amore | l\'amore è sentire, sentire l\'amore | l\'amore è voler essere amati. (John Lennon)',
      'L\'amore vero vuole il bene dell\'amato. (Umberto Eco)',
      'Se ti attendi qualche forma di ricompensa, non è amore: l\'amore vero è amare senza condizioni e senza aspettative. (Madre Teresa di Calcutta)',
      'L\'amore è una forma di pregiudizio. Si ama quello di cui si ha bisogno, quello che ci fa star bene, quello che ci fa comodo. Come fai a dire che ami una persona, quando al mondo ci sono migliaia di persone che potresti amare di più, se solo le incontrassi? Il fatto è che non le incontri. (Charles Bukowski)',
      '“Bimbo mi chiedi cos\'è l\'amore? Cresci e lo saprai. Bimbo mi chiedi cos\'è la felicità? Rimani bimbo e lo vedrai... (Jim Morrison)',
      'Io non pretendo di sapere cosa sia l’amore per tutti, ma posso dirvi che cosa è per me: l’amore è sapere tutto su qualcuno, è avere la voglia di essere ancora con lui più che con ogni altra persona. L’amore è la fiducia di dirgli tutto su voi stessi, compreso le cose che ci potrebbero far vergognare. L’amore è sentirsi a proprio agio e al sicuro... (Albert Einstein)',
      'L\'amore non vive di parole, né può essere spiegato a parole. (Madre Teresa di Calcutta)',
      'L\'Amore non è una passione. L\'Amore non è una emozione. L\'amore è una comprensione profonda del fatto che in qualche modo l\'altro ti completa. Qualcuno ti rende un cerchio perfetto; la presenza dell\'altro rinforza la tua presenza. (Osho)',
      'Trova qualcuno che ti faccia dimenticare il tuo passato, la tristezza. Trova qualcuno che ti cambi la vita, che la renda migliore, che sostituisca e riempia il vuoto di chi se n\'è andato. Trova qualcuno per cui valga la pena sorridere. (Marilyn Monroe)',
      'Ho quella disperata sensazione che niente abbia senso. Allora decido di innamorarmi, ma è troppo difficile. Voglio dire, pensi costantemente a una persona ed è soltanto fantasia, non è reale, e poi diventa una cosa così coinvolgente, devi vederla di continuo e va a finire che è un lavoro come un altro. (Andy Warhol)',
      'Liberate l\'amore oppure liberatevene per sempre. (Jim Morrison)',
      'L\'amore non chiede mai, dà sempre. (Mahatma Gandhi)',
      'Colui che l\'amore tocca non cammina nell’oscurità. (Platone)',
      'Non confondere l\'amore col delirio del possesso, che causa le sofferenze più atroci. Perché contrariamente a quanto comunemente si pensa, l\'amore non fa soffrire. Quello che fa soffrire è l\'istinto della proprietà, che è il contrario dell\'amore. (Antoine de Saint-Exupéry)'];

/// INNAMORARSI/AMORE VERO

function getInputValue() {
  // Selecting the input element and get its value
  var textFromInput = document.getElementById("myInput").value;
  var text_From_Voice = document.getElementById("myVoiceInput").innerHTML;
  //var inputVal = text_From_Voice.toLowerCase();
  var inputVal = textFromInput.toLowerCase();
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
  if (aiuto_supp_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var aiuto_supp_cit = aiuto_supp_cits[Math.floor(Math.random() * aiuto_supp_cits.length)];
    alert(aiuto_supp_cit);
  }
  if (solitudine_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var solitudine_cit = solitudine_cits[Math.floor(Math.random() * solitudine_cits.length)];
    alert(solitudine_cit);
  }
  if (emp_emoz_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var emp_emoz_cit = emp_emoz_cits[Math.floor(Math.random() * emp_emoz_cits.length)];
    alert(emp_emoz_cit);
  }
  if (separazione_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var separazione_cit = separazione_cits[Math.floor(Math.random() * separazione_cits.length)];
    alert(separazione_cit);
  }
  if (se_stessi_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var se_stessi_cit = se_stessi_cits[Math.floor(Math.random() * se_stessi_cits.length)];
    alert(se_stessi_cit);
  }
  if (amicizia_Cat_keywords.some(keyword => inputVal.includes(keyword))) {

  }
  if (vera_amicizia_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var vera_amicizia_cit = vera_amicizia_cits[Math.floor(Math.random() * vera_amicizia_cits.length)];
    alert(vera_amicizia_cit);
  }
  if (sep_feriti_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var sep_feriti_cit = sep_feriti_cits[Math.floor(Math.random() * sep_feriti_cits.length)];
    alert(sep_feriti_cit);
  }
  if (falsa_amicizia_keywords.some(keyword => inputVal.includes(keyword))) {
    console.log("Found")
    // audio.src = a_music;
    // audio.play();
    var falsa_amicizia_cit = falsa_amicizia_cits[Math.floor(Math.random() * falsa_amicizia_cits.length)];
    alert(falsa_amicizia_cit);
  }
  if (amore_Cat_keywords.some(keyword => inputVal.includes(keyword))) {
    if (amore_vero_keywords.some(keyword => inputVal.includes(keyword))) {
      console.log("Found")
      // audio.src = a_music;
      // audio.play();
      var amore_vero_cit = amore_vero_cits[Math.floor(Math.random() * amore_vero_cits.length)];
      alert(amore_vero_cit);
    }
  }


}
