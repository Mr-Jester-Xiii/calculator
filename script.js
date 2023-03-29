let x = "";
let y = "";
let operator = "";
let result = "";
let topDisplay = "";
let bottomDisplay = "";
let equalsPressed = false;
let isSexy = false;
let opSymbol = "";

const numberButtons = document.querySelectorAll(".number-btn");
const operatorButtons = document.querySelectorAll(".operator-btn");
const decimalButton = document.querySelector(".decimal-btn");
const equalsButton = document.querySelector(".equals-btn");

const displayTop = document.querySelector(".display1");
const displayBottom = document.querySelector(".display2");

const clearBtn = document.querySelector(".clear-btn");
const backspaceBtn = document.querySelector(".backspace-btn");

document.addEventListener("keydown", handleKeys);

numberButtons.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.getAttribute("data-num"));
    displayBottom.textContent = y;
    isSexyNumber(y);
  })
);

operatorButtons.forEach((opButton) =>
  opButton.addEventListener("click", function (e) {
    if (y === "") {
      // Do nothing
    } else {
      handleOperator(e.target.getAttribute("data-num"));
      opSymbolHandler(operator);
      displayTop.textContent = x + "" + opSymbol;
      displayBottom.textContent = y;
    }
  })
);

equalsButton.addEventListener("click", () => {
  if (x !== "" && y !== "") {
    operate(operator, x, y);
    y = result;
    x = "";
    displayBottom.textContent = y;
    displayTop.textContent = "";
    equalsPressed = true;
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
  y = y.substring(0, y.length - 1);
  displayBottom.textContent = y;
});

function handleNumber(num) {
  if (equalsPressed === true) {
    clearCalc();
    y += num;
    equalsPressed = false;
  } else {
    y.length <= 12;
    y += num;
  }
}

function handleOperator(op) {
  if (x !== "" && y !== "" && operator !== "") {
    operate(operator, x, y);
    operator = op;
    x = result;
    y = "";
    displayTop.textContent = x + "" + operator;
    displayBottom.textContent = y;
  } else {
    operator = op;
    x = y;
    y = "";
    equalsPressed = false;
  }
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

  numberCheck(result);
  result = roundNumber(result);
}

function numberCheck(number) {
  if (isNaN(number)) {
    clearCalc();
  }
}

function opSymbolHandler(operator) {
 if (operator === "*") {
  opSymbol = "X"
 }
 if (operator === "/") {
  opSymbol = "÷"
 }
 if (operator === "+") {
  opSymbol = "+"
 }
 if (operator === "-") {
  opSymbol = "-"
 }
}

function isSexyNumber(num) {
  if (num === "5318008") {
    displayTop.textContent = "Nice!";
    displayBottom.classList.add("sexynumber");
    isSexy = true;
  } else if (isSexy === true) {
    displayBottom.classList.remove("sexynumber");
    // displayBottom.classList.add("display2");
  } else {
    // Do nothing
  }
}

function handleKeys(e) {
  //Numbers
  if (e.key >= 0 && e.key <= 9) {
    if (equalsPressed === true) {
      clearCalc();
      y += e.key;
      displayBottom.textContent = y;
      isSexyNumber(y);
      equalsPressed = false;
    } else if (y.length <= 12) {
      y += e.key;
      displayBottom.textContent = y;
      isSexyNumber(y);
    }
  }

  //Decimal
  if (e.key === ".") {
    if (y.includes(".")) {
      // Do Nothing
    } else {
      y += ".";
      displayBottom.textContent = y;
    }
  }

  //Equals
  if (e.key === "=" || e.key === "Enter") {
    if (x !== "" && y !== "") {
      operate(operator, x, y);
      y = result;
      x = "";
      displayBottom.textContent = y;
      displayTop.textContent = "";
      equalsPressed = true;
    } else {
      // Do Nothing
    }
  }

  //Backspace
  if (e.key === "Backspace") {
    y = y.substring(0, y.length - 1);
    displayBottom.textContent = y;
  }

  //Operators
  if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
    if (y === "") {
      // Do nothing
    } else {
      handleOperator(e.key);
      opSymbolHandler(operator)
      displayTop.textContent = x + "" + opSymbol;
      displayBottom.textContent = y;
    }
  }
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
  displayBottom.classList.remove("sexynumber");
  opSymbol = "";
}
