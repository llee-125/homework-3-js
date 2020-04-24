// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event) {
  event.preventDefault(); //prevents the forms default behavior (refreshing the page)

  var length = document.querySelector('input[name="password-length"]').value;

  if (length < 8 || length > 128) {
    window.alert(
      "the password needs to be greater than 8 characters and less than 128 characters."
    );
  }

  generatePassword(length);
});

function generatePassword(length) {
  var possibleUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var possibleLowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var possibleNumbers = "0123456789";
  var possibleSpecialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  //min length of 8, max 128
  // ALL of the possible characters that we can use

  var allowedCharacters = document.querySelectorAll(
    'input[name ="types"]:checked'
  );
  var possibleCharacters = "";
  // console.log all of the checkboxes that were checked

  for (var i = 0; i < allowedCharacters.length; i++) {
    if (allowedCharacters[i].value === "uppercase") {
      possibleCharacters += possibleUppercaseLetters;
    }

    if (allowedCharacters[i].value === "lowercase") {
      possibleCharacters += possibleLowercaseLetters;
    }

    if (allowedCharacters[i].value === "special-chars") {
      possibleCharacters += possibleSpecialCharacters;
    }

    if (allowedCharacters[i].value === "numbers") {
      possibleCharacters += possibleNumbers;
    }
  }
  var password = "";

  for (i = 0; i < length; i++) {
    password += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  console.log(password);

  document.querySelector("#password").innerHTML = password;
}