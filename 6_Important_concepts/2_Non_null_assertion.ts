// Non Null Assertion Operator (Postfix - !)

// When you know that in a particular file that a null value won't be passed to
// a function that takes null values
// Then you can avoid the error from TS part through postfix operator `!`
const viewDetails = (model: number | null) => {
  console.log(model!.toString());
  // In strict mode TS throws an error saying that it is possibly null
  // That's why we cannot use toString method on it
};
viewDetails(2021);

// Suggested to do only when required not to use it every time
