let x = 0;
let y = 0;
let operator = "";
let result = "";


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
  result = parseFloat(x) / parseFloat(y);
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

// test();