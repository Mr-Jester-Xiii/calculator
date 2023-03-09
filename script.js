let x = 0;
let y = 0;
let operator = "";
let previousValue = "";
let currentValue = "";
let result = "";
let topDisplay = "";
let bottomDisplay = "";


const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const decimalButton = document.querySelector(".decimal-btn");
const equalsButton = document.querySelector(".equals-btn");

const displayTop = document.querySelector(".display1");
const displayBottom = document.querySelector(".display2");

const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".backspace-btn");



numberButtons.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.getAttribute("data-num"))
    displayBottom.textContent = currentValue;
  }));

operatorButtons.forEach((opButton) => {
  opButton.addEventListener("click", () => {
    let buttonValue = opButton.getAttribute("data-num");
    operator = buttonValue;
    topDisplay += " " + buttonValue + " ";
    displayTop.textContent = topDisplay;
    
  })
})

decimalButton.addEventListener("click", () => {
  if(topDisplay.includes(".")) {
    // Do nothing
  } else {
    let buttonValue = decimalButton.getAttribute("data-num");
    topDisplay += buttonValue;
    displayTop.textContent = topDisplay; // Only allows for one decimal point in display.
    // needs changing to allow one per number.
  }
})

function handleNumber(num) {
  if(currentValue.length <= 5){
    currentValue += num;
  }
}

equalsButton.addEventListener("click", () => {
  // Function for equals
})

clearBtn.addEventListener("click", () => {
  clearCalc();
})

function addNum(x, y) {
  result = parseFloat(x) + parseFloat(y);
  return result;
}

function subtractNum(x, y) {
  result = parseFloat(x) - parseFloat(y);
  return result;
}

function multiplyNum(x, y) {
  result = parseFloat(x) * parseFloat(y);
  return result;
}

function divideNum(x, y) {
  if ((x == 0) || (y == 0)) {
    result = "Nice try!";
  } else {
  result = parseFloat(x) / parseFloat(y);
  }
  return result;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      addNum(x, y);
      break;

    case "-":
      subtractNum(x, y);
      break;

    case "*":
      multiplyNum(x, y);
      break;

    case "/":
      divideNum(x, y);
      break;
  }
  return Math.round((result + Number.EPSILON) * 10000) / 10000; // Rounds result to 4 decimal places.
}

function clearCalc() {
  x = 0;
  y = 0;
  num = "";
  operator = "";
  result = "";
  topDisplay = "";
  bottomDisplay = "";
  currentValue = "";
  previousValue = "";
  displayTop.textContent = topDisplay;
  displayBottom.textContent = bottomDisplay;
}

function test() {
  x = prompt("Enter x:", "");
  console.log(x);
  operator = prompt("Enter operator:", "")
  console.log(operator);
  y = prompt("Enter y:", "");
  console.log(y);
  operate(operator, x, y);
  alert(result);
}

//test();
