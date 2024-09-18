import './styles/main.css';
import { initializeTheme } from './js/theme';
import {
  clear,
  appendNumber,
  chooseOperation,
  compute,
  updateDisplay,
  changeOperandSign,
} from './js/calculator';
import { showErrorDialog, initializeErrorHandler } from './js/errorHandler';
import { OPERATIONS, EQUAL_SIGN, CHANGE_SIGN, CLEAR_SIGN } from './js/constants';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.querySelector('.display');
  initializeTheme();
  initializeErrorHandler();

  document.querySelectorAll('.controls button').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.innerText;

      try {
        if (value === CLEAR_SIGN) {
          clear();
        } else if (value === CHANGE_SIGN) {
          changeOperandSign();
        } else if (value === EQUAL_SIGN) {
          compute();
        } else if (OPERATIONS.includes(value)) {
          chooseOperation(value);
        } else {
          appendNumber(value);
        }
      } catch (error) {
        showErrorDialog(error.message);
        clear();
      }

      updateDisplay(display);
    });
  });
});
