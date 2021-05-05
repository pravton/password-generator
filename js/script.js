// Assignment code here
//create an object for password charactors
var passwordObj = {
  alphabetCharUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphabetCharLower: "abcdefghijklmnopqrstuvwxyz",
  numbericChar: "1234567890",
  specialChar: "!\'\"\&\#\\\$%()*+,-./:;<=>?@[]^_`{|}"
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

//Create a funtion to generate the password
var generatePassword = function() {

  //Ask question from the user what to include in password charactors
  askQuestions();
  //create a variable for the passwordlength
  var passwordLength = passwordCriteria.charecterLimit; 

  //generate password with Loop
  var createdPassword = "";
  //Loop for the random charactors
  for (var i = 0; i < passwordLength; i++) {
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

  console.log("User wants to include the UpperCase : " + passwordCriteria.includeUpperCase);
  console.log("User wants to include the LowerCase : " + passwordCriteria.includeLowerCase);
  console.log("User wants to include the SpecialCharacter : " + passwordCriteria.includeSpecialChar);
  console.log("User wants to include the NumericalCharater : " + passwordCriteria.includeNumericChar);
  console.log("The full createdPasword : " + createdPassword);

  //create a funtion to limit the password characters
  var limitChar = function() { 
  //create a variable for the password length
    var fullGenPass = createdPassword;
    //if the generated password is more the the user defined length limit the strings
    if (fullGenPass.length > passwordLength) {
      fullGenPass = fullGenPass.substring(0,passwordLength);
    }
    return fullGenPass;
  };
  
  console.log("The Password after limiting the characters : " + limitChar());

  //suffle the password to create even more random password
  var shuffledPassword = function() {
    //spilt the characters into string
    var passwordSplit = limitChar().split("");
    //random sort to shuffle the arrays
    passwordSplit.sort(function(){return 0.5 - Math.random()});
    //return the shuffled as strings
    return passwordSplit.join("");
  };

  //return the shuffled password
  return shuffledPassword();
    
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
