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

////////////////////////////////////////////////////////////////////////////////////////// START PYTHIA




////////////////////////////////////////////// LEGAMI

////////// AMICIZIA

/// ESSERE AMICI/VERA amicizia
const amicizia_generico_keywords = ['amicizia', 'amico', 'amica', 'amiche', 'amici', 'amic', 'compagnia'];

const vera_amicizia_keywords = ['vero', 'vera', 'vere', 'veri', 'verit', 'veramente', 'genuin', 'sincer', 'autentic', 'schiett', 'dissimul', 'miglior', 'puro', 'pura', 'pure', 'puri', 'purezza', 'saldo', 'salda', 'salde', 'saldi', 'degn', 'solid', 'spontan',
  'signific', 'senso', 'sensi', 'valore', 'valori', 'importa',
  'capire', 'capir', 'capirsi', 'capisc', 'capito', 'comprendere', 'comprend', 'nasc',
  'fiducia', 'fidarsi', 'fid','affid', 'rispett',
  'volersi bene', 'voler bene', 'voglio bene', 'vuoi bene', 'vuole bene', 'vogliamo bene', 'volete bene', 'vogliono bene', 'bene', 'aver caro', 'ho caro', 'caro', 'cara', 'care', 'cari', 'affezion', 'affett', 'legam', 'legat'
];

var vera_amicizia_cits = ['55 L\'amicizia è la cosa più difficile al mondo da spiegare. Non è qualcosa che si impara a scuola. Ma se non hai imparato il significato dell\'amicizia, non hai davvero imparato niente. (Muhammad Ali)',
  '56 Ricordati di chi c\'era quando stavi male, perché saranno quelli che vorrai accanto quando tutto andrà bene. (Marilyn Monroe)',
  '57 Tra siciliani, un vero amico non deve chiedere all’altro una qualche cosa, perché non c’è bisogno, in quanto sarà preceduto dall’offerta dell’amico, che ha intuito la domanda che sarebbe arrivata. (Andrea Camilleri)',
  '59 Non possiamo dire in quale preciso momento nasca l\'amicizia. Come nel riempire una caraffa a goccia a goccia, c\'è finalmente una stilla che la fa traboccare, così in una sequela di atti gentili ce n\'è infine uno che fa traboccare il cuore. (Ray Bradbury)',
  '60 Non camminare dietro a me, potrei non condurti. Non camminarmi davanti, potrei non seguirti. Cammina soltanto accanto a me e sii mio amico. (Albert Camus)',
  '61 Nessun bene senza un compagno ci dà gioia. (Lucio Anneo Seneca)',
  '62 Coloro che eliminano dalla vita l\'amicizia, eliminano il sole dal mondo. (Cicerone)',
  '63 L\'amicizia è sempre una dolce responsabilità ma non è mai un\'opportunità. (Khalil Gibran)',
  '64 Non c\'è amicizia salda senza fiducia: e non c\'è fiducia senza far passare un certo tempo. (Aristotele)',
  '65 Amico mio accanto a te non ho nulla di cui scusarmi, nulla da cui difendermi, nulla da dimostrare: trovo la pace... Al di là delle mie parole maldestre tu riesci a vedere in me semplicemente l\'uomo. (Antoine de Saint-Exupéry)',
  '66 Degno di amicizia è chi ha dentro di sé la ragione di essere amato. (Cicerone)',
  '67 Conoscere qualcuno, ovunque egli sia, con cui comprendersi nonostante le distanze e le differenze, può trasformare la terra in un giardino. (Goethe)',
  '68 L\'amicizia, come l\'amore, richiede quasi altrettanta arte di una figura di danza ben riuscita. Ci vuole molto slancio e molto controllo, molti scambi di parole e moltissimi silenzi. Soprattutto molto rispetto. (Rudolf Nureyev)',
  '69 Ancora oggi non conosco nulla di più prezioso al mondo di una solida e sincera amicizia. (Herman Hesse)',
  '70 La vera amicizia è una pianta che cresce lentamente e deve passare attraverso i traumi delle avversità perché la si possa chiamare tale. (George Washington)',
  '71 L\'amicizia verso sé stessi è di fondamentale importanza, perché senza di essa non si può essere amici di nessun altro. (Eleanor Roosevelt)',
  '72 Troppo spesso togliamo tempo ai nostri amici per dedicarlo ai nostri nemici. (Hermann Hesse)',
  '73 Chi ti vuole bene non ferisce mai i tuoi sentimenti o non ti fa sentire all’altezza, ma piuttosto ti rimette in piedi e ti mostra ciò che ti rende speciale e ancora più bello. (Bob Marley)',
  '74 Non c’è mai tensione, gelosia o competizione, ma solo una calma silenziosa quando sei con loro. Puoi essere te stesso e non preoccuparti di ciò che potrebbero pensare di te perché ti amano per ciò che sei. (Bob Marley)',
  '75 Un amico non è mai un’imposizione. (Frank Sinatra)',
  '76 Un amico è solo un nemico che conosci. (Kurt Cobain)',
  '77 Trova qualcuno che ti faccia dimenticare il tuo passato, la tristezza. Trova qualcuno che ti cambi la vita, che la renda migliore, che sostituisca e riempia il vuoto di chi se n\'è andato. Trova qualcuno per cui valga la pena sorridere. (Marilyn Monroe)'
];


/// LASCIARE AMICI/SEPARAZIONE/ FERITI

const sep_feriti_amicizia_keywords = ['separazione', 'separarsi', 'separ', 'lasciare', 'essere lasciato', 'essere lasciata', 'essere lasciate', 'essere lasciati', 'ha lasciato', 'ha lasciato', 'lasciat', 'abbandonare', 'abbandon', 'finire', 'finita', 'finit', 'fine', 'fini', 'finit',
   'perdere', 'perdit', 'perso', 'persa', 'perse','persi',
   'dimenticare', 'dimenticat', 'dimentic', 'scordare', 'scordarsi', 'scord', 'mettere una pietra sopra', 'metterci una pietra sopra', 'lasciarsi alle spalle', 'lasciare alle spalle', 'lasciato alle spalle', 'superare',
   'ferit', 'ferire', 'feri', 'fare male', 'far male', 'fa male', 'farà male', 'offendere', 'offend', 'offes',
   'deludere', 'delud', 'delusion', 'delus'];

var sep_feriti_amicizia_cits = ['78 Non piangere se un amico ti ha lasciato: solo quando ti avrà dimenticato potrai dire di averlo perso per sempre. (Jim Morrison)',
    '79 Ci vuole un minuto per notare una persona speciale, un\'ora per apprezzarla, un giorno per volerle bene, tutta una vita per dimenticarla. (Charlie Chaplin)',
    '80 La stretta di mano è per l’amicizia l’ultima lettera dell’alfabeto, per l’amore è la prima. (Rita Levi-Montalcini)',
    '81 Non si ama qualcuno per tutta la vita; da questa speranza impossibile nascono adulterio, matricidio, tradimento dell\'amico. (Umberto Eco)',
    '82 Non ti rimpiangerò mai o non dirò che avrei voluto non averti mai conosciuto, perché tanto tempo fa eri esattamente ciò di cui avevo bisogno. (Bob Marley)'];

/// FALSA AMICIZIA/RELAZIONE NEGATIVA

const falsa_amicizia_keywords = ['peggior nemico', 'peggior nemica', 'peggiore nemico', 'peggiore nemica', 'peggiori nemici', 'peggiori nemiche','nemic',
     'falso', 'falsa','false', 'falsi', 'falsità', 'menzogn', 'illusione', 'illusor', 'illusor', 'illusio', 'sbaglia', 'fint', 'scorrett', 'fasull', 'ipocri', 'bugiard', 'bugia', 'bugie', 'sleal', 'doppiogiochista', 'doppiogioco', 'doppio', 'ingann', 'negativ',
      'opportunism', 'opportunist'];

var falsa_amicizia_cits = ['83 Alla fine, ci ricorderemo non le parole dei nostri nemici, ma il silenzio dei nostri amici. (Martin Luther King)',
      '14 La peggiore solitudine è essere privi di sincera amicizia. (Francis Bacon)',
      '84 È difficile sapere cosa sia la verità, ma a volte è molto facile riconoscere una falsità. (Albert Einstein)',
      '85 È più vergognoso non fidarsi dei propri amici che esserne ingannati. (François de la Rochefoucauld)',
      '72 Troppo spesso togliamo tempo ai nostri amici per dedicarlo ai nostri nemici. (Hermann Hesse)',
      '86 Il tuo peggior nemico potrebbe essere il tuo migliore amico e il tuo migliore amico potrebbe essere il tuo peggior nemico. (Bob Marley)',
      '76 Un amico è solo un nemico che conosci. (Kurt Cobain)',
      '87 O l’amicizia preziosa o l’ostilità durissima. (Benito Mussolini)',
      '18 Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)'
];


////////// RELAZIONI SOCIALI

const odio_keywords = ['onest', 'leal', 'rettitudine', 'corrett', 'retto', 'retta', 'rette', 'retti', 'degn', 'giust', 'serio', 'seri',
  'bene', 'voler bene', 'voglio bene', 'vuoi bene', 'vuole bene', 'vogliamo bene', 'volete bene', 'vogliono bene', 'benevolenza', 'solidarietà', 'solidale', 'cura', 'interesse', 'tolleran', 'affetto', 'affetti',
  'odio', 'odi', 'avversione', 'ostilità', 'ostil', 'disprezz', 'mal volere', 'malevol', 'risent', 'rancor', 'astio', 'intolleran', 'antipati', 'rifiut',
  'fingere', 'fing', 'finzione', 'far credere', 'ingann', 'mentire', 'mentito', 'menzogn', 'alle spalle', 'di nascosto',
  'simile', 'simili', 'prossimo',
  'gli altri', 'l\'altro', 'altrui',
  'razzis', 'antisemit', 'discrimin', 'fanat', 'pregiudiz', 'xenofob', 'sessis', 'diversità', 'divers', 'paur',
  'pace', 'pacifi', 'equità', 'equo', 'equa', 'eque', 'equi', 'libertà', 'liber'
];
var odio_cits = ['1 Ciò che è importante è che un uomo dovrebbe vivere nell\'onestà, nell\'amore naturale per l\'umanità. (Bob Marley)',
  '2 Qualcuno ti odierà, fingerà di amarti e poi cercherà di eliminarti alle tue spalle. (Bob MArley)',
  '3 Ci vuole sempre qualcuno da odiare per sentirsi giustificati nella propria miseria. (Umberto Eco)',
  '4 Nessuno nasce odiando i propri simili a causa della razza, della religione o della classe alla quale appartengono. Gli uomini imparano ad odiare, e se possono imparare a odiare, possono anche imparare ad amare, perchè l\'amore, per il cuore umano, è più naturale dell\'odio. (Nelson Mandela)',
  '5 Sii educato con tutti; socievole con molti; intimo con pochi; amico con uno soltanto; nemico con nessuno. (Benjamin Franklin)',
  '6 Sono lieto di vedere che siamo diversi. Che insieme si possa diventare più grandi della somma di entrambi. (Leonard Nimoy)',
  '7 La pace richiede quattro condizioni essenziali: verità, giustizia, amore e libertà. (Papa Giovanni Paolo I)'
];


