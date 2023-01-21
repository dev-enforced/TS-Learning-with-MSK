// Suppose if we want our variables to have types that can be object related as well
// as primitive types and literals to

interface Car {
  make: string;
}

let selectedCar: Car | number | "Volkswagen" = {
  make: "Toyota",
};

selectedCar = "Volkswagen";
// See no errors are coming and the selectedCar variable
// gets more flexible through unions in storing different types of values

selectedCar = 2008;
