import './styles/main.css';
import { initializeTheme } from './js/theme';
import { add, subtract, multiply, divide, percentage, changeSign } from './js/operations';

let currentOperand = '';
let previousOperand = '';
let operation = undefined;

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  initializeTheme();

  document.querySelectorAll('.controls button').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.innerText;

      if (value === 'AC') {
        clear();
      } else if (value === '+/-') {
        currentOperand = changeSign(currentOperand);
      } else if (value === '=') {
        compute();
      } else if (['+', '-', '*', '÷', '%'].includes(value)) {
        chooseOperation(value);
      } else {
        appendNumber(value);
      }

      updateDisplay(display);
    });
  });
});

function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
}

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand = currentOperand.toString() + number.toString();
}

function chooseOperation(op) {
  if (currentOperand === '') {
    return;
  }

  if (op === '%') {
    currentOperand = percentage(currentOperand);
    return;
  }

  if (previousOperand !== '') {
    compute();
  }

  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) {
    return;
  }

  switch (operation) {
    case '+':
      result = add(prev, current);
      break;
    case '-':
      result = subtract(prev, current);
      break;
    case '*':
      result = multiply(prev, current);
      break;
    case '÷':
      result = divide(prev, current);
      break;
    default:
      return;
  }

  currentOperand = result;
  operation = undefined;
  previousOperand = '';
}

function updateDisplay(display) {
  display.innerText = currentOperand;
  if (operation != null) {
    display.innerText = `${previousOperand} ${operation} ${currentOperand}`;
  }
}
