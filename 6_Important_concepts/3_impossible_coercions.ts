// TypeScript only allows type assertions which convert to a more specific 
// or less specific version of a type.
// Helps avoid impossible coercions

const bike5 = "Ford" as number;

// Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other
// . If this was intentional, convert the expression to 'unknown' first.

//* possible fixes
const bikeFix1 = "Ford" as any as number;
const bikeFix2 = "Ford" as unknown as number;

// Suggested to do only when required not to use it every time