/// 01 ESSERE BRAVE PERSONE

const bravo_keywords = ['miglior', 'più bravo', 'più brava', 'più brave', 'più bravi', 'brav', 'ottim',
  'educazione', 'educat', 'beneducat', 'cortese', 'cortesi', 'scortes', 'maleduca',
  'buone maniere', 'gentilezza', 'gentile', 'gentili', 'per bene', 'cattiv',
  'parlare bene', 'parlo bene', 'parli bene', 'parla bene', 'parliamo bene', 'parlate bene', 'parlano bene', 'parlino bene', 'sparl', 'parlo male', 'parli male', 'parla male', 'parliamo male', 'parlate male', 'parlano male', 'parlino male',
  'elogi', 'fare complimenti', 'complimenti', 'congratularsi', 'riconoscere', 'insult'
];

var bravo_cits = ['1 Ciò che è importante è che un uomo dovrebbe vivere nell\'onestà, nell\'amore naturale per l\'umanità. (Bob Marley)',
  '5 Sii educato con tutti; socievole con molti; intimo con pochi; amico con uno soltanto; nemico con nessuno. (Benjamin Franklin)',
  '6 Sono lieto di vedere che siamo diversi. Che insieme si possa diventare più grandi della somma di entrambi. (Leonard Nimoy)',
  '7 La pace richiede quattro condizioni essenziali: verità, giustizia, amore e libertà. (Papa Giovanni Paolo I)',
  '8 Puoi capire molto di più di una persona da ciò che dice sugli altri che da ciò che gli altri dicono su di lei. (Audrey Hepburn)'
];


/// 02 AIUTO/SUPPORTO

const aiuto_supp_keywords = ['aiuto', 'aiut', 'chiedere aiuto', 'soccor', 'dare una mano', 'darmi una mano', 'dai una mano', 'da una mano', 'danno una mano', 'chiedere una mano', 'chiedo una mano', 'chiedi una mano', 'chiede una mano', 'chiedono una mano', 'mano', 'appogg', 'assist', 'support',
  'bisogno', 'bisogn', 'necessità', 'necess', 'esigenza', 'abbisogn', 'serv', 'sostegno'
];

var aiuto_supp_cits = ['9 Ricorda: se mai avessi bisogno di una mano, è alla fine del tuo braccio. Invecchiando, ricorda di avere un’altra mano: la prima serve ad aiutare te stesso, la seconda ad aiutare gli altri. (Audrey Hepburn)',
  '10 Essere nella stessa stanza con delle persone e creare qualcosa insieme è una bella cosa. (Robin Williams)',
  '11 Se ti dovesse mai servire qualcosa, per favore non esitare a chiedere prima a qualcun altro. (Kurt Cobain)'
];

/// 03 SOLITUDINE

const solitudine_keywords = ['solitudine', 'solo', 'sola', 'sol', 'isolamento', 'isolat', 'rimanere solo', 'rimanere sola', 'rimanere soli', 'restare solo', 'restare sola', 'sento solo', 'sento sola', 'sentirmi solo', 'sentirmi sola', 'sentirsi soli', 'senza compagnia', 'senza nessuno', 'senza persone', 'allontanamento', 'allontana'];

var solitudine_cits = ['12 Pensavo che la cosa peggiore nella vita fosse rimanere da solo. Non lo è. La cosa peggiore nella vita è di finire con persone che ti fanno sentire solo. (Robin Williams)',
  '13 Non c\'importa tanto di non arrivare da nessuna parte quanto di non avere compagnia durante il tragitto. (Anna Frank)',
  '14 La peggiore solitudine è essere privi di sincera amicizia. (Francis Bacon)'
];

/// 04 EMPATIA/ESPRIMERE EMOZIONI

const emp_emoz_keywords = ['empatia', 'empatic', 'emozion', 'emotiv', 'sensibil', 'sentiment', 'cuor', 'simpatia', 'simpatet',
  'piangere', 'piang', 'pianto', 'pianti', 'lacrim', 'relazionar', 'relazionarsi', 'relazionarmi', 'relazionarci'
];

var emp_emoz_cits = ['15 A me ha sempre fatto pena la gente che ha paura dei sentimenti, delle emozioni, e nasconde quello che prova e non sa piangere con tutto il cuore. Perché chi non sa piangere con tutto il cuore non sa nemmeno ridere a gola spiegata. (Golda Meir)'];


/// 05 SEPARAZIONE/ESSERE FERITI/NEGATIVITA'

const separazione_keywords = ['ferire', 'ferit', 'soffrire', 'soffr', 'soffer', 'dolore', 'dolor', 'perdere', 'perdit', 'lasciare', 'lasciat', 'lasci', 'separazione', 'separarsi', 'separ', 'abbandon'];

var separazione_cits = ['16 La verità è che tutto il mondo ti ferirà. L\'idea è circondarsi di persone per cui valga la pena soffrire. (Bob Marley)',
  '17 Le persone capitano per caso nella nostra vita, ma non a caso. Spesso ci riempiono di insegnamenti. A volte ci fanno volare alto, altre ci schiantano a terra insegnandoci il dolore… donandoci tutto, portandosi via tutto, lasciandoci niente. (Alda Merini)',
  '18 Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)'
];

/// 06 PERDONO

const perdono_rel_keywords = ['perdono', 'perdonare', 'perdon', 'chiedere scusa', 'scusa', 'scuse', 'scusarsi', 'chiedere perdono', 'dimenticare', 'passare oltre', 'lasciar correre', 'tollerare', 'toller', 'assolvere', 'riconciliarsi',
   'punire', 'castigare', 'castig', 'punizione', 'punit', 'vendetta', 'vendicare', 'vendicarsi', 'vendic',
   'dispiacere', 'dispiacersi', 'mi dispiace', 'sentirsi in colpa'
 ];

var perdono_rel_cits = ['20 Il perdono libera l\'anima, rimuove la paura. È per questo che il perdono è un\'arma potente. (Nelson Mandela)',
   '21 Sappiamo che, se vogliamo veramente amare, dobbiamo imparare a perdonare. (Madre Teresa di Calcutta)',
   '22 Io non parlo di vendette né di perdoni; la dimenticanza è l\'unica vendetta e l\'unico perdono. (Jorge Luis Borges)',
   '23 Il perdono è la qualità del coraggioso, non del codardo. (Mahatma Gandhi)',
   '24 Il perdono è la fragranza che la violetta lascia sul calcagno che l\'ha schiacciata. (Mark Twain)',
   '25 Nel perdono c\'è sempre un\'inclinazione dall\'alto verso il basso, che impedisce una relazione alla pari. Ma se tu dici: "mi dispiace", stai di fronte. Allora conservi la tua tua dignità, e così l\'altro può avvicinarsi a te più facilmente. (Bert Hellinger)',
   '26 È più facile perdonare un nemico che un amico. (William Blake)',
   '27 Il perdono è la chiave che sblocca la porta del risentimento e le manette dell\'odio. È un potere che spezza le catene dell\'amarezza e i ceppi dell\'egoismo (William Arthur Ward)',
   '28 Perdonare non significa ignorare ciò che è stato fatto contro di noi. Significa piuttosto che quella cattiveria cessa di essere un ostacolo ai rapporti. (Martin Luther King)',
   '29 Occhio per occhio… e il mondo diventa cieco. (Mahatma Gandhi)',
   '30 Perdonare sempre, ma dimenticare mai. (Giovanni Giolitti)',
   '31 Dimenticato è perdonato. (Francis Scott Fitzgerald)',
   '32 Gli errori sono sempre perdonabili, se si ha il coraggio di ammetterli. (Bruce Lee)'];

/// 07 GELOSIA

const gelosia_rel_keywords = ['gelosia', 'geloso', 'gelosa', 'gelos', 'invidia', 'invidios', 'invidiar', 'antagonismo', 'antagonist', 'rivalità', 'rivale', 'risentimento', 'astio', 'contrasto', 'contrasti'];

var gelosia_rel_cits = ['33 La gelosia è l\'itterizia dell\'anima. (John Dryden)',
   '34 La memoria è la tormentatrice dei gelosi. (Victor Hugo)',
   '35 La gelosia non ha bisogno di motivi. (Mahatma Gandhi)',
   '36 Ci sono molte forme di gelosia, ma la più terribile è la gelosia del passato. (Vittorio Gassman)',
   '37 La gelosia è un\'equazione a tre termini permutabili (indecidibili). Si è sempre gelosi di due persone contemporaneamente: io sono geloso di chi amo e di chi lo ama. L\'odiosamato" (il "rivale") è "anche" amato da me: esso m\'interessa, m\'incuriosisce, mi affascina. (Roland Barthes)',
   '38 L\'indignazione morale è in molti casi al 2 per cento morale, al 48 per cento indignazione, e al 50 per cento invidia. (Vittorio de Sica)',
   '39 Non appena nasce la virtù, nasce contro di lei l\'invidia, e farà prima il corpo a perdere la sua ombra che la virtù la sua invidia. (Leonardo Da Vinci)',
   '40 L\'invidia è il più stupido dei vizi, poiché non c’è alcun vantaggio da ottenere da essa. (Honore de Balzac)',
   '41 Una persona competente e sicura di sé è incapace di essere gelosa. La gelosia è inevitabilmente un sintomo dell’insicurezza nevrotica. (Robert A. Heinlein)',
   '42 L’invidia è ignoranza.” (Ralph Waldo Emerson)',
   '43 Il risentimento è come bere del veleno e aspettare che l’altra persona muoia.― Carrie Fisher  (azzurro'
 ];

/// 08 TRADIMENTO

const tradimento_rel_keywords = ['tradire','tradit','tradiment','tradisc','ingannare','ingann','infedel','voltafaccia','voltagabbana','imbrogli','imbrogliare','imbrogliat','doppiezza','doppio gioco','fregare','freg'];

var tradimento_rel_cits = ['44 Se qualcuno ti tradisce una volta, è un suo errore, se qualcuno ti tradisce due volte è un tuo errore. (Eleanor Anna Roosvelt)',
   '45 Non tradire chi ti sorride: potrebbe avere la morte nel cuore e regalarti ugualmente un po\' di vita (Jim Morrison)',
   '46 La violenza e il tradimento sono armi a doppio taglio: feriscono più gravemente chi le usa, di chi le soffre. (Emily Jane Bronte)',
   '47 L\'ultima tentazione è il peggiore dei tradimenti: fare la cosa giusta per il motivo sbagliato. (Thomas Stearns Eliot)',
   '48 Si tradisce più spesso per debolezza che per deliberato disegno di tradire. (François De La Rochefoucauld)',
   '49 Chiunque sia sospettoso invita al tradimento. (Voltaire)',
   '50 C\'è più onore in tradire che in esser fedeli a metà. (Giovanni Giudici) ',
   '51 E badate che è azione indegna lusingare con le parole e uccidere con l\'intenzione: è azione da belva feroce, madre d\'inganno e di tradimento. (Pedro Calderón De La Barca)',
   '52 La fedeltà è lo sforzo di un\'anima nobile per eguagliarsi a un\'altra anima più grande di lei. (Goethe)',
   '53 Il tradito potrà anche essere un ingenuo, ma il traditore rimarrà sempre un infame! (Benito Mussolini) ',
   '54 È meglio essere tradito davvero, che saperlo sì e no. (William Shakespeare)'
 ];

