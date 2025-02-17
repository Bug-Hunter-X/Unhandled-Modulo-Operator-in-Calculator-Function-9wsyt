function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot modulo by zero');
  }
  return a % b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    case '%':
      return modulo(a, b);
    default:
      throw new Error('Invalid operator');
  }
}

console.log(operate('+', 5, 3)); // 8
console.log(operate('-', 10, 4)); // 6
console.log(operate('*', 7, 2)); // 14
console.log(operate('/', 15, 3)); // 5
console.log(operate('%', 15, 4)); // 3
