// interface ResponseTuple {
//   length: 4;
//   0: string;
//   1: number;
//   2: boolean;
//   3: string[];
// }
// Explore why it doesn't work with interfaces
type ResponseTuple = [string, number, boolean, string[]];
const apiResponse: ResponseTuple = [
  "India",
  1947,
  true,
  ["Infosys", "HCL", "Wipro", "Mindtree"],
];

function logIndianCompanies(apiResponse: ResponseTuple) {
  const [country, year, isDeveloping, companies] = apiResponse;

  console.log("I am in " + country);
  console.log("India got freedom in " + year);
  if (isDeveloping) {
    console.log("India is a developing country");
  }
  console.log("Below are some of the IT companies");
  console.log("------------------------");
  companies.forEach((company) => {
    console.log(company);
  });
}

logIndianCompanies(apiResponse);
