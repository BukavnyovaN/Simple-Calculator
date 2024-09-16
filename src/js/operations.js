export const add = (a, b) => Number(a) + Number(b);

export const subtract = (a, b) => Number(a) - Number(b);

export const multiply = (a, b) => Number(a) * Number(b);

export const divide = (a, b) => {
  if (Number(b) === 0) {
    throw new Error('Division by zero');
  }
  return Number(a) / Number(b);
};

export const percentage = (a) => Number(a) / 100;

export const changeSign = (a) => -Number(a);
