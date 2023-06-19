export const isEmpty = (str) => {
  return str === undefined || str === null || str === '';
};

export const addPrefixToProductName = (str) => {
  // do stuff...
  return `them cai gi do vao day ${str}`;
};

export const convertToVND = (str) => {
  // do stuff...
  return str;
};

export const calTotalPrice = (price, quantity, tax) => {
  // do stuff...
  return price * quantity * tax;
};
