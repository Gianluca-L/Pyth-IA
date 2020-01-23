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


//////////////////////////////////////////////////////////// LAVORO

const lavoro_generico_keywords = ['lavor', 'attività', 'compito', 'impegno', 'faccend', 'operazion', 'responsabilità', 'incaric', 'funzion', 'mansion', 'occupazion', 'profession', 'impieg', 'mestier', 'serviz', 'prestazion'];


///// LAVORO_VERGOGNA

const lavoro_vergogna_keywords = ['vergogn', 'sbagliat', 'errat', 'mancat', 'errat', 'fallit', 'mancat', 'eseguito male', 'calcolato male', 'commesso uno sbaglio', 'commesso un errore', 'preso una cantonata', 'fatto un passo falso', 'preso un abbaglio', 'ingannato', 'peccato', 'colpa', 'sgarr', 'essere in errore', 'stato in errore', 'giudicato erroneamente', 'pentiment', 'pentirsi', 'pentirmi', 'pentit', 'pudore', 'verecond', 'soggez', 'disonore', 'infame', 'ingnom', 'onta','turpit', 'abiez', 'scandal', 'immoral', 'oscen', 'sconc'];

//// LAVORO_ENERGIA

const lavoro_energia_keywords = [];

//// LAVORARE BENE

const lavoro_bene_keywords = ['contare', 'valut', 'consider', 'prendere in considerazione', 'iniz', 'cominc', 'principi', 'dare inizio', 'avviar', 'aprir', 'inaugur', 'intraprend', 'fondar', 'promuov', 'introdu', 'accing', 'intavol', 'abbozz', 'imbast', 'avere inizio', 'avrà inizio', 'ha inizio', 'fare prima', 'far prima', 'procedur', 'sistem', 'metod', 'norm', 'criteri', 'iter', 'procediment', 'lavoro perfetto', 'far perfettamente',
'fare perfettamente', 'impar', 'conosc', 'assimil', 'assorb', 'consider', 'afferr', 'assimilare', 'assorbir', 'apprend', 'ottimament', 'con successo', 'con successi', 'alla grande', 'benissimo', 'eccellentemente', 'eccelsamente', 'magnificamente', 'meravigliosamente', 'perfettamente', 'splendidamente', 'stupendamente', 'sublimemente', 'superbamente', 'bene', 'niente male', 'malissimo', 'orrendamente', 'orribilmente', 'pessimamente', 'schifosamente', 'così e così', 'male', 'maluccio', 'mediocremente', 'mediocr', 'avere capacità', 'ho le capacità', 'avrò le capacità', 'capacità', 'essere capace', 'sono capace', 'sarò capace', 'capac', 'sono in grado di lavorare', 'sarà in grado di lavorare', 'sarai in grado di lavorare', 'essere in grado di lavorare', 'essere all\'altezza di', 'andare bene', 'andrò bene', 'andrà bene', 'andremo bene', 'cavarsela', 'cavarmela', 'cavarcela', 'me la caverò', 'ce la caveremo', 'se la caveranno', 'se la caverà', 'te la caverai', 'fare bene', 'farò bene', 'faremo bene', 'faranno bene', 'farete bene', 'farai bene', 'farà bene', 'avere esito positivo', 'avrà esito positivo', 'avrò esito positivo', 'avranno esito positivo', 'andrà a buon fine', 'andranno a buon fine', 'avere successo', 'avrò buon esito', 'avranno buon esito', 'avrà successo', 'avranno successo', 'andare male', 'falliment', 'successo nel lavoro', 'successo nel mio lavoro', 'il mio lavoro con successo', 'la mia professione con successo', 'con successo il mio lavoro',
'con successo la mia professione','fare fiasco', 'buco nell\'acqua', 'fiasco', 'ottenere un buon esito', 'otterrò un buon esito', 'otterrà un buon esito', 'otterrai un buon esito', 'otterranno un buon esito', 'otterremo un buon esito', 'un successo', 'spuntarla', 'la spunterò', 'la spunteremo', 'mancare l\'obiettivo', 'mancherò l\'obiettivo', 'manco l\'obiettivo', 'esito positivo', 'esito negativo', 'buon esito', 'cattivo esito', 'toppare', 'topperò', 'top', 'super', 'avere successo nella professione', 'avrò successo nella professione', 'avremo successo nella professione', 'avere un certo effetto', 'avere un certo esito'];

var lavoro_bene_cits = ['1Lav) Quando cominci un lavoro quello che conta è farlo fino in fondo e bene [Margaret Tatcher] verde',
'2Lav) L’inizio è la parte più importante del lavoro. [Platone] verde',
'14Lav) Se il tuo lavoro è mangiare una rana, è meglio mangiarla al mattino. E se il tuo lavoro è quello di mangiare due rane, è meglio mangiare prima la più grande. [Mark Twain] azzurro'
];

///// COSA SERVE LAVORO

const cosa_serveLav_generico_keywords = ['servir', 'usare', 'obiettiv', 'utile', 'necessar', 'necessit', 'occorre', 'utilizz', 'sfrutt', 'avvalersi', 'mi avvalgo', 'ti avvali', 'si avvale', 'si avvalgono', 'bisogno', 'bisogn', 'funge', 'funzione', 'funzioni', 'assolve', 'assolv', 'impieg', 'adoperar', 'adoper', 'fornir', 'fornisc', 'impiego', 'impiegat', 'fine', 'proposito', 'intento', 'traguard', 'meta', 'finalità', 'il mezzo', 'destinazion', 'compito', 'ruol', 'obiettiv', 'proposit',
'scopo del lavoro', 'scopo', 'umanit', 'genere umano', 'uomini', 'genti', 'collettività', 'società', 'solidarietà', 'fratellanza', 'altruismo', 'carità', 'scopo', 'senso', 'signific', 'sensat', 'insensat', 'logic', 'illogic', 'razional', 'irrazional', 'illogic', 'incoeren', 'incongruen', 'irragionevol', 'irrazional', 'sconness', 'assurd', 'giudizios', 'logic', 'efficac', 'validità', 'valid', 'comodità', 'funzionalità', 'comod', 'funzional', 'praticità', 'pratic', 'inservibilità', 'inutil', 'inutilità', 'vantaggiosità', 'vantagg', 'opportunità', 'dannosità', 'dannos', 'nocività', 'nociv', 'obblig', 'dover', 'necessità', 'necessari', 'coercizion', 'costrizion', 'costrett', 'obbligat', 'impost', 'imposizion', 'dovere', 'vincol', 'obbligator', 'vincolat', 'limitat', 'obbligatorietà', 'forzat', 'impegno', 'impegni', 'impegnat', 'indott', 'tenut', 'esentat', 'esonerat', 'libero di', 'debitore', 'in debito', 'grato', 'grata', 'grate', 'grati', 'gratitudine', 'riconoscent', 'riconoscen', 'ingrat', 'irriconoscent', 'coatt', 'forzat'];

var cosa_serveLav_generico_cits = ['3Lav) Il lavoro allontana tre grandi male: la noia, il vizio e il bisogno [Voltaire] arancio',
'4Lav) Il lavoro non è più rispettabile dell’alcool, e serve esattamente allo stesso scopo: distrae semplicemente la mente. [Aldous Huxley] viola',
'5Lav) Il lavoro non mi piace, non piace a nessuno, ma mi piace quello che c’è nel lavoro: la possibilità di trovare se stessi [Joseph Conrad] rosa',
'6Lav)Il lavoro è il mezzo migliore di far passare la vita [Gustave Flaubert] arancio',
'7Lav)Tutti lavoriamo per arrivare al riposo: è ancora la pigrizia a renderci laboriosi. [Jean-Jacques Rousseau] verde',
'8Lav) Lo scopo del lavoro è quello di guadagnarsi il tempo libero. [Aristotele] arancio',
'9Lav) Il lavoro nobilita l’uomo. [Charles Darwin] azzurro',
'10Lav) Non è il benessere né lo splendore, ma la tranquillità e il lavoro, che danno la felicità. [Thomas Jefferson] verde',
'11Lav) Essere l’uomo più ricco del cimitero non mi interessa. Andare a letto sapendo che abbiamo fatto qualcosa di meraviglioso: questo è quello che mi interessa [Steve Jobs] verde'
];

// const cosa_serveLav_1_keywords = ['soluzione', 'fare bene', 'noia', 'problema', 'peso', 'inedia', 'contrattempo', 'grana', 'grane', 'impiccio',
// 'rincrescimento', 'scocciatura', 'tediosità', 'briga', 'zuppa', 'mortorio', 'menata', 'soluzione', 'vizio', 'vizi', 'depravazione', 'depravat', 'perversione', 'pervers',
// 'malcostume', 'corruzione', 'corrott', 'corromp', 'dissolutezza', 'dissolu', 'cattiva abitudine', 'debolezza', 'debolezz', 'difetto', 'difett', 'soluzione', 'necessità', 'occorrenza', 'occorre', 'urgenza', 'urgen', 'opportunità', 'dovere', 'obbligo', 'povertà', 'pover', 'miseria', 'indigenza', 'indigent', 'stento', 'stenti', 'disagio', 'disagi',
// 'mancanza', 'mancanze', 'privazione', 'privazioni', 'ristrettezza', 'ristrettezze', 'fame', 'carestia', 'carestie', 'penuria', 'esigenza', 'esigen', 'desiderio', 'desider', 'afa'];
//
// var cosa_serveLav_1_cits = ['3Lav) Il lavoro allontana tre grandi male: la noia, il vizio e il bisogno [Voltaire] arancio'];

const cosa_serveLav_2_keywords = ['alcool', 'alcolic', 'bere', 'bevand', 'ubriac'];

var cosa_serveLav_2_cits = ['4Lav) Il lavoro non è più rispettabile dell’alcool, e serve esattamente allo stesso scopo: distrae semplicemente la mente. [Aldous Huxley] viola'];


////// SOLDI

const soldi_keywords = ['strategi', 'diventare ricco', 'diventare ricca', 'diventare ricche', 'diventare ricchi', 'ricc', 'soldi', 'denaro', 'danaro', 'quattrini', 'quattrino', 'bezzi', 'conquibus', 'pecunia', 'grana', 'banconot', 'spiccioli', 'spicciolo', 'contante', 'contanti', 'liquido', 'monet', 'valut', 'ricchezz', 'patrimonio', 'averi', 'capital', 'fondi', 'finanze', 'risparmi', 'rendita', 'guadagn', 'ricchezza', 'prosperità', 'agio', 'centesimi', 'milionar', 'miliardar', 'riccone', 'riccona', 'ricconi', 'pagar', 'spender', 'cash', 'fatturat', 'curriculum', 'portfolio', 'cv', 'stipend', 'salari', 'lusso', 'opulenza', 'opulen', 'indigenza', 'indigen', 'miseria', 'nullatenen', 'povertà', 'pover', 'beni', 'fortune', 'patrimonio', 'possedimenti', 'possessi', 'proprietà', 'abbondanza', 'dovizia', 'profusione', 'esigu', 'inopia', 'penuria', 'pover', 'scars', 'scarsità', 'dote', 'eredità', 'ereditare', 'ereditari', 'curriculum vitae', 'danaroso', 'dovizioso', 'facoltos', 'miliardari', 'milionari', 'ricco sfondato', 'abbiente', 'ricca sfondata', 'agiat', 'benestante', 'indigente', 'malagiat', 'non abbiente', 'miserabile', 'miser', 'nullatenente', 'prosper', 'prosperos', 'opim', 'opulent', 'pingue', 'faraonic', 'lussuos', 'dozzinale', 'scadente', 'produttivo', 'ubertos', 'fiorent', 'florid', 'lussureggiant', 'stentat', 'laut', 'lucullian', 'pantagruelic', 'mida', 'opulen', 'indigen', 'nababb', 'plutocrate', 'benestant', 'capitalist', 'bisognos'];

var soldi_cits = ['12Lav) Lavora come se non avessi bisogno di soldi [Satchel Paige] verde',
'54Lav) Quando un uomo ti dice che è diventato ricco grazie al duro lavoro, chiedigli: “di chi?”.[Don Marquis] rosso',
'55Lav) “La ricchezza è una condizione relativa: è ricco che guadagna di più di quanto spende e, viceversa, è povero chi ha esigenze superiori al reddito.” (luciano de crescenzo) verde'
];

////// LAVORO ESSENZIALE PER VITA -----> stress, tempo libero

const lavoro_vita_keywords = ['obbligo', 'pigriz', 'fannullaggin', 'indolenza', 'inerzia', 'vacanz', 'noia', 'noios', 'ozio', 'inoperos', 'sfaticat', 'tempo libero', 'passatemp', 'divertiment', 'svago', 'spasso', 'distrazione', 'trovare se stesso', 'trovare se stessi', 'trovar se stesso', 'trovar se stessi', 'nobil', 'fatic', 'frustrat', 'frustraz', 'stress', 'trovar se stessi', 'trovare se stessi', 'hobby', 'passatemp', 'passion', 'svagarmi', 'svagarsi', 'distrazion', 'distrarsi', 'distrarmi', 'diversiv', 'divertiment', 'scacciapensieri', 'stress', 'stressat', 'scansafatic', 'voglia di lavorare', 'voglia di fare', 'ferie', 'feste', 'festività', 'riposo', 'riposat', 'riposar', 'ripos', 'pension'];


///// LAVORO GIUSTO

