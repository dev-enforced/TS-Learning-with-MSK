// We can define array types that contain values of a specific type
type numberArray = number[];

// const givenNumbers: numberArray = [2, 4, 9, "as"];

// So in an array we are able to store values of a specific type only
// While adding values of different types TS throws an error specifying
// about not adding values of this type

// Suppose we want to have an array type where we want values of different
// types as well as specify the number of items in an array
// Such a format of array is called tuple in typescript

type CarDetailsTuple = [number, string, boolean];
const futureCar: CarDetailsTuple = [2020, "Chevrolet", false];

// If we try to alter the array with tuple type other than that
// , TS will still give an error

// const myCar2:CarDetailsTuple=["Cheverolet",2020,true];
// const myCar2:CarDetailsTuple=[2020,"Cheverolet",true,"woahh"];

// Let's use tuples for functions too
const checkCar = (car: CarDetailsTuple) => {
  const [model, make, isSedan] = car;

  //If we try to add new elements to the tuple at indexes
  //at which the tuple's length gets exceeded then TS will throw an error
  // car[5]="number one"

  //   Uncomment L28 to see more
};

type CarDetailsTuple2 = [number | boolean, string, "BMW" | boolean];
// Can use of literals as well as non literals 
// and specify the number of items too

// Few notes on tuples
// 1) Arrays are just like tuple types
// 2) Tuples know exactly how many items it contains
// 3) Tuples do not have any representation in runtime 
// Which means that we can use tuples during development purposes for our
// understanding and our way of catching errors before runtime
// 4) Tuples also know whch types are at which positions