// 06 ESSERE SE STESSI

// const se_stessi_keywords = ['essere se stessi', 'essere me stesso', 'essere me stessa', 'piacersi', 'piacermi', 'piacere a se stessi', 'piacere a me stesso', 'piacere a me stessa', 'piacere se stesso', 'piacere se stessa', 'piacere agli altri', 'piacere alla gente', 'piacere alle persone', 'piacere a'];
//
// var se_stessi_cits = ['Ero stanco di far finta di essere qualcun’altro solo per andare d’accordo con le persone, solo per avere degli amici. (Kurt Cobain)'];



////////// AMORE

const amore_generico_keywords = ['amore', 'amor', 'amare', 'amo', 'ami','ama','amiamo','amate','amano','innamorarsi', 'innamor',
      'mi piace', 'ti piace', 'gli piace', 'piacciono', 'gli piaccio', 'le piaccio', 'piace', 'compagno', 'compagna', 'compagne', 'compagni',
      'fidanz', 'marit', 'mogli', 'moros', 'mio tipo', 'mia tipa', 'tipo', 'tipa','tipe','tipi'];


/// LASCIARE/ABBANDONO/ESSERE FERITI

const lasciare_keywords = ['lasciare', 'lasciat', 'abband', 'finire', 'fine', 'finit', 'finire', 'separ', 'perder', 'perso', 'persa', 'perse', 'persi', 'rompere', 'rotto', 'rotta', 'rotte', 'rotti', 'mollare', 'mollo', 'mollat', 'smett', 'smess',
       'dimenticare', 'dimentic', 'scordare', 'scordarsi', 'scord', 'mettere una pietra sopra', 'metterci una pietra sopra', 'scomp',
       'ferit', 'ferir', 'fare male', 'far male', 'fa male', 'male', 'offend', 'offes', 'delus', 'soffr', 'soffer', 'dolor', 'fallimentare', 'senza successo'];

var lasciare_cits = ['88 arancione | I venti che a volte portano via qualcosa che amiamo sono gli stessi che ci portano qualcosa da imparare ad amare. Quindi non dovremmo piangere per qualcosa che ci è stato portato via ma, sì, amare ciò che ci è stato offerto. Perché ciò che è veramente nostro ci appartiene per sempre. (Bob Marley)',
       '89 azzurro | Non ci può essere profonda delusione dove non c\'è un amore profondo. (Martin Luther King)',
       '90 rosa | Tu e io non siamo che una cosa sola. Non posso farti del male senza ferirmi. (Mahatma Gandhi)',
       '91 verde | L\'amore è una promessa, l’amore è un ricordo, una volta donato non può essere dimenticato, non può mai scomparire. (John Lennon)',
       '92 viola | Quando un amore finisce, uno dei due soffre. Se non soffre nessuno, non è mai iniziato. Se soffrono entrambi, non è mai finito. (Marilyn Monroe)',
       '81 azzurro | Non si ama qualcuno per tutta la vita; da questa speranza impossibile nascono adulterio, matricidio, tradimento dell\'amico. (Umberto Eco)',
       '93 azzurro | Smettere di amare è come perdere peso. è molto più semplice metterne su che perderlo. (Aretha Franklin)',
       '82 viola | Non ti rimpiangerò mai o non dirò che avrei voluto non averti mai conosciuto, perché tanto tempo fa eri esattamente ciò di cui avevo bisogno. (Bob Marley)',
       '18 rosso | Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)',
       '94 viola | Non siamo mai così indifesi verso la sofferenza, come nel momento in cui amiamo. (Sigmund Freud)'];


/// FALSO AMORE/RELAZIONE NEGATIVA

const falso_amore_keywords = ['falso', 'falsa', 'false','falsi', 'menzogn', 'illus', 'sbagl', 'fint', 'fing', 'finz', 'scorrett', 'fasull', 'ipocri', 'bugiard', 'bugi', 'sleal', 'doppiogiochista', 'doppio', 'doppi', 'ingann', 'negat', 'inadatt',
       'infelic', 'triste', 'tristezza', 'possess', 'possi', 'opprim', 'soffoc'];

var falso_amore_cits = ['95 rosso | Un codardo è un uomo che risveglia l’amore di una donna senza l’intenzione di amarla. (Bob Marley)',
       '96 verde | Se riesci ad amare così tanto la persona sbagliata, immagina quanto puoi amare quella giusta. (Bob Marley)',
       '97 arancione | L\'amore porta molta felicità, molto più di quanto struggersi per qualcuno porti dolore. (Albert Einstein)',
       '98 rosa | Non confondere l\'amore col delirio del possesso, che causa le sofferenze più atroci. Perché contrariamente a quanto comunemente si pensa, l\'amore non fa soffrire. Quello che fa soffrire è l\'istinto della proprietà, che è il contrario dell\'amore. (Antoine de Saint-Exupéry)',
       '92 viola | Quando un amore finisce, uno dei due soffre. Se non soffre nessuno, non è mai iniziato. Se soffrono entrambi, non è mai finito.',
       '18 rosso | Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)'];

/// INNAMORARSI/AMORE VERO

const amore_vero_keywords = ['amarsi', 'innamorarsi', 'innamorat', 'vero', 'vera','vere', 'veri', 'veramente','verit', 'genuin', 'sincer', 'autenticamente', 'autent', 'schiett', 'dissimul', 'miglior', 'puro', 'pura', 'pure', 'puri', 'purezza', 'saldo', 'salda', 'salde', 'saldi', 'degn', 'solid', 'spontan', 'incondiz',
      'significat', 'senso', 'sensi', 'valor', 'import',
      'capir', 'capito', 'capita', 'capite', 'capiti', 'comprend', 'nasc', 'sostenere', 'accettare', 'impar',
      'fidarsi', 'fido', 'fida', 'fiduc', 'affid', 'rispett',
      'complet', 'passione', 'emoz', 'slancio', 'ard', 'trasporto', 'per sempre'];

var amore_vero_cits = ['99 rosa | L\'amore è reale, la realtà è amore | l\'amore è sentire, sentire l\'amore | l\'amore è voler essere amati. (John Lennon)',
      '100 azzurro | L\'amore vero vuole il bene dell\'amato. (Umberto Eco)',
      '101 azzurro | Se ti attendi qualche forma di ricompensa, non è amore: l\'amore vero è amare senza condizioni e senza aspettative. (Madre Teresa di Calcutta)',
      '102 azzurro | L\'amore è una forma di pregiudizio. Si ama quello di cui si ha bisogno, quello che ci fa star bene, quello che ci fa comodo. Come fai a dire che ami una persona, quando al mondo ci sono migliaia di persone che potresti amare di più, se solo le incontrassi? Il fatto è che non le incontri. (Charles Bukowski)',
      '103 viola | Bimbo mi chiedi cos\'è l\'amore? Cresci e lo saprai. Bimbo mi chiedi cos\'è la felicità? Rimani bimbo e lo vedrai... (Jim Morrison)',
      '104 rosa | Io non pretendo di sapere cosa sia l’amore per tutti, ma posso dirvi che cosa è per me: l’amore è sapere tutto su qualcuno, è avere la voglia di essere ancora con lui più che con ogni altra persona. L’amore è la fiducia di dirgli tutto su voi stessi, compreso le cose che ci potrebbero far vergognare. L’amore è sentirsi a proprio agio e al sicuro... (Albert Einstein)',
      '105 azzurro | L\'amore non vive di parole, né può essere spiegato a parole. (Madre Teresa di Calcutta)',
      '106 arancione | L\'Amore non è una passione. L\'Amore non è una emozione. L\'amore è una comprensione profonda del fatto che in qualche modo l\'altro ti completa. Qualcuno ti rende un cerchio perfetto; la presenza dell\'altro rinforza la tua presenza. (Osho)',
      '77 rosa | Trova qualcuno che ti faccia dimenticare il tuo passato, la tristezza. Trova qualcuno che ti cambi la vita, che la renda migliore, che sostituisca e riempia il vuoto di chi se n\'è andato. Trova qualcuno per cui valga la pena sorridere. (Marilyn Monroe)',
      '107 azzurro | Ho quella disperata sensazione che niente abbia senso. Allora decido di innamorarmi, ma è troppo difficile. Voglio dire, pensi costantemente a una persona ed è soltanto fantasia, non è reale, e poi diventa una cosa così coinvolgente, devi vederla di continuo e va a finire che è un lavoro come un altro. (Andy Warhol)',
      '108 azzurro | Liberate l\'amore oppure liberatevene per sempre. (Jim Morrison)',
      '109 rosa | L\'amore non chiede mai, dà sempre. (Mahatma Gandhi)',
      '110 azzurro | Colui che l\'amore tocca non cammina nell’oscurità. (Platone)',
      '98 rosa | Non confondere l\'amore col delirio del possesso, che causa le sofferenze più atroci. Perché contrariamente a quanto comunemente si pensa, l\'amore non fa soffrire. Quello che fa soffrire è l\'istinto della proprietà, che è il contrario dell\'amore. (Antoine de Saint-Exupéry)'];

/// AMORE NON CORRISPOSTO

const non_corrisposto_keywords = ['non corrisposto', 'non ricambiato', 'non ricambia', 'non ricambiato', 'non mi ricambia', 'non contraccambiato', 'contracc', 'respingere', 'respin', 'rifiut', 'non mi ama'];

var non_corrisposto_cits = ['97 arancione | L\'amore porta molta felicità, molto più di quanto struggersi per qualcuno porti dolore. (Albert Einstein)',
       '111 azzurro | Conosce l’amore solo chi ama senza speranza. (Friedrich Schiller)',
       '112 viola | L\'amore fugge come un’ombra l\'amore reale che l\'insegue, inseguendo chi lo fugge, fuggendo chi l\'insegue.(William Shakespeare)',
       '113 viola | Il peggior modo di sentire la mancanza di qualcuno è esserci seduto accanto e sapere che non l’avrai mai. (Gabriel Garcia Marquez)',
       '114 viola | Se infelice è l’innamorato che invoca baci di cui non sa il sapore, mille volte più infelice è chi questo sapore gustò appena e poi gli fu negato. (Italo Calvino)',
       '115 azzurro | E non era una stupida, sapeva quel che voleva. Solamente, voleva delle cose impossibili. (Cesare Pavese)',
       '94 viola | Non siamo mai così indifesi verso la sofferenza, come nel momento in cui amiamo. (Sigmund Freud)',
       '116 azzurro | Solo chi ama senza speranza conosce il vero amore. (Pablo Neruda)',
       '117 viola | Non essere amati è una semplice sventura; la vera disgrazia è non saper amare. (Albert Camus)',
       '118 viola | Se amate senza suscitare amore, vale a dire, se il vostro amore non produce amore, se attraverso l\'espressione di vita di persona amante voi non diventate una persona amata, allora il vostro amore è impotente, è sfortunato. (Erich Fromm)',
       '119 viola | Perché la mancanza d’amore è la mia pestilenza. (Alda Merini)'];

