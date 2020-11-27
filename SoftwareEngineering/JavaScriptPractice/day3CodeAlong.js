// function helloWorld(){
//   return "Hello World";
// }
//
// console.log(helloWorld());
// hello = ()=>{
//   return "Hello World";
// }
// console.log(hello());
// hello = (val)=>"Hello "+val;
// console.log(hello("Nithya"));
//function declaration
function calculate(x, y, z){

  return (x+y+z)/3;
}
//calling the function from main code
console.log(calculate(5,6,7));
// Arrow function

calculate = (val1, val2, val3) => (val1+val2+val3)/3;

console.log(calculate(11,12,13));
