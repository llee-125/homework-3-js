var pwlength = prompt ("WELCOME TO PASSWORD GENERATOR -- You can have a password with 8 - 128 characters. Please enter the number of  characters you wish to use in your password?");
console.log(pwlength);

if (pwlength >=8 && pwlength <=128) {
  var num = confirm ("Do you want numbers in your password?");
    console.log(num);

  var uc = confirm ("Do you want uppercase characters in your password?");
    console.log(uc);

  var lc = confirm ("Do you want lowercase characters in your password?");
    console.log(lc);

  var symb = confirm ("Do you want symbol charaters in your password?");
    console.log(symb);
} else {
  alert ("Try again, number must be between 8 - 128.")
  prompt ("You can have a password from 8 - 128 characters. How many characters do you want your password to be?");
}




var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  console.log(password);
}
writePassword();
// Assembles all the characters pursuant to which and to how many characters the user wants
function generatePassword(pwlength) {
  var possibleCharacters = [];
  var numChar = [1,2,3,4,5,6,7,8,9,0];
  var ucChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lcChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var symbChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];

  // if (num is true) include numChar inside possibleCharacters
  if (num === true) {
    possibleCharacters = possibleCharacters.concat(numChar);
  };

  if (uc === true) {
    possibleCharacters = possibleCharacters.concat(ucChar);
  };

  if (lc === true) {
    possibleCharacters = possibleCharacters.concat(lcChar);
  };

  if (symb === true) {
    possibleCharacters = possibleCharacters.concat(symbChar);
  };
  console.log(possibleCharacters);
  console.log(typeof possibleCharacters.length);

  var password = "";
  // Randomizes the characters
  for (i = 0; i < pwlength; i++) {
    password += possibleCharacters[Math.floor(Math.random) * possibleCharacters.length];
    // This returns a random number from 0 to (possibleCharacters.length - 1)
    console.log(password);
  }

  return password;
}

generateBtn.addEventListener("click", function (event) {
  event.preventDefault();


})

document.querySelector("#password").innerHTML = password;