//// GELOSIA

const gelosia_amore_keywords = ['gelosia', 'gelos', 'invidia', 'invidioso', 'invid', 'invidiare', 'antagonis', 'rivalità', 'rival', 'risentimento', 'risent', 'astio'];

var gelosia_amore_cits = ['120 azzurro | Non essere gelosa se vedi il tuo ex con un\'altra... la mamma ci ha insegnato che devi dare i giocattoli usati ai meno fortunati. (Marilyn Monroe)',
'121 azzurro | Chi non è geloso non ama. SANT\'AGOSTINO',
'122 azzurro | L\'innamorato geloso sopporta meglio la malattia della sua amante che la sua libertà. MARCEL PROUST',
'37 azzurro | La gelosia è un\'equazione a tre termini permutabili (indecidibili). Si è sempre gelosi di due persone contemporaneamente: io sono geloso di chi amo e di chi lo ama. L\'"odiosamato" (il "rivale") è "anche" amato da me: esso m\'interessa, m\'incuriosisce, mi affascina. ROLAND BARTHES'];

///// MATRIMONIO DIVORZIO

const matrimonio_divorzio_keywords = ['matrimonio', 'nozze', 'sposa', 'spose', 'sposo', 'sposi', 'sposarsi', 'maritarsi', 'risposarsi', 'divorzio', 'divorziare', 'divorziat'];
const moglie_marito_keywords = ['marito', 'mariti', 'moglie', 'mogli'];
const divorzio_keywords = ['separarsi', 'separat', 'separ'];

var matrimonio_divorzio_cits = ['124 azzurro | Si dovrebbe essere sempre innamorati. Ecco perché non bisognerebbe mai sposarsi!” OSCAR WILDE',
'125 azzurro | “Sposarsi o non sposarsi non è importante. In ogni caso ti pentirai.” SOCRATE',
'126 azzurro | “Se vuoi essere felice per un\'ora, ubriacati. Se vuoi essere felice per tre giorni, sposati. Se vuoi essere felice per una settimana, uccidi un maiale e dai un banchetto. Se vuoi essere felice per tutta la vita, fatti un giardino.” CARLO SCARPA',
'127 azzurro | “La cosa brutta dell\'amore è che molti lo confondono con la gastrite e, una volta guariti dalla malattia, si ritrovano che sono sposati.” GROUCHO MARX',
'128 azzurro | “Non è affatto vero che gli uomini sposati vivano più a lungo. Sembra solo loro che la vita sia più lunga.” PITAGORA',
'129 azzurro | “È molto stupido per gli innamorati sposarsi.” GEORGE BERNARD SHAW',
'130 azzurro | “Quando una donna si risposa è perché detestava il primo marito. Quando un uomo si risposa è perché adorava la prima moglie. Le donne tentano la sorte, gli uomini la rischiano.” OSCAR WILDE',
'131 rosso | “Il matrimonio è solo la scopata santificata, e una scopata santificata finisce sempre, immancabilmente, per venire a noia, per essere un lavoro.” CHARLES BUKOWSKI (rosso)',
'132 viola | “È meglio essere infelicemente innamorati che essere infelicemente sposati. Alcuni fortunati riescono in tutte e due le faccende.” GUY DE MAUPASSANT',
'133 azzurro “Il matrimonio è il tentativo fallimentare di trasformare un caso in qualcosa di duraturo.” — Albert Einstein',
'134 rosa | “Il Matrimonio è l\'anello d\'oro di una catena il cui inizio è dato da uno sguardo, e il cui termine è l\'Eternità” — Khalil Gibra',
'135 azzurro | “Il problema nella vita pubblica è saper superare la paura, il problema nel matrimonio è saper superare la noia.” — Gabriel García Márquez',
'136 azzurro | “Il matrimonio può essere la morte o la vita, non ci sono vie di mezzo.“ — Khalil Gibran',
'137 azzurro | “C\'è almeno un matrimonio che rende un uomo felice: quello di sua figlia.“ — Marcel Achard',
'138 azzurro | “Sicuramente esistono molte ragioni per i divorzi; però la ragione principale è e sarà il matrimonio.“ — Jerry Lewis',
'139 rosso | “Così il matrimonio è il comune purgatorio di tutti i temperamenti rigogliosi e potenti. Purgatorio di peccati inesistenti, logorìo di gioventù, tutto in omaggio a un\'assurda mentalità negatrice, deprimente, sopraffattrice che non ammette il trionfale sviluppo della gioia fisiologica e della libertà rischiosa e temeraria.“ — Filippo Tommaso Marinetti ',
'140 azzurro | “Niente assomiglia tanto all\'inferno quanto un matrimonio felice.“ — Gabriel García Márquez'
];

/////// PERDONO

const perdono_amore_keywords = ['perdono', 'perdon', 'perdonare', 'scusare', 'chiedere scusa', 'scusa', 'scusarsi', 'scus', 'chiedere perdono', 'dimenticare', 'passare oltre', 'lasciar correre', 'tollerare', 'toller', 'punire', 'pun', 'castigare', 'castig', 'punizione', 'vendetta', 'vendicare', 'vendicarsi', 'vendic', 'dispiacere', 'dispiacersi', 'mi dispiace'];

var perdono_amore_cits = ['19 azzurro | Perdona sempre i tuoi nemici. Nulla li fa arrabbiare di più. (Oscar Wilde)',
'20 verde | Il perdono libera l\'anima, rimuove la paura. È per questo che il perdono è un\'arma potente. (Nelson MAndela)',
'21 rosa | Sappiamo che, se vogliamo veramente amare, dobbiamo imparare a perdonare. (Madre Teresa di Calcutta) ',
'22 azzurro | Io non parlo di vendette né di perdoni; la dimenticanza è l\'unica vendetta e l\'unico perdono. (Jorge Luis Borge) ',
'23 azzurro | Il perdono è la qualità del coraggioso, non del codardo.(Mahatma Gandhi)',
'24 azzurro | Il perdono è la fragranza che la violetta lascia sul calcagno che l\'ha schiacciata. (Mark Twain)',
'25 rosa | Nel perdono c\'è sempre un\'inclinazione dall\'alto verso il basso, che impedisce una relazione alla pari. Ma se tu dici: "mi dispiace", stai di fronte. Allora conservi la tua tua dignità, e così l\'altro può avvicinarsi a te più facilmente. (Bert Hellingher)',
'27 rosa | Il perdono è la chiave che sblocca la porta del risentimento e le manette dell\'odio. È un potere che spezza le catene dell\'amarezza e i ceppi dell\'egoismo. (William Arthur Ward)',
'28 azzurro | Perdonare non significa ignorare ciò che è stato fatto contro di noi. Significa piuttosto che quella cattiveria cessa di essere un ostacolo ai rapporti. (Martin Luther King) ',
'29 azzurro | Occhio per occhio e il mondo diventa cieco. (Mahatma Gandhi)',
'30 azzurro | Perdonare sempre, ma dimenticare mai. (Giovanni Giolitti) ',
'31 azzurro | Dimenticato è perdonato. (Francis Scott Fitzgerald)',
'32 azzurro | Gli errori sono sempre perdonabili, se si ha il coraggio di ammetterli. (Bruce Lee)'
];

/////// TRADIMENTO

const tradimento_amore_keywords = ['tradire', 'tradito', 'tradita', 'tradite', 'traditi', 'tradit', 'tradisc', 'tradiment',
'ingannare', 'ingannat', 'ingann', 'ingannevol', 'infedeltà', 'infedel', 'voltafaccia', 'voltagabbana', 'imbrogli', 'imbrogliare', 'imbrogliat',
'doppiezza', 'doppio gioco', 'fregare', 'freg', 'fregat', 'corna', 'cornut', 'amante', 'amanti',
'cornificare', 'cornifico', 'cornific', 'cornificat', 'incornare', 'incorno', 'incorn', 'incornat', 'adulterio', 'adulter'];

var tradimento_amore_cits = ['44 rosso | “Se qualcuno ti tradisce una volta, è un suo errore, se qualcuno ti tradisce due volte è un tuo errore.” ELEANOR ANNA ROOSEVELT',
'45 viola | “Non tradire chi ti sorride: potrebbe avere la morte nel cuore e regalarti ugualmente un po\' di vita.” JIM MORRISON',
'46 rosso | “La violenza e il tradimento sono armi a doppio taglio: feriscono più gravemente chi le usa, di chi le soffre.” EMILY JANE BRONTE',
'47 azzurro | “L\'ultima tentazione è il peggiore dei tradimenti: fare la cosa giusta per il motivo sbagliato.” THOMAS STEARNS ELIOT ',
'48 rosso | Si tradisce più spesso per debolezza che per deliberato disegno di tradire. François De La Rochefoucauld',
'49 azzurro | Chiunque sia sospettoso invita al tradimento. Voltaire',
'50 azzurro | C\'è più onore in tradire che in esser fedeli a metà. Giovanni Giudici ',
'51 rosso | E badate che è azione indegna lusingare con le parole e uccidere con l\'intenzione: è azione da belva feroce, madre d\'inganno e di tradimento. — Pedro Calderón De La Barca',
'52 verde | “La fedeltà è lo sforzo di un\'anima nobile per eguagliarsi a un\'altra anima più grande di lei.” GOETHE ',
'53 rosso | Il tradito potrà anche essere un ingenuo, ma il traditore rimarrà sempre un infame! Benito Mussolini',
'54 azzurro | È meglio essere tradito davvero, che saperlo sì e no. William Shakespeare',
'141 viola | “Confessare non è tradire. Non importa quello che dici o non dici, ciò che conta sono i sentimenti. Se riuscissero a fare in modo che io non ti ami più… quello sarebbe tradire.” GEORGE ORWELL',
'142 rosso | È veramente umana la passione perversa di appartenere a una persona soltanto? Mario Puzo',
'143 azzurro | In fin dei conti si tradisce solo ciò che si ama. Gunter Grass',
'144 azzurro | Quando l\'essere amato va troppo lontano nel tradimento di se stesso e persevera nell\'inganno di sé, l\'amore non lo segue più.“— Jacques Lacan',
'145 viola | Si può essere innamorati di diverse persone per volta, e di tutte con lo stesso dolore, senza tradirne nessuna, il cuore ha più stanze di un bordello. GABRIEL GARCIA MARQUEZ'
];

//////// SUCCESSO IN AMORE

