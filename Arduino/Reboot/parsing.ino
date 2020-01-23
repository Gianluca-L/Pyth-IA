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