const lavoro_giusto_keywords = ['sceglier', 'scelg', 'preferit', 'prefer', 'godi', 'appag', 'soddisfazion', 'soddisf', 'benessere', 'giust', 'esatt', 'adeguat', 'appropriat', 'convenient', 'giusto per me', 'adatt', 'il più adatto', 'adott', 'adottar', 'lavoro dei miei sogni', 'lavoro della mia vita', 'desiderio', 'desideri', 'desider', 'ambisc', 'sognar', 'sogno', 'sogni', 'sogniamo', 'aspiro', 'aspirar', 'aspiriamo', 'studi', 'studiando', 'speranz', 'aspiraz', 'bram', 'università', 'studio', 'scuol', 'lezion', 'botteg', 'fare dopo', 'piacerebbe', 'piace',
'farà dopo l\'università', 'far dopo', 'farò dopo gli studi', 'farò dopo il liceo', 'branc', 'campo di', 'scelg', 'soddisf', 'mi soddisf', 'appagat', 'soddisfatt', 'gratificazion', 'gratifica', 'piacere', 'godimento', 'appagament', 'compiaciment', 'allegr', 'gioia', 'aumento', 'stipend', 'guadagn', 'sbagliar', 'lavoro migliore', 'miglior lavoro', 'occupazione migliore', 'professione migliore', 'realizzazione', 'realizzat', 'felic', 'liet', 'opportun', 'efficac', 'più buono', 'esaudimento', 'saturazione', 'esaudit', 'esaudir', 'gradimento', 'gradit', 'adempimento', 'adempier', 'assolvimento', 'ottemperamento', 'consolazion', 'lavoro che mi piace',
'lavoro che mi piaccia', 'lavoro che mi soddisfi', 'lavoro che mi renda felice'];


///// COSA AMBIRE

const cosa_ambire_keywords = ['obiettiv', 'traguard', 'soglia', 'livello',
'modific', 'modalità', 'manier', 'infelic', 'felic',
'trasformarsi', 'farsi diverso', 'avere', 'raggiung',
'valore', 'perfezione', 'miglior', 'ambizios', 'ambi', 'punt', 'aspir', 'mirare', 'arrivare a',
'sogn', 'principi', 'giudi', 'distru'];

///// AMORE PROPRIO LAVORO

const amore_proprio_lav_keywords = ['individ', 'apprezz', 'quello che faccio', 'quotidianalm', 'quotidianame', 'trovare la forza', 'trovar le forze', 'reputaz', 'amo quello che faccio', 'apprezzare quello che faccio', 'apprezzo quello che faccio', 'amo quello che faccio', 'ho stima del mio lavoro', 'adoro il mio lavoro', 'adorare il mio lavoro', 'desiderare il mio lavoro', 'desiderare quello che faccio', 'schiavo del mio lavoro', 'schiava del mio lavoro', 'schiavi del nostro lavoro',
'lavoro da schiavi', 'lavoro da schiavo', 'lavoro da schiava', 'servitù', 'schiavitù', 'amare il proprio lavoro', 'apprezzare il proprio lavoro', 'apprezzare la propria professione', 'amare la propria professione', 'innamorarmi del mio lavoro', 'innamorarsi del proprio lavoro', 'innamorarmi del mio lavoro', 'innamorarmi della mia professione', 'innamorarsi della propria professione', 'innamorarmi del mio mestiere', 'innamorarsi del proprio mestiere'];


///// CAMBIAMENTO AUDACIA

const camb_audacia_keywords = ['cambi', 'evolv', 'trasform', 'rinnov', 'vari', 'variazion', 'modific',
'liberarsi', 'essere disposto', 'essere disposta','essere disposte','essere disposti', 'cambi', 'artefic',
'process', 'strad', 'percors',
'cerc', 'capac', 'essere in grado', 'fare', 'pens', 'puoi arrivare', 'poter arrivare', 'posso arrivare', 'possiamo arrivare', 'possono arrivare', 'puoi essere', 'poter essere', 'posso essere', 'possiamo essere', 'possono essere',
'divent', 'costrui'
];


////// MOTIV
const motiv_1_keywords = ['speriment', 'fare esperienza', 'fare esperienze', 'acquisire esperienza', 'acquisire esperienze', 'impratichirsi', 'sopportar', 'rassegnar', 'rendere inutile', 'rendere utile', 'vanifica', 'delu', 'abbatt', 'scoraggia', 'demoralizz', 'deprimer', 'depress', 'avvili', 'faccio esperienza', 'acquisisco esperienza', 'sopport', 'adattarsi', 'adattarmi', 'adattarci', 'cimentarsi', 'cimentarmi', 'cimentarci', 'impratichirmi', 'impratichirci', 'impratichisc', 'sopport', 'sostenere', 'subire', 'soffrire', 'tollerare', 'patire', 'pazientare', 'sottomissione', 'acquiescenza', 'sopportazione', 'sottomess', 'abbattut', 'sfiduciat', 'abbacchiat', 'scoraggiat', 'sconsolat', 'sconfortat', 'scorat', 'sconfort', 'coragg', 'rinunc', 'desist', 'mutar occupazione', 'mutar proposito', 'mutare occupazione', 'cambiare occupazione', 'cambiare lavoro', 'cambiare proposito', 'cambiare professione', 'mutare professione', 'cambiar lavoro', 'cambiar professione',
'cambiar occupazione', 'perseveranz', 'persever', 'insist', 'perdur', 'persist', 'assidu', 'costanz', 'costant', 'tenac', 'accaniment', 'caparbi', 'ostinat', 'ostinaz', 'pervicac', 'incostanz', 'incostant', 'arrendevol', 'ceder', 'darsi per vinto', 'darmi per vinto', 'demorder', 'gettare la spugna', 'mollar', 'rinunc', 'soccomb', 'battersi', 'combatt', 'opporsi', 'oppormi', 'resist', 'tenere duro', 'tener duro', 'tengo duro'];
const motiv_2_keywords = ['opportunità', 'possibil', 'occorrenz', 'chance', 'circostanza favorevole', 'circostanze favorevoli', 'momento propizio', 'momenti propizi', 'momento adatto', 'occasione adatta', 'occorrenza', 'avvenimento', 'occasion'];

const occasioni_keywords = ['occasion', 'possibilit', 'situazion', 'opportunità', 'chance', 'circostanza favorevole', 'circostanze favorevoli', 'momento propizio', 'momenti propizi', 'momento adatto', 'occasione adatta',
'cogliere', 'colgo', 'acchiapp', 'afferr', 'prend',
'darsi da fare', 'mi do da fare', 'ci si da fare', 'impegnarsi',  'mettersi in gioco', 'rimboccarsi le maniche',
'gradin', 'ostacol', 'difficoltà',
'vita', 'esistenza', 'vissuto',
'preparazione', 'conoscenz', 'abilità', 'curriculum', 'fortun', 'sfortun'];


///// LAVORO E AMORE

const lavoro_amore_keywords = ['persona amata', 'coppia', 'innamorati', 'amore della vita', 'amore della mia vita', 'la mia persona', 'la mia metà', 'la mia ragazza', 'il mio ragazzo', 'il mio amato', 'la mia amata', 'coniugi', 'coniug', 'matrimonio',
'sposarsi', 'sposare', 'sposo', 'sposi', 'sposa', 'sposiamo', 'sposate', 'sposano', 'moglie', 'marito', 'consorte', 'consorti', 'compagno', 'compagna', 'vero amore', 'lavorare con mia moglie', 'lavorare con mio marito', 'lavorare con compagno', 'lavorare con compagna', 'relazione sul lavoro', 'essere fidanzati con',
'avere un rapporto con'];

const amore_per_lav_keywords = ['proprio lavoro', 'mio lavoro', 'individ', 'mi piac', 'piacer', 'apprezz', 'quello che faccio', 'quotidinalm', 'trovare la forza', 'trovar le forze', 'reputaz', 'amo quello che faccio', 'apprezzare quello che faccio', 'apprezzo quello che faccio', 'amo quello che faccio', 'ho stima del mio lavoro', 'adoro il mio lavoro', 'adorare il mio lavoro', 'desiderare il mio lavoro', 'desiderare quello che faccio'];

////// FRASI POSITIVE

const frasi_posneg_keywords = ['odio', 'odiar', 'disprezz', 'rabbia', 'divergere', 'divergenz', 'opinion', 'estraniarsi', 'disaffezionar', 'straniarsi', 'capo', 'boss', 'mio superiore', 'mia superiore', 'mio dipendente', 'mia dipendente', 'miei dipendenti', 'suoi dipendenti', 'colleg', 'trovarsi bene', 'andare d\'accordo', 'andare d\'accord con gli altri', 'andare d\'accordo', 'andar d\'accordo', 'mi trovo bene', 'vado d\'accordo', 'capirsi', 'lavorar bene insieme', 'lavorare bene insieme', 'insieme', 'team', 'gruppo', 'uffic', 'contrast', 'discord', 'disaccord', 'dissidio', 'armonia', 'intesa', 'contesa', 'tension', 'conflitt', 'scontr', 'discussion', 'discuter', 'discu', 'litig', 'disput', 'polemic', 'dibattit', 'controvers', 'disamina', 'alterco', 'dialogo', 'negoziar',
'capi', 'dirigent', 'dirig', 'manager', 'superior', 'leader', 'comand', 'dirett', 'gerarca', 'boss', 'president', 'presidenz', 'burocrat', 'burocraz', 'funzionari', 'operai', 'operaie'];


///// FORZA ANIMO

const forza_animo_keywords = ['rialzarsi', 'cadere', 'mollare', 'perdere', 'perd', 'fallire', 'falliment', 'fallisc', 'falliamo', 'fallit', 'toccare il fondo', 'raggiungere', 'raggiung', 'riuscire', 'vincer', 'attraversar', 'riprov', 'super', 'arriv', 'otten', 'continu', 'stando fermo', 'fermi', 'si va', 'impar', 'tent', 'gioc', 'essere pronti', 'prosegu', 'insist', 'persever', 'cessare', 'proced', 'riprend', 'abbattersi', 'abbattuto', 'risollevarsi', 'riuscirci', 'sollevarsi', 'migliorare', 'arrendersi', 'spronarsi', 'avere forza d\'animo', 'andare avanti',
'andare bene', 'andare male', 'andare a rotoli', 'rotoli', 'andare in fumo', 'fiasco', 'su con la vita', 'spirito d\'iniziativa',
'determina', 'pazienza', 'pazient', 'perseveranza', 'persever', 'duro lavoro', 'sudore', 'coraggio', 'entusias', 'vinc',  'ardire', 'intrepidezza', 'intrepid', 'intraprendenza', 'intrapr', 'ardimento', 'audacia', 'prodezza', 'temerari', 'sangue freddo', 'spavald',
'ottimis', 'pessimis', 'meglio', 'focalizz', 'autodisciplina', 'indulg',
'volontà', 'ostacol', 'difficil', 'cerc', 'sacrific', 'controcorrente', 'scogli', 'audacia', 'audac', 'convinzion', 'reput', 'coraggio', 'risoluzione', 'risolut'];

//// MOTIVAZIONE

const motivazione_succ_keywords = ['realizz', 'rendere possibile', 'raggiung', 'miglior', 'dedic', 'ripet', 'approd', 'contin',
'credere in me', 'essere abbastanza', 'all\'altezza', 'segr',
'volontà', 'forza d’animo', 'impegn', 'passione', 'convin', 'scettic', 'orgogli', 'demoralizz', 'spint', 'spron', 'carica', 'sicur', 'insicur'];


//// SUCC SPORT

const sport_succ_keywords = ['partit', 'punt', 'sport', 'temp', 'allenament', 'corsa', 'calcio', 'nuoto', 'basket', 'pallacanestro', 'pallavolo', 'volley', 'tennis', 'atletica', 'scherma', 'danza', 'ginnastica', 'palestra', 'maratona', 'gar', 'compet', 'scudett', 'ballo', 'esibizion',
'soddisfazion', 'batt', 'allen', 'avvers'];

//// FELICITA'

const felicità_succ_keywords = ['felicità', 'contentezza', 'tranquillità', 'serenità', 'gioia',
'salute', 'memoria', 'immaginazione',
'felic', 'trist', 'scontent', 'risat',
'liber', 'caten', 'oppressione', 'infelic', 'felic',
'pass', 'salt', 'progre', 'attravers',
'facoltà', 'abilità', 'doti', 'eccellenza'];

///// AUTOSTIMA

const autostima_keywords = ['te stesso', 'se stessi', 'persona', 'individuo', 'personalità', 'individualità',
'fiducia', 'diffidenza', 'sfiducia', 'sospett', 'fede', 'assegnamento', 'affidamento', 'diffidare', 'fidarsi', 'autostima', 'sicuro di sè', 'sicura di sè', 'sicuri di sè', 'sicure di se',
'accettarsi', 'mi accetta', 'mi accettano',  'apprezzarsi', 'mi apprezza', 'mi apprezzano', 'valorizzarsi', 'mi valorizzo', 'mi valorizza', 'mi valorizzano', 'piacersi', 'mi piaccio', 'piacere agli altri', 'piacere a se stessi', 'essere se stessi',
'essere', 'sentirti inferiore', 'sentirsi inferiore', 'inferiore', 'stim', 'apprezz', 'accett', 'valorizz', 'sottostim', 'sopravvalut', 'sottovalut',
'preoccup', 'agitazione', 'agitarsi', 'agit', 'dubit', 'metto in discussione', 'mettere in discussione', 'in discussione', 'stim', 'support'];

///////// FUTURO SUCC

const futuro_succ_keywords = ['presente', 'passato', 'futuro', 'domani', 'destino', 'fato', 'avvenire', 'giovinezza', 'vecchiaia', 'gioventù',
'succederà', 'sarà', 'accadrà', 'avverrà', 'avventuros', 'rà', 'rò','ranno', 'rai', 'remo', 'rete',
'indietro', 'avanti', 'dietro'];

////////// ECOLOGIA

const ecologia_keywords = ['pianeta terra', 'terra', 'pianeta', 'eco', 'ecologia', 'ambiente', 'mondo', 'bisogni', 'risorse', 'suolo', 'terreno', 'cielo', 'diversità', 'biodiversità',
'distruzione del pianeta', 'devastazione', 'inquinamento', 'inquin', 'smog', 'greta thumberg', 'greta tumberg', 'greta tumblr', 'sfruttamento', 'ricicla', 'salvare la terra', 'salvare il pianeta'];

/////// FUT_TECNOLOGIA

const fut_tecnologia_keywords = ['progress', 'tecnol', 'futuro della tecnologia', 'futuro della tecnica', 'digitale', 'risolvere', 'costruire', 'avanzament', 'motore', 'energia elettrica', 'tesla', 'iphone', 'pc', 'computer', 'smartphone', 'cellulare', 'elettricit', 'potenza', 'macchine'];

////////////////////////////////////////////// LEGAMI

