/*
 * This is to find the longest word of given set of words
 */

 function longestWord(stringArray){
   var max=stringArray[0].length;
   var logestWord = stringArray[0];
   for (i=1; i<stringArray.length; i++){
     if(max<stringArray[i].length){
       max = stringArray[i].length;
       longestWord = stringArray[i];
     }
   }
   return longestWord;
 }

 var stringArray=["one", "twothousand", "three", "fivehundred"]
 console.log(longestWord(stringArray));
