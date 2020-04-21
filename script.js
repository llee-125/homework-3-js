var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", alertgreeting);


function alertgreeting (){
  // Ask the user how long they want their password, and store it in a variable to be used later
  var pwlength = prompt ("You can have a password from 8 - 128 characters. How many characters do you want your password to be?");
  
  // If the password length is less than 8, ask them to try again.
  if (pwlength < 8) {
    alert ("Try again, number must be between 8 - 128.");
  } 
  // Otherwise, move onto next question.
  else {
    // Ask if they want numbers and store the answer in a variable to be used later.
  var numbchar = confirm ("Do you want numbers in your password?");

    // Ask if they want uppercase characters and store that in a variable.
  var ucchar = confirm ("Do you want uppercase characters in your password?");

    // ask if they want lowercase and store it.
  var lcchar = confirm ("Do you want lowercase characters in your password?");

    // ask if they want symbols and store it.
  var symchar = confirm ("Do you want symbol charaters in your password?");
  }
    // On the last confirm, generate a random password based on their answers.




  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
}
    // Take the answers from the stored variables, compile an array with all of the choices
// var arr = [numbchar + ucchar + lcchar + symchar] 

    // For example, if the user chooses yes to numbers and no to everything else, array looks like [1, 2, 3, 4, 5, 6, 7, 8, 9].
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@" ...]
    // Once you have array compiled
      // Pull random characters from this array based on pwlength
      // Display this password to the page

  var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",];
  var randNum;
  var randomString = "";

  for (let i = 0; i < 21; i++) {
    randNum = Math.floor(Math.random() * arr.length)
    randomString += arr[randNum]
  }
// document.getElementById("randomString").innerHTML = password

console.log(randomString);