const successo_amore_keywords = ['conquistare', 'conquisto', 'conquist', 'sedurre', 'seduc', 'seduttiv', 'sedutt', 'seducent', 'seduzion', 'attrarre',
'attrae', 'attraggo', 'attraent', 'affascin', 'affascinant', 'fascino', 'fascini', 'rubacuore', 'rubacuori', 'sex appeal', 'playboy', 'latin lover', 'femme fatale'];

var successo_amore_cits = ['146 azzurro | Conquistare l’anima di una donna è un’arte, sapersene liberare è un capolavoro. (Sören Kierkegaard)',
'147 azzurro | Non è abbastanza conquistare; uno deve imparare a sedurre. (Voltaire)',
'148 azzurro | Ancor oggi non so se quella mania di conquista celi una sovrabbondanza di vitalità, il gusto di possedere o il bisogno inconfessato di esser rassicurati su se stessi. (Françoise Sagan)',
'149 azzurro | Non è il viso che colpisce, ma le espressioni. Non è il corpo che ci piace, ma il modo in cui si muove. Non è spesso l’aspetto fisico che ci attrae, ma sono i modi di fare di una persona. (Marilyn Monroe)',
'150 azzurro | Non si riesce a sedurle dicendo loro: “Non sei niente male”. Bisogna almeno spingersi a: “Sei l’unica al mondo”. Per loro è il minimo tollerabile. (Louis-Ferdinand Céline)',
'152 rosa | La seduzione non è il luogo del desiderio. È quello della vertigine, dell’eclissi, dell’apparizione e della sparizione. (Jean Baudrillard)'
];

//////// SINGLE

const single_keywords = ['single', 'solo', 'sola', 'celibe', 'nubile', 'scapol', 'zitell'];

var single_cits = ['117 viola | “Non essere amati è una semplice sventura; la vera disgrazia è non saper amare.” Albert Camus'];

/////// SEGUIRE CUORE O TESTA

const cuore_testa_keywords = ['cuor', 'testa', 'mente', 'razional', 'impuls', 'pancia'];

var cuore_testa_cits = ['162 azzurro “C\'è sempre un grano di pazzia nell\'amore, così come c\'è sempre un grano di logica nella pazzia.” FRIEDRICH WILHELM NIETZSCHE'];


//////// FAMIGLIA

const famiglia_keywords = ['famiglia', 'figlio', 'figlia', 'figlie', 'figli', 'genitore', 'genitore', 'genitor', 'mamma', 'mamme', 'papà', 'madre', 'madri', 'materno', 'paterno', 'padre', 'padri', 'familiari', 'familiare', 'bambino', 'bambina', 'bambine', 'bambini', 'parentel', 'parente', 'parenti'];

var famiglia_cits = ['153 rosso | “Il matrimonio, Dio, i figli, i parenti e il lavoro. Non ti rendi conto che qualsiasi idiota può vivere così e che la maggior parte lo fa?” CHARLES BUKOWSKI',
'155 arancione | “La forza di una famiglia, come la forza di un\'armata, si basa sulla lealtà reciproca.” MARIO PUZO',
'156 azzurro | “Si può fare tutto, ma la famiglia non si può lasciare.” GIANNI AGNELLI',
'158 rosa | “La famiglia, quel caro polipo dai cui tentacoli non sfuggiamo mai abbastanza, e nell\'interno dei nostri cuori nemmeno desideriamo davvero farlo.” DODIE SMITH ',
'159 azzurro | “Chi ha raccolto le sfide della vita sa che nei momenti decisivi ha dovuto disattendere o disobbedire ai legami della famiglia.” GIORGIO BOCCA',
'160 azzurro | I tuoi figli non sono tuoi figli. Sono fratelli e sorelle bramosi di vita per se stessi... ti puoi ingegnare per essere come loro, ma non si deve cercare di renderli come noi. KAHLIL GIBRAN'
];

//////// FRATELLO

const fratello_keywords = ['fratello', 'fratelli', 'gemello', 'gemelli', 'fraterno', 'fraterni', 'fratellastro', 'fratellastri'];

var fratello_cits = ['201 verde | Quando i fratelli vanno d’accordo, nessuna fortezza è così solida come la loro vita in comune. (Antistene)'];

/////// SORELLA

const sorella_keywords = ['sorella', 'sorelle', 'gemella', 'sorellastra', 'sorellastre'];

var sorella_cits = ['157 rosa | “Essere sorelle è probabilmente la parentela più competitiva all\'interno della famiglia, ma una volta che le sorelle sono cresciute, diventa la relazione più forte.” MARGARET MEAD'];

////// FUTURO AMORE

const futuro_keywords = ['presente', 'passato', 'futuro', 'domani', 'ieri', 'oggi', 'destino', 'fato', 'avvenire', 'giovinezza', 'vecchiaia', 'gioventù',
'succederà', 'sarà', 'accadrà', 'avverrà', 'avventuros', 'rà', 'rò', 'ranno', 'rai', 'remo', 'rete',
'indietro', 'avanti', 'dietro'];

var futuro_cits = ['1fut verde Il futuro entra in noi, per trasformarsi in noi, molto prima che accada. Rainer Maria Rilke',
'2fut azzurro Non lasciare che il futuro ti disturbi. Lo incontrerai, se necessario, con le stesse armi della ragione che oggi ti armano contro il presente. Marco Aurelio',
'3fut arancione Il futuro appartiene a coloro che credono nella bellezza dei loro sogni. Eleanor Roosevelt',
'4fut azzurro Non possiamo sempre costruire il futuro per la nostra giovinezza, ma possiamo costruire la nostra giovinezza per il futuro. Franklin D. Roosevelt',
'5fut verde L\'istruzione è il passaporto per il futuro, perché domani appartiene a coloro che si preparano per esso oggi. Malcolm X',
'6fut viola Mi sono reso conto che il passato e il futuro sono vere illusioni, che esistono nel presente, che è ciò che c\'è e tutto ciò che c\'è. Alan Wilson Watts',
'7fut azzurro Ogni uomo deve avere ragione nel decidere il proprio destino. Bob Marley',
'8fut arancione La vera generosità verso il futuro sta nel dare tutto al presente. Albert Camus',
'9fut verde Non c\'è niente come un sogno per creare il futuro. Victor Hugo',
'10fut arancione Cambiare è la legge della vita. E quelli che guardano solo al passato o al presente mancheranno sicuramente il futuro. John F. Kennedy',
'11fut azzurro Chi controlla il presente, controlla il passato. Chi controlla il passato, controlla il futuro. George Orwell',
'12fut verde Domani appartiene a coloro che possono sentirlo arrivare. David Bowie ',
'13fut verde L\'unico limite alla nostra realizzazione di domani saranno i nostri dubbi di oggi. Andiamo avanti con fede forte e attiva. Franklin D. Roosevelt',
'14fut arancione Mi sento molto avventurosa. Ci sono così tante porte da aprire e non ho paura di guardarmi dietro. Elizabeth Taylor',
'15fut viola Se apriamo una lite tra passato e presente, scopriremo di aver perso il futuro. Winston Churchill',
'16fut viola La nostra ansia non viene dal pensare al futuro, ma dal voler controllare. Kahlil Gibran',
'17fut azzuro Bene, dobbiamo aspettare che il futuro si mostri. Virginia Woolf',
'18fut arancione È una meraviglia ignorare il futuro. Marguerite Duras ',
'19fut viola Se il presente cerca di giudicare il passato, perderà il futuro. Winston Churchill',
'20fut azzurro Oggi non è che un giorno qualunque di tutti i giorni che verranno, ma ciò che farai in tutti i giorni che verranno dipende da quello che farai oggi. È stato così tante volte. Ernest Hemingway',
'21fut rosa Qualunque decisione tu abbia preso per il tuo futuro, sei autorizzato, e direi incoraggiato, a sottoporla ad un continuo esame, pronto a cambiarla, se non risponde più ai tuoi desideri. Rita Levi Montalcini ',
'22fut azzurro Il futuro influenza il presente tanto quanto il passato. Friedrich Nietzsche',
'23fut azzurro Non indugiare sul passato; non sognare il futuro, concentra la mente sul momento presente. Buddha',
'24fut azzurro Il futuro inizia oggi, non domani. Papa Giovanni Paolo II',
'25fut viola L\'attesa è il futuro che si presenta a mani vuote. Michelangelo ',
'26fut viola Non vivo per me, ma per la generazione che verrà. Vincent Van Gogh',
'27fut viola Più di tutto mi ricordo il futuro. Salvador Dalí'
];

////////////////////////////////////////////// SUCCESSO/AUTOREALIZZAZIONE

/// FORZA D'ANIMO/FALLIMENTO

const forza_animo_fallimento_keywords = ['successo', 'success', 'insuccess', 'vittoria', 'vittorie', 'vittorios', 'vincere', 'vinc', 'vinto', 'vinto', 'vint', 'risultat', 'fortun', 'ascesa', 'ascend', 'ascen', 'conquist', 'vetta', 'vette', 'riusci', 'raggiun', 'arriv',
        'definitiv', 'decisiv', 'ultim', 'risolutiv', 'risol', 'final', 'conclusiv', 'insindicabil', 'esaurient', 'ultimativ',
        'falliment', 'fallir', 'fallis', 'fallit', 'falliv', 'sconfi', 'perdit', 'perder', 'perd', 'non vincere', 'non vinco', 'non riuscire', 'non riesco', 'non raggiungere',
        'fatale', 'mortal', 'inevitabil'];


//////////////////////////////////////////// MORTE

/// PAURA, DOLORE, CONFORTO

