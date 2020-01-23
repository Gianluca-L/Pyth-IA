// Example 5 - Receive with start- and end-markers combined with parsing
#include <FastLED.h>

// How many leds in your strip?
#define NUM_LEDS 144



const byte numChars = 32;
char receivedChars[numChars];
char tempChars[numChars];        // temporary array for use when parsing

// variables to hold the parsed data
//char boh[numChars] = {0};
char a, b;
int Volume = 0;
//float floatFromPC = 0.0;
int Color = 0;

int inByte = 0;
int lastRead = 0;
int lastColor;

boolean newData = false;

#define DATA_PIN 6

// Define the array of leds
CRGB leds[NUM_LEDS];

//============

void setup() {
  Serial.begin(9600);
  Serial.println("This demo expects 3 pieces of data - text, an integer and a floating point value");
  Serial.println("Enter data in this style <HelloWorld, 12, 24.7>  ");
  Serial.println();

  FastLED.addLeds<WS2812B, DATA_PIN, GRB>(leds, NUM_LEDS);
}

//============ PER ANIMAZIONI

unsigned long previousTime = 0;
int switchState = 0;
long interval = 5000;



//==============

void loop() {
  recvWithStartEndMarkers();
  if (newData == true) {
    strcpy(tempChars, receivedChars);
    // this temporary copy is necessary to protect the original data
    //   because strtok() used in parseData() replaces the commas with \0
    parseData();
    Serial.write(Color);
    //showParsedData();
    newData = false;

    // BASE  ( 255, 140, 39)
    // rosso pieno RABBIA          | 1
    // arancio (255, 25, 0) ENTUSIASMO  | 2
    // verde ( 0, 200, 0) CALMA, FIDUCIA, SPERANZA | 3
    // azzurro ( 0, 35, 200) RAZIONALITA PRAGMATICITA  | 4
    // viola ( 160, 0, 200) MALINCONIA TRISTEZZA  | 5
    // rosa( 230, 51, 112) COMMOZIONE SENTIMENTO  | 6

    if (lastColor != Color) {
      if (Color == 0) {
        /*for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB ( 255, 140, 39);
          //leds[i] = CRGB ( 210, 210, 210);
          }*/
        setAll(255, 140, 39);
      }
      else if (Color == 1) {
        for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB ( 255, 0, 0);
        }
      }
      else if (Color == 2) {
        for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB (255, 25, 0);
        }
      }
      else if (Color == 3) {
        for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB (0, 200, 0);
        }
      }
      else if (Color == 4) {
        for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB (0, 35, 200);
        }
      }
      else if (Color == 5) {
        for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB (160, 0, 200);
        }
      }
      else if (Color == 6) {
        for (int i = 0; i <= 143; i++) {
          leds[i] = CRGB (230, 51, 112);
        }
      }
      else if (Color == 8) {
//                for (int i = 0; i <= 143; i++) {
//          leds[i] = CRGB ( 255, 0, 0);
//        }
        colorWipe(255, 0, 0, 10);
        colorWipe(0x00, 0x00, 0x00, 10);
      }
      //      else if (Color == 7) {
      //      }
    }


    else {
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




    /*else if (Color == 8) {

      for (int i = 0; i <= 143; i++) {
        FastLED.setBrightness(200);
        leds[i] = CRGB ( 255, 140, 39);
        FastLED.show();
        FastLED.delay(30);
      }
      }*/


    //  == == == == == == == == == == == == == =


    lastColor = Color;
    lastRead = inByte;
  }
  //RGBLoop();
}

//=================================================================================== PARSING

void recvWithStartEndMarkers() {
  static boolean recvInProgress = false;
  static byte ndx = 0;
  char startMarker = '<';
  char endMarker = '>';
  char rc;

  while (Serial.available() > 0 && newData == false) {
    rc = Serial.read();

    if (recvInProgress == true) {
      if (rc != endMarker) {
        receivedChars[ndx] = rc;
        ndx++;
        if (ndx >= numChars) {
          ndx = numChars - 1;
        }
      }
      else {
        receivedChars[ndx] = '\0'; // terminate the string
        recvInProgress = false;
        ndx = 0;
        newData = true;
      }
    }

    else if (rc == startMarker) {
      recvInProgress = true;
    }
  }
}

//============

void parseData() {      // split the data into its parts

  char * strtokIndx; // this is used by strtok() as an index

  /*strtokIndx = strtok(tempChars, ",");     // get the first part - the string
    strcpy(boh, strtokIndx);*/ // copy it to messageFromPC

  strtokIndx = strtok(tempChars, ","); // this continues where the previous call left off
  Color = atoi(strtokIndx);     // convert this part to an integer


  strtokIndx = strtok(NULL, ",");
  Volume = atoi(strtokIndx);   // convert this part to a float
  inByte = map(Volume, 0, 255, 10, 200);

}

//=====================================================================  ANIMAZIONI

int colorHex = 0;

void setPixel(int Pixel, byte red, byte green, byte blue) {
  leds[Pixel].r = red;
  leds[Pixel].g = green;
  leds[Pixel].b = blue;
}

void setAll2(byte red, byte green, byte blue) {
  for (int i = 0; i < NUM_LEDS; i++ ) {
    setPixel(i, red, green, blue);
  }
  FastLED.show();
}

void setAll(byte red, byte green, byte blue) {
  for (int i = 0; i < NUM_LEDS; i++ ) {
    leds[i] = CRGB (red, green, blue);
  }
  FastLED.show();
}

//////////////////// LOADING

void colorWipe(byte red, byte green, byte blue, int SpeedDelay) {
  for (uint16_t i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB (red, green, blue);
    FastLED.show();
    //delay(SpeedDelay);
  }
}

/////////////////// PRIMA ANIMAZIONE

void RGBLoop() {
  setAll(255, 0, 0);  //rosso
  FastLED.show();
  // Fade IN
  //  for (int k = 0; k < 256; k += 4) {
  //    setAll(255, 0, 0);  //rosso
  //    FastLED.setBrightness(k);
  //    FastLED.show();
  //    delay(10);
  //  }
  //  // Fade OUT
  //  for (int k = 255; k >= 0; k -= 4) {
  //    setAll(255, 0, 0);  //rosso
  //    FastLED.setBrightness(k);
  //    FastLED.show();
  //    delay(10);
  //  }
}

//////////////////// RANDOM BLINK

void randomBlink(boolean Fade) {
  int width = 30;
  int StartPoint  = random( 0, NUM_LEDS - width);
  for (int i = 0; i < width; i++) {
    leds[StartPoint + i] = CRGB (255, 140, 39);
  }
  if (Fade == false) {
    FastLED.setBrightness(255);
    FastLED.show();
    delay(1000);
  }
  else {
    for (int k = 0; k < 256; k += 1) {
      FastLED.setBrightness(k);
      FastLED.show();
    }

    for (int k = 255; k >= 0; k -= 1) {
      FastLED.setBrightness(k);
      FastLED.show();
    }
  }
  setAll(0, 0, 0);

  delay(1000);
}
