var generateBtn = document.querySelector("#generate");

var specialCharacters = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCased = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCased = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getRandomCharacter(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomPasswordChar = array[randomIndex];
  return randomPasswordChar;
}

function generatePassword() {
  var passwordLength = prompt("How many characters should the password be?");
  var hasSpecialChars = prompt("Do you want special characters? (y/n)");
  var hasUpperCase = prompt("Do you want uppercase letters? (y/n)");
  var hasLowerCase = prompt("Do you want lowercase letters? (y/n)");
  var hasNumbers = prompt("Do you want numbers (y/n)");

  var passwordOptions = {
    passwordLength: passwordLength,
    hasSpecialChars: hasSpecialChars,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
  };
  var possiblePasswordChars = [];
  var password = [];

  if (passwordOptions.hasSpecialChars === "y" ) {
    possiblePasswordChars = possiblePasswordChars.concat(specialCharacters);
  }
  if (passwordOptions.hasNumbers === "y") {
    possiblePasswordChars = possiblePasswordChars.concat(numbers);
  }
  if (passwordOptions.hasUpperCase === "y") {
    possiblePasswordChars = possiblePasswordChars.concat(upperCased);
  }
  if (passwordOptions.hasLowerCase === "y") {
    possiblePasswordChars = possiblePasswordChars.concat(lowerCased);
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomChar = getRandomCharacter(possiblePasswordChars);
    password.push(randomChar);
  }

  console.log(password.join(""));
  return password.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
