const foo = () => {
  console.log("I'm in the function foo");
}
const woo = ()=> {
  console.log("I'm in the function woo");
}
const bar = (param1) => { //param1 is a value in the day3CodeAlong.js
  console.log("Executing call back");
  param1();
}
// foo();
// bar(); This will throw error message as param1 is not a function. Actually, param1 is a parameter of the function
// inside the bar pointer.
// bar(foo);//not bar(foo())
 bar(foo);
 bar(woo);
