function printCarDetails(callback: Function) {
  callback(2021, "Honda");
}
printCarDetails((model: number, make: string) => {
  console.log(`The car is ${make} launched in ${model}`);
});