const paura_keywords = [ 'paura', 'timore', 'temo', 'temi', 'temiamo', 'temet', 'temer', 'temev', 'terrore', 'terrorizzat', 'preoccuparsi', 'preoccupat', 'preoccup', 'preoccupazion', 'precipizio', 'precipiz', 'precipit', 'abisso', 'abissi', 'abiss', 'precipitare', 'abissale', 'abissal', 'buio', 'luce', 'luminos', 'abbuiare', 'rabbuiare', 'bui', 'grigiore', 'angoscia', 'panico', 'sgomento','ansia', 'apprensione', 'batticuore', 'inquietudine', 'pensiero', 'preoccupazione', 'inquiet',      'impanic', 'ansios', 'apprensiv', 'trepidant', 'trepidar', 'impaurit', 'impaurirsi', 'impaurisc', 'impaurir', 'intimidit', 'intimidisc', 'intimidir', 'intimorit', 'intimorisc', 'intimori', 'spaventat', 'terrorizzat', 'atterrit', 'terrorizz', 'atterrisc', 'trepidazione','impaurire', 'intimidire', 'intimorire', 'spaventare', 'angosciare', 'atterrire', 'sgomentare', 'terrorizzare', 'orrore', 'spavento', 'cup', 'fosc', 'funebr', 'funere', 'funest', 'lugubr', 'tetr',
'dolor', 'afflizion', 'cordogli', 'afflitt', 'addolorat', 'male', 'malattia', 'malat', 'malattie', 'ammalarsi', 'ammalat', 'mali', 'malign', 'maledizion', 'maledett', 'malefic', 'crudeltà', 'crudel', 'regg', 'sopport', 'toller', 'pati', 'peno', 'peni', 'pena', 'peniamo', 'penate', 'penano', 'tribol', 'stent', 'subir', 'subisc', 'subiamo', 'subite', 'subiscon', 'dolor', 'penar', 'affliggersi', 'angustiarsi', 'angustiat', 'tormentat', 'perdut', 'florid', 'inferm', 'dolersi', 'struggersi', 'tormentarsi', 'torturarsi', 'morbo', 'malessere', 'malore', 'patologia', 'sindrome', 'salute', 'bene', 'male', 'perdizion', 'rovin', 'benessere', 'floridezza', 'sanità', 'egritudine', 'infermità', 'insanità', 'in forma', 'san', 'inferm', 'malat', 'condizioni fisiche', 'peggiora', 'essere in buona', 'essere in cattiva', 'condizion', 'stat', 'ospedal', 'cur',  'clinic', 'angosci', 'pena', 'strazi', 'torment',
'assist', 'accudi', 'badar', 'custod', 'confortare', 'mettere a proprio agio', 'rassicurare', 'confortat', 'tranquillizz', 'confort', 'tranquillizzare', 'conforto', 'confortare', 'confortat', 'confortarsi', 'rimedio', 'rimediare', 'rimedi', 'support', 'sosten', 'consolar', 'consolo', 'consoli', 'consoliamo', 'consolate', 'consolano', 'sopport', 'incoragg', 'solliev', 'sollevat', 'avvilit', 'amaregg', 'supporto', 'supportare', 'sostenere', 'sopportare', 'sostegno', 'consolazione', 'incoraggiamento', 'sollievo', 'abbattimento', 'avvilimento', 'sconfort', 'scoraggiamento', 'scoragg', 'appoggio', 'amarezza', 'demoralizz','depress', 'desolazione', 'desolat', 'scoraggiamento', 'scoramento', 'sfiducia', 'disperazione', 'disperat', 'consolazione', 'fiducia', 'consolare', 'incoraggiare', 'rasserenare', 'rassicurare', 'rianimare', 'rincuorare', 'rinfrancare', 'risollevare', 'sostenere', 'abbattere', 'avvilire', 'demoralizzare', 'deprimere', 'sconfortare', 'scoraggiare', 'abbattut', 'avvilit', 'afflitt', 'amareggiat', 'avvilit', 'sconsolat', 'scoraggiat', 'scorat', 'sfiduciat', 'disperat', 'fiducios', 'rassicurat', 'risollev', 'sollev', 'speranz', 'rasseren','tranquillizzant', 'allarm', 'conturbant', 'inquiet', 'preoccup', 'angosciant', 'spaventos', 'terrorizzant', 'allarmant', 'grav', 'inquietant', 'angosciant', 'drammatic', 'spaventos', 'terrificant', 'dare forza', 'incoragg', 'rassicur', 'rianim', 'riconfort', 'riconsol', 'rincoragg', 'rinfranc', 'risollev', 'tirare su', 'sosten', 'abbatt', 'avvili', 'buttare giù', 'demoralizz', 'sconfort', 'scoragg', 'disanim', 'perdersi d\'animo', 'mi perdo d\'animo', 'perso d\'animo', 'vincere', 'rimediare', 'rimedio', 'rimedi', 'vinc', 'sconfigg', 'battere', 'sconfigg', 'superare', 'super', 'annient', 'debell', 'sbaragli', 'sgomin', 'sopraff', 'vincit', 'vincent', 'vittorioso', 'perdent', 'sconfitt', 'vint', 'pers', 'affermazione', 'successo', 'vittori', 'sconfitt', 'soccomb', 'elimin', 'caccia', 'allontan', 'cancell'
];

var paura_cits = ['10A Blu | Qualunque sia la sua forma, la sua modalità, qualunque sia il suo aspetto, il suo nome, ogni paura è orientata verso la morte. Se vai in profondità, scoprirai di aver paura della morte. (Osho)',
'12A Arancione | La morte non è così tragica. Tra cent’anni, ciascuno di noi non ci penserà più. (Boris Vian)',
'15A Verde | Non ho paura della morte. Sono stato morto per miliardi e miliardi di anni prima di nascere, e ciò non mi ha causato il benché minimo disturbo. (Mark Twain)',
'30A Rosso | Non aver paura della morte… Fa meno male della vita! (Jim Morrison)',
'37A Arancione | Il bene che si dirà di noi dopo la nostra morte ci consolerà del male che si sarebbe detto della nostra vita se fosse durata troppo a lungo. (Robert Sabatier)',
'69A Rosa | Tutti ti amano quando sei due metri sotto terra. (Oscar Wilde)',
'31A Verde | La morte è orribile solo per colui che non crede in Dio, oppure crede in un Dio malvagio, il che è la stessa cosa. Per colui che crede in Dio, nella sua bontà e vive in questa vita secondo la sua legge ed ha sperimentato questa sua bontà, per costui la morte è solo un passaggio. (Lev Tolstoj)',
'29A Blu | La morte, il più atroce di tutti i mali, non esiste per noi. Quando noi viviamo la morte non c’è, quando c’è lei non ci siamo noi. (Epicuro)',
'27A Rosso | Nessuno sa se per l’uomo la morte non sia per caso il più grande dei beni, eppure la temono come se sapessero bene che è il più grande dei mali. E credere di sapere quello che non si sa non è veramente la più vergognosa forma di ignoranza? (Socrate)',
'24A Blu | Il fatto che siano tutti votati alla scomparsa, produce in noi un sentimento insopportabile. Ma lo sarebbe ancora di più se fosse la morte a scomparire. (Jean Baudrillard)',
'42A Rosso | Perché temi il tuo ultimo giorno? Esso non contribuisce alla tua morte più di ciascuno degli altri. (Michel de Montaigne)',
'46A Viola | Molte persone hanno così tanta paura di morire da non riuscire a vivere. (Henry van Dyke)',
'47A Verde | E poi morire non è nulla. E’ solo finire di nascere. (Cyrano de Bergerac)',
'38A Viola | La morte non è la più grande perdita nella vita. La più grande perdita è ciò che muore dentro di noi mentre stiamo vivendo. (Norman Cousins)',
'25A Rosso | Tutto è insignificante, fluttuante, illusorio e fallace, come un miraggio. Puoi essere orgoglioso, saggio, e bello, ma la morte ti strapperà via dalla faccia della terra esattamente come se tu fossi stato un topo nascosto sotto il pavimento, e i tuoi posteri, la tua storia, i tuoi geni immortali bruceranno o geleranno insieme con il globo terrestre. (Anton Cechov)',
'3A Arancione | Quando un uomo muore, un capitolo non viene strappato dal libro, ma viene tradotto in una lingua migliore. (John Donne)',
'79A Arancione | Non v’è rimedio per la nascita e la morte salvo godersi l’intervallo. (George Santayana)',
'39A Viola | L’idea che si morirà è più crudele del morire, ma meno dell’idea che un altro sia morto. (Marcel Proust)',
'78A Rosso | La morte risolve tutti i problemi – niente uomini, niente problemi. (Stalin)',
'67A Arancione | Non temere la morte: prima moriamo, prima saremo immortali. (Benjamin Franklin)',
'66A Blu | Se la morte non fosse una forma di soluzione, i viventi avrebbero trovato un modo qualsiasi di aggirarla. (EM Cioran)',
'50A Viola | Quando morirò, sarò niente di niente e nulla di me sopravvivrà. Non sono più giovane e amo la vita. Ma mi rifiuto di vivere tremando di terrore al pensiero del nulla, la felicità non è meno vera perché deve finire, né il pensiero e l’amore perdono il loro valore perché non sono immortali. (Bertrand Russell)',
'61A Rosa | Morire per dormire. Nient’altro. E con quel sonno poter calmare i dolorosi battiti del cuore, e le mille offese naturali di cui è erede la carne! Quest’è una conclusione da desiderarsi devotamente. Morire per dormire. Dormire, forse sognare. (William Shakespeare)',
'19A Rosso | Noi eravamo come voi, voi sarete come noi (Sull’ingresso di molti cimiteri) Mi disturba la morte, è vero. Credo che sia un errore del padreterno. Non mi ritengo per niente indispensabile, ma immaginare il mondo senza di me: che farete da soli? (Vittorio Alfieri)'
];

////// DIO

const dio_keywords = ['Dio', 'salvezza', 'salv', 'dannat', 'dannazione', 'altissimo', 'creatore', 'domineddio', 'onnipotente', 'padreterno', 'signore', 'chies', 'cristo', 'gesù', 'madonna', 'maria', 'confession', 'cred', 'fede', 'religion', 'santo', 'santi', 'santa', 'santif', 'sacr', 'religios', 'adorazion', 'cult', 'venerazion', 'deferenz', 'devozion', 'devot', 'ossequi', 'riverenz', 'atei', 'ateo', 'irreligios', 'miscredenz', 'sacr', 'profan', 'civil', 'laic', 'precett', 'credent', 'devot', 'fedel', 'osservant', 'pio', 'pia', 'pii', 'areligios', 'ateo', 'atei', 'irreligios', 'miscredent', 'blasfem', 'empi', 'ecclesiastic', 'esiste', 'odio', 'rifiut', 'intolleran'
];

var dio_cits = ['31A Verde | La morte è orribile solo per colui che non crede in Dio, oppure crede in un Dio malvagio, il che è la stessa cosa. Per colui che crede in Dio, nella sua bontà e vive in questa vita secondo la sua legge ed ha sperimentato questa sua bontà, per costui la morte è solo un passaggio. (Lev Tolstoj)',
'35A | Arancione Dio è l’unico essere che, per regnare, non ha nemmeno bisogno di esistere. (Charles Baudelaire)',
'68A | Rosso Nella vita la cosa più audace è odiare la morte; sono disprezzabili e disperate le religioni che ottundono questo odio. (Elias Canetti)'
];

///// IMMORTALITA'

const immortalità_keywords = ['dopo la morte', 'dopo che muoio', 'dopo che sarò morto', 'dopo che sarò morta', 'dopo che saremo morti', 'dopo che sono morto', 'dopo che sono morta', 'quando morirò', 'quando sarò morto', 'quando sarò morta', 'quando saremo morti', 'quando saremo morte', 'quando moriremo', 'immortal', 'immortalità', 'infinit', 'etern', 'aldilà', 'paradiso', 'inferno', 'purgatorio', 'purificazione', 'purificarsi', 'purific', 'purificat', 'reincarnazion', 'reincarnarsi', 'reincarn', 'altro mondo', 'oltretomba', 'acheronte', 'ade', 'inferi', 'esist', 'regno dei morti', 'vita terrena', 'decomposiz', 'decomporsi', 'decompongo', 'decomponi', 'decompone', 'decompost', 'disfatto', 'disfarsi', 'disfare', 'putrefaz', 'putrefarsi', 'putrefa', 'putrefatt', 'corrompere', 'corrompersi', 'imputridire', 'imputridit', 'imputridir', 'imputridisc', 'corrott', ' marcir', 'marcio', 'marci', 'deteriorarsi', 'deteriorare', 'deterior', 'estinzion', 'estinguersi', 'estingu', 'estint', 'scomparir', 'dissolversi', 'scompars', 'dissolt', 'disgregarsi', 'scindersi', 'scission', 'sciss', 'sciogliersi', 'sciolt', 'carne', 'spirit', 'carnal', 'ceneri', 'cenere', 'concim', 'fertilizzante per piante', 'fertilizz', 'tra la vita e la morte', 'stasi','anima'
];

