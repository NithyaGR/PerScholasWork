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
/*
// Homework 7
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
 function findLongestWord(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }

   function findLongestWord(arr) {
    return arr.reduce((a, b) => a.length < b.length ? b : a, "");
  }
   console.log(findLongestWord(["bloomburg", "hello"]));
   //console.log(findLongestWord(['boop', 'software ', 'helloooooooooo']));
*/
