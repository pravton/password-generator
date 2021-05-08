// Assignment code here
//create an object for password charactors
var passwordObj = {
  alphabetCharUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphabetCharLower: "abcdefghijklmnopqrstuvwxyz",
  numbericChar: "1234567890",
  specialChar: "!\'\"\&\#\\\$%()*+,-./:;<=>?@[]^_`{|}",
  userCharacterPool: ""
};

//create an object for password criteria
var passwordCriteria = {
  characterLimit: 0,
  includeSpecialChar: true,
  includeLowerCase: true,
  includeUpperCase: true,
  includeNumericChar: true
};

//create a random function
var randomNumb = function(charLength) {
  var randomResult = Math.floor((Math.random() * charLength) + 1);
  //return the random rumber
  return randomResult;
};

//Ask questions or present with password criteria
var askQuestions = function() {
  //ask question about with how many charactors to generte the password
  passwordCriteria.characterLimit = parseInt(prompt("How many characters would you like to include in your password?"), 10);
  console.log("User wants a password with " + passwordCriteria.characterLimit + " characters!")
  //check if the password length is between 8 and 128
  if (
    passwordCriteria.characterLimit < 8 || 
    passwordCriteria.characterLimit > 128 || 
    !passwordCriteria.characterLimit
    ) {
    //if it is alert the user to choose a number betwwen 8 and 128
    alert("Please enter a number between 8 and 128!")
    //run the function again
    return askQuestions();
  } else {
    //create a function to ask the password critera questions
    var askQuestionsCritera = function() {
      //ask question to include uppercase charactors
      passwordCriteria.includeUpperCase = confirm("Click OK to include UPPERCASE characters in your password?");
      //ask question to include lowercase charactors
      passwordCriteria.includeLowerCase = confirm("Click OK to include LOWERCASE characters in your password?");
      //ask question to confirm to include the special charactors
      passwordCriteria.includeSpecialChar = confirm("Click OK to include SPECIAL characters in your password");
      //ask question to confirm to include numberic values
      passwordCriteria.includeNumericChar = confirm("Click OK to include NUMERIC characters in your password?");
      

      //check if the user selected one of the character, if not run askQuestionsCritera the function again
      if (
        passwordCriteria.includeUpperCase === false &&
        passwordCriteria.includeLowerCase === false &&
        passwordCriteria.includeSpecialChar === false &&
        passwordCriteria.includeNumericChar === false
      ) {
        // alert the user they need to atleast choose one of the option
        alert("You need to alteast select one of the options!")
        // run the function again
        return askQuestionsCritera();
      }
    }
    //execute the askQuestionsCritera function
    askQuestionsCritera();
  }
};

//create a function to create the character pool based on the user selection
var characterPool = function () {
  //If the user chose to include upperCase, include the upperCase character in the pool
  if (passwordCriteria.includeUpperCase) {
    passwordObj.userCharacterPool += passwordObj.alphabetCharUpper;
  }
  //If the user chose to include lowerCase, include the lowerCase character in the pool
  if (passwordCriteria.includeLowerCase) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.alphabetCharLower;
  }
  //If the user chose to include specialCharacter, include the specialCharacter character in the pool
  if (passwordCriteria.includeSpecialChar) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.specialChar;
  }
  //If the user chose to include numericCharacter, include the numericCharacter character in the pool
  if (passwordCriteria.includeNumericChar) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.numbericChar;
  }
  //return passwordObj.userCharacterPool;
};

//create a function to loop and length the password
var passwordGenLoop = function() {
  //Declare a variables
  var passwordLength = passwordCriteria.characterLimit; 
  var genPassword = "";

  //loop function to generate the password with the user prefered length
  for (var i = 0; i < passwordLength; i++) {
    genPassword += passwordObj.userCharacterPool.charAt(randomNumb(passwordObj.userCharacterPool.length));
  }

  //if condition to double check if the looped password matches the passwordLength
  if (passwordLength !== genPassword.length) {
    //return the generated password
    return passwordGenLoop();
  } else {
    //retun the generated password
    return genPassword;
  }
};

//Create a function to generate the password
var generatePassword = function() {
  //Ask question from the user what to include in password charactors
  askQuestions();

  //Reset a variable for the userCharacterPool
  passwordObj.userCharacterPool = "";

  //run the characterPool function to create the chacterPool based on the user inout
  characterPool();

  //display the user criteria on the console 
  console.log("User wants to include the UpperCase : " + passwordCriteria.includeUpperCase);
  console.log("User wants to include the LowerCase : " + passwordCriteria.includeLowerCase);
  console.log("User wants to include the SpecialCharacter : " + passwordCriteria.includeSpecialChar);
  console.log("User wants to include the NumericalCharater : " + passwordCriteria.includeNumericChar);
 
  //return the final password by running the loop function
  return passwordGenLoop();    
};

//create a function to generate a different password with same criteria.
var differntPassword = function() {
  if (!passwordCriteria.characterLimit) {
    alert("Please click GENERATE PASSWORD to create a password first!")
  }
  //return the final password by running the loop function
  return passwordGenLoop();
};

//assignment Code End

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generateDiffBtn = document.querySelector("#generateDiff");

// Write password to the #password input
function writePassword(passFunc) {
  var password = passFunc;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function() {
  writePassword(generatePassword());
});

// Add event listener to generate different button
generateDiffBtn.addEventListener("click", function() {
  writePassword(differntPassword());
});
