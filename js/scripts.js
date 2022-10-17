const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));


function subtract(number1, number2) {
  return number1 - number2;
}

function add(number1, number2) {
  return addIntSum = number1 + number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return  number1 * number2;
}

window.alert( "The addition of your numbers " + number1 + '+' + number2 + " equals " + add(number1, number2) + ". The subtraction of " + number1 + - + number2 + ". equals " + subtract(number1, number2)+ ". The division of " + number1 + "/" + number2 + " equals " + divide(number1, number2) + ". The multiplication " + number1 + "*" + number2 + " equals " + multiply(number1, number2) + ".")