// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let length = prompt("Enter password length between 8 and 128 characters.");
  if (!(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return "";
  }

  var includeLowerCase = confirm("Include lowercase characters?");
  var includeUpperCase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowerCase && !includeUpperCase && !includeNumeric && !includeSpecial) {
    alert("Please select at least one character type inclusion.");
    return "";
  }

  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~"

  var allAvailable = "";
  if (includeLowerCase) allAvailable += lowerCaseCharacters;
  if (includeUpperCase) allAvailable += upperCaseCharacters;
  if (includeNumeric) allAvailable += numericCharacters;
  if (includeSpecial) allAvailable += specialCharacters;

  var password = "";
  for (var i  = 0; i < length; i++) {
var randomNumber = Math.floor(Math.random() * allAvailable.length);
password += allAvailable.charAt(randomNumber);

  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
