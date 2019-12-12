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

////////// RELAZIONI SOCIALI

const odio_keywords = ['onest', 'leal', 'rettitudine', 'corrett', 'retto', 'retta', 'rette', 'retti', 'degn', 'giust', 'serio', 'seri',
  'bene', 'voler bene', 'voglio bene', 'vuoi bene', 'vuole bene', 'vogliamo bene', 'volete bene', 'vogliono bene', 'benevolenza', 'solidarietà', 'solidale', 'cura', 'interesse', 'tolleran', 'affetto', 'affetti',
  'odio', 'odi', 'avversione', 'ostilità', 'ostil', 'disprezz', 'mal volere', 'malevol', 'risent', 'rancor', 'astio', 'intolleran', 'antipati', 'rifiut',
  'fingere', 'fing', 'finzione', 'far credere', 'ingann', 'mentire', 'mentito', 'ment', 'menzogn', 'alle spalle', 'di nascosto',
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

const solitudine_keywords = ['solitudine', 'sol', 'isolamento', 'isolat', 'rimanere solo', 'rimanere sola', 'rimanere soli', 'restare solo', 'restare sola', 'sento solo', 'sento sola', 'sentirmi solo', 'sentirmi sola', 'sentirsi soli', 'senza compagnia', 'senza nessuno', 'senza persone', 'allontanamento', 'allontana'];

var solitudine_cits = ['12 Pensavo che la cosa peggiore nella vita fosse rimanere da solo. Non lo è. La cosa peggiore nella vita è di finire con persone che ti fanno sentire solo. (Robin Williams)',
  '13 Non c\'importa tanto di non arrivare da nessuna parte quanto di non avere compagnia durante il tragitto. (Anna Frank)',
  '14 La peggiore solitudine è essere privi di sincera amicizia. (Francis Bacon)'
];

/// 04 EMPATIA/ESPRIMERE EMOZIONI

const emp_emoz_keywords = ['empatia', 'empatic', 'emozion', 'emotiv', 'sensibil', 'sentiment', 'cuor', 'simpatia', 'simpatet',
  'piangere', 'piang', 'pianto', 'pianti', 'lacrim'
];

var emp_emoz_cits = ['15 A me ha sempre fatto pena la gente che ha paura dei sentimenti, delle emozioni, e nasconde quello che prova e non sa piangere con tutto il cuore. Perché chi non sa piangere con tutto il cuore non sa nemmeno ridere a gola spiegata. (Golda Meir)'];


/// 05 SEPARAZIONE/ESSERE FERITI/NEGATIVITA'

const separazione_keywords = ['ferire', 'ferit', 'soffrire', 'soffr', 'soffer', 'dolore', 'dolor', 'perdere', 'perdit', 'lasciare', 'lasciat', 'lasci', 'separazione', 'separarsi', 'separ', 'abbandon'];

var separazione_cits = ['16 La verità è che tutto il mondo ti ferirà. L\'idea è circondarsi di persone per cui valga la pena soffrire. (Bob Marley)',
  '17 Le persone capitano per caso nella nostra vita, ma non a caso. Spesso ci riempiono di insegnamenti. A volte ci fanno volare alto, altre ci schiantano a terra insegnandoci il dolore… donandoci tutto, portandosi via tutto, lasciandoci niente. (Alda Merini)',
  '18 Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)'
];

/// 06 PERDONO

const perdono_keywords = ['perdono', 'perdonare', 'perdon', 'chiedere scusa', 'scusa', 'scuse', 'scusarsi', 'chiedere perdono', 'dimenticare', 'passare oltre', 'lasciar correre', 'tollerare', 'assolvere', 'riconciliarsi',
   'punire', 'castigare', 'castig', 'punizione', 'punit', 'vendetta', 'vendicare', 'vendicarsi', 'vendic',
   'dispiacere', 'dispiacersi', 'mi dispiace', 'sentirsi in colpa'
 ];

var perdono_cits = ['20 Il perdono libera l\'anima, rimuove la paura. È per questo che il perdono è un\'arma potente. (Nelson Mandela)',
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

const gelosia_keywords = ['gelosia', 'geloso', 'gelosa', 'gelos', 'invidia', 'invidios', 'invidiar', 'antagonismo', 'antagonist', 'rivalità', 'rivale', 'risentimento', 'astio', 'contrasto', 'contrasti'];

var gelosia_cits = ['33 La gelosia è l\'itterizia dell\'anima. (John Dryden)',
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

const tradimento_keywords = ['tradire','tradit','tradiment','tradisc','ingannare','ingann','infedel','voltafaccia','voltagabbana','imbrogli','imbrogliare','imbrogliat','doppiezza','doppio gioco','fregare','freg'];

var gelosia_cits = ['44 Se qualcuno ti tradisce una volta, è un suo errore, se qualcuno ti tradisce due volte è un tuo errore. (Eleanor Anna Roosvelt)',
   '45 Non tradire chi ti sorride: potrebbe avere la morte nel cuore e regalarti ugualmente un po\' di vita (Jim Morrison)',
   '46 La violenza e il tradimento sono armi a doppio taglio: feriscono più gravemente chi le usa, di chi le soffre. (Emily Jane Bronte)',
   '47 L\'ultima tentazione è il peggiore dei tradimenti: fare la cosa giusta per il motivo sbagliato. (Thomas Stearns Eliot)',
   '48 Si tradisce più spesso per debolezza che per deliberato disegno di tradire. (François De La Rochefoucauld)',
   '49 Chiunque sia sospettoso invita al tradimento. (Voltaire)',
   '50 C\'è più onore in tradire che in esser fedeli a metà. (Giovanni Giudici) ',
   '51 E badate che è azione indegna lusingare con le parole e uccidere con l\'intenzione: è azione da belva feroce, madre d\'inganno e di tradimento. (Pedro Calderón De La Barca)',
   '52 La fedeltà è lo sforzo di un\'anima nobile per eguagliarsi a un\'altra anima più grande di lei. (Goethe)',
   '53 Il tradito potrà anche essere un ingenuo, ma il traditore rimarrà sempre un infame! (Benito Mussolini) ',
   'È meglio essere tradito davvero, che saperlo sì e no. (William Shakespeare='
 ];

// 06 ESSERE SE STESSI

// const se_stessi_keywords = ['essere se stessi', 'essere me stesso', 'essere me stessa', 'piacersi', 'piacermi', 'piacere a se stessi', 'piacere a me stesso', 'piacere a me stessa', 'piacere se stesso', 'piacere se stessa', 'piacere agli altri', 'piacere alla gente', 'piacere alle persone', 'piacere a'];
//
// var se_stessi_cits = ['Ero stanco di far finta di essere qualcun’altro solo per andare d’accordo con le persone, solo per avere degli amici. (Kurt Cobain)'];


////////// AMICIZIA

/// ESSERE AMICI/VERA amicizia
const amicizia_Cat_keywords = ['amicizia', 'amic', 'compagn'];

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
     'fals', 'menzogn', 'illusione', 'illusor', 'illus', 'sbaglia', 'fint', 'scorrett', 'fasull', 'ipocri', 'bugiard', 'bugi', 'sleal', 'doppiogiochista', 'doppiogioco', 'doppi', 'ingann', 'negat'];

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
       'L\'amore è una promessa, l’amore è un ricordo, una volta donato non può essere dimenticato, non può mai scomparire. (John Lennon)',
       'Quando un amore finisce, uno dei due soffre. Se non soffre nessuno, non è mai iniziato. Se soffrono entrambi, non è mai finito. (Marilyn Monroe)',
       'Non si ama qualcuno per tutta la vita; da questa speranza impossibile nascono adulterio, matricidio, tradimento dell\'amico. (Umberto Eco)',
       'Smettere di amare è come perdere peso. è molto più semplice metterne su che perderlo. (Aretha Franklin)',
       'Non ti rimpiangerò mai o non dirò che avrei voluto non averti mai conosciuto, perché tanto tempo fa eri esattamente ciò di cui avevo bisogno. (Bob Marley)',
       'Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)',
       'Non siamo mai così indifesi verso la sofferenza, come nel momento in cui amiamo. (Sigmund Freud)'];


/// FALSO AMORE/RELAZIONE NEGATIVA

const falso_amore_keywords = ['falso', 'fals', 'menzogn', 'illus', 'sbagl', 'fint', 'fing', 'finz', 'scorrett', 'fasull', 'ipocri', 'bugiard', 'bugi', 'sleal', 'doppiogiochista', 'doppio', 'doppi', 'ingann', 'negat', 'inadatt',
       'infelic', 'trist', 'possess', 'possed', 'possi', 'gelos', 'opprim', 'soffoc'];
var falso_amore_cits = ['Un codardo è un uomo che risveglia l’amore di una donna senza l’intenzione di amarla. (Bob Marley)',
       'Se riesci ad amare così tanto la persona sbagliata, immagina quanto puoi amare quella giusta. (Bob Marley)',
       'L\'amore porta molta felicità, molto più di quanto struggersi per qualcuno porti dolore. (Albert Einstein)',
       'Non confondere l\'amore col delirio del possesso, che causa le sofferenze più atroci. Perché contrariamente a quanto comunemente si pensa, l\'amore non fa soffrire. Quello che fa soffrire è l\'istinto della proprietà, che è il contrario dell\'amore. (Antoine de Saint-Exupéry)',
       'Quando un amore finisce, uno dei due soffre. Se non soffre nessuno, non è mai iniziato. Se soffrono entrambi, non è mai finito.',
       'Alcune persone non meritano il nostro sorriso, figuriamoci le nostre lacrime. (Charles Bukowski)'];

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

/// AMORE NON CORRISPOSTO

const non_corrisposto_keywords = ['non corrisposto', 'corris', 'non ricambiato', 'ricamb', 'non contraccambiato', 'contracc', 'respingere', 'respin', 'rifiut', 'non mi ama'];

var non_corrisposto_cits = ['L\'amore porta molta felicità, molto più di quanto struggersi per qualcuno porti dolore. (Albert Einstein)',
       'Conosce l’amore solo chi ama senza speranza. (Friedrich Schiller)',
       'L\'amore fugge come un’ombra l\'amore reale che l\'insegue, inseguendo chi lo fugge, fuggendo chi l\'insegue.(William Shakespeare)',
       'Il peggior modo di sentire la mancanza di qualcuno è esserci seduto accanto e sapere che non l’avrai mai. (Gabriel Garcia Marquez)',
       'Se infelice è l’innamorato che invoca baci di cui non sa il sapore, mille volte più infelice è chi questo sapore gustò appena e poi gli fu negato. (Italo Calvino)',
       'E non era una stupida, sapeva quel che voleva. Solamente, voleva delle cose impossibili. (Cesare Pavese)',
       'Non siamo mai così indifesi verso la sofferenza, come nel momento in cui amiamo. (Sigmund Freud)',
       'Solo chi ama senza speranza conosce il vero amore. (Pablo Neruda)',
       'Non essere amati è una semplice sventura; la vera disgrazia è non saper amare. (Albert Camus)',
       'Se amate senza suscitare amore, vale a dire, se il vostro amore non produce amore, se attraverso l\'espressione di vita di persona amante voi non diventate una persona amata, allora il vostro amore è impotente, è sfortunato. (Erich Fromm)',
       'Perché la mancanza d’amore è la mia pestilenza. (Alda Merini)'];


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
'assist', 'accudi', 'badar', 'custod', 'confortare', 'mettere a proprio agio', 'rassicurare', 'confortat', 'tranquillizz', 'confort', 'tranquillizzare', 'conforto', 'confortare', 'confortat', 'confortarsi', 'rimedio', 'rimediare', 'rimedi', 'support', 'sosten', 'consolar', 'consolo', 'consoli', 'consoliamo', 'consolate', 'consolano', 'sopport', 'incoragg', 'solliev', 'sollevat', 'avvilit', 'amaregg', 'supporto', 'supportare', 'sostenere', 'sopportare', 'sostegno', 'consolazione', 'incoraggiamento', 'sollievo', 'abbattimento', 'avvilimento', 'sconfort', 'scoraggiamento', 'scoragg', 'appoggio', 'amarezza', 'demoralizz','depress', 'desolazione', 'desolat', 'scoraggiamento', 'scoramento', 'sfiducia', 'disperazione', 'disperat', 'consolazione', 'fiducia', 'consolare', 'incoraggiare', 'rasserenare', 'rassicurare', 'rianimare', 'rincuorare', 'rinfrancare', 'risollevare', 'sostenere', 'abbattere', 'avvilire', 'demoralizzare', 'deprimere', 'sconfortare', 'scoraggiare', 'abbattut', 'avvilit', 'afflitt', 'amareggiat', 'avvilit', 'sconsolat', 'scoraggiat', 'scorat', 'sfiduciat', 'disperat', 'fiducios', 'rassicurat', 'risollev', 'sollev', 'speranz', 'rasseren','tranquillizzant', 'allarm', 'conturbant', 'inquiet', 'preoccup', 'angosciant', 'spaventos', 'terrorizzant', 'allarmant', 'grav', 'inquietant', 'angosciant', 'drammatic', 'spaventos', 'terrificant', 'dare forza', 'incoragg', 'rassicur', 'rianim', 'riconfort', 'riconsol', 'rincoragg', 'rinfranc', 'risollev', 'tirare su', 'sosten', 'abbatt', 'avvili', 'buttare giù', 'demoralizz', 'sconfort', 'scoragg', 'disanim', 'perdersi d\'animo', 'mi perdo d\'animo', 'perso d\'animo', 'vincere', 'rimediare', 'rimedio', 'rimedi', 'vinc', 'sconfigg', 'battere', 'sconfigg', 'superare', 'super', 'annient', 'debell', 'sbaragli', 'sgomin', 'sopraff', 'vincit', 'vincent', 'vittorioso', 'perdent', 'perd', 'sconfitt', 'vint', 'pers', 'affermazione', 'successo', 'vittori', 'perdit', 'sconfitt', 'soccomb', 'elimin', 'caccia', 'allontan', 'cancell'
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
