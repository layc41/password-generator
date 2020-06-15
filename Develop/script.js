// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var randomLower = function() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}
// console.log(randomLower());

var randomUpper = function () {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}
//console.log(randomUpper());

var randomNumber = function () {
  var num = '123456790';
  return num[Math.floor(Math.random() * num.length)];
}
// console.log(randomNumber());

var randomSpecial = function () {
  var sym = '!@#$%^&*=-_';
  return sym[Math.floor(Math.random() * sym.length)];
}
// console.log(randomSpecial());

// Array of the functions that are true
var randomFuncArr = []
// console.log(randomFuncArr);

// Call random function from random function array
var randomFunc = function () {
  for (var i = 0; i < randomFuncArr.length; i++) {
   return randomFuncArr[Math.floor(Math.random() * randomFuncArr.length)]()
  }
}

// Write password to the #password input
function writePassword() {

  // Prompts for parameters related to password
  var charCount = prompt("How many characters? (Between 8 - 128 characters)");
    if (charCount < 8 | charCount > 128 | isNaN(charCount) == true) {
      return alert("Invalid Input.");
    }
  var lowerCase = confirm("Do you want lowercase letters?");
    if (lowerCase === true) {
      randomFuncArr.push(randomLower);
    }
  var upperCase = confirm("Do you want uppercase letters?");
    if (upperCase === true) {
      randomFuncArr.push(randomUpper);
    }
  var num = confirm("Do you want numbers?");
    if (num === true) {
      randomFuncArr.push(randomNumber);
    }
  var specialChar = confirm("Do you want special characters?");
    if (specialChar === true) {
      randomFuncArr.push(randomSpecial);
    }
    else if (lowerCase === false && upperCase === false && num === false && specialChar == false) {
      return alert("Please select valid characters.")
    }

//  Confirm what parameters are for password
  // var passwordText = {
  //   length: charCount,
  //   lower: lowerCase,
  //   upper: upperCase,
  //   number: num,
  //   special: specialChar
  // }
  // console.log(passwordText);

  var password = ""

  var generatePassword = function () {

    for (var i = 0; i < charCount; i++) {
      
      password += randomFunc();
      // console.log(randomFunc())
    }
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // generatePassword function
  var password = generatePassword();
  randomFuncArr.length = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
