/*
 * searching algorithm - Binary search
 */

 var arr=[12,23,34,45,56,67,78,89,90];
 var toFind = 45;
 var startIndex = 0, midIndex=0;
 var endIndex = arr.length-1;
 var found = false;

 while(startIndex<=endIndex){
   midIndex = parseInt((startIndex+endIndex)/2);
   console.log("midIndex is "+midIndex);
   if (arr[midIndex] == toFind){
     found = true;
     console.log(found);
     break;
   }
   else if(arr[midIndex]<toFind){
     startIndex = ++midIndex;
   }
   else {
     endIndex = --midIndex;
   }
 }
 if (found)
     console.log("The given element "+toFind+" is found in the array");
else {
  console.log("The given element "+toFind+" is NOT in the array");
}
