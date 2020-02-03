#include <FastLED.h>
#define NUM_LEDS 144
#define DATA_PIN 6

CRGB leds[NUM_LEDS];

const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];        // temporary array for use when parsing

int Volume = 0;
int inColor_State = 0;
  int carica;

int inByte = 0;
int lastRead = 0;
int last_inColor_State;
int check_inColor_State[4];
int index = 0;
int lumi = 0;

boolean newData = false;
boolean spegni = false;

char var;


void setup() {
  Serial.begin(9600);
  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
}


void loop() {
  recvWithStartEndMarkers();

  if (newData == true) {
    strcpy(tempChars, receivedChars);
    // this temporary copy is necessary to protect the original data
    //   because strtok() used in parseData() replaces the commas with \0
    parseData();
    //showParsedData();
    newData = false;

    //Serial.write(inColor_State);
    //    Serial.print("State: ");
    //Serial.println(inColor_State);
    //Serial.print("Vol: ");
    //Serial.println(inByte);
  Serial.write(carica);

  }

  // ho cambiato i valori per farlo corrispondere allo stato di standby e caricamneto del mio codice, a lato ci sono quelli che avevi messo tu
  if (inColor_State == 7) { // 0
    var = 'a';
  }
  else if (inColor_State == 8) { // 7
    var = 'b';
  }
  else {
    setLed_Color();
    var = 'c';
  }

  switch (var) {
    case 'a':
      //Serial.println("standby");
      standby();
      break;

    case 'b':
      caricamento();
      break;

    case 'c':
    carica=0;
      //Serial.println("parla");
      parla();
      break;

    default:
      break;
  }

}

void standby() {
if(lumi>762){
  spegni=true;
}
else if(lumi==0){
  spegni = false;
}

if(spegni){
  lumi=lumi-2;
}
else{lumi=lumi+2;}
  
    FastLED.setBrightness(lumi/6);
    FastLED.show();

}


void caricamento() {
while(carica<2){
colorWipe(230, 140, 39, 7);
colorWipe(0x00, 0x00, 0x00, 7);
carica++;
}

}

void setLed_Color() {
  if (inColor_State == 1) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB ( 255, 0, 0);
    }
  }
  else if (inColor_State == 2) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (255, 25, 0);
    }
  }
  else if (inColor_State == 3) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (0, 200, 0);
    }
  }
  else if (inColor_State == 4) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (0, 35, 200);
    }
  }
  else if (inColor_State == 5) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (160, 0, 200);
    }
  }
  else if (inColor_State == 6) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (230, 51, 112);
    }
  }
    else if (inColor_State == 7) {
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (0, 0, 0);
    }
  }
  /////////////////////////////////////// dato che ho cambiato le variabili dello switch, ho dovuto mettere un for qui altrimenti non dava il colore base quando il colore = 0
  else {  
    for (int i = 0; i < NUM_LEDS; i++) {
      leds[i] = CRGB (230, 140, 39); // base
           // leds[i] = CRGB (255, 255, 255); // base

    }
  };
}


void colorWipe(byte red, byte green, byte blue, int SpeedDelay) {
  for (uint16_t i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }
}

void parla() {
  if (inByte > lastRead) {
    for (int i = lastRead; i <= inByte; i += 6) {  // i += 6
      FastLED.setBrightness(i);
      FastLED.show();
    }
  }

  else {
    for (int i = lastRead; i >= inByte; i -= 6) {  // i -= 6
      FastLED.setBrightness(i);
      FastLED.show();
    }
  }
  lastRead = inByte;
}
