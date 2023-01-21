let a: unknown = document.getElementById("unknown");
function getLatestCarModel(models: number[]) {
  return models[0];
}
function getLatestCarModelV1(models: any) {
  return models[0];
  // See with any no errors are thrown
}

function getLatestCarModelV2(models: unknown) {
  return models[0];
}

// For Unknown
// 1) It is similar to "any" type
// 2) Bit more safer to use than "any"

// Whenever you are in a situation to use any type
// Question yourself about the purpose of using any through the above
// testcases, if it satisfies any one of them then better to go ahead with
// unknown
