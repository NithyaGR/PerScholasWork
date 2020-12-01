function maxofTwoNos(num1, num2){
    return (Math.max(num1, num2));

}

function maxNo(num1, num2, num3){
   return (Math.max(num1,num2,num3));
}

function max(array){

  var max= array[0];
  console.log(max);
  console.log(array.length);
  for (i=1; i<array.length; i++){

     if (max < array[i])
        max = array[i];

   }
   console.log(max);
   return max;
}
var array = [10,3,-34,45];
var big = max(array);
console.log("Bigger number in the array is "+big);
console.log(maxofTwoNos(45,-56));
console.log(maxNo(34,45,56));
