// Type alias of a Union
type Model = number | string;

/**
 *
 * @param make - The plane manufacturer
 * @param model - The year of launch
 * @param isJet - Describes whether the plane is a jet or not
 * @param countries - List of countries supported
 *
 * @return void (nothing)
 */

interface Plane {
  make: string;
  model: Model;
  isJet: boolean;
}
function printPlaneDetails(planeInput: Plane, listCountries: Function): void {
  const { make, model, isJet } = planeInput;
  console.log("Plane manufacturer is " + make.toUpperCase());
  console.log("Plane's next model is " + model);
  if (isJet) {
    console.log("Plane is a Jet");
  } else {
    console.log("Plane is not a Jet");
  }
  console.log("The plane flies in the below countries");
  console.log("----------------------");
  listCountries(["IN", "US", "UK"]);
}

printPlaneDetails(
  { make: "Indian Airline", model: 2021, isJet: false },
  (countries: string[]) => {
    countries.forEach((everyCountry) => {
      console.log(everyCountry);
    });
  }
);
