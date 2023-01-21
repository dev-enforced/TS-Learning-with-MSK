// Interfaces are yet another way to name object types
interface car {
  make: string;
  sedan: boolean;
  model: string | number;
  accelerate: () => void;
  decelerate: () => void;
}

function ShowCarDetails(carGiven: car) {
  console.log(`My car is ${carGiven.make}`);
  console.log(`My car was launched in ${carGiven.model}`);
}

ShowCarDetails({
  make: "Corolla",
  sedan: false,
  model: "2009",
  accelerate: () => {
    console.log("Car has decelerated");
  },
  decelerate: () => {
    console.log("Car has accelerated");
  },
});
