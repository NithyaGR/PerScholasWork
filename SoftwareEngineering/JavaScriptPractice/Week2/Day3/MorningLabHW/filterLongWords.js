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
