/**
 *
 * @param make - The plane manufacturer
 * @param model - The year of launch
 * @param isJet - Describes whether the plane is a jet or not
 * @param countries - List of countries supported
 *
 * @return void (nothing)
 */

type model = number | string;

type plane = {
  make: string;
  model: Model;
  isJet: boolean;
  countries: string[];
};

function PrintPlaneDetails(myPlane: plane): void {
  const { make, model, isJet, countries } = myPlane;
  console.log("Plane manufacturer is " + make.toUpperCase());
  console.log("Plane was launched in " + model);

  if (isJet) {
    console.log("Plane is a Jet");
  } else {
    console.log("Plane is not a Jet");
  }

  console.log("The plane flies in the below countries");
  console.log("----------------------");
  countries.forEach((country) => {
    console.log(country);
  });
}

PrintPlaneDetails({
  make: "Indian Airline",
  model: 2021,
  isJet: false,
  countries: ["IN", "US", "UK"],
});
