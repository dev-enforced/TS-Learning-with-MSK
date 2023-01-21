// You can extend an interface

interface CarInterface {
  make: string;
  model: number;
}

// Interfaces can be inherited by newer ones through extends word

interface MustangInterface extends CarInterface {
  drift: boolean;
}

const MustangCar: MustangInterface = {
  make: "Mustang",
  drift: true,
  model: 1995,
};

// But in case of types we cannot extend it further using the extends word
// Types can be extended further using intersections

type CarType = {
  make: string;
  model: number;
};

type MustangType = CarType & {
  drift: boolean;
};

const MustangTypedCar: MustangType = {
  make: "Mustang",
  drift: false,
  model: 1995,
};
