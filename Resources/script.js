// Assignment code here
function passwordGenerator()
{
  //Define character types.
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialCharacters = "!@#$%^&*()_+-={}[];':<>/?|"

//Ask user if they'd like to create a new password.
var passwordCreation = confirm("Would you like to create a new password?");
if (!passwordCreation)
{
  return;
}

//Prompt user for password length and character types.
var passwordLength = prompt("How long do you want your password to be?");
if (passwordLength < 8 || passwordLength > 128)
{
  alert("Password must be between 8 and 128 characters long.")
  return;
} 
else 
{
  var includeUpperCase = confirm("Do you want your password to contain uppercase letters?")
  var includeLowerCase = confirm("Do you want your password to contain lowercase letters?")
  var includeNumbers = confirm("Do you want your password to contain numbers?")
  var includeSpecialCharacters = confirm("Do you want your password to contain special characters?")
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
