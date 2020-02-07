// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numericChars = "1234567890";
var specialChars = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var length = parseInt(
    prompt(
      "How long would you like your password to be? (8-128 characters allowed)"
    )
  );
  if (length < 8 || length > 128) {
    alert("Your password length must be between 8 and 128");
    return;
  }

  var params = {
    length: length,
    lowercase: confirm("Would you like to use lowercase characters?"),
    uppercase: confirm("Would you like to use uppercase characters?"),
    specialChars: confirm("Would you like to use special characters?"),
    numericChars: confirm("Would you like to use numeric characters?")
  };

  var password = generatePassword(params);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(options) {
  var password = "";

  for (let i = 0; i < options.length; i++) {
    if (options.uppercase) {
      password += getRandomValue(uppercase);
    }
    if (options.lowercase) {
      password += getRandomValue(lowercase);
    }
    if (options.specialChars) {
      password += getRandomValue(specialChars);
    }
    if (options.numericChars) {
      password += getRandomValue(numericChars);
    }
  }
  return password.slice(0, options.length);
}

function getRandomValue(str) {
  return str[Math.floor(Math.random())];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
