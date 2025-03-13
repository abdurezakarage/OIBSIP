let display = document.getElementById("display");
let currentNumber = "";
let firstNumber = null;
let operator = null;

function appendNumber(num) {
  if (num === "." && currentNumber.includes(".")) return;
  currentNumber += num;
  display.value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber === "") return;
  if (firstNumber !== null) calculate();
  operator = op;
  firstNumber = parseFloat(currentNumber);
  currentNumber = "";
}

function calculate() {
  if (firstNumber === null || operator === null) return;
  let secondNumber = parseFloat(currentNumber);
  let result;

  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = secondNumber !== 0 ? firstNumber / secondNumber : "Error";
      break;
  }

  display.value = result;
  currentNumber = result.toString();
  firstNumber = null;
  operator = null;
}

function clearDisplay() {
  currentNumber = "";
  firstNumber = null;
  operator = null;
  display.value = "";
}
