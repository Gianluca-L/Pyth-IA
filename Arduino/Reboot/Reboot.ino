#include <FastLED.h>
#define NUM_LEDS 144
#define DATA_PIN 6

CRGB leds[NUM_LEDS];

const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];        // temporary array for use when parsing

int Volume = 0;
int Color = 0;

int inByte = 0;
int lastRead = 0;
int lastColor;

boolean newData = false;

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
    Serial.write(Color);
    //showParsedData();
    newData = false;}

  switch (var) {

    case 'a':
    
      //standby
      break;
    case 'b':
      //default
      break;
    case 'c':
      //risposta
      break;
    case 'd':
      //caricamento
      break;
    default:
      break;
  }

}

void setColor(){
  if (Color == 0) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB (255, 140, 39);
        }
      }
      else if (Color == 1) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB ( 255, 0, 0);
        }
      }
      else if (Color == 2) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB (255, 25, 0);
        }
      }
      else if (Color == 3) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB (0, 200, 0);
        }
      }
      else if (Color == 4) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB (0, 35, 200);
        }
      }
      else if (Color == 5) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB (160, 0, 200);
        }
      }
      else if (Color == 6) {
        for (int i = 0; i < NUM_LEDS; i++) {
          leds[i] = CRGB (230, 51, 112);
        }
  }}


  void voce(){
          if (inByte > lastRead) {
        for (int i = lastRead; i <= inByte; i += 9) {  // i += 6
          FastLED.setBrightness(i);
          FastLED.show();
        }
      }
      else {
        for (int i = lastRead; i >= inByte; i -= 9) {  // i -= 6
          FastLED.setBrightness(i);
          FastLED.show();

        }
      }
      }
