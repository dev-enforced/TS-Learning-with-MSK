// Consider the following JS function that takes an object as a parameter

function generateCarDetailsV4({ make, model }) {
  console.log(`My car was launched in ${model}`);
  console.log(`My car manufacturer is ${make}`);
}

// Let's convert it to Typescript

function generateCarDetailsV4inTs(
  carInput: /*carInput is the actual input we are passing here*/ {
    make: string;
    model: number;
  } /*And for annotating with types we are using this object part*/
) {
  const { model, make } = carInput;
  console.log(`My car was launched in ${model}`);
  console.log(`My car manufacturer is ${make}`);
}

// We can even simplify it further by introducing type aliases or interfaces
type Car = {
  model: number;
  make: string;
};
interface CarInput {
  model: number;
  make: string;
}

// Let's suppose one of the parameters in the object is optional then what happens

// How to let it know then for that purpose we can use

function generateCarDetailsV5inTs(
  carInput: /*carInput is the actual input we are passing here*/ {
    make?: string /*Here you would get to see the question mark that makes this property as optional altogether*/;
    model: number;
  } /*And for annotating with types we are using this object part*/
) {
  const { model, make } = carInput;
  console.log(`My car was launched in ${model}`);
  // Suppose if you want to execute a method on this
  // optional variable then you can use the ? operator
  // to remove the error coming along or type narrowing for the same.

  // console.log(`My car manufacturer is ${make.toUpperCase()}`);
  // Some error comes in L47 so to remove that you can use below process for it

  console.log(`My car manufacturer is ${make?.toUpperCase()}`);
  if (typeof make === "string") {
    console.log(`My car manufacturer is ${make.toUpperCase()}`);
  }
}
