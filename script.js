// var x = document.getElementById("myInput");
const keywords = ["terra","piatta", "tonda", "sfera","sferica"];

function getInputValue(){
    // Selecting the input element and get its value
    var textFromInput = document.getElementById("myInput").value;
    var text_From_Voice = document.getElementById("myVoiceInput").innerHTML;
    //var inputVal = text_From_Voice.toLowerCase();
    var inputVal = textFromInput.toLowerCase();
    console.log(inputVal);
    var check = document.getElementById("writeCheckbox").value;
    console.log(check);
    if( keywords.some(keyword => inputVal.includes('terra') && !inputVal.includes('non') && inputVal.includes('piatta') ) ) {
        console.log("Found")
          // audio.src = a_music;
          // audio.play();
          alert('Citazione famosa');
    }
    else if(keywords.some(keyword => (inputVal.includes('terra') && inputVal.includes('non') && inputVal.includes('piatta')) || (inputVal.includes('terra') && inputVal.includes('tonda') || inputVal.includes('sfera') || inputVal.includes('sferica')) && !inputVal.includes('non') )) {
      alert('è vero');
    }
    else {
      alert('Poni un\'altra domanda');
    }

}
