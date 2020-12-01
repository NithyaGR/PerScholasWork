/* * This to check the character count in the given String */

function charCount(stringInput){

  return stringInput.length;
}
// calling from main

console.log(charCount("Nithyakalyani"));
console.log(charCount1("Govindarajan"));

/* Another Way */

function charCount1(stringInput){

  var character = stringInput.split("");//This is an array of characters consisting the letters in the given String
  //console.log(character.length);
  return character.length;
}
