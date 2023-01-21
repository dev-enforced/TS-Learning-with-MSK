let givenData: number = 2000;
// givenData="issue"; this will throw an error on uncommenting as we
// are storing string in the number typed variable

// Suppose if we want our variable to take string too or any other value of
// different types

let thisData: any = 220;
thisData = true;

// There might be certain situations while developing projects where
//  you don't want the values stored inside a variable to cause typechecking
//  errors

// Variables with any type can also be stored in variables of a a particular
// type

const everyCar: any = {
  model: "Renault",
  make: 600,
  sedan: false,
};

// We can do anything with any;
everyCar.accelerate = () => console.log("accelerated");

const specificCar: number = everyCar;
// Despite specificCar can store numbers, TS is not throwing any errors
// On storing any type variables in the number typed variable
