import { add, subtract, multiply, divide, percentage, changeSign } from './operations';
import {
  PLUS_SIGN,
  MINUS_SIGN,
  MULTIPLY_SIGN,
  DIVIDE_SIGN,
  PERCENTAGE_SIGN,
  DOT_SIGN,
} from './constants';

let currentOperand = '';
let previousOperand = '';
let operation = undefined;

export function clear() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
}

export function appendNumber(number) {
  if (number === DOT_SIGN && currentOperand.includes(DOT_SIGN)) {
    return;
  }
  currentOperand = currentOperand.toString() + number.toString();
}

export function chooseOperation(passedOperation) {
  if (currentOperand === '') {
    return;
  }

  if (passedOperation === PERCENTAGE_SIGN) {
    currentOperand = percentage(currentOperand);
    return;
  }

  if (previousOperand !== '') {
    compute();
  }

  operation = passedOperation;
  previousOperand = currentOperand;
  currentOperand = '';
}

export function changeOperandSign() {
  if (currentOperand === '' && previousOperand === '') {
    return;
  }

  if (currentOperand === '' && previousOperand !== '') {
    previousOperand = changeSign(previousOperand);
  } else {
    currentOperand = changeSign(currentOperand);
  }
}

export function compute() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) {
    return;
  }

  switch (operation) {
    case PLUS_SIGN:
      result = add(prev, current);
      break;
    case MINUS_SIGN:
      result = subtract(prev, current);
      break;
    case MULTIPLY_SIGN:
      result = multiply(prev, current);
      break;
    case DIVIDE_SIGN:
      result = divide(prev, current);
      break;
    default:
      return;
  }

  currentOperand = result;
  operation = undefined;
  previousOperand = '';
}

export function updateDisplay(display) {
  display.innerText = currentOperand;
  if (operation != null) {
    display.innerText = `${previousOperand} ${operation} ${currentOperand}`;
  }
}
