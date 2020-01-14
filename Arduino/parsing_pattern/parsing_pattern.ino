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

//==============

void loop() {
  recvWithStartEndMarkers();
  if (newData == true) {
    strcpy(tempChars, receivedChars);
    // this temporary copy is necessary to protect the original data
    //   because strtok() used in parseData() replaces the commas with \0
    parseData();
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
      else if (Color == 7) {
        unsigned long currentTime = millis();
        if (currentTime - previousTime > interval) {
          previousTime = currentTime;
          switchState++;
        }
        if (switchState == 4) {
          switchState = 0;
        }
        switch (switchState) {
          case 0: RGBLoop(); break;
          case 1: CylonBounce(255, 140, 39, 15, 10, 50); break;
          case 2: NewKITT(0, 0, 0, 15, 10, 50); break;
          case 3: rainbowCycle(5); break;
        }
      }
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


//////////////////// LOADING

void colorWipe(byte red, byte green, byte blue, int SpeedDelay) {
  for (uint16_t i = 0; i < NUM_LEDS; i++) {
    leds[i] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }
}

/////////////////// PRIMA ANIMAZIONE 

void RGBLoop() {
  for (int j = 0; j < 6; j++ ) {
    // Fade IN
    for (int k = 0; k < 256; k += 4) {
      FastLED.setBrightness(k);
      switch (j) {
        case 0: setAll(255, 0, 0); break; //rosso
        case 1: setAll(255, 25, 0); break; // arancio
        case 2: setAll(0, 200, 0); break;  // verde
        case 3: setAll(0, 35, 200); break;  // azzurro
        case 4: setAll(160, 0, 200); break; // viola
        case 5: setAll(230, 51, 112); break; // rosa
      }
      FastLED.show();
      delay(10);
    }
    // Fade OUT
    for (int k = 255; k >= 0; k -= 4) {
      FastLED.setBrightness(k);
      switch (j) {
        case 0: setAll(255, 0, 0); break; //rosso
        case 1: setAll(255, 25, 0); break; // arancio
        case 2: setAll(0, 200, 0); break;  // verde
        case 3: setAll(0, 35, 200); break;  // azzurro
        case 4: setAll(160, 0, 200); break; // viola
        case 5: setAll(230, 51, 112); break; // rosa
      }
      FastLED.show();
      delay(10);
    }
  }
}

/////////////// CYLON DIVERSI COLORI (SECONDA ANIMAZIONE)

void CylonBounce(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {

  for (int i = 0; i < NUM_LEDS - EyeSize - 2; i++) {
    setAll(0, 0, 0);
    //leds[i] = CRGB (red, green, blue); // primo led del gruppo
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      leds[i + j] = CRGB (255, 0, 0);  // rosso
    }
    //leds[i+EyeSize+1] = CRGB (red, green, blue);  // ultimo led del gruppo
    FastLED.show();
    delay(SpeedDelay);
  }

  delay(ReturnDelay);

  for (int i = NUM_LEDS - EyeSize - 2; i > 0; i--) {
    setAll(0, 0, 0);
    //leds[i] = CRGB (red, green, blue);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      leds[i + j] = CRGB (255, 25, 0);  // arancio
    }
    //leds[i+EyeSize+1] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }

  delay(ReturnDelay);

  for (int i = 0; i < NUM_LEDS - EyeSize - 2; i++) {
    setAll(0, 0, 0);
    //leds[i] = CRGB (red, green, blue);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      leds[i + j] = CRGB (0, 200, 0); // verde
    }
    //leds[i+EyeSize+1] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }

  delay(ReturnDelay);

  for (int i = NUM_LEDS - EyeSize - 2; i > 0; i--) {
    setAll(0, 0, 0);
    //leds[i] = CRGB (red, green, blue);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      leds[i + j] = CRGB (0, 35, 200);  // azzurro
    }
    //leds[i+EyeSize+1] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }

  delay(ReturnDelay);

  for (int i = 0; i < NUM_LEDS - EyeSize - 2; i++) {
    setAll(0, 0, 0);
    //leds[i] = CRGB (red, green, blue);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      leds[i + j] = CRGB (160, 0, 200);  // viola
    }
    //leds[i+EyeSize+1] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }

  delay(ReturnDelay);


  for (int i = NUM_LEDS - EyeSize - 2; i > 0; i--) {
    setAll(0, 0, 0);
    //leds[i] = CRGB (red, green, blue);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      leds[i + j] = CRGB (230, 51, 112);  // rosa
    }
    //leds[i+EyeSize+1] = CRGB (red, green, blue);
    FastLED.show();
    delay(SpeedDelay);
  }

  delay(ReturnDelay);
}


////////////////////////////// TERZA ANIMAZIONE 


void NewKITT(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  colorHex = random(0, 6);
  OutsideToCenter(red, green, blue, EyeSize, SpeedDelay, ReturnDelay);
  CenterToOutside(red, green, blue, EyeSize, SpeedDelay, ReturnDelay);
  RightToLeft(red, green, blue, EyeSize, SpeedDelay, ReturnDelay);
  colorHex = random(0, 6);
  OutsideToCenter(red, green, blue, EyeSize, SpeedDelay, ReturnDelay);
  CenterToOutside(red, green, blue, EyeSize, SpeedDelay, ReturnDelay);
  LeftToRight(red, green, blue, EyeSize, SpeedDelay, ReturnDelay);
}

void CenterToOutside(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  for (int i = ((NUM_LEDS - EyeSize) / 2); i >= 0; i--) {
    setAll(0, 0, 0);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      if (colorHex == 0) {
        leds[i + j] = CRGB (255, 0, 0);  // rosso
      }
      else if (colorHex == 1) {
        leds[i + j] = CRGB (255, 25, 0);  // arancio
      }
      else if (colorHex == 2) {
        leds[i + j] = CRGB (0, 200, 0);  // verde
      }
      else if (colorHex == 3) {
        leds[i + j] = CRGB (0, 35, 200);  // azzurro
      }
      else if (colorHex == 4) {
        leds[i + j] = CRGB (160, 0, 200);  // viola
      }
      else if (colorHex == 5) {
        leds[i + j] = CRGB (230, 51, 112);  // rosa
      }
    }

    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      //leds[NUM_LEDS - i - j] = CRGB (0, 35, 200);  // azzurro
      if (colorHex == 0) {
        leds[NUM_LEDS - i - j] = CRGB (255, 0, 0);  // rosso
      }
      else if (colorHex == 1) {
        leds[NUM_LEDS - i - j] = CRGB (255, 25, 0);  // arancio
      }
      else if (colorHex == 2) {
        leds[NUM_LEDS - i - j] = CRGB (0, 200, 0);  // verde
      }
      else if (colorHex == 3) {
        leds[NUM_LEDS - i - j] = CRGB (0, 35, 200);  // azzurro
      }
      else if (colorHex == 4) {
        leds[NUM_LEDS - i - j] = CRGB (160, 0, 200);  // viola
      }
      else if (colorHex == 5) {
        leds[NUM_LEDS - i - j] = CRGB (230, 51, 112);  // rosa
      }
    }

    FastLED.show();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
}

