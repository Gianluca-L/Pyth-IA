// var x = document.getElementById("myInput");
const keywords = ["terra","piatta", "tonda", "sfera","sferica"]

function getInputValue(){
    // Selecting the input element and get its value
    var inputVal = document.getElementById("myInput").value;

    // Displaying the value
    // alert(inputVal);

    if( keywords.some(keyword => inputVal.includes('terra') && !inputVal.includes('non') && inputVal.includes('piatta') ) ) {
        console.log("Found")
          // audio.src = a_music;
          // audio.play();
          alert('Due cose sono infinite: l universo e la stupidità umana, ma riguardo l universo ho ancora dei dubbi.');
    }
    else if(keywords.some(keyword => (inputVal.includes('terra') && inputVal.includes('non') && inputVal.includes('piatta')) || (inputVal.includes('terra') && inputVal.includes('tonda') || inputVal.includes('sfera') || inputVal.includes('sferica')) && !inputVal.includes('non') )) {
      alert('è vero');
    }

}
