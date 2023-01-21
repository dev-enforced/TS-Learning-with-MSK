// NOTES
// In types for an object, TS will infer general types for its properties not the literals
// You can force this with the "as" keyword for properties

type Ecommerce = "Flipkart";
let company1: Ecommerce = "Amazon";
// Here in L6, you will get an error saying that in variables with Ecommerce type
// only Flipkart can be stored

const company2 = "Amazon";
// Here TS will infer the type as Amazon for company2

// Let's see for objects
const comapnyObject = {
  name: "Zivame",
  dateOfInception: 2011,
};
// Here TS infers a general type instead of literal type for the properties
// name and dateofInception as string and number

// How can we enforce TS to infer literal types for object properties
// Here the keyword as comes to our rescue
const companyObject2 = {
  name: "Zivame" as "Zivame" | "Myntra",
  dateOfInception: 2011 as 2011 | 2008,
};

companyObject2.name = "Myntra"; //No errors thrown on modifying it with the allowed literal types
companyObject2.dateOfInception = 2009; //Here errors are thrown on modifying the object value incorrectly
