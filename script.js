// Assignment Code
var generateBtn = document.getElementById("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  var passwordText = document.getElementById("password");
  var possibleChar = "";
  var randNum;
  var randomString = "";

  var numChar = [1,2,3,4,5,6,7,8,9,0];
  var ucChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lcChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var symbChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}"];

// Define generatePassword here
function generatePassword (){
  // Ask the user how long they want their password, and store it in a variable to be used later
  var pwlength = prompt ("You can have a password from 8 - 128 characters. How many characters do you want your password to be?");
  
  // If the password length is less than 8, ask them to try again.
  if (pwlength <8 || pwlength >128) {
    alert ("Try again, number must be between 8 - 128.");
  } 
  // Otherwise, move onto next question.
  else {
    // Ask if they want numbers and store the answer in a variable to be used later.
  var num = confirm ("Do you want numbers in your password?");
  console.log(pwlength);
  console.log(num);

    // Ask if they want uppercase characters and store that in a variable.
  var uc = confirm ("Do you want uppercase characters in your password?");
  console.log(uc);

    // ask if they want lowercase and store it.
  var lc = confirm ("Do you want lowercase characters in your password?");
  console.log(lc);

    // ask if they want symbols and store it.
  var symb = confirm ("Do you want symbol charaters in your password?");
  console.log(symb);

  }

  passwordText.value = password;
}

generateBtn.addEventListener("click", function (event) {
  event.preventDefault();
})

let choicesArray = [];

  for (var i = 0; i < pwlength; i++) {
    randNum = Math.floor(Math.random() * choicesArray.length)
    // returns a random number from 0 to 73
    // if randNum === 11
    randomString += choicesArray[randNum];
  }

  // On the last confirm, generate a random password based on their answers.

    // STEP 1 ===========================================
    // If they want numbers, include numbers

    if (num === true) {
      choicesArray = numChar;
    }



    // If (num === true && uc === true && lc === true && symb === true) 
    // If (num === true && uc === true && lc === true && symb === false)
    // If (num === true && uc === true && lc === false && symb === false)
    // If (num === true && uc === false && lc === false && symb === false)

    // Basically if num === true {
      // then include numChar in our BIG array of choices aka choicesArray
    //   choicesArray = numChar;
    //   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    // // }

    // // If they want uppercase, include uppercase characters
    // // If uc === true, then include ucChar
    //   choicesArray = ucChar;
    //   choiceArray = lcChar;
    //   choiceArray = symbChar;

    /// do the same for lc and symb
    // for symbols and numbers:
    // choicesArray = numChar + symbChar
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@",]

    // If they want all four, include all four
    // If (num === true && uc === true && lc === true && symb === true )
    // so numChar + ucChar + lcChar + symbChar

    // STEP 2 ================================================




  // The last line of your generatePassword function should be a return
  // return password here like
  // return "78UY$093";
// }

// var passwordTest = generatePassword();
// console.log(passwordTest);

    // Take the answers from the stored variables, compile an array with all of the choices
// var arr = [numbchar + ucchar + lcchar + symchar] 

    // For example, if the user chooses yes to numbers and no to everything else, array looks like [1, 2, 3, 4, 5, 6, 7, 8, 9].
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "!", "@" ...]
    // Once you have array compiled
    // Pull random characters from this array based on pwlength
    // Display this password to the
}