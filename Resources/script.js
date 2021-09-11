// Assignment code here
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialCharacters = "!@#$%^&*()_+-={}[];':<>/?|"

function passwordGenerator()
{
  //Prompt user for password length and character types.
  var passwordLength = prompt("How long do you want your password to be?");
  if (passwordLength < 8 || passwordLength > 128)
  {
    alert("Password must be between 8 and 128 characters long.")
    return;
  }
  else 
  {
    var includeUpperCase = confirm("Do you want your password to include uppercase letters?")
    var includeLowerCase = confirm("Do you want your password to include lowercase letters?")
    var includeNumbers = confirm("Do you want your password to include numbers?")
    var includeSpecialCharacters = confirm("Do you want your password to include special characters?")
  }

  if (!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSpecialCharacters)
  {
    alert("Your password needs to include something!");
    return;
  }

  //Generate password based on user responses.
  initialpassword = "";
  var totalSet = (includeUpperCase) ? upperCaseLetters : [];
  totalSet = totalSet.concat((includeLowerCase) ? lowerCaseLetters : []);
  totalSet = totalSet.concat((includeNumbers) ? numbers : []); 
  totalSet = totalSet.concat((includeSpecialCharacters) ? specialCharacters : []); 
  while (initialpassword.length < passwordLength)
  {
    initialpassword = initialpassword.concat(totalSet[getRandomInt(totalSet.length)]);
  }
  return initialpassword;
}

function getRandomInt(max)
{
  return Math.floor(Math.random() * max);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");
  passwordText.value = (password == undefined) ? "Error: password not specified" : password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