void OutsideToCenter(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  for (int i = 0; i <= ((NUM_LEDS - EyeSize) / 2); i++) {
    setAll(0, 0, 0);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      //leds[i + j] = CRGB (0, 35, 200);  // azzurro
      if (colorHex == 0) {
        leds[i + j] = CRGB (255, 0, 0);  // rosso
      }
      else if (colorHex == 1) {
        leds[i + j] = CRGB (255, 25, 0);  // arancio
      }
      else if (colorHex == 2) {
        leds[i + j] = CRGB (0, 200, 0);  // verde
      }
      else if (colorHex == 3) {
        leds[i + j] = CRGB (0, 35, 200);  // azzurro
      }
      else if (colorHex == 4) {
        leds[i + j] = CRGB (160, 0, 200);  // viola
      }
      else if (colorHex == 5) {
        leds[i + j] = CRGB (230, 51, 112);  // rosa
      }
    }
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      //leds[NUM_LEDS - i - j] = CRGB (0, 35, 200);  // azzurro
      if (colorHex == 0) {
        leds[NUM_LEDS - i - j] = CRGB (255, 0, 0);  // rosso
      }
      else if (colorHex == 1) {
        leds[NUM_LEDS - i - j] = CRGB (255, 25, 0);  // arancio
      }
      else if (colorHex == 2) {
        leds[NUM_LEDS - i - j] = CRGB (0, 200, 0);  // verde
      }
      else if (colorHex == 3) {
        leds[NUM_LEDS - i - j] = CRGB (0, 35, 200);  // azzurro
      }
      else if (colorHex == 4) {
        leds[NUM_LEDS - i - j] = CRGB (160, 0, 200);  // viola
      }
      else if (colorHex == 5) {
        leds[NUM_LEDS - i - j] = CRGB (230, 51, 112);  // rosa
      }
    }

    FastLED.show();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
}

