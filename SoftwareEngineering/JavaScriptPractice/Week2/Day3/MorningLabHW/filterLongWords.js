/*
 * This is to find the longest word from given array of words and
 * compare its charaters (letters) with the given number and
 * Return the array of words whose lengths are more than the givien number.
 */


function filterLongWords(stringArray, number){
    var newArray = [];
    var count=0;
    console.log(stringArray.length);
    for (i=0; i<stringArray.length; i++){
      if(stringArray[i].length>number){

        newArray[count]=stringArray[i];
        count++;
      }
    }
    return newArray;
  }
  //calling from main
  var myArray= ["one", "twenty", "some amount","two", "some billions"];
  var myNewArray=filterLongWords(myArray, 5);
  console.log(myNewArray);
var arr = [];
console.log(arr.length);

console.log("***************************");
// let no = 6 // i assigned value sets filter limit in function "word"
// var arrayInput = ["I","struggle","with","coding","from","time","to","time"]; //created varieable named arrayInput and assigned it words as the input source
// var arrayCleaned = arrayInput.filter( function( filterLongWords1 ) {
//   return filterLongWords1.length >= i;
// });

// Homework 8
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
  function filterLongWord(complete, i) {
     let word = [];
     for(let z=0; z < complete.length; z++){
         if( complete[z].length > i) {
            word.push(complete[z]);
         }
     }
     return word;
 }
 console.log(filterLongWord(["tennesse", "cameroon", "chelsea", "camouflage"],7))
