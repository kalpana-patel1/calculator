function Addition() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let add = num1 + num2;
  let result = document.getElementById("result");
  result.value = add;
}

function Subtraction() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sub = num1 - num2;
  let result = document.getElementById("result");
  result.value = sub;
}
function Multiplication() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let mul = num1 * num2;
  let result = document.getElementById("result");
  result.value = mul;
}
function Division() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  if (num2 == 0) {
    document.getElementById("result").value = "Error: Division by zero";
  }
  let div = num1 / num2;
  let result = document.getElementById("result");
  result.value = div;
}
function Clear() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").value = "";
}
