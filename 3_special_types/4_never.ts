import { exit } from "process";

function crashNeverProgram(model: number): never {
  throw new Error("crash the 4_never program");
}
// This function crashNeverProgram does not return anything
// But that doesn't mean its type should be void,
// Here we are throwing an exception which means the function never returns
// anything hence the value never

// Scenario 2: When the function terminates the program, there also
// a value is never returned

function exitProcess(process: number) {
  exit(process);
}

// Scenario 3: When no options are left in a union
function displayCarInfo(brand: string | number) {
  if (typeof brand === "string") {
    console.log(brand.toUpperCase());
  } else if (typeof brand === "number") {
    console.log(brand++);
  }else{
    // Here the type of brand is never
    // When nothing is left in the union then the never type comes into picture
  }
}
