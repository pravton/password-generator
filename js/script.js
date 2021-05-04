// Assignment code here
//create an object for password charactors
var passwordObj = {
  alphabetCharUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphabetCharLower: "abcdefghijklmnopqrstuvwxyz",
  numbericChar: "1234567890",
  specialChar: "!\'\"\&\#\\\$%()*+,-./:;<=>?@[]^_`{|}"
}

//create an object for password criteria
var passwordCriteria = {
  charecterLimit: 14,
  includeSpecialChar: true,
  includeLowerCase: true,
  includeUpperCase: true
}

//Test Password Obj property length
console.log(passwordObj.alphabetCharUpper.length);

//create a random funtion
var randomNumb = function(charLength) {
  var randomResult = Math.floor((Math.random() * charLength) + 1);

  return randomResult;
}

//test random funtion
console.log(randomNumb(passwordCriteria.charecterLimit));

//created a variable for the password length
var passwordLength = passwordCriteria.charecterLimit; 
 
//Create a funtion to generate the password
var generatePassword = function() {
  var createdPassword = "";
  //Loop for the random charactors
  for (var i = 0; i < passwordCriteria.charecterLimit; i++) {
    //Random charactors generate from alphabetUpperCase
    createdPassword += passwordObj.alphabetCharLower.charAt(randomNumb(passwordObj.alphabetCharLower.length));
    //Random charactors generate from alphabetLowerCase
    createdPassword += passwordObj.alphabetCharUpper.charAt(randomNumb(passwordObj.alphabetCharUpper.length));
    //Random charactors generate from numericChar
    createdPassword += passwordObj.numbericChar.charAt(randomNumb(passwordObj.numbericChar.length));
    //Random charactors generate from specialChar
    createdPassword += passwordObj.specialChar.charAt(randomNumb(passwordObj.specialChar.length));
  }

  //Limit the password charactors to the password length 
  var FullGenPass = createdPassword;
  if (FullGenPass.length > passwordLength) {
    FullGenPass = FullGenPass.substring(0,passwordLength);
  }

  //return the limited password
  return FullGenPass;
}

//Console log the funtion to see if it works
console.log(generatePassword());

/* //create a funtion with push method to generate the password from object
var genPassword = function() {
  var createdPassword = [];
  //Loop for the random charactors
  for (var i = 0; i < passwordCriteria.charecterLimit; i++ ) {
    createdPassword.push(passwordObj.alphabetCharUpper.charAt(randomNumb((passwordObj.alphabetCharUpper.length))));
    createdPassword.push(passwordObj.alphabetCharLower.charAt(randomNumb((passwordObj.alphabetCharLower.length))));
    createdPassword.push(passwordObj.numbericChar.charAt(randomNumb((passwordObj.numbericChar.length))));
    createdPassword.push(passwordObj.specialChar.charAt(randomNumb((passwordObj.specialChar.length))));

  }

  var finalResult = createdPassword.join("");
  if (finalResult.length > passwordLength) {
    finalResult = finalResult.substring(0, passwordLength);
  }
  return finalResult;
}

//Console log the funtion to see if it works
console.log(genPassword()); */

//Ask question from the user what to include in password charactors
  //ask question about with how many charactors to generte the password
  //ask question to confirm to include the special charactors
  //ask question to confirm to include numberic values
  //ask question to include lowercase charactors
  //ask question to include uppercase charactors
//create a funtion to update the user input in the object


//assignment Code End

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
