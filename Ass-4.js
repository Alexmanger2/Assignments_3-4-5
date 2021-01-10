
// button1 and <p> tag selectors
var button1 = document.querySelector('.button-one');
var textTag = document.querySelector('.text');

//when you click button1, add text to <p>
button1.onclick = function() {
  textTag.innerText = "I'm right"; 
}

//select button 2
var button2 = document.querySelector('.button-two');

//when you click button2, add text to <p>
button2.onclick = function() {
  textTag.innerText = "No, I'm right";
}

//<h1> selector
var h1 = document.querySelector('.largeLetters');

//when mouse touches <h1> text, alert message
h1.onmouseover = function() {
	alert("Hey, I told you not to hover over me!");
}

// select submit button
var submitButton = document.querySelector(".submit");
var h1 = document.querySelector('.largeLetters')

//when submit button is clicked, run function
submitButton.onclick = function checkPassword() {
  
  //grab value of password
    var enteredPassword = document.getElementById("password").value;

    // check to see if password is correct or not
    if(enteredPassword !== "12345678"){
      alert("Incorrect Password");
      return true;
    }
    h1.innerText = 'information correct: change text!';
    return false;
}

//sphere volume calculator 
var calcButton = document.querySelector(".calc");
calcButton.onclick = function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  
 } 