var immortalità_cits = ['24A Blu | Il fatto che siano tutti votati alla scomparsa, produce in noi un sentimento insopportabile. Ma lo sarebbe ancora di più se fosse la morte a scomparire. (Jean Baudrillard)',
'36A Rosa | Di fronte a se stesso ognuno è immortale; può sapere che sta per morire, ma non potrà mai sapere che è morto. (Samuel Butler)',
'51A Rosa | Dal mio corpo in putrefazione cresceranno dei fiori, e io sarò dentro di loro: questa è l’eternità. (Edvard Munch)',
'57A Rosa | Giù, giù, in fondo al cuore, non crediamo alla nostra estinzione; in qualche modo ci aspettiamo di essere presenti, a osservare quello che succederà ai posteri. (Bernard Berenson)',
'45A Blu | Tutte le nostre conoscenze ci aiutano solo a morire di una morte un po’ più dolorosa di quella degli animali che nulla sanno. (Maurice Maeterlinck)',
'77A Arancione | Essere immortale è cosa da poco, tutte le creature lo sono, giacché ignorano la morte. (Jorge Luis Borges)',
'63A Arancione | Non c’è nessuno che in fondo creda alla propria morte, o, ciò che equivale, che nel suo inconscio ognuno di noi è convinto della propria immortalità. (Sigmund Freud)',
'67A Arancione | Non temere la morte: prima moriamo, prima saremo immortali. (Benjamin Franklin)',
'33A Rosa | Le persone non muoiono immediatamente, ma rimangono immerse in una sorta di aura di vita che non ha alcuna relazione con la vera immortalità, ma attraverso le quali continuano ad occupare i nostri pensieri nello stesso modo di quando erano vivi. (Marcel Proust)',
'74A Rosso | L’aldilà è ovunque! Noi siamo circondati dall’aldilà. Quell’aldilà è l’essenza del divino, ed è lì che dobbiamo penetrare. E’ dentro di noi, è fuori di noi, è sempre presente. Se lo dimenticate… questo è ciò che fate normalmente, poiché guardare all’aldilà è molto scomodo e non vi piace. E’ come guardare dentro un abisso: vi assale un tremito, vi sentite male. (Osho)',
'49A Blu | Considero il cervello come un computer che smetterà di funzionare quando i suoi componenti si guastano. Non c’è paradiso né aldilà per i computer rotti. È una fiaba per persone che hanno paura del buio. (Stephen Hawking)',
'65A Arancione | Ho un solo desiderio per l’aldilà, che non vengano a cercarmi i rompiballe. (Alda Merini)',
'9A Rosso | Dopo la tua morte, sarai quello che eri prima della nascita. (Arthur Schopenhauer)',
'81A Rosa | Dopo la morte attendono gli uomini cose che non sperano e neppure immaginano. (Eraclito)'
];

///// SENSO_VITA

const senso_vita_keywords = ['viviamo per morire', 'che senso ha vivere', 'che senso ha la vita', 'significat', 'morire senza aver vissuto', 'vivere per morire', 'senso', 'sens', 'signif', 'vita', 'vivere', 'vivo', 'viva', 'vivi', 'vivr', 'vissut', 'illogic', 'incoerent', 'incoerenz', 'incongruent', 'incongruenz', 'insensat', 'irragionevol', 'irrazional', 'sconness', 'senza capo né coda', 'assurd', 'dissennat', 'sconsiderat', 'logic', 'ragionevol', 'razional', 'sensat',
'perchè dobbiamo morire', 'perchè si vive', 'cosa vuol dire vivere'
];

var senso_vita_cits = ['4A Viola | Viviamo tra cose destinate a morire – Intra peritura vivimus. (Lucio Anneo Seneca)',
'16A Viola | Vita e morte non sono due estremi lontani l’uno dall’altro. Sono come due gambe che camminano insieme, ed entrambe ti appartengono. In questo stesso istante stai vivendo e morendo allo stesso tempo. Qualcosa in te muore a ogni istante. (Osho)',
'72A Rosso | Non è vero che la morte ci giunge come un’esperienza in cui siamo tutti novellini, come dice Montaigne. Tutti prima di nascere eravamo morti. (Cesare Pavese)',
'34A Viola |La vita fa l’analisi, la morte si incarica della sintesi. (Robert Sabatier)',
'8A Arancione | La morte con tutta probabilità è la più grande invenzione della vita. Spazza via il vecchio per far spazio al nuovo. (Steve Jobs)',
'23A Rosa | Morire è tremendo, ma l’idea di morire senza aver vissuto è insopportabile. Erich Fromm',
'18A Arancione | Ogni volta che trascorro del tempo con una persona che sta morendo trovo in effetti una persona che vive. Morire è il processo che inizia pochi minuti prima della morte, quando il cervello viene privato dell’ossigeno; tutto il resto è vivere. (Patch Adams)',
'16A Viola | Vita e morte non sono due estremi lontani l’uno dall’altro. Sono come due gambe che camminano insieme, ed entrambe ti appartengono. In questo stesso istante stai vivendo e morendo allo stesso tempo. Qualcosa in te muore a ogni istante. (Osho)',
'46A Viola | Molte persone hanno così tanta paura di morire da non riuscire a vivere. (Henry van Dyke)',
'73A Viola |Ci vuole tutta la vita per imparare a vivere e, quel che forse sembrerà più strano, ci vuole tutta la vita per imparare a morire. (Lucio Anneo Seneca)'
];

////// MORTE INTERIORE

const morte_interiore_keywords = ['morire dentro','morire interiormente', 'morte dell’animo', 'morte dell’anima', 'morto dentro',
'animo', 'interiormente', 'sentirsi male con se stessi', 'disagio'];

var morte_interiore_cits = ['6A Viola | Molte persone muoiono a venticinque anni e non vengono sepolti fino a quando non ne hanno settantacinque. (Benjamin Franklin)'];

///// RICORDO

const ricordo_keywords = ['ricord', 'ricordat', 'memoria', 'memorie', 'ricordare', 'ricordarsi', 'dimenticare', 'dimenticat', 'dimenticarsi', 'scordarsi', 'scordat', 'rimembrare', 'rimembro', 'rimembri', 'rimembrat', 'memorizz', 'memorizzat', 'richiamare alla mente', 'richiamato alla mente', 'richiamo alla mente', 'richiamiamo alla mente', 'richiami alla mente', 'richiama alla mente', 'richiamate alla mente', 'richiamano alla mente', 'oblio', 'obliar', 'obliterar', 'obliter', 'archiv', 'sovvenir', 'sovvenut', 'sovviene', 'rinvenir', 'rinvengo', 'rinvieni', 'rinvenite', 'rinviene', 'rinvenut', 'mi sfugge', 'sfuggit', 'resti', 'resto', 'orme', 'resterà', 'rimarrà', 'monument', 'testimonianz', 'testimone', 'testimon', 'reminescenz', 'segno', 'traccia', 'tracce', 'rimembranz', 'ricordanz', 'posteri', 'postero', 'dimenticatoio', 'farò la storia', 'rimarrà',  'rimarrò', 'resterà', 'restar', 'pensiero', 'avere a mente', 'pensar', 'giorno dei morti', 'rimaner', 'fare la storia',
'rimanere nella storia', 'oscurità'
];

var ricordo_cits = ['80A Rosso | Essere ricordati dopo morti non è che una magra ricompensa per essere stati trattati con disprezzo quando eravamo in vita. (William Hazlitt)',
'25A Rosso | Tutto è insignificante, fluttuante, illusorio e fallace, come un miraggio. Puoi essere orgoglioso, saggio, e bello, ma la morte ti strapperà via dalla faccia della terra esattamente come se tu fossi stato un topo nascosto sotto il pavimento, e i tuoi posteri, la tua storia, i tuoi geni immortali bruceranno o geleranno insieme con il globo terrestre. (Anton Cechov)',
'57A Rosa | Giù, giù, in fondo al cuore, non crediamo alla nostra estinzione; in qualche modo ci aspettiamo di essere presenti, a osservare quello che succederà ai posteri. (Bernard Berenson)',
'33A Rosa | Le persone non muoiono immediatamente, ma rimangono immerse in una sorta di aura di vita che non ha alcuna relazione con la vera immortalità, ma attraverso le quali continuano ad occupare i nostri pensieri nello stesso modo di quando erano vivi. (Marcel Proust)'
];

///// MORTE DI UN CARO/ LUTTO

const lutto_keywords = ['lutto', 'lutti', 'scomparsa', 'caro', 'cari', 'mancanza', 'perdita', 'morte di un caro', 'morte famigliare', 'familiar', 'famigliar', 'famigli', 'amic', 'genitor', 'figli', 'affett', 'marito', 'moglie', 'compagn', 'conoscent', 'corale', 'collettiv', 'rar', 'mostrare', 'esporre', 'nascondere', 'imbarazz', 'produttiv', 'coral', 'collettiv', 'mostrar', 'esporr', 'mostrat', 'espost', 'nasconder', 'nascond', 'nascost', 'vedova', 'vedovo', 'vedovi', 'vedove', 'pena', 'strazi', 'torment', 'disgrazi', 'sventur', 'tragedi', 'compiant', 'compiang', 'pianto', 'piango', 'piangere', 'pianti', 'piangi', 'piang', 'nonn', 'zio', 'zii', 'zie', 'zia', 'parente', 'parenti', 'prozi', 'nipot', 'pronipot', 'mancare', 'mi manca', 'ci manca', 'mancat', 'separaz', 'separarsi', 'dividersi', 'separat', 'divis', 'antenat', 'sorell', 'fratell', 'scompars', 'declin', 'tramont', 'defunt', 'decedere', 'decess', 'decedut', 'deced', 'volare in cielo', 'volato in cielo',
'volata in cielo', 'volati in cielo', 'volate in cielo', 'volerà in cielo', 'voleranno in cielo', 'volerò in cielo', 'volerai in cielo', 'voleremo in cielo', 'volerete in cielo', 'vola in cielo', 'volare in cielo', 'andare in cielo', 'andrà in cielo', 'andranno in cielo', 'andremo in cielo', 'andrete in cielo', 'andrò in cielo', 'andrai in cielo', 'andato in paradiso', 'andata in paradiso', 'andati in paradiso', 'andate in paradiso', 'spegnersi', 'spento', 'spegnerà', 'spegnerò', 'spegneremo', 'spegnerete', 'spegneranno', 'orfan'
];