////////// AMICIZIA

/// ESSERE AMICI/VERA amicizia
const amicizia_generico_keywords = ['amicizia', 'amico', 'amica', 'amiche', 'amici', 'amic', 'compagnia'];

const vera_amicizia_keywords = ['vero', 'vera', 'vere', 'veri', 'verit', 'veramente', 'genuin', 'sincer', 'autentic', 'schiett', 'dissimul', 'miglior', 'puro', 'pura', 'pure', 'puri', 'purezza', 'saldo', 'salda', 'salde', 'saldi', 'degn', 'solid', 'spontan',
  'signific', 'senso', 'sensi', 'valore', 'valori', 'importa',
  'capire', 'capir', 'capirsi', 'capisc', 'capito', 'comprendere', 'comprend', 'nasc',
  'fiducia', 'fidarsi', 'fid','affid', 'rispett',
  'volersi bene', 'voler bene', 'voglio bene', 'vuoi bene', 'vuole bene', 'vogliamo bene', 'volete bene', 'vogliono bene', 'bene', 'aver caro', 'ho caro', 'caro', 'cara', 'care', 'cari', 'affezion', 'affett', 'legam', 'legat', 'per sempre'
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
     'falso', 'falsa','false', 'falsi', 'falsità', 'menzogn', 'illusione', 'illusor', 'illusor', 'illusio', 'sbaglia', 'fint', 'scorrett', 'fasull', 'ipocri', 'bugiard', 'bugia', 'bugie', 'sleal', 'doppio', 'ingann', 'negativ', 'ment',
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
  'elogi', 'fare complimenti', 'complimenti', 'congratularsi', 'riconoscere', 'insult', 'd\'accordo'
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

const tradimento_rel_keywords = ['tradire','tradit','tradiment','tradisc','ingannare','ingann','infedel','voltafaccia','voltagabbana','imbrogli','imbrogliare','imbrogliat','doppiezza','doppio gioco', 'doppiogioc', 'fregare','freg'];

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

const non_corrisposto_keywords = ['non corrisposto', 'non ricambiato', 'non ricambia', 'non ricambiato', 'non mi ricambia', 'non contraccambiato', 'contracc', 'respingere', 'respin', 'rifiut', 'non mi ama', 'sfiga', 'iella'];

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
'doppiezza', 'doppio gioco', 'fregare', 'freg', 'fregat', 'corna', 'cornut', 'amante', 'amanti', 'scappatella',
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
//////////////////////////////////////////////// ISPIRAZIONE

const ispirazione_generico_keywords = ['ispirazion', 'progett', 'progettar', 'progettist', 'design', 'designer', 'prototipar', 'user experience', 'experience', 'utent', 'digital', 'service design', 'prodott', 'servizi', 'creativ', 'creativit', 'crear', 'creer', 'creav', 'creazion', 'oper', 'manufatt', 'divin', 'estro', 'fervor', 'inspiraz', 'inspirar', 'inspirat', 'inspirarsi', 'capac', 'incapac', 'capacit', 'incapacità', 'maestria', 'abilità', 'abil', 'abilmente', 'brav', 'bravura', 'male', 'pessimamente', 'ottimamente', 'con successo', 'perfettamente', 'alla perfezione', 'a meraviglia', 'con i piedi', 'virtù', 'talento', 'talentuos', 'inett', 'inettitud', 'mediocrità', 'mediocr', 'astuzi', 'astut', 'stratagemm', 'mezzo', 'modo', 'sistema'];

var ispirazione_generico_cits = ['Rosa 1. “Non ho mai fatto una delle mie scoperte attraverso il processo del pensiero razionale.”Albert Einstein',
'Rosa 2. ”Il processo creativo è un cocktail di istinto, abilità, cultura e inventiva febbrile. Non è come una droga; è quel particolare stato in cui tutto accade velocemente, un miscuglio di coscienza e incoscienza, di paura e piacere; è un po’ come amare, l’atto fisico dell’amare.” Francis Bacon',
'Verde 3. “L’ispirazione non è un privilegio dei poeti o degli artisti in genere. C’è, c’è stato e sempre ci sarà un gruppo di individui visitati dall’ispirazione. Sono tutti quelli che coscientemente si scelgono un lavoro e lo svolgono con passione e fantasia.” Wislawa Szymborska',
'Rosa 4. “Il genio non è riproducibile. L’ispirazione, però, è contagiosa, e multiforme, e anche soltanto vedere, da vicino, la potenza e l’aggressività rese vulnerabili dalla bellezza significa sentirsi ispirati e (in un modo fugace, mortale) riconciliati.” David Foster Wallace',
'Arancione 5. “È esatto dire che, in mezzo ai bassi interessi del denaro e alla scolorita freddezza dei pensieri volgari che riempiono la nostra vita, le azioni ispirate da una vera passione mancano raramente di produrre il loro effetto, quasi che una divinità propizia si desse premura di condurle per mano.” Stendhal',
'44AA) L’immaginazione è stata data agli esseri umani per compensarli di ciò che non sono. Il senso dello humor per consolarli di ciò che sono.– Francis Bacon – Viola',
'Rosso 7. “Non soffocare la tua ispirazione e la tua immaginazione, non diventare lo schiavo del tuo modello.”Van Gogh',
'Rosa 9. “L\'ispirazione è un risveglio, una fuga da tutte le facoltà umane, e si manifesta in tutte le grandi conquiste artistiche.”Giacomo Puccini',
'Rosso 13. “L’ispirazione è una farsa che i poeti hanno inventato per darsi importanza.” Jean Anouilh',
'Arancione L’ispirazione è sempre un visitatore sorprendente. (John O’Donohue)',
'Blu L’ispirazione viene col lavorare ogni giorno. (Charles Baudelaire)',
'41AA) Nessuno ha mai scritto, dipinto, scolpito, modellato, costruito o inventato se non per uscire letteralmente dall’inferno. – Antonin Artaud – Rosso',
'36AA) La creatività scaturisce dalla tensione tra spontaneità e limiti. Questi ultimi, come argini di un fiume, costringono la creatività nelle varie forme che sono essenziali all’opera d’arte o al poema.– Rollo May – Blu (tono esplicativo)',
'Blu Diffidare dell’ispirazione e confidare nel lavoro, come Baudelaire o Flaubert, non è soccombere all’orgoglio, ma sottomettersi alle condizioni della grazia. Come il mistico alla mortificazione ascetica. (Nicolás Gómez Dávila)',
'Arancione Un’intuizione è la creatività che cerca di dirti qualcosa. (Frank Capra)',
'23AA) Non puoi aspettare che arrivi l’ispirazione. Devi andarne in cerca con un bastone.– Jack London – Blu',
'22AA) Il principale nemico della creatività è il buonsenso.– Pablo Picasso – Rosso',
'38AA) Più si ragiona meno si crea.– Raymond Chandler – Blu',
'57AA) Le migliori idee sono quelle nate per scherzo. Rendi il tuo modo di ragionare il più spiritoso e divertente possibile.– David Ogilvy – Arancione'
];

///////// COME SCRIVERE LIBRO

const libro_keywords = ['libro', 'libr', 'letterat', 'scritt', 'romanz', 'parol', 'sintass', 'legg', 'lettura', 'letto', 'letta', 'letti', 'lette', 'stendere', 'stend', 'stilare', 'stil', 'per iscritto', 'scribacch', 'letter', 'nero su bianco', 'penna', 'penne', 'piuma', 'piume', 'calamai', 'biro', 'scrittoi', 'scrivani', 'taccuin', 'blocco note', 'block notes', 'note', 'annot', 'agend', 'notebook', 'pagin', 'labor limae', 'riscriv', 'riscritt', 'fogli', 'manoscritt', 'rilegar', 'rilegat', 'cucit', 'cucir', 'copertin', 'volum', 'tomo', 'tomi', 'testo', 'testi', 'pubblicar', 'pubblicaz', 'pubblicat', 'batter', 'frase', 'frasi', 'letterari', 'epistol', 'autor', 'narrator', 'filologi', 'filolog', 'lingua', 'lingue'];

var libro_cits = ['Viola 10. “I veri libri devono essere figli non della luce e delle chiacchiere ma dell’oscurità e del silenzio.”Marcel Proust',
'Rosa 12. “Scrivere non è niente più di un sogno che porta consiglio.”  Jorge Luis Borges'
];

////// SCIENZA ISPIRAZIONE

const scienza_ispirazione_keywords = ['scienz', 'scienziat','laborat', 'spazi', 'spazial', 'stell', 'costellazion', 'galassi', 'laboratori', 'esperimento scientifico', 'esperimenti scientifici', 'fenomeni naturali', 'fenomeno naturale', 'chimic', 'biolog', 'alchimi', 'astrofisic', 'fisica', 'geolog', 'navicell', 'aerospazi', 'astronav', 'astronaut'];

var scienza_ispirazione_cits = ['56AA) Uno scienziato nel suo laboratorio non è soltanto un tecnico, è anche un fanciullo posto di fronte a fenomeni naturali che lo impressionano come un racconto di fate.– Marie Curie – Arancione'];

///// LAVORO ISPIRAZIONE

const lavoro_ispirazione_keywords = ['lavor', 'lavorar', 'lavorat', 'lavorator', 'lavorer', 'lavorav', 'uso', 'impratichirsi', 'fare pratica', 'far pratica', 'esercitarsi', 'esercitarmi', 'esercitazion', 'eserciter', 'esercitava', 'attività', 'attivarsi', 'attivarmi', 'attivarci', 'attivare', 'attiver', 'attivav', 'sperimentar', 'esperiment', 'esperienz', 'mestier', 'profession', 'tecnic', 'operativ', 'operazion'];

var lavoro_ispirazione_cits = ['Blu Diffidare dell’ispirazione e confidare nel lavoro, come Baudelaire o Flaubert, non è soccombere all’orgoglio, ma sottomettersi alle condizioni della grazia. Come il mistico alla mortificazione ascetica. (Nicolás Gómez Dávila)',
'Blu L’ispirazione viene col lavorare ogni giorno. (Charles Baudelaire)',
'35AA) Il genio è la punta estrema del senso pratico. – Jean Cocteau – Blu',
'26AA) Una scoperta è un misto di istinto e di metodo. – Edmund Husserl – Blu',
'53AA) La creatività si acuisce nella misura in cui la sviluppiamo con l’uso.– Napoleon Hill – Blu',
'33AA) Creatività è solo un altro nome delle normali attività. Qualsiasi attività diventa creativa quando chi la svolge ha cura di farla bene, o meglio. – John Updike – Verde'
];

//////// POESIA

const poesia_keywords = ['poesia', 'poesi', 'poem', 'poet', 'parafras', 'vers', 'strof', 'profet', 'vate', 'leopardi', 'pascoli', 'd\'annunzio', 'sylvia plath', 'rime', 'rima', 'rimar', 'liric', 'parnaso', 'poetic'];

var poesia_cits = ['Rosso 13. “L’ispirazione è una farsa che i poeti hanno inventato per darsi importanza.” Jean Anouilh',
'Arancione 14. “Il poeta è colui che ispira ben più di colui che è ispirato.” Paul Eluard',
'Arancione 15. “In questo mestiere di poetare non è la calda ispirazione che crea l’idea felice, ma l’idea felice che crea il calore ispirato.” Cesare Pavese',
'Viola 17. “Capii ben presto che i poeti componevano le loro opere non facendo uso del cervello ma per una certa disposizione naturale, per una sorta di ispirazione, come gli indovini e i profeti. Anche costoro, infatti, dicono molte e belle cose, ma senza rendersene conto.”Socrate',
'36AA) La creatività scaturisce dalla tensione tra spontaneità e limiti. Questi ultimi, come argini di un fiume, costringono la creatività nelle varie forme che sono essenziali all’opera d’arte o al poema.– Rollo May – Blu (tono esplicativo)'
];

//////// ISOLAMENTO

const isolamento_keywords = ['silenzio', 'solitud', 'sol', 'isolam', 'isolat', 'isolare', 'isolarmi', 'isolarci', 'isolarsi', 'isolarvi', 'isolarti', 'compagnia', 'insieme', 'quiete', 'rumore', 'rumoro', 'taciturnità', 'pace', 'folla', 'frastuon', 'disturb', 'casin', 'chiasso', 'baccano', 'cagnara', 'zitt', 'mutism', 'mut', 'clamore', 'fracasso', 'gazzarra', 'pandemonio', 'schiamazzo', 'strepito', 'emarginat', 'emarginazion', 'emarginar', 'isolant'];

var isolamento_cits = ['Viola 10. “I veri libri devono essere figli non della luce e delle chiacchiere ma dell’oscurità e del silenzio.” Marcel Proust',
'Viola 6. “Quell’istinto ispirato dall\'alto che costituisce il genio non vive che nella indipendenza e nella solitudine.” Ugo Foscolo'
];

///////  AMORE ISPIRAZIONE

const amore_ispirazione_keywords = ['amar', 'amor', 'amat', 'donn', 'innamor', 'attraz', 'attrarr', 'attratt', 'seduz', 'sedott', 'sedurre', 'cuore', 'anim', 'petto', 'sessualità', 'adorazion', 'ador', 'affetto', 'affetti', 'affezion', 'astio', 'odio', 'avversion', 'avvers', 'odiat', 'ardor', 'concupiscenz', 'desider', 'eccitaz', 'fiamm', 'frenesi', 'fuoco', 'passion', 'voluttà', 'disgusto', 'ostil', 'ribrezz', 'repulsion', 'schif', 'freddezza',
'amoregg', 'flirt', 'moros', 'fidanzat', 'spasimant', 'avventur', 'stor', 'tresca', 'cupidgia', 'smania', 'antipatia'];

var amore_ispirazione_cits = ['Rosso Le donne ci ispirano il desiderio di creare capolavori e ci impediscono sempre di realizzarli. (Oscar Wilde)',
'Rosso Diffidiamo del popolo, del buonsenso, del cuore, dell’ispirazione e dell’evidenza. (Charles Baudelaire)'
];

/////// CANZONE

const canzone_keywords = ['musica', 'comporre', 'compon', 'compost', 'compositor', 'compositric', 'canzon', 'music', 'melod', 'sinfon', 'armonic', 'pianof', 'chitarr', 'flaut', 'clavicembal', 'organ', 'fisarmonic', 'tambur', 'cantant', 'strumento musicale', 'strumenti musicali', 'tromba', 'batteria', 'timpan', 'note musicali', 'nota musicale', 'spartit', 'direttore d\'orchestra', 'orchestra', 'suon', 'si bemolle', 'diesis', 'chiave di violino', 'chiave di basso', 'basso', 'bassista', 'violin', 'viola', 'viole', 'violonc', 'triangol', 'microfon', 'vocal', 'voce', 'voci', 'quattro mani', 'mozart', 'beethoven', 'sciopen', 'chopin', 'arrangiament', 'musica elettronica', 'accordi', 'accordat', 'accordar', 'partitur', 'elettronic', 'acustic', 'lounge', 'jazz', 'pop', 'rock', 'soft', 'a corda', 'a fiato', 'dj', 'tastier', 'percussion', 'ottoni', 'ocarine'];

var canzone_cits = ['Blu 18. “Il grande compositore non si mette al lavoro perché gli è venuta l’ispirazione, ma gli viene l’ispirazione perché è al lavoro.”Ernest Newman',
'Verde 21. “La vera musica deve rispecchiare il pensiero e l\'ispirazione della gente e dei tempi. La mia gente sono gli Americani e il mio tempo è oggi.”George Gershwin'
];

/////// REGISTA

const regista_keywords = ['regist', 'sceneggiator', 'sceneggiatric', 'sceneggiatur', 'regia', 'video', 'cinema', 'film', 'filmografi', 'cinematografic', 'inquadratur', 'camera', 'videocamera', 'fotocamer'];

var regista_cits = ['32AA) Per fare un film di successo non basta avere un mucchio di idee: è indispensabile presentarle con cura e avere una totale consapevolezza della forma. – Alfred Hitchock – Blu'];

/////// ARTISTA

const artista_keywords = ['artist', 'arte', 'arti', 'artistic', 'artefatt', 'scultur', 'scultor', 'scultric', 'artefar', 'argill', 'modellar', 'modell', 'modellat', 'artigian', 'artific'];

var artista_cits = ['Verde 3. “L’ispirazione non è un privilegio dei poeti o degli artisti in genere. C’è, c’è stato e sempre ci sarà un gruppo di individui visitati dall’ispirazione. Sono tutti quelli che coscientemente si scelgono un lavoro e lo svolgono con passione e fantasia.” Wislawa Szymborska',
'Rosso 7. “Non soffocare la tua ispirazione e la tua immaginazione, non diventare lo schiavo del tuo modello.” Van Gogh',
'Rosa 9. “L\'ispirazione è un risveglio, una fuga da tutte le facoltà umane, e si manifesta in tutte le grandi conquiste artistiche.” Giacomo Puccini',
'Verde La lucidità di un artista è tanto involontaria quanto la sua ispirazione. (Nicolás Gómez Dávila)',
'36AA) La creatività scaturisce dalla tensione tra spontaneità e limiti. Questi ultimi, come argini di un fiume, costringono la creatività nelle varie forme che sono essenziali all’opera d’arte o al poema.– Rollo May – Blu (tono esplicativo)',
'20AA) Le regole sono ciò che gli artisti rompono; ciò che è memorabile non è mai nato da una formula.– Bill Bernbach – rosso',
'43AA) L’arte non è il bello ma vedere le cose in maniera diversa. – Virginia Woolf – Verde'
];

////// PITTORE

const pittore_keywords = ['pittor', 'pittric', 'pittur', 'pitturar', 'quadr', 'acrilic', 'olio', 'colori a olio', 'acrilici', 'tempere', 'macchi', 'macchiaiol', 'impressionismo', 'impressionist', 'pittoric', 'astratt', 'astrattism'];

var pittore_cits = ['Rosso 7. “Non soffocare la tua ispirazione e la tua immaginazione, non diventare lo schiavo del tuo modello.”Van Gogh',
'Arancione 16. “Tutti i pittori ispirati sono impressionisti, anche se è vero che alcuni impressionisti non sono ispirati.” Joaquin Sorolla'
];

////// DISEGNATORE

const disegnatore_keywords = ['disegn', 'disegnar', 'matit', 'disegnator', 'disegnatric', 'pastell'];

var disegnatore_cits = ['40AA) In un altro tempo ero un grande disegnatore, ma ho studiato in un sistema scolastico e con un insegnante che mi hanno fatto perdere del tutto il mio talento – Franz Kafka – Rosso'];

////// RAZIOCINIO

const raziocinio_keywords = ['raziocinio', 'ragione', 'ragionar', 'ragionato', 'razionalizzar', 'razionalizz', 'razional', 'disciplin', 'disciplinat', 'norma', 'norme', 'normat', 'rigidit', 'mente', 'buonsenso', 'metod', 'metodic', 'metodocità', 'istint', 'lucid', 'lucidità', 'schiav', 'repression', 'repress', 'reprimer', 'senso pratico', 'sensat', 'oggettiv', 'praticità', 'pratic', 'pragmatic', 'folgoraz', 'illuminaz', 'illuminat', 'folgorat', 'infervorat', 'infervorar'];

var raziocinio_cits = ['Rosa 1. “Non ho mai fatto una delle mie scoperte attraverso il processo del pensiero razionale.” Albert Einstein',
'Verde La lucidità di un artista è tanto involontaria quanto la sua ispirazione. (Nicolás Gómez Dávila)',
'Rosso 7. “Non soffocare la tua ispirazione e la tua immaginazione, non diventare lo schiavo del tuo modello.” Van Gogh',
'34AA) La creatività non fa a pugni con la disciplina.– Johan Cruijff – Blu',
'20AA) Le regole sono ciò che gli artisti rompono; ciò che è memorabile non è mai nato da una formula.– Bill Bernbach – rosso',
'24AA) La ragione non sovrasta mai l’immaginazione, mentre l’immaginazione spodesta frequentemente la ragione.– Blaise Pascal – Arancione',
'38AA) Più si ragiona meno si crea.– Raymond Chandler – Blu',
'35AA) Il genio è la punta estrema del senso pratico.– Jean Cocteau – Blu',
'26AA) Una scoperta è un misto di istinto e di metodo.– Edmund Husserl – Blu',
'Rosso Diffidiamo del popolo, del buonsenso, del cuore, dell’ispirazione e dell’evidenza.(Charles Baudelaire)'
];

////// ARCHITETTURA

const architettura_keywords = ['architettur', 'architett', 'casa', 'abitazion', 'pont', 'strad', 'costruir', 'costruit', 'costruzion', 'calatrava', 'renzo piano', 'van der rohe', 'eriger', 'erett', 'innalzar', 'innalzat', 'edificar', 'edificazion', 'edificio', 'edifici', 'edificat', 'edificherò', 'costruirò', 'edificherai', 'edificherà', 'edificheremo', 'edificherete', 'edificheranno', 'edific',' costruirò', 'costruirai', 'costruirà', 'costruiremo', 'costruirete', 'costruiranno', 'costrui', 'innalzerò', 'innalzerai', 'innalzerà', 'costruivo', 'costruivamo', 'edificavamo', 'edificavo', 'innalzeremo', 'innalzerete', 'innalzeranno', 'innalz', 'grattaciel', 'palazzo', 'struttur', 'struttural'];

var architettura_cits = ['Arancione 8. “Volete sapere dove ho trovato la mia ispirazione? In un albero; l\'albero sostiene i grossi rami, questi i rami più piccoli e i rametti sostengono le foglie. E ogni singola parte cresce armoniosa, magnifica.” Antoni Gaudì',
'Arancione 11. “Meravigliosa ventura quella degli architetti, concessa da Dio: costruire la Sua casa e costruire per gli uomini, nella Sua ispirazione, la loro casa, il tempio della famiglia.” Gio Ponti'
];

////// SOFFERENZA ISPIRAZIONE

const sofferenza_ispirazione_keywords = ['inferno', 'infernal', 'disperazion', 'disperat', 'dolor', 'doloros', 'dolorant', 'addolorat', 'addolorarmi', 'disperat', 'disperar', 'disperat', 'disperarmi', 'disperarsi', 'disper', 'struggersi', 'struggermi', 'strugg', 'salvezz', 'salvarmi', 'salvarsi', 'salver', 'salvav', 'salvat', 'salv', 'insoddisfaz', 'insoddisfatt', 'soddisfatt', 'soddisfazion', 'tristezz', 'trist', 'malinconic', 'malinconi',
'mestizia', 'mest', 'sofferent', 'soffert', 'soffer', 'soffrir', 'soffro', 'soffri', 'soffriv', 'soffrir', 'soffr'];

var sofferenza_ispirazione_cits = ['41AA) Nessuno ha mai scritto, dipinto, scolpito, modellato, costruito o inventato se non per uscire letteralmente dall’inferno.– Antonin Artaud – Rosso',
'51AA) La salvezza umana giace nelle mani dei creativi insoddisfatti. – Martin Luther King – Viola',
'Verde Noi generalmente cambiamo noi stessi per due ragioni: ispirazione o disperazione. (Jim Rohn)'
];

////// CAMBIARE MONDO

const cambiare_mondo_keywords = ['fare qualcosa di grande', 'cambiare il mondo', 'rivoluzion', 'rivoluzionar', 'rivoluzionari', 'rivoluzionat', 'cambierò il mondo', 'cambiato il mondo', 'fare qualcosa di magnifico', 'fare qualcosa di meraviglioso', 'fare qualcosa di grandioso', 'qualcosa di importante', 'cosa grandiosa', 'cose grandiose', 'cose importanti', 'cose magnifiche', 'cosa magnifica', 'cosa meravigliosa', 'cose meravigliose'];

var cambiare_mondo_cits = ['29AA) Chi vuole cambiare il mondo cambi prima se stesso.– Socrate – Rosso'];

///// IDEE

const idee_keywords = ['idee', 'idea', 'ideare', 'ideon', 'ideat', 'ideerò', 'ideeremo', 'ideerai', 'ideerà', 'ideeranno', 'ideavo', 'ideav', 'chiar', 'chiarezza', 'intuizion', 'intuir', 'intuit', 'intuiv', 'intuir', 'spunto', 'spunti'];

var idee_cits = ['28AA) Le idee chiare e precise sono le più pericolose, perché non si osa più cambiarle.– André Gide – Rosso',
'Arancione Un’intuizione è la creatività che cerca di dirti qualcosa. (Frank Capra)',
'31AA) Spesso le idee si accendono l’una con l’altra, come scintille elettriche.– Friedrich Engels – Arancione',
'25AA) Niente al mondo è così potente quanto un’idea della quale sia giunto il tempo.– Victor Hugo – Rosa',
'57AA) Le migliori idee sono quelle nate per scherzo. Rendi il tuo modo di ragionare il più spiritoso e divertente possibile.– David Ogilvy – Arancione',
'49AA) Fate l’amore con le idee finché vi piace; ma quanto a sposarle, andateci cauti.– Arturo Graf – Viola',
'39AA) Le idee più grandi sono le più semplici.– William Golding – Verde'
];

////// FOLLIA

const follia_keywords = ['folle', 'folli', 'follia', 'pazzia', 'pazz', 'instabilità mentale', 'problema mentale', 'non lucido', 'impazzir', 'fuori di testa'];

var follia_cits = ['21AA) Adoro gli esperimenti folli. Li faccio in continuazione.– Charles Darwin – rosa',
'22AA) Il principale nemico della creatività è il buonsenso.– Pablo Picasso – Rosso',
'Verde La lucidità di un artista è tanto involontaria quanto la sua ispirazione. (Nicolás Gómez Dávila)'
];

////// CULTURA ISPIRAZIONE

const cultura_ispirazione_keywords = ['cultur', 'conoscenz', 'colt', 'conoscer', 'conoscitor', 'sapienz', 'sapient', 'apprender', 'apprendiment', 'istruir', 'istruit', 'istruzion', 'scuol', 'scolastic', 'universit', 'saper'];

var cultura_ispirazione_cits = ['31AA) La fantasia è come la marmellata, bisogna che sia spalmata su una solida fetta di pane.– Italo Calvino – Blu',
'30AA) Il genio senza istruzione è come l’argento dentro la miniera. – Benjamin Franklin – Blu',
'47AA) È impossibile vedere l’angelo se prima non possiedi un’idea di angelo.– James Hillman – Verde',
'54AA) Non già conoscere molte cose, ma mettere molte cose in contatto, questo è uno dei primi gradini dello spirito creativo.– Hugo von Hofmannsthal – Verde'
];

////// GENIO ISPIRAZIONE

const genio_ispirazione_keywords = ['genio', 'genialit', 'genial', 'geniett', 'geni'];

var genio_ispirazione_cits = ['27AA) Nella sua grandezza, il genio disdegna le strade battute e cerca regioni ancora inesplorate. – Abraham Lincoln – Verde',
'30AA) Il genio senza istruzione è come l’argento dentro la miniera.– Benjamin Franklin – Blu'
];

////// ORIGINALITA'

const originalità_keywords = ['original', 'originalit', 'nuov', 'novit', 'innovativ', 'innovar'];

var originalità_cits = ['27AA) Nella sua grandezza, il genio disdegna le strade battute e cerca regioni ancora inesplorate.– Abraham Lincoln – Verde',
'37AA) La creatività vuole coraggio.– Henri Matisse – Rosa',
'39AA) Le idee più grandi sono le più semplici. – William Golding – Verde',
'48AA) La creatività non sta nel trovare nuovi paesaggi, ma nell’avere occhi nuovi. Marcel Proust – Arancione',
'43AA) L’arte non è il bello ma vedere le cose in maniera diversa.– Virginia Woolf – Verde'
];

///// VERITA' REALTA'

const verità_realtà_keywords = ['verit', 'ver', 'realt', 'real'];

var verità_realtà_cits = ['55AA) La realtà non è mai come la si vede: la verità è soprattutto immaginazione.– René Magritte – Rosa'];

///// PAURA FALLIRE

const paura_fallire_keywords = ['paur', 'timor', 'fallir', 'fallit', 'falliment', 'fallisc', 'falliv', 'tem', 'temev', 'temer', 'terrore', 'perder', 'perdit', 'vinc', 'vincit', 'trionf', 'sconfitt', 'abiss'];

var paura_fallire_cits = ['52AA) Un aspetto essenziale della creatività è non avere paura di fallire.– Edwin Land – Blu',
'50AA) La forma di scoraggiamento più dannosa alla creatività è quella che ci viene dai nostri cari.– Alex Osborn – Viola'
];

/////////////////////////////////////////////////////////////// MORTE

//// MORTE GENERICO

const morte_generico_keywords = ['morte', 'morire', 'mort', 'mortale', 'morente', 'muoio', 'muori', 'muor', 'moriv','moriamo', 'morite', 'muoiono', 'morendo', 'dipartit', 'perdit', 'scompars', 'trapass', 'mortalmente', 'croll', 'estinz', 'estinz', 'fin', 'scompars', 'declin', 'tramont', 'defunt', 'decedere', 'decess', 'decedut', 'deced', 'sentir', 'sent', 'sensaz', 'provar', 'prov', 'sentiment', 'emoz', 'percez', 'percepisc', 'percepir', 'percepiv'];

var morte_generico_cits = ['2A Blu La morte è la curva della strada, morire è solo non essere visto.(Fernando Pessoa)',
'7A Viola La morte è un’usanza che tutti, prima o poi, dobbiamo rispettare. Jorge Louis Borges',
'11A Arancione La morte è una sorpresa che rende inconcepibile il concepibile.(Paul Valéry)',
'53A Blu Che cosa è la morte per me? Un grado di più nella calma, e forse nel silenzio.(Alexandre Dumas padre)',
'78A Rosso La morte risolve tutti i problemi – niente uomini, niente problemi.(Stalin)',
'73A Viola Ci vuole tutta la vita per imparare a vivere e, quel che forse sembrerà più strano, ci vuole tutta la vita per imparare a morire.(Lucio Anneo Seneca)',
'1A Arancione La vita è una grande sorpresa. Non vedo perché la morte non potrebbe esserne una anche più grande.(Vladimir Nabokov)',
'26A Rosa E così morire è bere dal fiume del silenzio e scalare la cima del monte significa stare nudi nel vento e sciogliersi al sole. (Khalil Gibran)',
'54A Rosa Morire È un’arte, come qualsiasi altra cosa.Io lo faccio in un modo eccezionale Io lo faccio che sembra un inferno Io lo faccio che sembra reale. Ammetterete che ho la vocazione. (Sylvia Plath)',
'20A Rosso Ho combattuto con la morte. È la sfida meno eccitante che tu possa immaginare. Si svolge in un impalpabile grigiore, niente sotto i piedi, niente intorno, senza spettatori, senza clamore, senza gloria, senza il grande desiderio della vittoria, senza la grande paura per la sconfitta, in una atmosfera insalubre di di tiepido scetticismo, senza molto sollievo nelle nostre stesse ragioni e ancor meno in quelle del tuo avversario. (Joseph Conrad)',
'58A Blu Ecco il nostro errore: vediamo la morte davanti a noi e invece gran parte di essa è già alle nostre spalle: appartiene alla morte la vita passata.(Lucio Anneo Seneca)',
'34A Viola La vita fa l’analisi, la morte si incarica della sintesi.(Robert Sabatier)',
'8A Arancione La morte con tutta probabilità è la più grande invenzione della vita. Spazza via il vecchio per far spazio al nuovo.(Steve Jobs)',
'18A Arancione Ogni volta che trascorro del tempo con una persona che sta morendo trovo in effetti una persona che vive. Morire è il processo che inizia pochi minuti prima della morte, quando il cervello viene privato dell’ossigeno; tutto il resto è vivere.(Patch Adams)',
'16A Viola Vita e morte non sono due estremi lontani l’uno dall’altro. Sono come due gambe che camminano insieme, ed entrambe ti appartengono. In questo stesso istante stai vivendo e morendo allo stesso tempo. Qualcosa in te muore a ogni istante. (Osho)'
];

/// PAURA, DOLORE, CONFORTO

const paura_keywords = [ 'paura', 'timore', 'temo', 'temi', 'temiamo', 'temet', 'temer', 'temev', 'terrore', 'terrorizzat', 'preoccuparsi', 'preoccupat', 'preoccup', 'preoccupazion', 'precipizio', 'precipiz', 'precipit', 'abisso', 'abissi', 'abiss', 'precipitare', 'abissale', 'abissal', 'buio', 'luce', 'luminos', 'abbuiare', 'rabbuiare', 'bui', 'grigiore', 'angoscia', 'panico', 'sgomento','ansia', 'apprensione', 'batticuore', 'inquietudine', 'pensiero', 'preoccupazione', 'inquiet',      'impanic', 'ansios', 'apprensiv', 'trepidant', 'trepidar', 'impaurit', 'impaurirsi', 'impaurisc', 'impaurir', 'intimidit', 'intimidisc', 'intimidir', 'intimorit', 'intimorisc', 'intimori', 'spaventat', 'terrorizzat', 'atterrit', 'terrorizz', 'atterrisc', 'trepidazione','impaurire', 'intimidire', 'intimorire', 'spaventare', 'angosciare', 'atterrire', 'sgomentare', 'terrorizzare', 'orrore', 'spavento', 'cup', 'fosc', 'funebr', 'funere', 'funest', 'lugubr', 'tetr',
'dolor', 'afflizion', 'cordogli', 'afflitt', 'addolorat', 'male', 'malattia', 'malat', 'malattie', 'ammalarsi', 'ammalat', 'mali', 'malign', 'maledizion', 'maledett', 'malefic', 'crudeltà', 'crudel', 'regg', 'sopport', 'toller', 'pati', 'peno', 'peni', 'pena', 'peniamo', 'penate', 'penano', 'tribol', 'stent', 'subir', 'subisc', 'subiamo', 'subite', 'subiscon', 'dolor', 'penar', 'affliggersi', 'angustiarsi', 'angustiat', 'tormentat', 'perdut', 'inferm', 'dolersi', 'struggersi', 'tormentarsi', 'torturarsi', 'morbo', 'malessere', 'malore', 'patologia', 'sindrome', 'salute', 'bene', 'male', 'perdizion', 'rovin', 'benessere', 'floridezza', 'sanità', 'egritudine', 'infermità', 'insanità', 'in forma', 'san', 'inferm', 'malat', 'condizioni fisiche', 'peggiora', 'essere in buona', 'essere in cattiva', 'condizion', 'stat', 'ospedal', 'cur',  'clinic', 'angosci', 'pena', 'strazi', 'torment',
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

const dio_keywords = ['Dio', 'salvezza', 'salv', 'dannat', 'dannazione', 'altissimo', 'creatore', 'domineddio', 'onnipotente', 'padreterno', 'signore', 'chies', 'Cristo', 'Gesù', 'Madonna', 'maria', 'confession', 'cred', 'fede', 'religion', 'santo', 'santi', 'santa', 'santif', 'sacr', 'religios', 'adorazion', 'cult', 'venerazion', 'deferenz', 'devozion', 'devot', 'ossequi', 'riverenz', 'atei', 'ateo', 'irreligios', 'miscredenz', 'sacr', 'profan', 'civil', 'laic', 'precett', 'credent', 'devot', 'fedel', 'osservant', 'pio', 'pia', 'pii', 'areligios', 'ateo', 'atei', 'irreligios', 'miscredent', 'blasfem', 'empi', 'ecclesiastic', 'esiste', 'odio', 'rifiut', 'intolleran', 'venerar', 'vener', 'veneraz', 'odiar'
];

var dio_cits = ['31A Verde | La morte è orribile solo per colui che non crede in Dio, oppure crede in un Dio malvagio, il che è la stessa cosa. Per colui che crede in Dio, nella sua bontà e vive in questa vita secondo la sua legge ed ha sperimentato questa sua bontà, per costui la morte è solo un passaggio. (Lev Tolstoj)',
'35A | Arancione Dio è l’unico essere che, per regnare, non ha nemmeno bisogno di esistere. (Charles Baudelaire)',
'68A | Rosso Nella vita la cosa più audace è odiare la morte; sono disprezzabili e disperate le religioni che ottundono questo odio. (Elias Canetti)'
];

///// IMMORTALITA'

const immortalità_keywords = ['dopo la morte', 'dopo che muoio', 'dopo che sarò morto', 'dopo che sarò morta', 'dopo che saremo morti', 'dopo che sono morto', 'dopo che sono morta', 'quando morirò', 'quando sarò morto', 'quando sarò morta', 'quando saremo morti', 'quando saremo morte', 'quando moriremo', 'immortal', 'immortalità', 'infinit', 'etern', 'aldilà', 'paradiso', 'inferno', 'purgatorio', 'purificazione', 'purificarsi', 'purific', 'purificat', 'reincarnazion', 'reincarnarsi', 'reincarn', 'altro mondo', 'oltretomba', 'acheronte', 'ade', 'inferi', 'esist', 'regno dei morti', 'vita terrena', 'decomposiz', 'decomporsi', 'decompongo', 'decomponi', 'decompone', 'decompost', 'disfatto', 'disfarsi', 'disfare', 'putrefaz', 'putrefarsi', 'putrefa', 'putrefatt', 'corrompere', 'corrompersi', 'imputridire', 'imputridit', 'imputridir', 'imputridisc', 'corrott', 'marcir', 'marcio', 'marci', 'deteriorarsi', 'deteriorare', 'deterior', 'estinzion', 'estinguersi', 'estingu', 'estint', 'scomparir', 'dissolversi', 'scompars', 'dissolt', 'disgregarsi', 'scindersi', 'scission', 'sciss', 'sciogliersi', 'sciolt', 'carne', 'spirit', 'carnal', 'ceneri', 'cenere', 'concim', 'fertilizzante per piante', 'fertilizz', 'tra la vita e la morte', 'stasi','anima', 'ermafrodit', 'mondo delle idee', 'mondo platonico'
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

// const senso_vita_keywords = ['viviamo per morire', 'che senso ha vivere', 'che senso ha la vita', 'significat', 'morire senza aver vissuto', 'vivere per morire', 'senso', 'sens', 'signif', 'vita', 'vivere', 'vivo', 'viva', 'vivi', 'vivr', 'vissut', 'illogic', 'incoerent', 'incoerenz', 'incongruent', 'incongruenz', 'insensat', 'irragionevol', 'irrazional', 'sconness', 'senza capo né coda', 'assurd', 'dissennat', 'sconsiderat', 'logic', 'ragionevol', 'razional', 'sensat',
// 'perchè dobbiamo morire', 'perchè si vive', 'cosa vuol dire vivere'
// ];

const senso_vita_keywords = ['perchè dobbiamo morire', 'perchè si vive', 'cosa vuol dire vivere', 'vita o morte', 'morte o vita'
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
'animo', 'interiormente', 'sentirsi male con se stessi', 'disagio', 'disagi'];

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
'volata in cielo', 'volati in cielo', 'volate in cielo', 'volerà in cielo', 'voleranno in cielo', 'volerò in cielo', 'volerai in cielo', 'voleremo in cielo', 'volerete in cielo', 'vola in cielo', 'volare in cielo', 'andare in cielo', 'andrà in cielo', 'andranno in cielo', 'andremo in cielo', 'andrete in cielo', 'andrò in cielo', 'andrai in cielo', 'andato in paradiso', 'andata in paradiso', 'andati in paradiso', 'andate in paradiso', 'spegnersi', 'spento', 'spegnerà', 'spegnerò', 'spegneremo', 'spegnerete', 'spegneranno', 'orfan', 'vedov'
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

const quando_morirò_keywords = ['quando morirò', 'quando morirà', 'quando moriremo', 'quando avverrà la mia fine', 'ci sarà la mia fine', 'la mia ora', 'la nostra ora', 'giungerà la mia ora', 'giungerà la mia morte', 'giungerà la nostra morte', 'quando finirà il mondo', 'finirà il mondo', 'fine del mondo', 'collasso del mondo', 'mondo collasserà', 'mondo finirà', 'collasserà il mondo', 'terminerà il mondo', 'mondo terminerà', 'mondo avrà una fine', 'finirà',
'avrà fine', 'avrò fine', 'avremo fine', 'verrò sepolto', 'verremo sepolti', 'verrò seppellito', 'verremo seppelliti', 'il mio ultimo giorno', 'il nostro ultimo giorno', 'il nostro termine', 'il mio termine', 'termine della nostra vita', 'termine della mia vita', 'fine della nostra esistenza', 'fine della mia esistenza', 'fine dell’esistenza', 'termine dell’esistenza', 'la propria ora', 'giunti a termine', 'giungere a termine', 'giunto a termine', 'giunta a termine',
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
'farsi fuori', 'fin di vita', 'malato terminale', 'malati terminali', 'malata terminale', 'malate terminale', 'mettere fine alla vita di', 'mettere fine alla mia vita', 'mettere fine alla sua vita', 'mettere fine alla loro vita', 'conservare la vita'
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

const aborto_keywords = ['abort', 'uccid', 'ammazz', 'omicid', 'annient', 'fare fuori', 'annient', 'bambin', 'infanticidi', 'feto', 'feti', 'interrruzione di gravidanza', 'bebè', 'lattante', 'neonat', 'pargolo', 'poppante', 'embrion', 'uccid', 'assassin', 'delitt'];

var aborto_cits = ['20eti azzurro L\'aborto viene sostenuto solo da persone che sono nate esse stesse. [Ronald Reagan]',
'19eti viola L\'aborto è il più grande distruttore della pace perché, se una madre può uccidere il suo stesso figlio, cosa impedisce che io uccida te e tu uccida me? Non c\'è più nessun ostacolo. [Madre Teresa di Calcutta]',
'18eti azzurro I cattolici, e lo ero anch\'io finché non ho raggiunto l\'età della ragione, i cattolici e altri cristiani sono contro l\'aborto e sono contro gli omosessuali. Ma chi ha meno aborti degli omosessuali?”[George Carlin]',
'17eti rosa L\'abolizione del diritto di abortire per una donna, quando e se lo vuole, equivale a una maternità obbligatoria, una forma di stupro da parte dello Stato.” [Edward Abbey]',
'16eti rosa “Come mai quando si tratta di noi, è un aborto, e quando si tratta di polli, è un\'omelette?” [George Carlin]',
'15eti rosso “Se gli uomini potessero restare incinti, l\'aborto diventerebbe un sacramento.” [Flo Kennedy]'
];

////// SUICIDIO

const suicidio_keywords = ['suicidio', 'suicidarsi', 'suicidat', 'uccidersi', 'ammazzarsi', 'farsi fuori', 'eliminarsi', 'togliersi la vita', 'tolto la vita', 'togliermi la vita', 'masochismo', 'masochist', 'impicca', 'tagliarsi le vene', 'tagliarmi le vene', 'taglio le vene', 'soff', 'pasticch', 'overdose', 'farmaci', 'depress', 'spararsi'];

var suicidio_cits = ['7A Viola La morte è un’usanza che tutti, prima o poi, dobbiamo rispettare. Jorge Louis Borges',
'20A Rosso Ho combattuto con la morte. È la sfida meno eccitante che tu possa immaginare. Si svolge in un impalpabile grigiore, niente sotto i piedi, niente intorno, senza spettatori, senza clamore, senza gloria, senza il grande desiderio della vittoria, senza la grande paura per la sconfitta, in una atmosfera insalubre di di tiepido scetticismo, senza molto sollievo nelle nostre stesse ragioni e ancor meno in quelle del tuo avversario. (Joseph Conrad)',
'61A Rosa Morire per dormire. Nient’altro. E con quel sonno poter calmare i dolorosi battiti del cuore, e le mille offese naturali di cui è erede la carne! Quest’è una conclusione da desiderarsi devotamente. Morire per dormire. Dormire, forse sognare. (William Shakespeare)',
'58A Blu Ecco il nostro errore: vediamo la morte davanti a noi e invece gran parte di essa è già alle nostre spalle: appartiene alla morte la vita passata. (Lucio Anneo Seneca)',
'6A Viola Molte persone muoiono a venticinque anni e non vengono sepolti fino a quando non ne hanno settantacinque. (Benjamin Franklin)',
'27A Rosso Nessuno sa se per l’uomo la morte non sia per caso il più grande dei beni, eppure la temono come se sapessero bene che è il più grande dei mali. E credere di sapere quello che non si sa non è veramente la più vergognosa forma di ignoranza? (Socrate)',
'21eti Proprio come sceglierò la mia nave quando mi accingerò ad un viaggio, o la mia casa quando intenderò prendere una residenza, così sceglierò la mia morte quando mi accingerò ad abbandonare la vita. [Lucio Annea Seneca] Viola',
'22eti rosa Non sempre la vita va conservata: il bene non consiste nel vivere, ma nel vivere bene.  [Lucio Annea Seneca] Rosa',
'23eti verde Io ho il diritto di scegliere la mia morte per il bene degli altri.” [Umberto Eco] verde',
'24eti viola Nessuno vive perché lo vuole. Ma una volta che vive lo deve volere. (Ernst Bloch',
'59A rosso Morire non è nulla; non vivere è spaventoso.(Victor Hugo)',
'82A rosa Non sono gli anni che contano nella vita, è la vita che metti in quegli anni.(Abraham Lincoln)'
];

////// SCOPO VITA

const scopo_vita_keywords = ['scopo', 'fine ultimo', 'finale', 'senso', 'significat', 'sens', 'insens', 'signific', 'importanza', 'important', 'valor', 'valenz', 'illogic', 'incoerent', 'incoerenz', 'incongruent', 'incongruenz', 'insensat', 'irragionevol', 'irrazional', 'sconness', 'senza capo né coda', 'assurd', 'dissennat', 'sconsiderat', 'logic', 'ragionevol', 'razional', 'sensat', 'mistero', 'misteri', 'miracol', 'risolv', 'perchè sono', 'perchè esisto', 'che senso ha vivere',
'che senso ha la vita', 'vita', 'morire senza aver vissuto', 'vivere per morire', 'signif', 'vivere', 'vivo', 'viva', 'vivi', 'vivr', 'vissut'];

var scopo_vita_cits = ['83A rosa La vita non si misura attraverso il numero di respiri che facciamo, ma attraverso i momenti che ci lasciano senza respiro.(Maya Angelou) (Rosa)',
'92A rosa La vita è un mistero da vivere, non un problema da risolvere.(Osho, 1990)',
'94A rosa Il più grande dei miracoli è essere, semplicemente essere. Per sentirlo, non hai bisogno di essere né ricco, né colto, né famoso. Essere semplicemente! Il fatto che tu sei è il massimo tra i misteri. Perché sei? Perché esisti? Per nessun motivo: non l’hai guadagnato, non l’hai neppure chiesto! E’ semplicemente accaduto.(Osho)',
'13A “Meglio aggiungere vita ai giorni, che non giorni alla vita.”(Rita Levi-Montalcini, 2012) (Arancione)',
'97A arancione “Niente è sbagliato, se ti rende felice.”La vita è un’opportunità, coglila.(Bob Marley)',
'98A rosso Ti criticheranno sempre, parleranno male di te e sarà difficile che incontri qualcuno al quale tu possa piacere così come sei! Quindi vivi, fai quello che ti dice il cuore, la vita è come un’opera di teatro, ma non ha prove iniziali: canta, balla, ridi e vivi intensamente ogni giorno della tua vita prima che l’opera finisca priva di applausi. (Charlie Chaplin, 1977)',
'99A arancione La vita è meravigliosa se non se ne ha paura. Tutto quello che vi vuole è coraggio, immaginazione e un po’ di soldi. (Charlie Chaplin)',
'100A verde Il senso della vita è quello di trovare il vostro dono. Lo scopo della vita è quello di regalarlo. (Pablo Picasso, 1973)',
'106A verde Noi pretendiamo che la vita debba avere un senso: ma la vita ha precisamente il senso che noi stessi siamo disposti ad attribuirle. (Hermann Hesse, 1962)',
'104A rosso Se un uomo non ha scoperto qualcosa per cui è disposto a morire non è degno di vivere. (Martin Luther King, 1968)',
'110A viola La vita siete voi stessi, e se la vita è difficile da sopportare è perchè è molto difficile sopportare se stessi. (Carl Gustav Jung, 1961)',
'52A arancione Ama la vita più della sua logica, solo allora ne capirai il senso. (Fëdor Dostoevskij)',
'112A rosa Ci sono due modi di vivere la vita. Uno è pensare che niente è un miracolo. L’altro è pensare che ogni cosa è un miracolo. (Albert Einstein, 1955)',
'60A arancio La vita non è aspettare che passi la tempesta, ma imparare a ballare sotto la pioggia. (Mahatma Gandhi, 1948)'
];

///// FALLIMENTO MORTE

const fallimento_morte_keywords = ['fallimento', 'fallir', 'fallisc', 'falliamo', 'fallite', 'sbaglio', 'sbagliar', 'sbagliamo', 'sbagli', 'sbaglia', 'sbagliate', 'sbagliano', 'errare', 'erro', 'errore', 'error', 'erri', 'erriamo', 'errat', 'errano', 'eseguire male', 'eseguo male', 'eseguiamo male', 'esegue male', 'esegui male', 'calcolare male', 'calcolo male', 'calcoli male', 'calcoliamo male', 'calcola male', 'confondere', 'confond', 'confondo', 'confus', 'commettere uno sbaglio',
'commetto uno sbaglio', 'commettiamo uno sbaglio', 'commette uno sbaglio', 'commettono uno sbaglio', 'commettete uno sbaglio', 'commettere un errore', 'commette un errore', 'commetto un errore', 'commetti un errore', 'commettiamo un errore', 'commettete un errore', 'commettono un errore', 'prendere una cantonata', 'fare un passo falso', 'ho fatto un passo falso', 'ho commesso un errore', 'ho commesso uno sbaglio', 'ho calcolato male', 'commetterò nuovi errori', 'commetterò niovi sbagli', 'calcolerò di nuovo male', 'prendere un abbaglio', 'faccio un passo falso', 'farò un passo falso', 'prenderò un abbaglio', 'ho preso un abbaglio', 'ingannarsi', 'illudersi', 'mi sono illuso', 'mi sono illusa', 'ho equivocato', 'mi sono ingannato', 'mi sono ingannata', 'ho cannato', 'equivocare', 'peccare', 'ho peccato', 'comportarsi male', 'mi sono comportato male', 'ho fallito', 'fallit', 'ho agito male', 'agisco male', 'perdente', 'commettere una colpa', 'ho commesso una colpa',
'senso di colpa', 'sgarrare', 'sgarrat', 'sono in errore', 'sono stato in errore', 'sono stata in errore', 'commesso errori', 'fatto errori', 'agito erroneamente', 'comportato erroneamente', 'giudicato erroneamente', 'giudicare erroneamente', 'migliorare', 'miglior', 'cambiare in meglio', 'cambio in meglio', 'cambierò in meglio', 'cambiato in meglio', 'cambiata in meglio', 'perfezionar', 'perfezionat', 'perfezion', 'affinar', 'affino', 'affinerò', 'arricchire', 'arricchisco', 'arricchirò', 'arricchir', 'ottimizz', 'potenz', 'increment', 'corregg', 'revision', 'riform', 'sanar', 'risanar', 'rimettersi', 'ristabilirsi', 'rimettermi', 'ristabilirmi', 'riaversi', 'riavermi', 'diventare migliore', 'divento migliore', 'sono diventato migliore', 'diventato migliore', 'diventata migliore', 'diventerò migliore', 'accrescersi', 'accrescermi', 'mi accresco', 'mi accrescerò', 'ci accresceremo', 'ci accresciamo', 'svilupparsi', 'svilupparmi', 'svilupparci', 'migliorarmi', 'migliorarci',
'ci sviluppiamo', 'mi sviluppo', 'mi svilupperò', 'ci svilupperemo', 'maturar', 'maturerò', 'maturerem', 'progredir', 'progredisc', 'progredirò', 'progrediam', 'progredi', 'avanzar', 'avanzo', 'avanzerò', 'avanzeremo', 'evolversi', 'evolvermi', 'evolverò', 'evolveremo', 'perfezionarsi', 'perfezionarmi', 'mi perfeziono', 'mi perfezionerò', 'perfezionat', 'evolut', 'progredit', 'sviluppat', 'maturat', 'accresciut', 'migliorat', 'risanat', 'corrett', 'aggiustat', 'si aggiusteranno', 'miglioreranno', 'si risaneranno', 'perfezioneranno', 'si rimetteranno', 'si svilupperanno', 'progrediranno', 'avanzeranno', 'si ristabiliranno', 'evolveranno', 'diventeranno migliori', 'impratichirsi', 'impratichirmi', 'mi impratichirò', 'si ottimizzeranno', 'si arricchiranno', 'si riformeranno', 'si correggeranno', 'si perfezioneranno', 'si affineranno', 'rendere peggiore', 'rovinare', 'peggiorare', 'aggravarsi', 'si aggravano', 'si aggraveranno', 'rovineranno', 'rovinerò', 'renderò peggior', 'renderò peggiore', 'rendo peggior', 'rendo peggiore', 'ho reso peggior', 'ho reso peggiore', 'colpevol', 'ho aggravato', 'aggravo', 'peggior', 'rovin', 'criminal', 'responsabil', 'reo', 'rea', 'rei', 'ree', 'illegal', 'illecit', 'peccator', 'innocent', 'innocenz', 'legal', 'lecit', 'incolpevol'];

var fallimento_morte_cits = ['84A rosso Se nella tua vita qualcosa non ti piace, cambiala. Se non puoi cambiarla, cambia il tuo atteggiamento. Non lamentarti.(Maya Angelou) (Rosso)',
'85A Il tuo tempo è limitato, quindi non sprecarlo vivendo la vita di qualcun altro. Non essere intrappolato dai dogma, che è il vivere dei risultati dei pensieri degli altri. Non lasciare che i rumori delle opinioni altrui soffochino la tua voce interiore. E più importante di tutto, abbi sempre il coraggio di seguire il tuo cuore e le tue intuizioni. Loro in qualche modo sanno cosa vuoi veramente diventare. Tutto il resto è secondario.(Steve Jobs) (Rosso)',
'86A rosa Per quanto difficile possa essere la vita, c\'è sempre qualcosa che è possibile fare. Guardate le stelle invece dei vostri piedi.(Stephen Hawking) (Rosa)',
'92A rosa La vita è un mistero da vivere, non un problema da risolvere. (Osho, 1990)',
'96A viola Apri gli occhi, guardati dentro. Sei soddisfatto della vita che stai vivendo?(Bob Marley, 1981)',
'95A rosa Prendete la vita con leggerezza, che leggerezza non è superficialità, ma planare sulle cose dall’alto, non avere macigni sul cuore.(Italo Calvino, 1985)',
'99A arancione La vita è meravigliosa se non se ne ha paura. Tutto quello che vi vuole è coraggio, immaginazione e un po’ di soldi.(Charlie Chaplin)',
'101A verde La vita è come uno specchio: ti sorride se la guardi sorridendo.(Jim Morrison, 1971)',
'109A viola Dobbiamo abituarci all’idea che ai più importanti bivi della nostra vita non c’è segnaletica.(Ernest Hemingway, 1961)',
'110A viola La vita siete voi stessi, e se la vita è difficile da sopportare è perchè è molto difficile sopportare se stessi.(Carl Gustav Jung, 1961)',
'111A rosso Se c’è un peccato contro la vita, è forse non tanto disperarne, quanto sperare in un’altra vita, e sottrarsi all’implacabile grandezza di questa.(Albert Camus, 1960)',
'115A rosso L’unico vero fallimento nella vita è non agire in coerenza con i propri valori.(Buddha)',
'52A arancione Ama la vita più della sua logica, solo allora ne capirai il senso.(Fëdor Dostoevskij)'
];

///// SOGNI_MORTE

const sogni_morte_keywords = ['sogno', 'sognar', 'sognator', 'sogniamo', 'sognate', 'sognano', 'sognant', 'sogni', 'sogna', 'sogn', 'desideri', 'ambizion', 'desider', 'ambisco', 'ambisc', 'ambiamo', 'ambite', 'ambizion', 'fantasia', 'rimpianto', 'rimpiang', 'nostalgia', 'aspirazion', 'aspirar', 'aspiro', 'aspiri', 'aspiriamo', 'aspirano', 'aspira', 'voglia', 'mira', 'mirare', 'miro', 'miri', 'miriamo', 'mirano', 'brama', 'bramar', 'bramo', 'brami', 'bramiamo', 'bramano', 'cupidigia', 'puntare', 'punto', 'obiettiv', 'proposit', 'aspiraz', 'castello in aria', 'chimer', 'fantasticheri', 'illusion', 'miraggi', 'utopi'];

var sogni_morte_cits = ['112A rosa Ci sono due modi di vivere la vita. Uno è pensare che niente è un miracolo. L’altro è pensare che ogni cosa è un miracolo.(Albert Einstein, 1955)',
'64A viola “Felice colui che riconosce in tempo che i suoi desideri non vanno d\'accordo con le sue disponibilità.”(Goethe)',
'90A rosa “Quello che trasforma la vita in una benedizione non è fare ciò che ci piace, ma farci piacere ciò che facciamo.”(Goethe)',
'113A blu “Se vuoi una vita felice devi dedicarla a un obiettivo, non a delle persone o a delle cose.”(Albert Einstein)',
'60A arancione La vita non è aspettare che passi la tempesta, ma imparare a ballare sotto la pioggia.(Mahatma Gandhi, 1948)',
'28A viola Chi vive, quando vive, non si vede: vive. Se uno può vedere la propria vita, è segno che non la sta vivendo più: la subisce, la trascina.(Luigi Pirandello, 1936)',
'41A rosso La vita è troppo breve per sprecarla a realizzare i sogni degli altri.(Oscar Wilde)',
'87A viola “Noi siamo artefici della vita, ma è anche vero che la vita stessa è artefice di noi stessi.”(David Bowie, 2016)',
'105A rosa “Il successo non è la chiave della felicità. La felicità è la chiave del successo, se ami ciò che stai facendo, avrai successo.”(Albert Schweitzer)',
'108A blu “Dicono che il denaro non faccia la felicità, ma se devo piangere preferisco farlo sul sedile posteriore di una Rolls Royce piuttosto che su quello di una carrozza del metrò.”(Marilyn Monroe)',
'64A viola “Felice colui che riconosce in tempo che i suoi desideri non vanno d\'accordo con le sue disponibilità.”(Goethe)',
'103A viola "Lavoriamo continuamente per dare forma alla nostra vita, ma copiando nostro malgrado, come un disegno, i lineamenti della persona che siamo e non di quella che ci piacerebbe essere."(Marcel Proust, 1922)'
];

////// FELICITA'

const felicità_morte_keywords = [ 'felicità', 'felic', 'content', 'soddisfazion', 'soddisfatt',  'gratificazione', 'gratificat', 'piacer', 'godimento', 'appagament', 'appagat', 'compiacimento', 'compiaciut', 'allegr', 'gioi', 'spensierat', 'gaiezza', 'gaio', 'gaia', 'festosità', 'festos', 'letizia', 'liet', 'beatitudine', 'beat', 'delizi', 'esultanz', 'elegant', 'giubilo', 'estasi', 'visibilio', 'fortuna', 'favorev', 'riuscita', 'ricchezza', 'ricco', 'ricca', 'prosper', 'agiatezza', 'agio', 'florid', 'infelic', 'scontent', 'insoddisfazione', 'insoddisfatt', 'trist', 'malincon', 'perfez', 'delus', 'deludent', 'insufficient', 'inappag', 'malcontent', 'malsoddisfatt', 'frustrat', 'faust', 'favorevol', 'fortuna', 'prosper', 'infelic', 'lietezz', 'beat', 'liet', 'tedio', 'ottemperam', 'compiacim', 'compiaciut', 'vivere bene'];

var felicità_morte_cits = ['102A rosa “La vera felicità non è in fondo a un bicchiere, non è dentro a una siringa: la trovi solo nel cuore di chi ti ama.”(Jim Morrison)',
'107A rosa “La felicità è amore, nient\'altro. Felice è chi sa amare. Amore è ogni moto della nostra anima in cui essa senta se stessa e percepisca la propria vita. Felice è dunque chi è capace di amare molto. Ma amare e desiderare non è la stessa cosa. L\'amore è il desiderio divenuto saggezza; l\'amore non vuole possedere; vuole soltanto amare.”(Hermann Hesse)',
'113A blu “Se vuoi una vita felice devi dedicarla a un obiettivo, non a delle persone o a delle cose.”(Albert Einstein)',
'76A Rosa “La suprema felicità della vita è essere amati per quello che si è, o meglio, essere amati a dispetto di quello che si è.”(Victor Hugo)',
'75A viola “Esistono due modi per essere felici in questa vita, uno è di diventare un idiota e l\'altro è di esserlo.”(Sigmund Freud, 1939)'
];

////// CASI LIMITE

const casi_limite_morte_keywords = ['crepare', 'crepat', 'creper', 'crepo', 'crepi', 'crepa', 'crepiamo', 'crepate', 'crepano', 'andare all\'altro mondo', 'vado all\'altro mondo', 'vai all\'altro mondo', 'va all\'altro mondo', 'andiamo all\'altro mondo', 'andate all\'altro mondo', 'vanno all\'altro mondo', 'andrò all\'altro mondo', 'andrai all\'altro mondo', 'andrà all\'altro mondo', 'andremo all\'altro mondo', 'andrete all\'altro mondo', 'andranno all\'altro mondo', 'andato all\'altro mondo', 'andata all\'altro mondo', 'andate all\'altro mondo', 'andati all\'altro mondo', 'schiattar', 'schiatt', 'tiro le cuoia', 'tirerò le cuoia', 'tirato le cuoia', 'tirare le cuoia', 'stecchit', 'stecchire', 'accoppare', 'trucid', 'fare fuori', 'faccio fuori', 'fai fuori', 'fa fuori', 'facciamo fuori', 'fate fuori', 'fanno fuori', 'farò fuori', 'farai fuori', 'farà fuori', 'sopprim', 'delitt', 'andare al creatore', 'andrò al creatore', 'andare dal creatore', 'andrò dal creatore',
'vai dal creatore', 'vai al creatore', 'vai all\'altro mondo', 'schiatta', 'andremo dal creatore', 'andremo al creatore'];

var casi_limite_morte_cits = ['7A Viola La morte è un’usanza che tutti, prima o poi, dobbiamo rispettare.Jorge Louis Borges'];



//////// TERRORISMO

const terrorismo_keywords = ['terrorismo', 'terroristic', 'eversione', 'sovversiv', 'massa', 'genocid'];

////// POVERO RICCO

const  povero_ricco_keywords = ['giovan', 'giovin', 'pover', 'solo', 'sola', 'soli', 'solitud', 'bisognos', 'indigen', 'malagiat', 'miser', 'abbient','umil', 'al verde', 'squattrinat', 'quattrin', 'sul lastrico', 'abbient', 'agiat', 'benestant', 'provvist', 'ricco', 'danaros', 'facoltos', 'opulent', 'prosper', 'modest', 'squallid', 'spogli', 'luss', 'opulent', 'ricc', 'regal', 'sfarz', 'sontuos', 'splendid', 'caren', 'scars', 'sfornit', 'sprovvist', 'abbondan', 'fornit', 'disadorn', 'minimalist', 'scarno', 'ornat', 'prezios', 'ricercat', 'ridott', 'stentat', 'nullatenent', 'disgraziat', 'morto di fame', 'pezz', 'pitocc', 'poveracc', 'straccion', 'accatton', 'barbon', 'mendicant', 'mendic', 'miliardar', 'milionar', 'isolament', 'isolat', 'compagnia', 'soling', 'abbandonat', 'abbandon', 'cerimonia funebr', 'esequie', 'estreme onoranze', 'estremi onori', 'estremo saluto', 'funeral', 'cimiter', 'sepoltur', 'sepolt', 'seppellir', 'tomba', 'fiori', 'divertiment', 'lapid', 'sepolcr', 'tumul', 'fossa', 'fosse', 'fornett', 'locul', 'mausole', 'sotto terra', 'inumare', 'sotterr', 'tumul', 'inciner','cremar', 'cremaz', 'cremat', 'urna', 'urne', 'bara'];

var povero_ricco_cits = ['42A Rosso Perché temi il tuo ultimo giorno? Esso non contribuisce alla tua morte più di ciascuno degli altri.(Michel de Montaigne)',
'87A viola “Noi siamo artefici della vita, ma è anche vero che la vita stessa è artefice di noi stessi.”(David Bowie, 2016)',
'70succ rosa Il preoccuparsi non ruba mai al domani il suo dispiacere, priva soltanto l\'oggi della sua gioia.Leo Buscaglia (rosa)',
'2fut azzurro Non lasciare che il futuro ti disturbi. Lo incontrerai, se necessario, con le stesse armi della ragione che oggi ti armano contro il presente.Marco Aurelio (azzurro)',
'7fut azzurro Ogni uomo deve avere ragione nel decidere il proprio destino.Bob Marley (azzurro)',
'11fut azzurro Chi controlla il presente, controlla il passato. Chi controlla il passato, controlla il futuro.George Orwell (azzurro)',
'18fut È una meraviglia ignorare il futuro.Marguerite Duras (arancione)',
'22fut azzurro Il futuro influenza il presente tanto quanto il passato.Friedrich Nietzsche (azzurro)',
'40A Rosso Spero davvero che quando morirò qualcuno abbia abbastanza buon senso da gettarmi nel fiume o qualcosa di simile. Qualsiasi cosa meno che piazzarmi in un maledetto cimitero. Gente che arriva e ti mette un mazzo di fiori sul tuo stomaco alla domenica e tutta quella porcheria. Chi vuole dei fiori quando è morto? Nessuno.(J.D. Salinger)'
];

///// MORTE TECNOLOGIA

const  morte_tecnologia_keywords = ['umanit', 'morte collettiva', 'tecnolog', 'AI', 'intelligenza artificiale', 'macchina', 'conquisterà l\'umanit', 'macchine', 'robot', 'dataismo', 'dati', 'pythia', 'oracolo digitale', 'somma coscienza'];

var morte_tecnologia_cits = ['88A) L\'Intelligenza Artificiale sarà la più importante conquista dell\'uomo, peccato che potrebbe essere l\'ultima.(Stephen Hawking) (Rosso)'];


/////////////////////////////////////////////////////////////////////////////////// ETICA E MORALE

////// CAMBIAMETO

const cambiamento_keywords = ['moral', 'comportament', 'condotta', 'principi', 'pens', 'opinion', 'etic', 'uman', 'spiegaz', 'scienz', 'a livello morale'];

var cambiamento_cits = ['1eti) “In etica come in altri campi del pensiero umano ci sono due tipi di opinioni: da una parte quelle rette sulla tradizione, dall\'altra quelle che hanno qualche probabilità di essere giuste.”[Bertrand Russell]',
'2eti) Il mondo così come l’abbiamo creato è un risultato del nostro pensiero. Non possiamo cambiarlo se non cambiamo il nostro modo di pensare [Albert Einstein] arancio',
'8eti) “E\' la moralità a rendere umani gli uomini.” [Shimon Peres] rosa',
'9eti) “Non esistono fenomeni morali, ma solamente una spiegazione morale dei fenomeni.” [Friedrich Wilhelm Nietzsche] azzzurro',
'10eti)“Forse l\'etica è una scienza scomparsa dal mondo intero. Non fa niente, dovremo inventarla un\'altra volta.”[Jorge Luis Borges] viola'
];

////// ETICA E RELIGIONE

const etica_religio_keywords = ['religio', 'fede', 'valor', 'morte', 'creder', 'laic', 'credenz', 'cred', 'educaz', 'aldilà', 'culto', 'mistic', 'venera', 'adora', 'venero', 'adoro', 'devoz', 'aldilà', 'Gesù', 'Cristo', 'Madonna', 'allah akbar', 'allah akhbar', 'akhbar', 'islam', 'maometto', 'cattolic', 'ortodoss', 'musulman', 'ateo', 'atei', 'ateismo', 'monoteis', 'politeis', 'profess', 'messa', 'rito religioso', 'riti religiosi', 'educaz', 'punizion', 'post morte', 'post mortem', 'dopo la morte', 'Dio', 'buddha', 'rastafar', 'reincarn'];

var etica_religio_cits = ['3eti) “Il male assoluto del nostro tempo è di non credere nei valori. Non ha importanza che siano religiosi oppure laici. I giovani devono credere in qualcosa di positivo e la vita merita di essere vissuta solo se crediamo nei valori, perché questi rimangono anche dopo la nostra morte.” [Rita Levi Montalcini] viola',
'4eti) “L’etica di un non credente è piú pura e disinteressata di quella di un credente che si comporta bene perché spera nella ricompensa e teme la punizione nell’aldilà.”  [Margherita Hack] azzurro',
'5eti) “Il comportamento etico di un uomo dovrebbe essere effettivamente basato sulla simpatia, educazione e legami sociali; non è necessaria alcuna base religiosa. L’uomo sarebbe davvero messo male se dovesse essere trattenuto dalla paura della punizione e dalla speranza di una ricompensa dopo la morte.” [Albert Einstein] rosa'
];

////// QUANTO VALGO?

const quanto_valgo_keywords = ['valer', 'valg', 'import', 'considera', 'pensano di me', 'ritener', 'chi sono', 'essere me stesso', 'essere me stessa', 'me stesso', 'me stessa'];

var quanto_valgo_cits = ['6eti) “Ognuno vale quanto le cose a cui da importanza.” [Marco Aurelio] azzurro',
'7eti) “Il valore di una persona dipende dal numero di cose delle quali si vergogna.” [George Bernard Shaw]  rosa'
];

////// ETICA ECONOMIA

const etica_economia_keywords = ['economi', 'sistem', 'gestione'];

var etica_economia_cits = ['11eti)“Non puoi fare una buona economia con una cattiva etica.” [Ezra Pound] azzurro'];

////// ETICA POLITICA

const etica_politica_keywords = ['politic', 'govern', 'comand', 'cariche', 'incaric'];

var etica_politica_cits = ['12eti) “Il livello di allarme si raggiunge quando lo scadimento etico della politica non è neppure più percepito come dannoso.” [Carlo Maria Martini] viola'];

////// ETICA CULTURA

const etica_cultura_keywords = ['cultur', 'colt', 'intellettual', 'conoscere', 'il sapere', 'sapienza', 'studi'];

var etica_cultura_cits = ['13eti)“Chi ha cari i valori della cultura non può non essere pacifista.” [Albert Einstein] verde',
'14eti) “Gli intellettuali sono persone che credono che le idee siano più importanti dei valori. Vale a dire, le loro proprie idee e i valori degli altri.”[Gerald Brenan] rosso'
];

////// ABORTO

const etica_morale_aborto_keywords = ['abort', 'interruzione di gravidanza', 'incint', 'rimanere incinta', 'rimanere incinto', 'rimanere incinti', 'rimanere incinte', 'essere incinta', 'essere incinto', 'essere incinti', 'incint',
'madr', 'mamm', 'figl', 'nasc', 'venir alla luce', 'venire alla luce', 'partorir', 'uccid', 'mese', 'mesi', 'pancia', 'stato di attesa', 'attendo', 'attende', 'bambin', 'feto', 'feti', 'infanticid', 'neonat', 'bebè', 'lattant', 'embrion', 'pargol'];

var etica_morale_aborto_cits = ['15eti) “Se gli uomini potessero restare incinti, l\'aborto diventerebbe un sacramento.” [Flo Kennedy] rosso',
'16eti) “Come mai quando si tratta di noi, è un aborto, e quando si tratta di polli, è un\'omelette?” [George Carlin] rosa',
'17eti) “L\'abolizione del diritto di abortire per una donna, quando e se lo vuole, equivale a una maternità obbligatoria, una forma di stupro da parte dello Stato.” [Edward Abbey] rosa',
'18eti) “I cattolici, e lo ero anch\'io finché non ho raggiunto l\'età della ragione, i cattolici e altri cristiani sono contro l\'aborto e sono contro gli omosessuali. Ma chi ha meno aborti degli omosessuali?”[George Carlin] azzurro',
'19eti) “L\'aborto è il più grande distruttore della pace perché, se una madre può uccidere il suo stesso figlio, cosa impedisce che io uccida te e tu uccida me? Non c\'è più nessun ostacolo.”[Madre Teresa di Calcutta] viola',
'20eti)  “L\'aborto viene sostenuto solo da persone che sono nate esse stesse.” [Ronald Reagan] azzurro'
];

/////// EUTANASIA

const etica_morale_eutanasia_keywords = ['eutanas', 'dolce morte', 'suicidio assistito', 'ospedale', 'fin di vita', 'malato terminale', 'malati terminali', 'malat', 'guarig', 'morte', 'morir', 'star male', 'stare male', 'soffrir', 'mettere fine', 'metter fine', 'suicid', 'vita', 'vivere', 'viv', 'morente', 'muoio', 'muori', 'muor', 'moriv', 'moriamo', 'morite', 'muoiono', 'porre fine', 'scegliere di morire'];

var etica_morale_eutanasia_cits = ['21eti) “Proprio come sceglierò la mia nave quando mi accingerò ad un viaggio, o la mia casa quando intenderò prendere una residenza, così sceglierò la mia morte quando mi accingerò ad abbandonare la vita.” [Lucio Anneo Seneca] viola',
'22eti) “Non sempre la vita va conservata: il bene non consiste nel vivere, ma nel vivere bene.”  [Lucio Anneo Seneca] rosa',
'23eti) “Io ho il diritto di scegliere la mia morte per il bene degli altri.” [Umberto Eco] verde',
'24eti)  Nessuno vive perché lo vuole. Ma una volta che vive lo deve volere. (Ernst Bloch) viola',
'25eti) “Siamo di fronte a uno dei sintomi più allarmanti della «cultura di morte», che avanza soprattutto nelle società del benessere, caratterizzate da una mentalità efficientistica che fa apparire troppo oneroso e insopportabile il numero crescente delle persone anziane e debilitate.” [Papa Giovanni Paolo II] rosa'
];

/////// OMOSESSUALE

const etica_omosessuale_keywords = ['omosess', 'gay', 'amare un altro uomo', 'lesbic', 'amare un altra donna', 'froc', 'mentalità chiusa', 'amare alla luce', 'nascondersi', 'giudizio degli altri', 'guardati male', 'guardato male', 'effusioni in pubblico', 'baciar', 'eterosess', 'esprimersi liberamente', 'confessar', 'dichiarar', 'manifestar', 'amme', 'esternar', 'coppie gay', 'coppie gay nei film', 'coppie gay in giro', 'omofob'];

var etica_omosessuale_cits = ['26eti) C\'è un\'associazione in Francia [...] che auspica, per gli omosessuali, l\'abolizione del ridicolo, e il riconoscimento della "parità dei diritti". Forse hanno ragione, chi lo sa. E forse, un giorno, la spunteranno. Ma vedrete, non ci sarà più nessun gusto a peccare di questo peccato. E non dovendo più nascondersi, tutti capiranno che tanto vale amare le donne. (Mario Soldati) azzurro',
'27eti) C\'è un\'ultima cosa che vorrei dire: gli omosessuali non trovano un posto nell\'intera società, che possa dar loro una struttura nella quale collocarsi. Non hanno la struttura del matrimonio, o quella della famiglia. La storia può servire per offrire agli omosessuali quelle strutture che non hanno. (George Mosse) azzurro',
'28eti) Non vorrei un mondo omosessuale. La donna ha una funzione importante. Ama più di chiunque. Ma la dedizione più forte la trovi nell\'uomo. La donna è incostante. (Franco Zeffirelli) azzurro',
'29eti) “Di per se, l’omosessualità è limitante quanto l’eterosessualità: l’ideale sarebbe essere capaci di amare una donna o un uomo; indifferentemente, un essere umano, senza provare paura, limiti, od obblighi.”  (Simone de Beauvior) rosa',
'30eti) Per un gay che si dichiara, ce ne sono dieci che non lo fanno, e cento che non l\'hanno mai confessato a se stessi. Yourcenar, Marguerite viola',
'31eti) Apprezzo più di ogni altro questo piacere più segreto, questo corpo simile al mio che riflette la mia voluttà. (Yourcenar, Marguerite) rosa'
];

/////// VIOLENZA FISICA

const violenza_fisica_keywords = ['picchiar', 'donna', 'donne', 'sesso debole', 'femm', 'ragazz', 'casa', 'marciapied', 'bambina', 'abus', 'prevaricazio', 'sopraffazion', 'violenza carnale', 'stupr', 'violent', 'non consenziente'];

var violenza_fisica_cits = ['32eti) La violenza contro le donne è una delle più vergognose violazioni dei diritti umani.(Kofi Annan) rosso',
'37eti) Il genere umano tende a ricordare gli abusi a cui è stato sottoposto, piuttosto che le tenerezze. Che cosa resta dei baci? Solo le ferite lasciano cicatrici. (Bertolt Brecht) viola'
];

/////// VIOLENZA

const violenza_keywords = ['forza', 'aggress', 'violenz', 'cattiv', 'brutal', 'veeme', 'prepotenz', 'potenz', 'soprus', 'furi', 'impet', 'maltratt'];

var violenza_cits = ['33eti) La violenza è l’ultimo rifugio degli incapaci. (Isaac Asimov) verde',
'34eti) La violenza non è forza ma debolezza, né mai può essere creatrice di cosa alcuna ma soltanto distruggitrice. (Benedetto Croce) azzurro',
'35eti) Ciò che mi spaventa non è la violenza dei cattivi; è l’indifferenza dei buoni.(Martin Luther King) rosso',
'36eti) Le radici della violenza: la ricchezza senza lavoro, il piacere senza coscienza, la conoscenza senza carattere, il commercio senza etica, la scienza senza umanità, il culto senza sacrificio, la politica senza principi. (Mahatma Gandhi) rosa'
]

//////// ABUSI DI POTERE

const abuso_potere_keywords = ['eccesso', 'smodatezz', 'uso smodato', 'illecito', 'disordin', 'scandal', 'prepotenz', 'media', 'social', 'tv', 'televisione', 'telegiornale', 'deputat', 'president', 'capo', 'prendere la decisione', 'prendere le decisioni', 'discorso', 'carismatic', 'convincer', 'abuso di potere', 'abuso di poteri'];

var abuso_potere_cits = ['38eti) Usate, non abusate… né l’astinenza né l’eccesso hanno mai reso l’uomo felice. (Voltaire) verde',
'39eti) Abbiamo bisogno della libertà per evitare gli abusi del potere dello Stato e abbiamo bisogno dello Stato per evitare l’abuso della libertà (Karl Popper) rosso',
'40eti) “I media sono un giocattolo in mano ai ricchi. E i ricchi lo usano per diventare ancora più ricchi.”  Ryszard Kapuscinski rosso'
];

//////// ABUSO DROGA

const abuso_droga_keywords = ['tossic', 'eroin', 'erba', 'drog', 'vizi', 'illegal', 'dipendenz', 'marijuana', 'maria', 'gangia', 'stupefacenti', 'bere', 'bev', 'alcool', 'alcolici', 'vino', 'vini', 'liquor', 'fumo', 'fumi', 'fuma', 'sigarett'];

var abuso_droga_cits = ['41eti) L’abuso della droga non è una malattia, ma una decisione, come quella di andare incontro ad una macchina che si muove. Questo non si chiama malattia, ma mancanza di giudizio.(Philip K. Dick) viola',
'53eti) Se decidi di smettere di bere, fumare e fare l’amore, non è che vivi più a lungo: la vita ti sembra più lunga. (Clement Freud) verde',
'54eti) Bevo soltanto per far sembrare gli altri più interessanti. (George Jean Nathan) rosa'
];

//////// RAZZISMO

const razzismo_keywords = ['bianc', 'ner',  'negr', 'cines', 'razz', 'discrimin', 'segreg', 'apartheid', 'intolleranz', 'pregiudizi', 'tradiz', 'immigr', 'altre culture', 'culture diverse', 'insult', 'cori razzisti', 'coro razzista', 'venire da', 'proven', 'color', 'essere diver', 'xenof'];

var razzismo_cits = ['42eti) “Se dici la tua sul Vaticano, sulla Chiesa Cattolica, sui Papa, sulla Madonna, su Gesù, sui Santi, non ti succede nulla. Ma se fai lo stesso con l\'Islam, col Corano, con Maometto, coi figli di Allah, diventi razzista e xenofobo e blasfemo e compi una discriminazione razziale.” (Oriana Fallaci) azzurro',
'43eti) “Ci sono state occasioni nelle quali l’aggressione fisica non è stata così grave quanto l’oppressione psicologica sofferta dalla popolazione nera durante l’apartheid. È una tortura psicologica impossibile da descrivere a parole.” (Nelson Mandela) viola',
'44eti) “Se dovessimo svegliarci una mattina e scoprire che tutti sono della stessa razza, credo e colore, troveremmo qualche altra causa di pregiudizio entro mezzogiorno.” (George David Aiken) rosa',
'45eti) “Dicono ai bambini che Gesù era bianco, così come gli apostoli e gli angeli. Il posto in cui vive il presidente si chiama Casa Bianca. Perfino Tarzan è bianco. Ma come? Bianco uno nato e cresciuto nella giungla?” (muhammad ali) arancio',
'46eti) “La degradazione della razza e del sangue è il peccato mortale di questo mondo e la fine dell\'umanità che vi si abbandoni.” (Adolf Hitler) rosso',
'47eti) “Preferirei essere negro piuttosto che gay. Perché se sei negro non lo devi dire a tua madre.” (Charles Pierce) azzurro'
];

//////// BELLEZZA

const bellezza_keywords = ['bellezza', 'bell', 'estetic', 'esteta', 'fascin', 'attraz', 'corp', 'aspetto fisico'];

var bellezza_cits = ['48eti)  “L\'estetica è madre dell\'etica.”[Joseph Brodsky] verde'];

//////// VEGETARIANI

const vegetariani_keywords = ['vegetarian', 'vegetal', 'vegan', 'aliment', 'cibo', 'salute', 'salutis', 'trattarsi bene', 'trattarmi bene', 'tratto bene', 'cibar', 'sonnolenz', 'digerir', 'digestion'];

var vegetariani_cits = ['49eti)“Sono diventato vegetariano per ragioni etiche, oltre che salutistiche. A parer mio, la scelta di vita vegetariana, anche solo per i suoi effetti fisici sul temperamento umano, avrebbe un\'influenza estremamente benefica sulla maggior parte dell\'umanità.” [Albert Einstein] arancio'];

/////// PRIVACY

const privacy_keywords = ['privacy', 'anonimato', 'anonim', 'raccolta dati', 'trattamento della privacy', 'gdpr', 'in pubblico', 'privato', 'trattamento dei dati', 'trattamento dei miei dati', 'trattamento dei tuoi dati', 'trattamento dati', 'dati', 'cookie', 'cookies', 'informativ'];

var privacy_cits = ['50eti) “La privacy è talvolta collegata all’anonimato, al desiderio di passare inosservati e non farsi riconoscere in pubblico. Solitamente, quando si considera «privato» qualcosa, è perché ciò ha per noi un’importanza intrinsecamente speciale, o ci tocca personalmente.” zygmunt bauman rosa',
'51eti) Se dopo la mia morte volessero scrivere la mia biografia, non c’è niente di più semplice. Ci sono solo due date – quella della mia nascita e quella della mia morte. Tutti i giorni fra l’una e l’altra sono miei. (Fernando Pessoa) verde',
'52eti) L’undicesimo comandamento – non farti scoprire – è l’unico a essere praticamente impossibile da rispettare in questi tempi. (Berthe Henry Buxton) viola'
];

///////////////////////////////////////////////////////////////////////////////////
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
