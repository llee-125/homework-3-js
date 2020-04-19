var generateBtn = document.querySelector("#generate");
// var lownumbers = [1, 2, 3, 4, 5, 6, 7] 
// var passwordContainer = document.querySelector("#passwordContainer");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function myFunction() {
//   var x, password;

//   x = document.getElementById("numb").value;

//     if (isNaN(x) || x < 8 || x > 128) {
//       text = "Try again, number must be between 8 - 128.";
//     } else {
//       text = "Click OK if you want numbers in your password?";
//     }
//       document.getElementById("password").innerHTML = text;
//     }

generateBtn.addEventListener("click", alertgreeting);

function alertgreeting (){
  prompt ("You can have a password from 8 - 128 characters. How many characters do you want your password to be?");

  if (Number < 8) {
    alert ("Try again, number must be between 8 - 128.")
  } else {
    confirm ("Do you want numbers in your password?")
  }
}



  var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",];
  var randNum;
  var randomString = "";

  for (let i = 0; i < 21; i++) {
    randNum = Math.floor(Math.random() * arr.length)
    randomString += arr[randNum]
  }

console.log(randomString);