void LeftToRight(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  for (int i = 0; i < NUM_LEDS - EyeSize - 2; i++) {
    setAll(0, 0, 0);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      if (colorHex == 0) {
        leds[i + j] = CRGB (255, 0, 0);  // rosso
      }
      else if (colorHex == 1) {
        leds[i + j] = CRGB (255, 25, 0);  // arancio
      }
      else if (colorHex == 2) {
        leds[i + j] = CRGB (0, 200, 0);  // verde
      }
      else if (colorHex == 3) {
        leds[i + j] = CRGB (0, 35, 200);  // azzurro
      }
      else if (colorHex == 4) {
        leds[i + j] = CRGB (160, 0, 200);  // viola
      }
      else if (colorHex == 5) {
        leds[i + j] = CRGB (230, 51, 112);  // rosa
      }
    }
    FastLED.show();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
}

void RightToLeft(byte red, byte green, byte blue, int EyeSize, int SpeedDelay, int ReturnDelay) {
  for (int i = NUM_LEDS - EyeSize - 2; i > 0; i--) {
    setAll(0, 0, 0);
    for (int j = 1; j <= EyeSize; j++) {
      FastLED.setBrightness(255);
      if (colorHex == 0) {
        leds[i + j] = CRGB (255, 0, 0);  // rosso
      }
      else if (colorHex == 1) {
        leds[i + j] = CRGB (255, 25, 0);  // arancio
      }
      else if (colorHex == 2) {
        leds[i + j] = CRGB (0, 200, 0);  // verde
      }
      else if (colorHex == 3) {
        leds[i + j] = CRGB (0, 35, 200);  // azzurro
      }
      else if (colorHex == 4) {
        leds[i + j] = CRGB (160, 0, 200);  // viola
      }
      else if (colorHex == 5) {
        leds[i + j] = CRGB (230, 51, 112);  // rosa
      }
    }
    FastLED.show();
    delay(SpeedDelay);
  }
  delay(ReturnDelay);
}

////////////////////////////////////////////// RAINBOW CYCLE (QUARTA ANIMAZIONE)

void rainbowCycle(int SpeedDelay) {
  byte *c;
  uint16_t i, j;

  for (j = 0; j < 256 * 5; j++) { // 5 cycles of all colors on wheel
    for (i = 0; i < NUM_LEDS; i++) {
      c = Wheel(((i * 256 / NUM_LEDS) + j) & 255);
      leds[i] = CRGB(*c, *(c + 1), *(c + 2));
    }
    FastLED.show();
    delay(SpeedDelay);
  }
}

byte * Wheel(byte WheelPos) {
  static byte c[3];

  if (WheelPos < 85) {
    c[0] = WheelPos * 3;
    c[1] = 255 - WheelPos * 3;
    c[2] = 0;
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    c[0] = 255 - WheelPos * 3;
    c[1] = 0;
    c[2] = WheelPos * 3;
  } else {
    WheelPos -= 170;
    c[0] = 0;
    c[1] = WheelPos * 3;
    c[2] = 255 - WheelPos * 3;
  }

  return c;
}
