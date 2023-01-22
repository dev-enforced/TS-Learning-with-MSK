// The "as" keyword
// 1) We can assert certain types when Typescript doesn't understand
// what type needs to be assigned

const myCanvas = document.getElementById("this-canvas") as HTMLCanvasElement;
// 2) Here TS cannot understand the type of the element returned
// by document.getElementById but we can
// here it will be a canvas element HTMLCanvasElement
// 3) We need to assert the type to HTMLCanvasElement because TS doesn't know
// 4) Type assertions are also cleared when compiled to JS
