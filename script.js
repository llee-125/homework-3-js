var pwlength = prompt ("WELCOME TO PASSWORD GENERATOR -- You can have a password with 8 - 128 characters. Please enter the number of  characters you wish to use in your password?");
console.log(pwlength);

if (pwlength <8 || pwlength >128) {
  alert ("Try again, number must be between 8 - 128.")
  prompt ("You can have a password from 8 - 128 characters. How many characters do you want your password to be?");
} 

var num = confirm ("Do you want numbers in your password?");
console.log(num);

var uc = confirm ("Do you want uppercase characters in your password?");
console.log(uc);


var lc = confirm ("Do you want lowercase characters in your password?");
console.log(lc);

var symb = confirm ("Do you want symbol charaters in your password?");
console.log(symb);


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();


generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
  
function generatePassword (pwlength) {
  var numChar = [1,2,3,4,5,6,7,8,9,0];
  var ucChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lcChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var symbChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];

}
})
var password = "";

for (i = 0; i < length; i++) {
  password += possibleCharacters.charAt(
    Math.floor(Math.random() * possibleCharacters.length)
  );
}
document.querySelector("#password").innerHTML = password;

}