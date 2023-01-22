// Optional Properties in Tuples can only be allowed at the last index
// A required element cannot follow an optional element

type AirTravelTuple = [number, string, boolean?];
const plane1: AirTravelTuple = [2000, "Airasia", false];

// type AirTravelTupleError = [number?, string, boolean?];

// Explore about optional properties in tuples using interfaces