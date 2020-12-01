/* This functions to ceck whether the input charecter is a vowel or not
*/

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    return "Yes";
  else
    return "No";
}
//Calling from main
console.log(isVowel('n'));
