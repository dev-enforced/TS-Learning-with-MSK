// Since interfaces are used most of the time in
// organsation level projects, then let's try declaring tuples using interfaces too

interface BikeDetailsTuple {
  length: 3;
  0: "Yamaha" | "Honda";
  1: number;
}
// So this is the format of declaring a tuple using interface where
// we can declare the length of the tuple and the types of the items inside it
const firstBike: BikeDetailsTuple = ["Honda", 2001, true];

// TS will automatically throw an error whenever the given tuple gets altered
// with its length or a value of another type is stored at a particular index 
// which doesn't allow that type

