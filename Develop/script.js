var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function alertgreeting(){
  prompt("You can have a password from 8 - 128 characters. How many characters do you want your password to be?")
  if (number < "8") {
    alert ("Try again, number must be between 8 - 128.")
  } else {
    confirm ("Do you want numbers in your password?")
    }
}

generateBtn.addEventListener("click", alertgreeting);

var arr = ["a", "b", "c", "d"];
var randNum;
var randomString = "";
for (let i = 0; i < arr.length; i++) {
  randNum = Math.floor(Math.random() * arr.length);
  randomString += arr[randNum];
}
console.log(randomString);



