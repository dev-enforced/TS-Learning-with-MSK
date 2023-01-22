// Rest parameters in tuples
type TupleWithRest = [number | string, string, ...number[]];

// No sense of specifying rest parameters in functions in between
// must be specified at the end

function generatingRestParameters(givenArray: [number, string, ...number[]]) {
  console.log(givenArray[4]);
}

generatingRestParameters([1, "2", 4, 5, 6]);
