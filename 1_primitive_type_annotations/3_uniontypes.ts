function printCarModel(modelGiven: number | string) {
  console.log("My car model is ", modelGiven);
}
printCarModel(2000);
printCarModel("wow");

// When the type members do not support common operations

function printCarModelV2(modelGiven: number | string) {
  if (typeof modelGiven === "string") {
    console.log("My car model is " + modelGiven.toUpperCase());
  } else {
    console.log("My car model is " + modelGiven++);
  }
}

printCarModelV2(401);

// When the type members do support common operations

function sliceTheInput(inputGiven: string[] | string) {
  return inputGiven.slice(0, 3);
}
console.log(sliceTheInput("Hello"));
