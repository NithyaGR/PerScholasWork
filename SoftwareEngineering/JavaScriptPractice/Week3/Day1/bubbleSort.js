
/*
 * Sort the given numbers [5,3,8,4,6] using bubble Sort
 */
 function bubbleSort(arr){
   var temp=0;
   var length = arr.length-1;
   var tempArr = arr;
   var swapped = false;
   do{
     swapped = false;
    for(i=0;i< length; i++){

        if(tempArr[i]>tempArr[i+1]) {
          temp=tempArr[i];
          console.log("The first element i before sorting : "+tempArr[i]);
          tempArr[i]=tempArr[i+1];
          console.log("After sortign the i element is : "+tempArr[i]);
          tempArr[i+1]=temp;
          console.log(tempArr);
          swapped = true;
        }
     }
     length--;
     console.log(tempArr);
   } while(swapped) ;

 }
 var arr = [5,3,8,4,6];
 bubbleSort(arr);
