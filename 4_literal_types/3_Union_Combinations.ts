// NOTES
// 1) One can use unions to generate types of several literal keywords
// 2) For example boolean type is an alias for the union true|false

// Creating a literal type that takes few strings
let car: "Lamborgini" | "Ford" | "Honda" = "Honda";
// car = "BMW";
// Line 7 throws an error that value of BMW cannot be stored inside car

