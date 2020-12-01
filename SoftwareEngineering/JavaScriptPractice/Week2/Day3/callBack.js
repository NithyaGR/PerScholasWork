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
/*
 * You can do below, but you are hardcoding the functions foo(),
 * and woo(), but in callback, we can decide based on our requirement
 * to pass foo or woo- Not harcoded
 */

var car =()=> {
  console.log("Is this call back?");
  foo();
  woo();
}
// foo();
// bar(); This will throw error message as param1 is not a function. Actually, param1 is a parameter of the function
// inside the bar pointer.
// bar(foo);//not bar(foo())
 bar(foo);
 bar(woo);
 car();
