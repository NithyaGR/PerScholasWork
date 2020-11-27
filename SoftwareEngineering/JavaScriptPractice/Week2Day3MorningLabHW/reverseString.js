/*
 * This is to find a reverse of the given string
 */
 function reverseString(string){
   var revString="";
   var length = string.length;
   console.log(length-1);
   for(i=(length-1); i>=0;i--){
     revString=revString+string.charAt(i);
     }
   return revString;
 }
 /*
  * Adding my functon into String object
  */

  String.prototype.reverseThisString = function () {
    var length = this.length;
    var reverseString="";
    for(i=(length-1); i>=0; i--){
      reverseString = reverseString+this.charAt(i);
    }
    return reverseString;
};
    console.log(reverseString("abcde"));
    console.log("PerScholas".reverseThisString());
