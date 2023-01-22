// Array assertion inference
let carInformation = ["BMW", 2021];
// Here TS infers that carInformation variable is an array that stores only
// strings and numbers

//Now in order to make the above array as read only tuple
// By using the as keyword with a constant assertion. Can mouse
// over the variable below to see
let carInformationModified = ["BMW", 2021] as const;

function printCarDetails([make, model]: [string, number]) {
  console.log(model, make);
}
// printCarDetails(carInformationModified);
// Now on uncommenting L14 TS throws an error saying that while calling the function saying
// that carInformationModified is a readonly variable which cannot be assigned
// to mutable types [string,number]. So TS refuses to take it inside the function
// which takes mutable parameters because inside the function these tuple variables
// can be mutated
