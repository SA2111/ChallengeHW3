// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Generator for password
function generatePassword() {
var length = parseInt(prompt("How many characters do you want your password to have?"));



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