var lutto_cits = ['39A Viola | L’idea che si morirà è più crudele del morire, ma meno dell’idea che un altro sia morto. (Marcel Proust)',
'22A Viola | Quand’ero ragazzo era un fatto corale. Moriva un vicino di casa e tutti assistevano, aiutavano. La morte veniva mostrata. Si apriva la casa, il morto veniva esposto e ciascuno faceva così la sua conoscenza con la morte. Oggi è il contrario: la morte è un imbarazzo, viene nascosta. Nessuno sa più gestirla. Nessuno sa più cosa fare con un morto. L’esperienza della morte si fa sempre più rara e uno può arrivare alla propria senza mai aver visto quella di un altro. (Tiziano Terzani)',
'62A Viola | Arriviamo a comprendere fino in fondo gli esseri umani ai quali siamo uniti da un vincolo indissolubile soltanto nell’attimo della loro morte. (Sándor Márai)',
'31A Verde | La morte è orribile solo per colui che non crede in Dio, oppure crede in un Dio malvagio, il che è la stessa cosa. Per colui che crede in Dio, nella sua bontà e vive in questa vita secondo la sua legge ed ha sperimentato questa sua bontà, per costui la morte è solo un passaggio. (Lev Tolstoj)',
'27A Rosso | Nessuno sa se per l’uomo la morte non sia per caso il più grande dei beni, eppure la temono come se sapessero bene che è il più grande dei mali. E credere di sapere quello che non si sa non è veramente la più vergognosa forma di ignoranza? (Socrate)',
'24A Blu | Il fatto che siano tutti votati alla scomparsa, produce in noi un sentimento insopportabile. Ma lo sarebbe ancora di più se fosse la morte a scomparire. (Jean Baudrillard)',
'3A Arancione | Quando un uomo muore, un capitolo non viene strappato dal libro, ma viene tradotto in una lingua migliore. (John Donne)',
'33A Rosa | Le persone non muoiono immediatamente, ma rimangono immerse in una sorta di aura di vita che non ha alcuna relazione con la vera immortalità, ma attraverso le quali continuano ad occupare i nostri pensieri nello stesso modo di quando erano vivi. (Marcel Proust)'
];

///// QUANDO MORIRO'/COS SUCCEDE

const quando_morirò_keywords = ['quando morirò', 'quando moriremo', 'quando avverrà la mia fine', 'ci sarà la mia fine', 'la mia ora', 'la nostra ora', 'giungerà la mia ora', 'giungerà la mia morte', 'giungerà la nostra morte', 'quando finirà il mondo', 'finirà il mondo', 'fine del mondo', 'collasso del mondo', 'mondo collasserà', 'mondo finirà', 'collasserà il mondo', 'terminerà il mondo', 'mondo terminerà', 'mondo avrà una fine', 'finirà', 'quando', 'in che momento', 'in che istante', 'avrà fine', 'avrò fine', 'avremo fine', 'verrò sepolto', 'verremo sepolti', 'verrò seppellito', 'verremo seppelliti', 'il mio ultimo giorno', 'il nostro ultimo giorno', 'il nostro termine', 'il mio termine', 'termine della nostra vita', 'termine della mia vita', 'fine della nostra esistenza', 'fine della mia esistenza', 'fine dell’esistenza', 'termine dell’esistenza', 'la propria ora', 'giunti a termine', 'giungere a termine', 'giunto a termine', 'giunta a termine',
'quanto tempo mi resta', 'tempo', 'resta', 'rimane', 'scadere', 'scade', 'scadrà', 'sarà scaduto', 'vivrò ancora', 'vivremo ancora', 'vivrà ancora', 'vivranno ancora'
];

var quando_morirò_cits = ['71A Rosa | Quando verrà l’ora di morire non voglio perderne neanche un attimo: si muore una volta sola. (Antonio Amurri)',
'50A Viola | Quando morirò, sarò niente di niente e nulla di me sopravvivrà. Non sono più giovane e amo la vita. Ma mi rifiuto di vivere tremando di terrore al pensiero del nulla, la felicità non è meno vera perché deve finire, né il pensiero e l’amore perdono il loro valore perché non sono immortali. (Bertrand Russell)',
'58A Blu | Ecco il nostro errore: vediamo la morte davanti a noi e invece gran parte di essa è già alle nostre spalle: appartiene alla morte la vita passata. (Lucio Anneo Seneca)',
'82A rosa | Non sono gli anni che contano nella vita, è la vita che metti in quegli anni. (Abraham Lincoln)'
];

///// MORTE DEGLI OGGETTI

const morte_oggetti_keywords = ['morte degli oggetti', 'oggett', 'cose', 'inanimat', 'element',
'obsole', 'romper', 'rott', 'pezz', 'secc', 'rami secc', 'andare a male', 'rovina'
];

var morte_oggetti_cits = ['4A Viola | Viviamo tra cose destinate a morire – Intra peritura vivimus. (Lucio Anneo Seneca)'];

///// MORIRE DI NOIA

const morte_noia_keywords = ['noia', 'annoiarsi', 'annoiat', 'monotonia', 'monoton', 'noios',
'tedio', 'piattezza', 'piatto', 'piatta', 'divan', 'non far niente', 'ripetitività', 'ripetitiv', 'uniform', 'dorm'
];

var morte_noia_cits = ['21A Viola | Sento che la monotonia e la morte sono più o meno la stessa cosa. (Charlotte Brontë)'];

////// EUTANASIA

const eutanasia_keywords = ['suicidio assistito', 'eutanasia', 'dolce morte', 'buona morte',
'suicidio', 'suicidarsi', 'farsi fuori', 'fin di vita', 'malato terminale', 'malati terminali', 'malat', 'guarig', 'mettere fine alla vita di', 'mettere fine alla mia vita', 'mettere fine alla sua vita', 'mettere fine alla loro vita', 'conservare la vita'
];

var eutanasia_cits = ['20A Rosso | Ho combattuto con la morte. È la sfida meno eccitante che tu possa immaginare. Si svolge in un impalpabile grigiore, niente sotto i piedi, niente intorno, senza spettatori, senza clamore, senza gloria, senza il grande desiderio della vittoria, senza la grande paura per la sconfitta, in una atmosfera insalubre di di tiepido scetticismo, senza molto sollievo nelle nostre stesse ragioni e ancor meno in quelle del tuo avversario. (Joseph Conrad)',
'61A Rosa | Morire per dormire. Nient’altro. E con quel sonno poter calmare i dolorosi battiti del cuore, e le mille offese naturali di cui è erede la carne! Quest’è una conclusione da desiderarsi devotamente. Morire per dormire. Dormire, forse sognare. (William Shakespeare)',
'68A Rosso | Nella vita la cosa più audace è odiare la morte; sono disprezzabili e disperate le religioni che ottundono questo odio. (Elias Canetti)',
'7A Viola | Molte persone muoiono a venticinque anni e non vengono sepolti fino a quando non ne hanno settantacinque. (Benjamin Franklin)',
'78A Rosso | La morte risolve tutti i problemi – niente uomini, niente problemi. (Stalin)',
'27A Rosso | Nessuno sa se per l’uomo la morte non sia per caso il più grande dei beni, eppure la temono come se sapessero bene che è il più grande dei mali. E credere di sapere quello che non si sa non è veramente la più vergognosa forma di ignoranza? (Socrate)',
'7A Viola | La morte è un’usanza che tutti, prima o poi, dobbiamo rispettare. Jorge Louis Borges',
'21eti Viola | Proprio come sceglierò la mia nave quando mi accingerò ad un viaggio, o la mia casa quando intenderò prendere una residenza, così sceglierò la mia morte quando mi accingerò ad abbandonare la vita. (Lucio Annea Seneca) ',
'22eti Rosa | Non sempre la vita va conservata: il bene non consiste nel vivere, ma nel vivere bene. (Lucio Annea Seneca)',
'23eti Verde | Io ho il diritto di scegliere la mia morte per il bene degli altri. [Umberto Eco]',
'24eti viola | Nessuno vive perché lo vuole. Ma una volta che vive lo deve volere. (Ernst Bloch)'
];

////// ABORTO

const aborto_keywords = ['abort', 'uccid', 'ammazz', 'omicid', 'annient', 'fare fuori', 'annient', 'bambin', 'infanticidi', 'feto', 'feti', 'interrruzione di gravidanza', 'bebè', 'lattante', 'neonat', 'pargolo', 'poppante', 'embrion'];

var aborto_cits = ['20eti azzurro L\'aborto viene sostenuto solo da persone che sono nate esse stesse. [Ronald Reagan]',
'19eti viola L\'aborto è il più grande distruttore della pace perché, se una madre può uccidere il suo stesso figlio, cosa impedisce che io uccida te e tu uccida me? Non c\'è più nessun ostacolo. [Madre Teresa di Calcutta]',
'18eti azzurro I cattolici, e lo ero anch\'io finché non ho raggiunto l\'età della ragione, i cattolici e altri cristiani sono contro l\'aborto e sono contro gli omosessuali. Ma chi ha meno aborti degli omosessuali?”[George Carlin]',
'17eti rosa L\'abolizione del diritto di abortire per una donna, quando e se lo vuole, equivale a una maternità obbligatoria, una forma di stupro da parte dello Stato.” [Edward Abbey]',
'16eti rosa “Come mai quando si tratta di noi, è un aborto, e quando si tratta di polli, è un\'omelette?” [George Carlin]',
'15eti rosso “Se gli uomini potessero restare incinti, l\'aborto diventerebbe un sacramento.” [Flo Kennedy]'
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
    if (lasciare_keywords.some(keyword => inputVal.includes(keyword))) {
      console.log("Found")
      // audio.src = a_music;
      // audio.play();
      var lasciare_cit = lasciare_cits[Math.floor(Math.random() *lasciare_cits.length)];
      alert(lasciare_cit);
    }
    else if (falso_amore_keywords.some(keyword => inputVal.includes(keyword))) {
      console.log("Found")
      // audio.src = a_music;
      // audio.play();
      var falso_amore_cit = falso_amore_cits[Math.floor(Math.random() * falso_amore_cits.length)];
      alert(falso_amore_cit);
    }
    else if (amore_vero_keywords.some(keyword => inputVal.includes(keyword))) {
      console.log("Found")
      // audio.src = a_music;
      // audio.play();
      var amore_vero_cit = amore_vero_cits[Math.floor(Math.random() * amore_vero_cits.length)];
      alert(amore_vero_cit);
    }
    else if (non_corrisposto_keywords.some(keyword => inputVal.includes(keyword))) {
      console.log("Found")
      // audio.src = a_music;
      // audio.play();
      var non_corrisposto_cit = non_corrisposto_cits[Math.floor(Math.random() * non_corrisposto_cits.length)];
      alert(non_corrisposto_cit);
    }
  }


}
