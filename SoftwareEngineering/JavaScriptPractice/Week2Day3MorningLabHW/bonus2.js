/*
 * This is to take a string as a parameter and
 * returns the characters and its occurrences as an object
 */

 function charOccurenceObject(stringInput){

   var charArray = [];
   var valueArray =[];

   for(let i=0;i<stringInput.length; i++){
     charArray[i]=stringInput.toLowerCase().charAt(i);
     valueArray[i]=findOccurence(stringInput, charArray[i]);

   }

   return valueArray;
 }

 function findOccurence(stringValue, charValue){
    var count=0;
    for(let i=0;i<stringValue.length; i++){
      if(stringValue.charAt(i)=== charValue){
        count++;
      }
    }
    return count;

 }
function alphabeticalOrder(stringInput){
  stringInput=stringInput.toLowerCase();
  var tempString="";
  for (j=97;j<=122;j++){
    //console.log(String.fromCharCode(j));
    for(i=0;i<stringInput.length;i++){
      if((stringInput.charAt(i))=== String.fromCharCode(j)){
        tempString = tempString + String.fromCharCode(j);
      }
    }
  }
  return tempString;
}
function convertArray(stringValue){
  var charArray = [];
  for(i=0;i<stringValue.length; i++){
    charArray[i]=stringValue.charAt(i);
  }
  return charArray;
}

function createObject(stringValue){
  var alphaString = alphabeticalOrder(stringValue);
  var valueArray = charOccurenceObject(alphaString);
  var charArray = convertArray(alphaString);
  var object = {};
  for(i=0;i<charArray.length; i++){
    object[charArray[i]]= valueArray[i];
  }
  return object;

}

 var object = createObject("PerScholas");
 console.log(JSON.stringify(object));
