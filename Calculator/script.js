let currentInput = "";
let currentOperation = "";
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById(
    "input-field"
  ).value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperator(operator) {
  if (currentInput === "") return;
  //   if(previousInput !== ""){
  //     Calculate()
  //   }
  previousInput = currentInput;
  currentInput = "";
  currentOperation = operator;
  document.getElementById(
    "input-field"
  ).value = `${previousInput} ${currentOperation}`;
}

function Calculate() {
  if (previousInput === "" || currentInput === "") return;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);
  //   previousInput = ""
  //   currentInput = ""
  let result;

  switch (currentOperation) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      if (curr === 0) {
        alert("Cannot divide by Zero");
        break;
      }
      result = prev / curr;
      break;
    default:
      return;
  }
  currentInput = result.toString();
//   currentOperation = "";
//   previousInput = "";
  console.log(typeof previousInput);
  console.log(previousInput);

  document.getElementById("input-field").value = `${result}`;
}

function allClear() {
  document.getElementById("input-field").value = "0";
  currentInput = "";
  previousInput = "";
  currentOperation = "";
}
