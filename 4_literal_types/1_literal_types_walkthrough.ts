const bike1 = "BMW";
// Here in L1, TS infers the type of bike1 as a literal BMW because it is a
// variable declared through const where the value stored cannot be changed
let bike2 = "Honda";
// Here in L4, TS infers the type of bike2 as a string as for variables declared
// through let the values can be changed

// So let's see about how to declare literal types
type BikeLiteral = "Hyundai" | "Honda";
let Bike: BikeLiteral = "BMW";
// Now here in L10 you can see that we have declared a variable that takes
// BikeLiteral as its type which can only store either Hyundai or Honda within
// it.Else on storing other values it might throw an error.

type BooleanLiteral = boolean | "Bike1" | "Bike2";
let Bike3: BooleanLiteral = false;
// Here we can use unions too to generate literal types

// NOTES:
// 1) Literal Type: Specific type that can take only allowed values.
// 2) We can create a mix and match of literal types & non literal types.
