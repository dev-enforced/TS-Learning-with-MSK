type ModelNumber = number; // Primitive type alias
function generateCarModel(model: ModelNumber) {
  console.log(model);
}
generateCarModel(209);

type Model = number | string; //Union Type Alias

function generateCarModelV2(modelGiven: Model) {
  console.log(modelGiven);
}
generateCarModelV2("Woww");

type Car = {
  model: number;
  make: string;
  sedan: boolean;
};

function generateCarModelV3(myCar: Car) {
  const { model, make, sedan } = myCar;
  console.log(`My car is ${make}`);
  console.log(`My car was launched in ${model}`);
  if (sedan) {
    console.log(`My car is a sedan`);
  } else {
    console.log(`My car is not a sedan`);
  }
}
generateCarModelV3({ model: 2008, make: "Hyundai", sedan: true });
