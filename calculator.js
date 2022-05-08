const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";


function press(num) {
  num1 += num;
  display.innerText = num1;
}

function setOP(key) {
  op = key;
  num2 = num1;
  num1 = "";
}

function clr() {
  num1 = "";
  num2 = "";
  op = "";
  display.innerText = "0";
}

function calculate() {
  let a = parseFloat(num2);
  let b = parseFloat(num1);
  var res = 0;
  switch(op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  num1 = res;
  op = "";
  display.innerText = res;
}