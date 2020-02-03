void parseData() {      // split the data into its parts

  char * strtokIndx; // this is used by strtok() as an index

  /*strtokIndx = strtok(tempChars, ",");     // get the first part - the string
    strcpy(boh, strtokIndx);*/ // copy it to messageFromPC

  strtokIndx = strtok(tempChars, ","); // this continues where the previous call left off
  check_inColor_State[index] = atoi(strtokIndx);
  //Serial.write(check_inColor_State);
if(index < 4){
  index++;
  }
  else{index = 0;}
  
  if (check_inColor_State[index] > 8) {
    inColor_State = last_inColor_State;    // convert this part to an integer
  }
  else if (index==3){
    if(check_inColor_State[0] == check_inColor_State[1] && check_inColor_State[1] == check_inColor_State[2] && check_inColor_State[1] == check_inColor_State[3]){
          inColor_State = check_inColor_State[3];
    }
  }
  last_inColor_State = inColor_State;

  strtokIndx = strtok(NULL, ",");
  Volume = atoi(strtokIndx);   // convert this part to a float
  inByte = map(Volume, 0, 255, 40, 150);
}

void recvWithStartEndMarkers() {
  static boolean recvInProgress = false;
  static byte ndx = 0;
  char startMarker = '<';
  char endMarker = '>';
  char rc;
  while (Serial.available() > 0) {
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
