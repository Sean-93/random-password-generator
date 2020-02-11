
// Assigns a query selector to variable generateBtn to select the id generate
var generateBtn = document.querySelector("#generate");

// Add event listener to variable generateBtn
generateBtn.addEventListener("click", writePassword);

// Assigns variables for each character option into strings
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numericChars = "1234567890";
var specialChars = "!@#$%^&*()";


function writePassword() {
  // Converts length variable into an integer; length string is input via prompt
  var length = parseInt(
    prompt(
      "How long would you like your password to be? (8-128 characters allowed)"
    )
  );

  // If length is less than 8 OR is longer than 128, shows alert
  if (length < 8 || length > 128) {
    alert("Your password length must be between 8 and 128");
    return;
  }
  // If length is not a number, then shows alert
  if (isNaN(length) === true) {
    alert("You must input numbers for this section!");
    return;
  }


  // Assigns variable params for variable length to be numeric length, and sets other variables with user input via confirmation 
  var params = {
    length,
    lowercase: confirm("Would you like to use lowercase characters?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?")
  };

  // Makes sure that if there are no character type selected, user gets an alert
  if (
    params.lowercase === false &&
    params.uppercase === false &&
    params.numericChars === false &&
    params.specialChars === false
  ) {
    alert("You must select at least 1 charater type!");
    return;
  }

  // Creates a variable called password that results from running the set parameters through the function generatePassword, and then selects the id called password and returns the variable to the document
  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generates a random value for each string, multiplies by the string's length, and rounds down to a whole number
function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

  // Takes in whichever parameters are selected; runs selected parameters through a for loop to ensure the parameters conform to the desired length and appends each selected parameter
function generatePassword(params) {
  var password = "";

  for (let i = 0; i < params.length; i++) {
    if (params.uppercase) {
      password += getRandomValue(uppercase);
    }
    if (params.lowercase) {
      password += getRandomValue(lowercase);
    }
    if (params.specialChars) {
      password += getRandomValue(specialChars);
    }
    if (params.numericChars) {
      password += getRandomValue(numericChars);
    }
  }
  //returns parameters once they are sliced to desired string length
  return password.slice(0, params.length);
}

