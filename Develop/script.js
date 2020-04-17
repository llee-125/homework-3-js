var generateBtn = document.querySelector("#generate");


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}




// generateBtn.addEventListener("click", writePassword);
function alertgreeting(){
  prompt("You can have a password from 8 - 128 characters. How many characters do you want your password to be?")
}



generateBtn.addEventListener("click", alertgreeting);

if (Number < "8") {
  alert ("Try again, number must be between 8 - 128.")
} else {
  prompt("Do you want numbers in your password?")
  }



