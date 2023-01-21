// Notes
// 1) In JS, a function that doesn't return any value will implicitly return
// the value undefined
// 2) "void" and "undefined" are not the same thing in Typescript
//  void is a special type undefined is a primitive type


function displayCarBrandV1(): void {
  console.log("This is the car brand");
}
const functionDetails = function (): void {
  console.log("this is the function details");
};
