// Read only tuples: Means that values of the tuple cannot be modified
// after they are declared

type RaceCarTuple = readonly [number, number];
const RaceCar: RaceCarTuple = [21, 10];

// Error cannot assign to index 1 because it is a read only property
// on uncommenting line 9
// RaceCar[1]=45;
