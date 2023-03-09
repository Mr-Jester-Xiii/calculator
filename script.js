let x = "";
let y = "";
let operator = "";
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

numberButtons.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.getAttribute("data-num"));
    displayBottom.textContent = y;
  })
);

operatorButtons.forEach((opButton) =>
  opButton.addEventListener("click", function (e) {
    handleOperator(e.target.getAttribute("data-num"));
    displayTop.textContent = x + "" + operator;
    displayBottom.textContent = y;
  })
);

equalsButton.addEventListener("click", () => {
  if (x != "" && y != "") {
    operate(operator, x, y);
    y = result;
    displayBottom.textContent = y;
    displayTop.textContent = "";
  } else {
    // Do Nothing
  }
});

decimalButton.addEventListener("click", function (e) {
  if (y.includes(".")) {
    // Do Nothing
  } else {
    y += e.target.getAttribute("data-num");
    displayBottom.textContent = y;
  }
});

backspaceBtn.addEventListener("click", () => {
  y = y.substring(0, y.length-1);
  displayBottom.textContent = y;
})

function handleNumber(num) {
  if (y.length <= 5) {
    y += num;
  }
}

function handleOperator(op) {
  operator = op;
  x = y;
  y = "";
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}

clearBtn.addEventListener("click", () => {
  clearCalc();
});

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
  if (x == 0 || y == 0) {
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
  result = roundNumber(result);
}

function clearCalc() {
  x = "";
  y = "";
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
