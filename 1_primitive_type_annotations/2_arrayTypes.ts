// Notes related to array Type
// 1) Can be declared by adding square brackets [] to type names.

const cars: string[] = ["Hyundai", "Volvo", "BMW"];
const luckyNumbers: number[] = [1, 7, 2];
const answers: boolean[] = [false, true];

function printCarModels(models: number[]): number {
  models.forEach((model) => {
    console.log(model);
  });
  let upcomingModel: number = models[0] + 4;
  return upcomingModel;
}
console.log(printCarModels([2021, 2019, 2017]));
