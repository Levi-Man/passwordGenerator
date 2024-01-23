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

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
