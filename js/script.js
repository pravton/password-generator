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
  charecterLimit: 8,
  includeSpecialChar: true,
  includeLowerCase: true,
  includeUpperCase: true,
  includeNumericChar: true
};

//create a random funtion
var randomNumb = function(charLength) {
  var randomResult = Math.floor((Math.random() * charLength) + 1);
  //return the random rumber
  return randomResult;
};

//Ask questions or present with password criteria
var askQuestions = function() {
  //ask question about with how many charactors to generte the password
  passwordCriteria.charecterLimit = parseInt(prompt("How many characters would you like to include in your password?"), 10);
  console.log("User wants a password with " + passwordCriteria.charecterLimit + " characters!")
  //check if the password length is between 8 and 128
  if (
    passwordCriteria.charecterLimit < 8 || 
    passwordCriteria.charecterLimit > 128 || 
    !passwordCriteria.charecterLimit
    ) {
    //if it is alert the user to choose a number betwwen 8 and 128
    alert("Please enter a number between 8 and 128!")
    //run the funtion again
    return askQuestions();
  } else {
    //create a funtion to ask the password critera questions
    var askQuestionsCritera = function() {
      //ask question to include uppercase charactors
      passwordCriteria.includeUpperCase = confirm("Click OK to include UPPERCASE characters in your password?");
      //ask question to include lowercase charactors
      passwordCriteria.includeLowerCase = confirm("Click OK to include LOWERCASE characters in your password?");
      //ask question to confirm to include the special charactors
      passwordCriteria.includeSpecialChar = confirm("Click OK to include SPECIAL characters in your password");
      //ask question to confirm to include numberic values
      passwordCriteria.includeNumericChar = confirm("Click OK to include NUMERIC characters in your password?");
      

      //check if the user selected one of the character, if not run askQuestionsCritera the funtion again
      if (
        passwordCriteria.includeUpperCase === false &&
        passwordCriteria.includeLowerCase === false &&
        passwordCriteria.includeSpecialChar === false &&
        passwordCriteria.includeNumericChar === false
      ) {
        // alert the user they need to atleast choose one of the option
        alert("You need to alteast select one of the options!")
        // run the funtion again
        return askQuestionsCritera();
      }
    }
    //execute the askQuestionsCritera funtion
    askQuestionsCritera();
  }
};

//create a funtion to create the character pool based on the user selection
var characterPool = function () {
    
  if (passwordCriteria.includeUpperCase) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.alphabetCharUpper;
  }
  if (passwordCriteria.includeLowerCase) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.alphabetCharLower;
  }
  if (passwordCriteria.includeSpecialChar) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.specialChar;
  }
  if (passwordCriteria.includeNumericChar) {
    passwordObj.userCharacterPool = passwordObj.userCharacterPool + passwordObj.numbericChar;
  }

  //return passwordObj.userCharacterPool;
};

//Create a funtion to generate the password
var generatePassword = function() {

  //Ask question from the user what to include in password charactors
  askQuestions();
  //Declare a variable for the passwordlength
  var passwordLength = passwordCriteria.charecterLimit; 

  //Reset a variable for the userCharacterPool
  passwordObj.userCharacterPool = "";

  //run the characterPool function to create the chacterPool based on the user inout
  characterPool();

  //display the user criteria on the console 
  console.log("User wants to include the UpperCase : " + passwordCriteria.includeUpperCase);
  console.log("User wants to include the LowerCase : " + passwordCriteria.includeLowerCase);
  console.log("User wants to include the SpecialCharacter : " + passwordCriteria.includeSpecialChar);
  console.log("User wants to include the NumericalCharater : " + passwordCriteria.includeNumericChar);

  //create a variable for the final password
  var genPassword = "";

  //loop funtion to generate the password with the user prefered length
  for (var i = 0; i < passwordLength; i++) {
    genPassword += passwordObj.userCharacterPool.charAt(randomNumb(passwordObj.userCharacterPool.length));
  }

  //return the generated password
  return genPassword;
    
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
