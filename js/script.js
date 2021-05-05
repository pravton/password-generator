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
  charecterLimit: 8,
  includeSpecialChar: true,
  includeLowerCase: true,
  includeUpperCase: true,
  includeNumericChar: true
}

/* //Test Password Obj property length
console.log(passwordObj.alphabetCharUpper.length); */

//create a random funtion
var randomNumb = function(charLength) {
  var randomResult = Math.floor((Math.random() * charLength) + 1);

  return randomResult;
}

/* //test random funtion
console.log(randomNumb(passwordCriteria.charecterLimit)); */
 
//Create a funtion to generate the password
var generatePassword = function() {

  //Ask question from the user what to include in password charactors

  //ask question about with how many charactors to generte the password
  passwordCriteria.charecterLimit = parseInt(prompt("How many charectars you would like to include?"), 10);
  console.log("User wants a password with " + passwordCriteria.charecterLimit + " characters!")
  //check if the password length is between 8 and 128
  if (
    passwordCriteria.charecterLimit < 8 || 
    passwordCriteria.charecterLimit > 128
    ) {
    //if it is alert the user to choose a number betwwen 8 and 128
    alert("Please enter a number between 8 and 128!")
    //run the funtion again
    generatePassword();
  } else {
    //ask question to include uppercase charactors
    passwordCriteria.includeUpperCase = confirm("Would you like to include Uppercase?");
    //ask question to include lowercase charactors
    passwordCriteria.includeLowerCase = confirm("Would you like to include LoweCase?");
    //ask question to confirm to include the special charactors
    passwordCriteria.includeSpecialChar = confirm("Would you like to include special Characters");
    //ask question to confirm to include numberic values
    passwordCriteria.includeNumericChar = confirm("Would you like to include Numberic Characters?");
    

    //check if the user selected one of the character, if not run the funtion again
    if (
      passwordCriteria.includeUpperCase === false &&
      passwordCriteria.includeLowerCase === false &&
      passwordCriteria.includeSpecialChar === false &&
      passwordCriteria.includeNumericChar === false
    ) {
      // alert the user they need to atleast choose one of the option
      alert("You need to alteast select one of the options!")
      // run the funtion again
      generatePassword();
    };
  }



  //created a variable for the password length
  var passwordLength = passwordCriteria.charecterLimit; 

  var createdPassword = "";
  //Loop for the random charactors
  for (var i = 0; i < passwordCriteria.charecterLimit; i++) {
    if (passwordCriteria.includeUpperCase) {
    //Random charactors generate from alphabetUpperCase
    createdPassword += passwordObj.alphabetCharUpper.charAt(randomNumb(passwordObj.alphabetCharUpper.length));
    }

    if (passwordCriteria.includeLowerCase) {
      //Random charactors generate from alphabetLoweCase
      createdPassword += passwordObj.alphabetCharLower.charAt(randomNumb(passwordObj.alphabetCharLower.length));
    }

    if (passwordCriteria.includeSpecialChar) {
      //Random charactors generate from specialChar
      createdPassword += passwordObj.specialChar.charAt(randomNumb(passwordObj.specialChar.length));
    }
    
    if (passwordCriteria.includeNumericChar) {
      //Random charactors generate from numericChar
      createdPassword += passwordObj.numbericChar.charAt(randomNumb(passwordObj.numbericChar.length));
    }
  }

  //Limit the password charactors to the password length 
  var FullGenPass = createdPassword;
  if (FullGenPass.length > passwordLength) {
    FullGenPass = FullGenPass.substring(0,passwordLength);
  }

  //return the limited password
  return FullGenPass;
};

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
