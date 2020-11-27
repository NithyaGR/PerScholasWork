function theSum(num1, num2){
  return num1+num2;
}
var sum;
console.log(theSum(15,20));


function useGas(){
var moneyPaid = 100;

function ps(){
  var moneyPaid = 200;
  console.log("In the ps ");
}
  ps();
}
useGas();
//console.log(useGas());//Here it is undefined
