/*
This functon to add all the elements of array
*/

function sumArray(array){
  var sum=0;
  for(i=0;i<array.length;i++){
    sum=sum+array[i];
  }
  return sum;
}
function multiplyArray(array){
  var product=1;
  for(i=0;i<array.length;i++){
    product = product*array[i];
  }
  return product;

}
var myArray = [1,2,3,4];
console.log(sumArray(myArray));
console.log(multiplyArray(myArray));
